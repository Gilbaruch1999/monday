/* cspell:disable */
<template>
  <v-container v-if="!retroMode">
    <v-row class="mb-12 mt-4">
      <PieChart :chart-data="categoryPieData" :options="categoryPieOptions" />
      <PieChart :chart-data="catPercentpieData" :options="categoryPercentPieOptions" />
    </v-row>

    <v-row class="mb-12 mt-4">
      <PieChart :chart-data="domainPieData" :options="domainPieOptions" />
      <PieChart :chart-data="domainPercentpieData" :options="domainPercentPieOptions" />
    </v-row>

    <v-row class="mb-12 mt-4">
      <PieChart :chart-data="goalsPieData" :options="goalsPieOptions" />
      <PieChart :chart-data="goalsPercentPieData" :options="goalsPercentPieOptions" />
    </v-row>
  </v-container>

  <v-container v-else fluid>
    <v-row >
      <PieChart :chart-data="catPercentpieData" :options="categoryPercentPieOptions" />
      <PieChart :chart-data="domainPercentpieData" :options="domainPercentPieOptions" />
      <PieChart :chart-data="goalsPercentPieData" :options="goalsPercentPieOptions" />
    </v-row>
  </v-container>
</template>

<script setup lang='ts'>

import type { boardItem } from "@/utils/boarditem";
import type { ChartData} from "chart.js";
import type { Ref} from "vue";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { computed, onMounted, ref, watch } from "vue";
import { PieChart } from "vue-chart-3";
import { Sprint } from "@/utils/sprintInfo";
import { useSprintData } from "../stores/sprintData";
Chart.register(...registerables, ChartDataLabels);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  retroMode: {
    type: Boolean,
    default: false
  }
});
const categoryLabeles : Ref<string[]> = ref([])
const domainLables : Ref<string[]> = ref([])
const pieColors: Ref<string[]> = ref([])
const goalsColors: Ref<string[]> = ref([])
const categoryValues: Ref<number[]> = ref([])
const domainValues: Ref<number[]> = ref([])
const goalsLabel : Ref<string[]> = ref([])
const goalsValues : Ref<number[]> = ref([])
const rgbColors = ['#ff0000', '#ff8000', '#999900', '#00ff00', '#009999', '#0000ff', '#7f00ff', '#ff33ff', '#ff3399', '#a0a0a0']
const statusHeader = ref("")




const categoryPieData = computed<ChartData<"pie">>(() => ({
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



const domainPieData = computed<ChartData<"pie">>(() => ({
  labels: domainLables.value,
  datasets: [{
    data: domainValues.value,
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



const catPercentpieData = computed<ChartData<"pie">>(() => ({
  labels: categoryLabeles.value,
  datasets: [{
    data: categoryValues.value,
    backgroundColor: pieColors.value,
    hoverOffset: 4,
    datalabels: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      formatter: function (value, _context) {

        const total = categoryValues.value.reduce((accumulator, object) => {
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


const domainPercentpieData = computed<ChartData<"pie">>(() => ({
  labels: domainLables.value,
  datasets: [{
    data: domainValues.value,
    backgroundColor: pieColors.value,
    hoverOffset: 4,
    datalabels: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      formatter: function (value, _context) {

        const total = domainValues.value.reduce((accumulator, object) => {
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



const goalsPieData = computed<ChartData<"pie">>(() => ({
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



const goalsPercentPieData = computed<ChartData<"pie">>(() => ({
  labels: goalsLabel.value,
  datasets: [{
    data: goalsValues.value,
    backgroundColor: goalsColors.value,
    hoverOffset: 4,
    datalabels: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      formatter: function (value, _context) {

        const total = goalsValues.value.reduce((accumulator, object) => {
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

let categoryPercentPieOptions = {}
let domainPercentPieOptions = {};
let categoryPieOptions = {};
let domainPieOptions = {};
let goalsPieOptions = {};
let goalsPercentPieOptions = {}

const itemsList: Ref<boardItem[]> = ref([]);
const curSprint: Ref<Sprint> = ref(new Sprint());
const sprintDataStore = useSprintData();



onMounted(async () => {
  console.log("On mounted breakdown ")
  initData();

})

function initData() {
  itemsList.value = sprintDataStore.getsprintData().filter(x=> (x.type == "Feature") || ( (x.type == "Story")  && (x.numOfSubitems == 0) ))
  curSprint.value = sprintDataStore.getCursprintConfig()
  createBreakDownChart()
  statusHeader.value = sprintDataStore.getAppContext().boardDisplayName + " " + curSprint.value.name;
  //console.log("status header " + statusHeader.value)
  updateOptions();

}

function updateOptions() {

  domainPieOptions = {
    plugins: {
      title: {
        display: true,
        text: statusHeader.value + " BreakDown by Domain",
      },
    },
  };

  goalsPieOptions = {
    plugins: {
      title: {
        display: true,
        text: statusHeader.value + " BreakDown by golas",
      },
    },
  };


  categoryPieOptions = {
    plugins: {
      title: {
        display: true,
        text: statusHeader.value + " BreakDown by category",
      },
    },
  };

  categoryPercentPieOptions = {
    plugins: {
      title: {
        display: true,
        text: statusHeader.value + " Break down by Category - percentage",
      },
    },
  };

  goalsPercentPieOptions = {
    plugins: {
      title: {
        display: true,
        text: statusHeader.value + " BreakDown by golas - percentage",
      },
    },
  };

  domainPercentPieOptions = {
    plugins: {
      title: {
        display: true,
        text: statusHeader.value + " Break down by Domain - percentage",
      },
    },
  };



}


function createBreakDownChart() {
  const distinctCategory = [...new Set(itemsList.value.map(x => x.strategicCategory))];
  const distinctDomain = [...new Set(itemsList.value.map(x => x.domain))];
  categoryLabeles.value = []
  categoryValues.value = []
  let idx = 0;
  for (const element of distinctCategory) {
    //console.log("Category " + element)
    categoryLabeles.value.push(element)
    pieColors.value.push(generateRgbColor(idx++))
    const totalcat = itemsList.value.filter(x => x.strategicCategory == element).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
    //console.log("Total " + totalcat)
    categoryValues.value.push(totalcat)

  }

  domainLables.value = []
  domainValues.value = []
  for (const element of distinctDomain) {
    //console.log("Category " + element)
    domainLables.value.push(element)
    //pieColors.value.push(generateRgbColor(idx++))
    const totaldomain = itemsList.value.filter(x => x.domain == element).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
    //console.log("Total " + totalcat)
    domainValues.value.push(totaldomain)

  }

  const distinctGoals = [...new Set(itemsList.value.map(x => x.goalCategory))];
  goalsLabel.value = []
  goalsValues.value = []
  idx = 0;
  for (const element of distinctGoals) {
    //console.log("Category " + element)
    goalsLabel.value.push(element)
    goalsColors.value.push(generateRgbColor(idx++))
    const totalcat = itemsList.value.filter(x => x.goalCategory == element).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);

    goalsValues.value.push(totalcat)

  }

}

function generateRgbColor(index : number) {

  return rgbColors[index]
}


watch(
  () => sprintDataStore.getCursprintConfig().name,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (_newValue, _oldValue) => {
    initData()
  }
);



</script>

<style></style>
