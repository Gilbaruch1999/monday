<template>

  <v-toolbar color="primary">
    <v-checkbox @change="onDetaileGraphChanged()" class="ma-4" v-model="detailedgrpah" label="detailed"></v-checkbox>
    <v-checkbox class="ma-4" v-model="detailedList" label="List"></v-checkbox>
    <v-radio-group @change="graphTypeChanged()" v-model="graphType" inline>
      <v-radio label="BurnDown" value="BurnDown"></v-radio>
      <v-radio label="BurnUp" value="BurnUp"></v-radio>
      <v-radio label="Delta" value="Delta"></v-radio>
      <v-radio label="Golas" value="Goals"></v-radio>
    </v-radio-group>
    <v-btn @click="createGraph()">{{ getBtnHeader }} </v-btn>
  </v-toolbar>
  <div class="ma-4" style="display: flex; justify-content: center">
    <v-row cols="2">
      <v-card class="ma-4" color="primary">
        <v-card-title>Predictability </v-card-title>
        <v-card-text> {{ predictability }} </v-card-text>
      </v-card>

      <v-card class="ma-4" color="primary">
        <v-card-title>Velocity </v-card-title>
        <v-card-text>{{ totalDonePoints }} </v-card-text>
      </v-card>
    </v-row>

  </div>
  <sprintGoals v-if="graphType == 'Goals'" :board-items="itemsList"></sprintGoals>

  <div v-if="graphType == 'BurnDown'">
    <LineChart v-bind="lineChartProps" />
  </div>
  <div v-if="graphType == 'Delta'">
    <LineChart :chart-data="deltaGraphData" :chart-options="chartOptions" />
  </div>
  <div v-if="graphType == 'BurnUp'">
    <LineChart :chart-data="burnUpGraphData" :chart-options="chartOptions" />
  </div>

  <sprintTable v-if="detailedList" class="ma-8" :sprint-items="itemsList"></sprintTable>
</template>

<script setup lang='ts'>
import { computed, inject, onMounted, ref, type Ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";


import ChartDataLabels from 'chartjs-plugin-datalabels';
import { boardItem } from "@/utils/boarditem";
import { getDummyBoardItems, getDummyContext } from "@/utils/mondaydummy";
import { getBoardItemsQuery } from "@/utils/queries";
import { createDateFromText1, getDaysdiff, isIndexOnWeekEnd } from "@/utils/utils";
import sprintTable from "../components/sprintTable.vue"
import sprintGoals from "../components/sprintGoals.vue"
import { BoardToGroupMap } from "@/utils/mondayparser";
import { ClientApi } from "monday-sdk-js/types/client-api.interface";
import { MondayClientSdk } from "monday-sdk-js";

Chart.register(...registerables, ChartDataLabels);

const idealValues = ref([]);
const actualValues = ref([]);
const burnUpValues = ref([]);
const deltaValues = ref([]);
let dataLabels = ref(["1", '2']);
const mondayapi = inject('monday') as MondayClientSdk
const idealcolor = "rgb(0,255,0)"
const actualcolor = "rgb(255,165,0)"
const deltacolor = "rgb(255,0,0)"
const burnupcolor = "rgb(0,255,0)"
let getFromDummy = ref(false);
let predictability = ref("")
let boardId = ref("")
let title = ref("Sprint Burn down");
let itemsList: Ref<boardItem[]> = ref([]);
let totalPoints = ref(0)
let totalDonePoints = ref(0)
let detailedgrpah = ref(false)
let detailedList = ref(false)
let graphType = ref("BurnDown")
let groupid = ref("");
const sprintStart = new Date(createDateFromText1("27-7-2025"))
const sprintLength = 14;
let getBtnHeader = ref("get API Data")




const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false
});

let graphData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: "actual",
      data: actualValues.value,
      backgroundColor: actualcolor,
      borderColor: actualcolor,
      pointStyle: "circle",
      pointRadius: 12,
      pointHoverRadius: 14,
      datalabels: {
        color: 'black',
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          },
        }
      }
    },
    {
      label: "ideal",
      data: idealValues.value,
      backgroundColor: idealcolor,
      borderColor: idealcolor,
      borderWidth: 2,
      borderDash: [10, 5], // 10px dash, 5px gap
      fill: false,
    },
  ],
}));



let deltaGraphData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: "Delta",
      data: deltaValues.value,
      backgroundColor: deltacolor,
      borderColor: deltacolor,
      pointStyle: "circle",
      pointRadius: 12,
      pointHoverRadius: 14,
      datalabels: {
        color: 'black',
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          },
        }
      }
    },
  ],
}));


let burnUpGraphData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: "BurnUp",
      data: burnUpValues.value,
      backgroundColor: burnupcolor,
      borderColor: burnupcolor,
      pointStyle: "circle",
      pointRadius: 12,
      pointHoverRadius: 14,
      datalabels: {
        color: 'black',
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          },
        }
      }
    },
  ],
}));


const options = {
  scales: {

  },
  plugins: {

    title: {
      display: true,
      text: "Sprint BurnDown",
    },

  },
};

let { lineChartProps, lineChartRef } = useLineChart({
  chartData: graphData,
  options,
});


onMounted(() => {

  let index = 0;
  for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 8; j++) {
      dataLabels.value[index] = i + "." + j
      index++;

    }
  }
  createGraph()

})

async function createGraph() {

  getBtnHeader.value = "Update data"
  //console.log("In create graph. getfrom dummy " + getFromDummy.value)
  await getContext()
  await getBoardItems(sprintStart, sprintLength);
  prepareGraph();
  calcBurnUp();
  //console.log(" At end of create grpah")

}

async function getBoardItems(sprintStart: Date, sprintLength: number) {

  var data;

  itemsList.value = []

  if (getFromDummy.value) {
    data = getDummyBoardItems(boardId.value);
    data = data.data
    //console.log("Get from Dummy " + JSON.stringify(data))
  }
  else {
    var qstr = getBoardItemsQuery(boardId.value, groupid.value);
    // console.log("Query " + qstr)
    var res = await mondayapi.api(qstr);
    //console.log("get boards from api" + JSON.stringify(res))
    data = res.data
  }
  try {
    if (data.boards.length == 0)
      console.log("No boards")

  }
  catch {
    data = {}
    console.log("Error from API " + JSON.stringify(data))
    data['boards'] = []

  }


  data.boards.forEach(board => {
    board.items_page.items.forEach(item => {
      //console.log("item " + JSON.stringify(item))
      var bitem: boardItem = new boardItem();
      bitem.title = item.name
      bitem.id = item.id
      //console.log('New Item ' + bitem.title)
      bitem.updateFields(item.column_values);
      // get sub items
      try {
        if (item.subitems.length > 0) {
          item.subitems.forEach(subitem => {
            //console.log("Found sub item @@@@ " + JSON.stringify(subitem))
            var sbitem: boardItem = new boardItem();
            sbitem.title = subitem.name
            sbitem.id = subitem.id
            //console.log("new sub item " + sbitem.title)
            sbitem.updateFields(subitem.column_values);
            if (sbitem.status != "Done")
              bitem.subItems.push(sbitem)
            else {
              if (isDateInSprint(sprintStart, sbitem.DoneDate, sprintLength))
                bitem.subItems.push(sbitem)
            }

            //console.log("created sub item $$$$$$ " + JSON.stringify(sbitem))
          });
        }
      }
      catch {

      }
      bitem.updateSubItemPoints();
      itemsList.value.push(bitem)

    }); // end item loop

  }); // end board loop

}

async function getContext() {
  let context = {};
  if (getFromDummy.value) {
    context = getDummyContext();
    //console.log("Dummy Context " + JSON.stringify(context))
    boardId.value = context['boardId']
  }
  else {

    //console.log("Get from API async ")
    var res = await mondayapi.get('context')
    //console.log("Res " + JSON.stringify(res))
    context = res.data;
    try {
      boardId.value = context['boardId']
      console.log("Board id " + boardId.value)
    }
    catch {

    }
  }
  try {
    var index = BoardToGroupMap.findIndex(x => x.boardid == boardId.value)
    if (index != -1)
      groupid.value = BoardToGroupMap[index].groupid
  }
  catch {

  }
  console.log("Group id = " + groupid.value)
}

function resetData() {
  var currentIndex = getDaysdiff(new Date(), sprintStart)
  burnUpValues.value = new Array(currentIndex + 1).fill(0)
  actualValues.value = new Array(currentIndex + 1).fill(0)
  totalPoints.value = 0;
  totalDonePoints.value = 0;

}

function prepareGraph() {
  resetData()

  if (detailedgrpah.value) {
    totalPoints.value = itemsList.value.reduce((accumulator, object) => {
      return accumulator + object.subitemsPoints;
    }, 0);

    totalDonePoints.value = itemsList.value.reduce((accumulator, object) => {
      return accumulator + object.subitemsDonePoints;
    }, 0);

  }
  else {
    totalPoints.value = itemsList.value.reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);

    totalDonePoints.value = itemsList.value.reduce((accumulator, object) => {
      return accumulator + object.doneStoryPoints;
    }, 0);
  }

  var step = totalPoints.value / (dataLabels.value.length - 4)
  //console.log("Step " + step)
  for (let index = 0; index < dataLabels.value.length; index++) {
    if (index == 0)
      idealValues.value[index] = totalPoints.value
    else {
      if (isIndexOnWeekEnd(index)) {
        idealValues.value[index] = idealValues.value[index - 1]
      }
      else
        idealValues.value[index] = idealValues.value[index - 1] - step
    }
    idealValues.value[index] = Math.round(idealValues.value[index])

  }
  predictability.value = ((100 * (totalDonePoints.value / totalPoints.value))).toFixed(0) + " %"
  //console.log("End of prepare graph. Total points " + totalPoints.value)

}

function calcBurnUp() {

  var currentIndex = getDaysdiff(new Date(), sprintStart)
  //console.log("sprint start " + JSON.stringify(sprintStart.toLocaleDateString()))
  if (detailedgrpah.value) {
    var detailedItems = itemsList.value.filter(x => x.subItems.length > 0)
    //console.log("Not done items " + JSON.stringify(notdoneitems))
    detailedItems.forEach(element => {
      //console.log("parent item " + element.title + " status " + element.status)

      element.subItems.forEach(subitem => {
        //console.log("Sub item " + subitem.title + " status " + subitem.status)
        if (subitem.status == "Done") {

          var index = getDaysdiff(subitem.DoneDate, sprintStart)
          //console.log("Date XXXXX" + subitem.DoneDate.toLocaleDateString() + "  index " + index)
          if ((index >= 0) && (index <= currentIndex)) {

            burnUpValues.value[index] = burnUpValues.value[index] + subitem.storyPoints;
          }
        }
      });
    });
  }
  else {
    var doneitems = itemsList.value.filter(x => x.status == "Done")
    //console.log("Done ites "  + JSON.stringify(doneitems))
    doneitems.forEach(element => {
      var index = getDaysdiff(element.DoneDate, sprintStart)
      //console.log("Date " + element.DoneDate.toLocaleDateString() + "  index " + index)

      if ((index >= 0) && (index <= currentIndex))
        burnUpValues.value[index] = burnUpValues.value[index] + element.storyPoints;
    });
  }
  //console.log("Burn up" + JSON.stringify(burnUpValues.value))

  var currentIndex = getDaysdiff(new Date(), sprintStart)
  actualValues.value[0] = totalPoints.value
  for (let index = 0; index < actualValues.value.length; index++) {
    //console.log("Actual values of index " + index + " " + actualValues.value[index])
    actualValues.value[index] = actualValues.value[index] - burnUpValues.value[index]
    if ((index + 1) < actualValues.value.length)
      actualValues.value[index + 1] = actualValues.value[index]

    deltaValues.value[index] = actualValues.value[index] - idealValues.value[index]
  }

}

function onDetaileGraphChanged() {
  prepareGraph();
  calcBurnUp()
}


function graphTypeChanged() {


}

function isDateInSprint(startDate: Date, checkDate: Date, sprintLen: number): boolean {
  var diff = getDaysdiff(checkDate, startDate)
  //console.log("Check date " + checkDate.toLocaleDateString() + " diff " + diff)

  if ((diff >= 0) && (diff <= sprintLen))
    return true
  else
    return false;

}





</script>

<style></style>
