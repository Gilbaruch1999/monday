<template>

 <v-toolbar color="primary">
    <v-checkbox @change="onDetaileGraphChanged()" class="ma-4" v-model="detailedgrpah" label="detailed"></v-checkbox>
    <v-radio-group @change="graphTypeChanged()" v-model="graphType" inline>
      <v-radio label="BurnDown" value="BurnDown"></v-radio>
      <v-radio label="BurnUp" value="BurnUp"></v-radio>
      <v-radio label="Delta" value="Delta"></v-radio>
    </v-radio-group>
    <v-btn @click="createGraph()" >Get data</v-btn>
  </v-toolbar>
  <div class="ma-4" style="display: flex; justify-content: center">
    <v-row cols="2">
      <v-card class="ma-4">
        <v-card-title>Predictability </v-card-title>
        <v-card-text> {{ predictability }} </v-card-text>
      </v-card>

      <v-card class="ma-4">
        <v-card-title>Velocity </v-card-title>
        <v-card-text>{{ totalDonePoints }} </v-card-text>
      </v-card>

    </v-row>

  </div>
  <div v-if="graphType == 'BurnDown'" style="width: 1500px ; height: 1000px;">
    <LineChart v-bind="lineChartProps" />
  </div>
  <div v-if="graphType == 'Delta'" style="width: 1500px ; height: 1000px;">
    <LineChart :chart-data="deltaGraphData" :chart-options="chartOptions" />
  </div>
  <div v-if="graphType == 'BurnUp'" style="width: 1500px ; height: 1000px;">
    <LineChart :chart-data="burnUpGraphData" :chart-options="chartOptions" />
  </div>

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


Chart.register(...registerables, ChartDataLabels);

const idealValues = ref([]);
const actualValues = ref([]);
const burnUpValues = ref([]);
const deltaValues = ref([]);
let dataLabels = ref(["1", '2']);
const mondayapi = inject('monday')
const idealcolor = "rgb(0,255,0)"
const actualcolor = "rgb(255,165,0)"
const deltacolor = "rgb(255,0,0)"
const burnupcolor = "rgb(0,255,0)"
const getFromDummy = true;
let predictability = ref("")
let boardId = ref("")
let title = ref("Sprint Burn down");
let itemsList: Ref<boardItem[]> = ref([]);
let totalPoints = ref(0)
let totalDonePoints = ref(0)
let detailedgrpah = ref(false)
let graphType = ref("BurnDown")
let dataSetsvalues = ref([

])


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

 function createGraph() {

  console.log("In create graph")

  getContext()
  getBoardItems();
  prepareGraph();
  calcBurnUp();

}

function getBoardItems() {

  var data;

  if (getFromDummy) {
    data = getDummyBoardItems(boardId.value);
    data = data.data
    console.log("Dummy data " + JSON.stringify(data))
  }
  else {
    var qstr = getBoardItemsQuery("");
    console.log("Query " + qstr)
    var res =  mondayapi.api(qstr);
    console.log("res from api" + JSON.stringify(res))
    data = res.data
  }

  data.boards.forEach(board => {
    //console.log("Elemnt " + JSON.stringify(element))
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
            bitem.subItems.push(sbitem)
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
  //console.log("item list !!!" + JSON.stringify(itemsList.value))
  //console.log("Total points " + totalPoints.value)
  //console.log("Total Done points " + totalDonePoints.value)

}

 function getContext() {
  let context = {};
  if (getFromDummy) {
    context = getDummyContext();
    //console.log("Dummy Context " + JSON.stringify(context))
    boardId.value = context['boardId']
  }
  else {
    console.log("Get from API")
    var res = mondayapi.get('context')
    console.log("Res " + JSON.stringify(res))
    context = res.data;
    try {
      boardId.value = context['boardId']
      console.log("Board id " + boardId.value)
    }
    catch {

    }
    ;
  }
}

function prepareGraph() {
  //console.log("Total points " + totalPoints.value)
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

}

function calcBurnUp() {
  const startDate = new Date(2025, 6, 13, 0, 0, 0, 0); // July 22, 2025, 7:24 PM local time

  burnUpValues.value = new Array(14).fill(0)
  actualValues.value = new Array(14).fill(0)

  if (detailedgrpah.value) {
    var notdoneitems = itemsList.value.filter(x => x.status != "Done" && x.subItems.length > 0)
    notdoneitems.forEach(element => {
      //console.log("Subitems " + JSON.stringify(element.subItems))
      element.subItems.forEach(subitem => {
        if (subitem.status == "Done") {
          var index = getDaysdiff(subitem.DoneDate, startDate)
          if (index >= 0) {
            //console.log("Date " + subitem.DoneDate.toLocaleDateString() + "  index " + index)
            burnUpValues.value[index] = burnUpValues.value[index] + subitem.storyPoints;
          }
        }
      });
    });
  }
  else {
    var doneitems = itemsList.value.filter(x => x.status == "Done")
    //console.log("Done items " + JSON.stringify(doneitems))
    doneitems.forEach(element => {
      var index = getDaysdiff(element.DoneDate, startDate)
      //console.log("Date " + element.DoneDate.toLocaleDateString() + "  index " + index)
      if (index >= 0)
        burnUpValues.value[index] = burnUpValues.value[index] + element.storyPoints;
    });
  }

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




</script>

<style></style>
