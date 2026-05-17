/* cspell:disable */
<template>
  <v-toolbar class="mt-6" :title="toolBarTitle" color="primary">
  </v-toolbar>
  <div class="mx-6">
    <LineChart :chart-data="velocityData" :options="velocityChartOptions" />
  </div class="mx-6">
  <br></br>
  <div class="mx-6">
    <LineChart :chart-data="predData" :options="predChartOptions" />
  </div>
  <div align="center" v-if="props.editHistory">
    <v-btn class="ma-4" @click="updateToStore()" color="orange">Save to store</v-btn>
    <v-btn class="ma-4" color="orange" @click="AddHistoryItem()">Add </v-btn>
  </div>
  <v-container fluid v-if="props.editHistory">
    <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="name"
      :headers="sprintHeaders" :items="historyList">
      <template v-slot:item.actions="{ item }">
        <v-icon small color="blue" class="mr-2" @click="editHistory(item)">
          mdi-pencil
        </v-icon>
        <v-icon small color="red" class="mr-2" @click="deleteHistory(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
  <v-dialog v-model="dialog" width="50%">
    <v-card :title="'Edit Sprint ' + selectedHistory.sprint">
      <v-form>
        <v-row>
          <v-text-field label='Velocity' v-model="selectedHistory.velocity"> </v-text-field>
          <v-text-field label='Predictability' v-model="selectedHistory.predictability"> </v-text-field>
        </v-row>
      </v-form>
      <template v-slot:actions>
        <v-btn color="orange" class="ms-auto" text="Update" @click="UpdateSprintHistory()"></v-btn>
        <v-btn class="ms-auto" text="Cancel" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>

</template>

<script setup lang='ts'>
import { computed, inject, onMounted, ref, type Ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSprintData } from "../stores/sprintData";
import { sprintHistory } from "@/utils/historyData";
import { MondayClientSdk } from "monday-sdk-js";


const props = defineProps({
  editHistory: {
    type: Boolean,
    default: true
  }
});


const mondayapi = inject('monday') as MondayClientSdk


Chart.register(...registerables, ChartDataLabels);
const sprintDataStore = useSprintData();
const velocity: Ref<number[]> = ref([]);
const dataLabels: Ref<string[]> = ref([]);
const predictability: Ref<number[]> = ref([]);
const predictabilityGoalLow: Ref<number[]> = ref([]);
const predictabilityGoalHigh: Ref<number[]> = ref([]);
const minPredChart = ref(0);
const maxPredChart = ref(200)
const minVelocitychart = ref(0);
const maxVelocitychart = ref(0);
const velocityLable = ref("")
const predLable = ref("")
const historyList: Ref<sprintHistory[]> = ref([]);
const selectedHistory: Ref<sprintHistory> = ref(new sprintHistory())
const dialog = ref(false)


const sprintHeaders: any = [

  { title: 'Actions', key: 'actions', sortable: false }, // Action Column
  { title: 'Sprint', key: 'sprint' },
  { title: 'Velocity', key: 'velocity' },
  { title: 'predictability', key: 'predictability' },

]




const vellcolor = "rgb(0,255,0)"
const predcolor = "rgb(255,165,0)"
const predgoalcolor = "rgb(255,0,0)"
let toolBarTitle = ref("History KPIs")
let velocityChartText = ref("Velocity history")
let predChartText = ref("Predictability history")


let velocityData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: velocityLable.value,
      data: velocity.value,
      backgroundColor: vellcolor,
      borderColor: vellcolor,
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



let predData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: predLable.value,
      data: predictability.value,
      backgroundColor: predcolor,
      borderColor: predcolor,
      pointStyle: "circle",
      pointRadius: 18,
      pointHoverRadius: 20,
      datalabels: {
        formatter: function (value, context) {
          return value + '%';

        },
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
      label: "Predictability Goal Low",
      data: predictabilityGoalLow.value,
      backgroundColor: predgoalcolor,
      borderColor: predgoalcolor,
      pointStyle: "star",
      pointRadius: 12,
      pointHoverRadius: 14,

    },
    {
      label: "Predictability Goal High",
      data: predictabilityGoalHigh.value,
      backgroundColor: predgoalcolor,
      borderColor: predgoalcolor,
      pointStyle: "star",
      pointRadius: 12,
      pointHoverRadius: 14,

    },

  ],
}));



let velocityChartOptions = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      min: minVelocitychart.value, // Sets the minimum value of the y-axis
      max: maxVelocitychart.value // Sets the maximum value of the y-axis
    }
  },
  plugins: {
    legend: {
    },
    title: {
      display: true,
      text: velocityChartText.value,
    },
  },
}));



let predChartOptions = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      min: minPredChart.value, // Sets the minimum value of the y-axis
      max: maxPredChart.value // Sets the maximum value of the y-axis
    }
  },
  plugins: {
    legend: {
    },
    title: {
      display: true,
      text: predChartText.value,
    },
  },
}));

onMounted(async () => {
  initData();

})

function initData() {

  dataLabels.value = []
  predictability.value = []
  velocity.value = []
  historyList.value = sprintDataStore.getHistory()
  velocityLable.value = "Velocity"
  velocityChartText.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + "Velocity History"
  predChartText.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + "Predictability History"
  predLable.value = "Predictability"
  historyList.value.forEach((element: any) => {
    dataLabels.value.push(element.sprint)
    velocity.value.push(element.velocity)
    predictability.value.push(element.predictability);
  });

  predictabilityGoalLow.value = new Array(dataLabels.value.length).fill(80);
  predictabilityGoalHigh.value = new Array(dataLabels.value.length).fill(90);
  minPredChart.value = Math.min(...predictability.value) - 5
  maxPredChart.value = Math.max(...predictability.value) + 5
  minVelocitychart.value = Math.min(...velocity.value) - 5
  maxVelocitychart.value = Math.max(...velocity.value) + 5
}

function editHistory(item: any) {
  selectedHistory.value = { ...item }
  dialog.value = true

}


function deleteHistory(item: any) {
  let index = historyList.value.findIndex(x => x.sprint == item.sprint)
  if (index != -1) {
    historyList.value.splice(index, 1)
  }

}

function AddHistoryItem() {
  selectedHistory.value.sprint = sprintDataStore.getCursprintConfig().name
  selectedHistory.value.velocity = 0
  selectedHistory.value.predictability = 0
  historyList.value.push(selectedHistory.value)

}

function UpdateSprintHistory() {
  let index = historyList.value.findIndex(x => x.sprint == selectedHistory.value.sprint)
  if (index != -1) {
    historyList.value[index].velocity = selectedHistory.value.velocity
    historyList.value[index].predictability = selectedHistory.value.predictability
  }
  dialog.value = false

}

async function updateToStore()
{
  sprintDataStore.setHistory(historyList.value)
   const res = await mondayapi.storage.instance.setItem("historyInfo" , JSON.stringify(historyList.value))
   console.log("save to store results " + JSON.stringify(res))
  initData();

}
</script>

<style></style>
