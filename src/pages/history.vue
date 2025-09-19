<template>

  <v-toolbar :title="toolBarTitle" color="primary">
    <v-btn class="mt-6" @click="$router.push('/')" icon>
      <v-icon>mdi-home</v-icon>
    </v-btn>

  </v-toolbar>

  <div class="mx-6">
    <LineChart :chart-data="graphData" :options="lineChartOptions" />
  </div class="mx-6">
  <br></br>
  <div>
    <LineChart :chart-data="graphData1" :options="lineChartOptions1" />
  </div>

</template>

<script setup lang='ts'>
import { computed, onMounted, ref, type Ref } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

const velocity = ref([37, 33, 39 , 68]);
const predictability = ref([70, 80, 57 , 55]);
const predictabilityGoal = ref([80, 80, 80 , 80]);

let dataLabels = ref(["Sprint 22", 'Sprint 23', 'Sprint 24' , 'Sprint 25']);

const vellcolor = "rgb(0,255,0)"
const predcolor = "rgb(255,165,0)"
const predgoalcolor = "rgb(255,0,0)"
let toolBarTitle = ref("KPIs History")
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
          // Example: Display value as a percentage

            return value + '%';

          // Example: Display the corresponding label from the chart's data.labels array
          return context.chart.data.labels[context.dataIndex];
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
      label: "Predictability Goal",
      data: predictabilityGoal.value,
      backgroundColor: predgoalcolor,
      borderColor: predgoalcolor,
      pointStyle: "star",
      pointRadius: 12,
      pointHoverRadius: 14,

    },

  ],
}));



let lineChartOptions = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      min: 25, // Sets the minimum value of the y-axis
      max: 80 // Sets the maximum value of the y-axis
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



let lineChartOptions1 = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      min: 40, // Sets the minimum value of the y-axis
      max: 100 // Sets the maximum value of the y-axis
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


})





</script>

<style></style>
