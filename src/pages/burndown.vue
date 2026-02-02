<template>

  <v-toolbar class="mt-7" :title="toolBarTitle" color="primary">
    <v-checkbox @change="onDetaileGraphChanged()" class="mt-6" v-model="detailedgrpah" label="detailed"></v-checkbox>
    <v-radio-group @change="graphTypeChanged()" v-model="graphType" inline>
      <v-radio class="mt-6" label="BurnDown" value="BurnDown"></v-radio>
      <v-radio class="mt-6" label="BurnUp" value="BurnUp"></v-radio>
      <v-radio class="mt-6" label="Delta" value="Delta"></v-radio>
    </v-radio-group>
  </v-toolbar>
  <div class="mx-4" style="display: flex; justify-content: center">
    <v-row cols="2">
      <v-card class="ma-4" color="primary">
        <v-card-title>Predictability </v-card-title>
        <v-card-text> {{ predictability }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Committed </v-card-title>
        <v-card-text>{{ totalPoints }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Velocity </v-card-title>
        <v-card-text>{{ totalDonePoints }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Predictability For minimum </v-card-title>
        <v-card-text>{{ minPredictability }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Predictability For target </v-card-title>
        <v-card-text>{{ targetPredictability }} </v-card-text>
      </v-card>
      <v-card class="ma-4" color="primary">
        <v-card-title>Predictability For Outstanding </v-card-title>
        <v-card-text>{{ outstandingPredictability }} </v-card-text>
      </v-card>
    </v-row>
  </div>
  <div v-if="graphType == 'BurnDown'">
    <LineChart :chart-data="graphData" :options="lineChartOptions" />
  </div>
  <div v-if="graphType == 'Delta'">
    <LineChart :chart-data="deltaGraphData" :options="lineChartOptions" />
  </div>
  <div v-if="graphType == 'BurnUp'">
    <LineChart :chart-data="burnUpGraphData" :options="BurnUpChartOptions" />
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref, watch, type Ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";


import ChartDataLabels from 'chartjs-plugin-datalabels';
import { boardItem } from "@/utils/boarditem";
import { addDays, getDaysdiff, isDateInList } from "@/utils/utils";
import { Sprint } from "@/utils/mondayparser";
import { useSprintData } from "../stores/sprintData";
import { useUsersData } from "@/stores/usersData";



const props = defineProps({
  graphTypeProp: {
    type: String,
    default: 'BurnDown'
  },
   graphDetailedProp: {
    type: Boolean,
    default: true
  }
});

Chart.register(...registerables, ChartDataLabels);

const sprintDataStore = useSprintData();
const userStore = useUsersData();
const idealValues = ref([]);
const actualValues = ref([]);
const burnUpValues = ref([]);
const burnUpGoals = ref([]);
const deltaValues = ref([]);
let dataLabels = ref(["1", '2']);
const idealcolor = "rgb(0,255,0)"
const actualcolor = "rgb(255,165,0)"
const deltacolor = "rgb(255,0,0)"
const burnupcolor = "rgb(0,255,0)"
let predictability = ref("")
let minPredictability = ref("")
let targetPredictability = ref("")
let outstandingPredictability = ref("")
let throughPut = ref(0)
let cycleTime = ref(0)
let leadTime = ref(0)
let itemsList: Ref<boardItem[]> = ref([]);
let totalPoints = ref(0)
let totalDonePoints = ref(0)
let detailedgrpah = ref(true)
let graphType = ref("BurnDown")
let getBtnHeader = ref("get API Data")
let curSprint: Ref<Sprint> = ref();
let burndownStep = ref(0)
let filterByName = ref(false)

let toolBarTitle = ref("")
let lineChartText = ref("BurnDown")
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
    {
      label: "Daily Goal",
      data: burnUpGoals.value,
      backgroundColor: deltacolor,
      borderColor: deltacolor,
      borderDash: [5, 5],
      pointStyle: "circle",
      pointRadius: 12,
      pointHoverRadius: 14,
      datalabels: {
        color: 'white',
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



function getCompletedOnDate(index: number): boardItem[] {
  let compdate = new Date(addDays(curSprint.value.startDate, index))
  compdate.setHours(0, 0, 0, 0);
  //console.log("xxxx " + JSON.stringify(itemsList.value.filter(x => x.status == "Done" && (x.DoneDate.getTime() == compdate.getTime()))))
  if (detailedgrpah.value) {
    let arr1 = []
    let items = itemsList.value.filter(x => x.subItems.length > 0)
    items.forEach(element => {
      var arr2
      if (filterByName.value)
        arr2 = element.subItems.filter(x => x.status == "Done" && (x.DoneDate.getTime() == compdate.getTime()) && x.assignedTo == userStore.getCurrentUser().name)
      else
        arr2 = element.subItems.filter(x => x.status == "Done" && (x.DoneDate.getTime() == compdate.getTime()))
      if (arr2.length > 0)
        arr1.push(...arr2)
    });
    var arr;
    if (filterByName.value)
      arr = itemsList.value.filter(x => x.status == "Done" && (x.DoneDate.getTime() == compdate.getTime()) && x.subItems.length == 0 && x.assignedTo == userStore.getCurrentUser().name)

    else
      arr = itemsList.value.filter(x => x.status == "Done" && (x.DoneDate.getTime() == compdate.getTime()) && x.subItems.length == 0)

    arr1.push(...arr)
    return arr1;
  }
  else
    return (itemsList.value.filter(x => x.status == "Done" && (x.DoneDate.getTime() == compdate.getTime()) && x.parent == ""))
}


let BurnUpChartOptions = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context) {
          //console.log("Tool tip " + JSON.stringify(context.dataIndex))
          let labels = []
          let arr = getCompletedOnDate(context.dataIndex)
          arr.forEach(element => {
            labels.push("Size " + (element.sizeEstimation + " Owner " + element.assignedTo) + " Title: " + element.title + " Parent: " + element.parent)
          });
          return labels;
        }
      }
    },
    legend: {
    },
    title: {
      display: true,
      text: lineChartText.value,
    },
  },
}));


let lineChartOptions = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {

    legend: {
    },
    title: {
      display: true,
      text: lineChartText.value,
    },
  },
}));



onMounted(async () => {
  console.log("On mounted burndown ")
  graphType.value = props.graphTypeProp
  detailedgrpah.value = props.graphDetailedProp
  filterByName.value = false
  initData()


})

function initData() {
  itemsList.value = sprintDataStore.getsprintData()
  curSprint.value = sprintDataStore.getCursprintConfig()
  //console.log("burndown Current sprint " + JSON.stringify(curSprint.value))
  createGraph()
  toolBarTitle.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.value.name + " burnDown chart"
  lineChartText.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.value.name + " " + graphType.value + " chart"
}

async function createGraph() {
  getBtnHeader.value = "Update data"
  let index = 0;
  for (let i = 1; i < (Math.round(curSprint.value.duration / 7) + 1); i++) {
    for (let j = 1; j < 8; j++) {
      dataLabels.value[index] = i + "." + j
      index++;
    }
  }
  prepareGraph();
  calcBurnUp();
}


function resetData() {
  var currentIndex = getDaysdiff(new Date(), curSprint.value.startDate)
  burnUpValues.value = new Array(currentIndex + 1).fill(0)
  burnUpGoals.value = new Array(currentIndex + 1).fill(0)
  actualValues.value = new Array(currentIndex + 1).fill(0)
  totalPoints.value = 0;
  totalDonePoints.value = 0;
  throughPut.value = 0;
  cycleTime.value = 0;
  leadTime.value = 0;

}


function prepareGraph() {
  resetData()
  const [tot, done, pred] = calcPredicatbility("All")
  totalPoints.value = tot;
  totalDonePoints.value = done
  predictability.value = pred
  const [mintot, mindone, minPred] = calcPredicatbility("Minimum")
  minPredictability.value = minPred
  const [targettot, targetdone, targetPred] = calcPredicatbility("Target")
  targetPredictability.value = targetPred
  const [outtot, outdone, outPred] = calcPredicatbility("Outstanding")
  outstandingPredictability.value = outPred


  var curDate = curSprint.value.startDate;
  burndownStep.value = totalPoints.value / ((curSprint.value.workingDays))
  console.log("Step is " + burndownStep.value)

  for (let index = 0; index < dataLabels.value.length; index++) {
    if (index == 0)
      idealValues.value[index] = totalPoints.value
    else {

      if (isDateInList(curDate, curSprint.value.nonWorkingDays)) {
        idealValues.value[index] = idealValues.value[index - 1]
      }
      else {
        idealValues.value[index] = idealValues.value[index - 1] - burndownStep.value
      }

    }
    curDate = new Date(addDays(curDate, 1))

  }
  for (let index = 0; index < idealValues.value.length; index++) {
    let tmp = Math.round(idealValues.value[index] * 100) / 100
    idealValues.value[index] = Math.round(tmp)
  }

}

function calcPredicatbility(goalCategory: string): [number, number, string] {
  let pred = ""
  let total = 0
  let done = 0

  var arr = []

  if (detailedgrpah.value) {
    if (goalCategory == "All") {
      arr = itemsList.value.filter(x => x.status != 'Removed')
    }
    else {
      arr = itemsList.value.filter(x => x.status != 'Removed' && x.goalCategory == goalCategory)
    }
    total = arr.reduce((accumulator, object) => {
      return accumulator + object.subitemsPoints;
    }, 0);

    done = arr.reduce((accumulator, object) => {
      return accumulator + object.subitemsDonePoints;
    }, 0);

    total += arr.filter(x => x.subItems.length == 0).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);

    done += arr.filter(x => x.subItems.length == 0 && x.status == 'Done').reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
  }
  else {
    if (goalCategory == "All") {
      arr = itemsList.value.filter(x => x.status != 'Removed')
    }
    else {
      arr = itemsList.value.filter(x => x.status != 'Removed' && x.goalCategory == goalCategory)
    }
    total = arr.reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);

    done = arr.reduce((accumulator, object) => {
      return accumulator + object.doneStoryPoints;
    }, 0);
  }

  if (total > 0)
    pred = ((100 * (done / total))).toFixed(0) + " %"
  else
    pred = "NA"

  return [total, done, pred];

}

function addBurnUpValues(itemsList: boardItem[], curindex: number) {
  itemsList.forEach(element => {
    if (element.status == "Done") {
      var index = getDaysdiff(element.DoneDate, curSprint.value.startDate)
      if (filterByName.value) {

        if ((index >= 0) && (index <= curindex) && (element.assignedTo.includes(userStore.getCurrentUser().name))) {
          burnUpValues.value[index] = burnUpValues.value[index] + element.storyPoints;
        }

      }
      else {
        if ((index >= 0) && (index <= curindex)) {
          burnUpValues.value[index] = burnUpValues.value[index] + element.storyPoints;
        }
      }
    }
  });
}


function calcBurnUp() {


  var currentIndex = getDaysdiff(new Date(), curSprint.value.startDate)
  // get all items without subitems

  var noSubitems = itemsList.value.filter(x => (x.subItems.length == 0) && (x.status == "Done"))
  //console.log("No sub items " + JSON.stringify(noSubitems))
  if (detailedgrpah.value) {
    var withSubitems = itemsList.value.filter(x => x.subItems.length > 0)
    if (filterByName.value) {
      noSubitems = noSubitems.filter(x => x.assignedTo.includes(userStore.getCurrentUser().name))

    }
    var subitemlist: boardItem[] = []
    withSubitems.forEach(element => {
      subitemlist.push(...(element.subItems))
    });
    addBurnUpValues(subitemlist, currentIndex)
    addBurnUpValues(noSubitems, currentIndex)
    //console.log("Burn up detailed " + JSON.stringify(burnUpValues.value))
  }
  else {

    var highlevelItemss = itemsList.value.filter(x => x.status == "Done")
    //console.log("Burn up not detailed " + JSON.stringify(burnUpValues.value))
    addBurnUpValues(highlevelItemss, currentIndex)

  }

  if (filterByName.value) {
    burndownStep.value = calcEmpTotal(userStore.getCurrentUser().name) / curSprint.value.workingDays
  }

  actualValues.value[0] = totalPoints.value
  var curDate = curSprint.value.startDate;
  curDate = new Date(addDays(curDate, 1))
  for (let index = 0; index < actualValues.value.length; index++) {
    actualValues.value[index] = actualValues.value[index] - burnUpValues.value[index]
    if ((index + 1) < actualValues.value.length)
      actualValues.value[index + 1] = actualValues.value[index]
    deltaValues.value[index] = actualValues.value[index] - idealValues.value[index]
    if (isDateInList(curDate, curSprint.value.nonWorkingDays)) {
      burnUpGoals.value[index] = 0
    }
    else
      burnUpGoals.value[index] = burndownStep.value
    curDate = new Date(addDays(curDate, 1))

  }


}

function calcEmpTotal(name: string): number {
  var tot = 0;
  itemsList.value.forEach(element => {
    if (element.subItems.length == 0) {
      if ((element.assignedTo == name) && (element.status != "Removed"))
        tot += element.storyPoints
    }
    else {
      element.subItems.forEach(subitem => {
        if ((subitem.assignedTo == name) && (element.status != "Removed"))
          tot += subitem.storyPoints
      });
    }
  });

  return tot

}


function onDetaileGraphChanged() {
  prepareGraph();
  calcBurnUp()
}

function graphTypeChanged() {


  lineChartText.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.value.name + " " + graphType.value + " chart"

}


watch(
  () => sprintDataStore.getsprintData(),
  (newValue, oldValue) => {
    console.log("Sprint data changed ")
    initData();

  }, { deep: true }
);



watch(
  () => userStore.getCurrentUser(),
  (newValue, oldValue) => {
    filterByName.value = true
    initData();

  }
);

</script>

<style></style>
