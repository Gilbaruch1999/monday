<template>
  <v-toolbar class="mt-6" :title="toolBarTitle" color="primary">
  </v-toolbar>
  <div class="mx-6">
    <LineChart :chart-data="graphData" :options="velocityChartOptions" />
  </div class="mx-6">
  <br></br>
  <div class="mx-6">
    <LineChart :chart-data="graphData1" :options="predChartOptions" />
  </div>

</template>

<script setup lang='ts'>
import { computed, onMounted, ref, type Ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useSprintData } from "../stores/sprintData";
import { historyData } from "@/utils/common";
Chart.register(...registerables, ChartDataLabels);
const sprintDataStore = useSprintData();

const boardid = ref("")
const velocity = ref([]);
const predictability = ref([]);
const predictabilityGoalLow = ref([]);
const predictabilityGoalHigh = ref([]);
const minPredChart = ref(0);
const maxPredChart = ref(200)
const minVelocitychart = ref(0);
const maxVelocitychart = ref(0);


let dataLabels = ref([]);

const vellcolor = "rgb(0,255,0)"
const predcolor = "rgb(255,165,0)"
const predgoalcolor = "rgb(255,0,0)"
let toolBarTitle = ref("History KPIs")
let lineChartText = ref("Velocity history")
let lineChart1Text = ref("Predictability history")


let graphData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: "velocity",
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



let graphData1 = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: "Predictability",
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
      text: lineChartText.value,
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
      text: lineChart1Text.value,
    },
  },
}));

onMounted(async () => {

  let tmp: historyData = sprintDataStore.getHistory()[0]
  dataLabels.value = [...tmp.dataLabels]
  velocity.value = [...tmp.velocity]
  predictability.value = [...tmp.predictability]
  predictabilityGoalLow.value = new Array(dataLabels.value.length).fill(80);
  predictabilityGoalHigh.value = new Array(dataLabels.value.length).fill(90);
  minPredChart.value = Math.min(...predictability.value) - 5
  maxPredChart.value = Math.max(...predictability.value) + 5
  minVelocitychart.value = Math.min(...velocity.value) - 5
  maxVelocitychart.value = Math.max(...velocity.value) + 5

})

</script>

<style></style>
