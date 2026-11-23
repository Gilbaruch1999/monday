/* cspell:disable */
<template>
  <v-toolbar class="mt-6" color="primary" :title="toolBarTitle">
  </v-toolbar>

  <div class="mx-6">
    <LineChart :chart-data="velocityData" :options="velocityChartOptions" />
  </div>
  <br />
  <div class="mx-6">
    <LineChart :chart-data="predData" :options="predChartOptions" />
  </div>

  <div v-if="props.editHistoryProps" align="center">
    <v-btn class="ma-4" color="orange" @click="updateToStore()">Save to store</v-btn>
    <v-btn class="ma-4" color="orange" @click="AddHistoryItem()">Add </v-btn>
  </div>

  <v-container v-if="props.editHistoryProps" fluid>
    <v-data-table class="datatable" density="compact" :headers="sprintHeaders" hide-default-footer item-key="name"
      :items="historyList" items-per-page="60">
      <template #item.actions="{ item }">
        <v-icon class="mr-2" color="blue" size="small" @click="editHistory(item)">
          mdi-pencil
        </v-icon>

        <v-icon class="mr-2" color="red" size="small" @click="deleteHistory(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </v-container>

  <v-dialog v-model="dialog" width="50%">
    <v-card :title="'Edit Sprint ' + selectedHistory.sprint">
      <v-form>
        <v-row>
          <v-text-field v-model="selectedHistory.velocity" label='Velocity'> </v-text-field>
          <v-text-field v-model="selectedHistory.normVelocity" label='norm Velocity'> </v-text-field>
          <v-text-field v-model="selectedHistory.predictability" label='Predictability'> </v-text-field>
        </v-row>
      </v-form>

      <template #actions>
        <v-btn class="ms-auto" color="orange" text="Update" @click="UpdateSprintHistory()"></v-btn>
        <v-btn class="ms-auto" text="Cancel" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>

</template>

<script setup lang='ts'>
import type { ChartData, ChartOptions } from "chart.js";
import type { MondayClientSdk } from "monday-sdk-js";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { computed, inject, onMounted, ref, type Ref } from "vue";
import { LineChart } from "vue-chart-3";
import { sprintHistory } from "@/utils/historyData";
import { retroData, useSprintData } from "../stores/sprintData";

const props = defineProps({
  editHistoryProps: {
    type: Boolean,
    default: true
  }
});


const mondayapi = inject('monday') as MondayClientSdk
Chart.register(...registerables, ChartDataLabels);
const sprintDataStore = useSprintData();
const calcVelocity: Ref<number[]> = ref([]);
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
const sprintRetroData: Ref<retroData> = ref(new retroData());
const selectedHistory: Ref<sprintHistory> = ref(new sprintHistory())
const dialog = ref(false)


const sprintHeaders = [

  { title: 'Actions', key: 'actions', sortable: false }, // Action Column
  { title: 'Sprint', key: 'sprint' },
  { title: 'Velocity', key: 'normVelocity' },
  { title: 'predictability', key: 'predictability' },

]

const vellcolor = "rgb(0,255,0)"
const predcolor = "rgb(255,165,0)"
const predgoalcolor = "rgb(255,0,0)"
const toolBarTitle = ref("History KPIs")
const velocityChartText = ref("Velocity history")
const predChartText = ref("Predictability history")
const velocityData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: velocityLable.value,
      data: calcVelocity.value,
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



const predData = computed<ChartData<"line">>(() => ({
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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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



const velocityChartOptions = computed<ChartOptions<"line">>(() => ({
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



const predChartOptions = computed<ChartOptions<"line">>(() => ({
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
  calcVelocity.value = []
  historyList.value = sprintDataStore.getHistory()
  sprintRetroData.value = sprintDataStore.getRetroInfo()
  velocityLable.value = "Velocity"
  velocityChartText.value = sprintDataStore.getBoardCfg().displayName + " Team " + "Velocity History"
  predChartText.value = sprintDataStore.getBoardCfg().displayName + " Team " + "Predictability History"
  predLable.value = "Predictability"
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  historyList.value.forEach((element: any) => {
    dataLabels.value.push(element.sprint)
    calcVelocity.value.push(element.normVelocity)
    predictability.value.push(element.predictability);
  });

  predictabilityGoalLow.value = new Array<number>(dataLabels.value.length).fill(80);
  predictabilityGoalHigh.value = new Array<number>(dataLabels.value.length).fill(90);
  minPredChart.value = Math.min(...predictability.value) - 5
  maxPredChart.value = Math.max(...predictability.value) + 5
  minVelocitychart.value = Math.min(...calcVelocity.value) - 5
  maxVelocitychart.value = Math.max(...calcVelocity.value) + 5
}

function editHistory(item: sprintHistory) {
  selectedHistory.value = { ...item }
  dialog.value = true

}


function deleteHistory(item: sprintHistory) {
  const index = historyList.value.findIndex(x => x.sprint == item.sprint)
  if (index != -1) {
    historyList.value.splice(index, 1)
  }

}

function AddHistoryItem() {
  selectedHistory.value.sprint = sprintDataStore.getCursprintConfig().name
  selectedHistory.value.velocity = sprintRetroData.value.velocity
  selectedHistory.value.normVelocity = sprintRetroData.value.velocity
  selectedHistory.value.predictability = parseInt(sprintRetroData.value.predictability)
  historyList.value.push(selectedHistory.value)

}

function UpdateSprintHistory() {
  const index = historyList.value.findIndex(x => x.sprint == selectedHistory.value.sprint)
  if (index != -1) {
    historyList.value[index].velocity = selectedHistory.value.velocity
    historyList.value[index].normVelocity = selectedHistory.value.normVelocity
    historyList.value[index].predictability = selectedHistory.value.predictability
  }
  dialog.value = false

}

async function updateToStore() {
  sprintDataStore.setHistory(historyList.value)
  const res = await mondayapi.storage.instance.setItem("historyInfo", JSON.stringify(historyList.value))
  console.log("save to store results " + JSON.stringify(res))
  initData();

}
</script>

<style></style>
