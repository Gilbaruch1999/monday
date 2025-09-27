<template>

  <v-container fluid>
    <div>
      <v-row>
        <PieChart :chart-data="categoryPieData" :options="categoryPieOptions" />
        <PieChart :chart-data="catPercentpieData" :options="categoryPercentPieOptions" />
        <PieChart :chart-data="goalsPieData" :options="goalsPieOptions" />
        <PieChart :chart-data="goalsPercentPieData" :options="goalsPercentPieOptions" />
      </v-row>
      <v-row>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang='ts'>
import { boardItem } from "@/utils/boarditem";
import { Sprint } from "@/utils/mondayparser";
import { useSprintData } from "../stores/sprintData";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { PieChart, useLineChart } from "vue-chart-3";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { computed, onMounted, ref, Ref } from "vue";
Chart.register(...registerables, ChartDataLabels);


let categoryLabeles = ref([])
let pieColors: Ref<string[]> = ref([])
let goalsColors: Ref<string[]> = ref([])
let categoryValues: Ref<number[]> = ref([])
let goalsLabel = ref([])
let goalsValues = ref([])
const rgbColors = ['#ff0000', '#ff8000', '#999900', '#00ff00', '#009999', '#0000ff', '#7f00ff', '#ff33ff', '#ff3399', '#a0a0a0']



let categoryPieData = computed<ChartData<"pie">>(() => ({
  labels: categoryLabeles.value,
  datasets: [{
    data: categoryValues.value,
    backgroundColor: pieColors.value,
    hoverOffset: 4,
    datalabels: {
      color: 'white',
      labels: {
        title: {
          font: {
            weight: 'bold',
            size: 18
          }
        },
      }
    }
  }

  ]
}));



let catPercentpieData = computed<ChartData<"pie">>(() => ({
  labels: categoryLabeles.value,
  datasets: [{
    data: categoryValues.value,
    backgroundColor: pieColors.value,
    hoverOffset: 4,
    datalabels: {
      formatter: function (value, context) {

        var total = categoryValues.value.reduce((accumulator, object) => {
          return accumulator + object;
        }, 0);
        const percentage = (value / total) * 100
        return percentage.toFixed(0) + "%";

      },
      color: 'white',
      labels: {
        title: {
          font: {
            weight: 'bold',
            size: 18
          }
        },
      }
    }
  }

  ]
}));



let goalsPieData = computed<ChartData<"pie">>(() => ({
  labels: goalsLabel.value,
  datasets: [{
    data: goalsValues.value,
    backgroundColor: goalsColors.value,
    hoverOffset: 4,
    datalabels: {
      color: 'white',
      labels: {
        title: {
          font: {
            weight: 'bold',
            size: 18
          }
        },
      }
    }
  }

  ]
}));



let goalsPercentPieData = computed<ChartData<"pie">>(() => ({
  labels: goalsLabel.value,
  datasets: [{
    data: goalsValues.value,
    backgroundColor: goalsColors.value,
    hoverOffset: 4,
    datalabels: {
      formatter: function (value, context) {

        var total = goalsValues.value.reduce((accumulator, object) => {
          return accumulator + object;
        }, 0);
        const percentage = (value / total) * 100
        return percentage.toFixed(0) + "%";

      },
      color: 'white',
      labels: {
        title: {
          font: {
            weight: 'bold',
            size: 18
          }
        },
      }
    }
  }

  ]
}));



const categoryPercentPieOptions = {

  plugins: {

    title: {
      display: true,
      text: "Break down by Category - percentage",
    },

  },
};

const categoryPieOptions = {

  plugins: {

    title: {
      display: true,
      text: "BreakDown by category",
    },

  },
};


const goalsPieOptions = {

  plugins: {

    title: {
      display: true,
      text: "BreakDown by golas",
    },

  },
};


const goalsPercentPieOptions = {

  plugins: {

    title: {
      display: true,
      text: "BreakDown by golas - percentage",
    },

  },
};

let itemsList: Ref<boardItem[]> = ref([]);
let curSprint: Ref<Sprint> = ref();
const sprintDataStore = useSprintData();



onMounted(async () => {
  console.log("On mounted burndown ")
  itemsList.value = sprintDataStore.getsprintData()
  curSprint.value = sprintDataStore.getsprintConfig()
  createBreakDownChart()



})


function createBreakDownChart() {
  const distinctCategory = [...new Set(itemsList.value.map(x => x.stratigicCategory))];
  categoryLabeles.value = []
  categoryValues.value = []
  var idx = 0;
  distinctCategory.forEach(element => {
    //console.log("Category " + element)
    categoryLabeles.value.push(element)
    pieColors.value.push(generateRgbColor(idx++))
    var totalcat = itemsList.value.filter(x => x.stratigicCategory == element).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
    //console.log("Total " + totalcat)
    categoryValues.value.push(totalcat)

  });

  const distinctGoals = [...new Set(itemsList.value.map(x => x.goalCategory))];
  goalsLabel.value = []
  goalsValues.value = []
  idx = 0;
  distinctGoals.forEach(element => {
    //console.log("Category " + element)
    goalsLabel.value.push(element)
    goalsColors.value.push(generateRgbColor(idx++))
    var totalcat = itemsList.value.filter(x => x.goalCategory == element).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);

    goalsValues.value.push(totalcat)

  });


}

function generateRgbColor(index) {

  return rgbColors[index]
}


</script>

<style></style>
