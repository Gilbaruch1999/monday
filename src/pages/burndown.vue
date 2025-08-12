<template>

  <v-toolbar :title="toolBarTitle" v-if="CurrentBoardType == 'Scrum'" color="primary">

    <v-checkbox @change="onDetaileGraphChanged()" class="mt-6" v-model="detailedgrpah" label="detailed"></v-checkbox>
    <v-checkbox class="mt-6" v-model="detailedList" label="List"></v-checkbox>
    <v-radio-group @change="graphTypeChanged()" v-model="graphType" inline>
      <v-radio class="mt-6" label="BurnDown" value="BurnDown"></v-radio>
      <v-radio class="mt-6" label="BurnUp" value="BurnUp"></v-radio>
      <v-radio class="mt-6" label="Delta" value="Delta"></v-radio>
      <v-radio class="mt-6" label="Golas" value="Goals"></v-radio>
    </v-radio-group>
    <v-btn class="ma-4" @click="createGraph()">{{ getBtnHeader }} </v-btn>
  </v-toolbar>
  <v-toolbar :title="toolBarTitle" v-if="CurrentBoardType == 'Kanban'" color="primary">
    <v-checkbox class="mt-6" v-model="detailedList" label="List"></v-checkbox>
    <v-btn small @click="createGraph()">{{ getBtnHeader }} </v-btn>
  </v-toolbar>

  <div v-if="CurrentBoardType == 'Scrum'" class="mx-4" style="display: flex; justify-content: center">
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
  <div v-if="CurrentBoardType == 'Kanban'" class="mx-4" style="display: flex; justify-content: center">
    <v-row cols="2">
      <v-card class="ma-4" color="primary">
        <v-card-title>Throughtput </v-card-title>
        <v-card-text> {{ throughPut }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Cycle Time </v-card-title>
        <v-card-text>{{ cycleTime }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Lead Time </v-card-title>
        <v-card-text>{{ leadTime }} </v-card-text>
      </v-card>
    </v-row>
  </div>
  <sprintGoals v-if="graphType == 'Goals'" :board-items="itemsList"></sprintGoals>

  <div v-if="graphType == 'BurnDown'">
    <LineChart :chart-data="graphData":options="chartOptions" v-bind="lineChartProps" />
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
import { getDaysdiff, isIndexOnWeekEnd } from "@/utils/utils";
import sprintTable from "../components/sprintTable.vue"
import sprintGoals from "../components/sprintGoals.vue"
import { BoardToGroupMap, boardType, findCurrentSprint, Sprint } from "@/utils/mondayparser";

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
let throughPut = ref(0)
let cycleTime = ref(0)
let leadTime = ref(0)
let boardId = ref("")
let itemsList: Ref<boardItem[]> = ref([]);
let totalPoints = ref(0)
let totalDonePoints = ref(0)
let detailedgrpah = ref(false)
let detailedList = ref(false)
let graphType = ref("BurnDown")
let groupid = ref("");
let getBtnHeader = ref("get API Data")
let curSprint: Sprint;
let CurrentBoardType = ref("");
let toolBarTitle = ref("Sprint burndown")




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
      text:"BurnDown",
    },

  },
};

let { lineChartProps, lineChartRef } = useLineChart({
  chartData: graphData,
  options,
});



onMounted(async () => {

  var res = await mondayapi.get('context')
  console.log("Starting app version v36")
  //console.log("Res " + JSON.stringify(res))
  try {
     if ( res.hasOwnProperty('data'))
     {
       getFromDummy.value = false
       //mondayapi.listen("location" , mondaylocatoncallbak)
       mondayapi.listen("events" , eventlocatoncallbak)
     }
     else
     {
      console.log("No API")
      getFromDummy.value = true
     }

  }
  catch {
    console.log("use dummy data ");
    getFromDummy.value = true;

  }
  let index = 0;
  for (let i = 1; i < 3; i++) {
    for (let j = 1; j < 8; j++) {
      dataLabels.value[index] = i + "." + j
      index++;

    }
  }

  await createGraph()

  toolBarTitle.value = curSprint.name + " " + CurrentBoardType.value +  " status"
/*

  let strres = await mondayapi.storage.instance.setItem('mykey', 'Test 1')
  console.log("Result from sttorage " + JSON.stringify(strres) )
  let getres = await mondayapi.storage.instance.getItem('mykey')
  console.log("Result from sttorage " + JSON.stringify(getres) )
*/



})



async function createGraph() {

  getBtnHeader.value = "Update data"
  //console.log("In create graph. getfrom dummy " + getFromDummy.value)
  await getContext()
  await getBoardItems(curSprint.startDate, curSprint.duration);
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
    console.log("found " + board.items_page.items.length + " board items")
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
            sbitem.updateStoryPoints();
            sbitem.checkForPlanningIssues();
            switch (sbitem.status)
            {
              case "Done" :
                if (isDateInSprint(sprintStart, sbitem.DoneDate, sprintLength) )
                bitem.subItems.push(sbitem)
                break;
              case "Removed" :
                break;
              default :
               bitem.subItems.push(sbitem)
               break;
            }

            //console.log("created sub item $$$$$$ " + JSON.stringify(sbitem))
          });
        }
      }
      catch {

      }
      bitem.updateSubItemPoints();
      bitem.checkForPlanningIssues();
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
    curSprint = findCurrentSprint(boardId.value);
    groupid.value = curSprint.groupid
    console.log("Current sprint is " + JSON.stringify(curSprint))
   console.log("group id= " + JSON.stringify(groupid.value))
    var index = BoardToGroupMap.findIndex(x => x.boardid == boardId.value)
    if (index != -1)
      CurrentBoardType.value = boardType[BoardToGroupMap[index].type]
    console.log("Board type " + CurrentBoardType.value)

  }
  catch {

  }
  //console.log("Group id = " + groupid.value)
}

function resetData() {
  var currentIndex = getDaysdiff(new Date(), curSprint.startDate)
  burnUpValues.value = new Array(currentIndex + 1).fill(0)
  actualValues.value = new Array(currentIndex + 1).fill(0)
  totalPoints.value = 0;
  totalDonePoints.value = 0;
  throughPut.value = 0;
  cycleTime.value = 0;
  leadTime.value = 0;

}

function calcKanbanInfo() {
  var doneitems = itemsList.value.filter(x => x.status == "Done")
  //console.log("Done items " + JSON.stringify(doneitems.length))
  throughPut.value = doneitems.length

  doneitems.forEach(element => {
    //console.log("Done date " + JSON.stringify(element.DoneDate) )
    // calculate lead time - from work start to completiong
    // calculate cycle time from first definition to work completion
    //console.log("Start date " + JSON.stringify(element.startDate.toLocaleDateString()) )
    var dif = getDaysdiff(element.DoneDate, element.startDate)
    cycleTime.value += dif;
    dif = getDaysdiff(element.DoneDate, element.starWorktDate)
    leadTime.value += dif;
  });

  leadTime.value = Math.round((10 * leadTime.value) / doneitems.length) / 10
  cycleTime.value = Math.round((10 * cycleTime.value) / doneitems.length) / 10
}

function prepareGraph() {
  resetData()
   if (CurrentBoardType.value == 'Kanban') {
      graphType.value = "Goals";
      detailedList.value = true
    }

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

  if (CurrentBoardType.value == 'Kanban')
      calcKanbanInfo();

}

function calcBurnUp() {

  var currentIndex = getDaysdiff(new Date(), curSprint.startDate)
  //console.log("sprint start " + JSON.stringify(sprintStart.toLocaleDateString()))
  if (detailedgrpah.value) {
    var detailedItems = itemsList.value.filter(x => x.subItems.length > 0)
    //console.log("Not done items " + JSON.stringify(notdoneitems))
    detailedItems.forEach(element => {
      //console.log("parent item " + element.title + " status " + element.status)

      element.subItems.forEach(subitem => {
        //console.log("Sub item " + subitem.title + " status " + subitem.status)
        if (subitem.status == "Done") {

          var index = getDaysdiff(subitem.DoneDate, curSprint.startDate)
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
      var index = getDaysdiff(element.DoneDate, curSprint.startDate)
      //console.log("Date " + element.DoneDate.toLocaleDateString() + "  index " + index)

      if ((index >= 0) && (index <= currentIndex))
        burnUpValues.value[index] = burnUpValues.value[index] + element.storyPoints;
    });
  }
  //console.log("Burn up" + JSON.stringify(burnUpValues.value))

  var currentIndex = getDaysdiff(new Date(), curSprint.startDate)
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

function mondaylocatoncallbak(data )
{
  console.log("location Callback called ");
  console.log("location " + JSON.stringify(data))

}



function eventlocatoncallbak(event )
{
  console.log("event Callback called ");
  console.log("Data " + JSON.stringify(event))

}







</script>

<style></style>
