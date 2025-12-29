<template>

  <v-container>
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
</template>

<script setup lang='ts'>

import { boardItem } from "@/utils/boarditem";
import { Sprint } from "@/utils/mondayparser";
import { useSprintData } from "../stores/sprintData";
import { Chart, ChartData, registerables } from "chart.js";
import { PieChart } from "vue-chart-3";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { computed, onMounted, ref, Ref, watch } from "vue";
Chart.register(...registerables, ChartDataLabels);


let categoryLabeles = ref([])
let domainLables = ref([])
let pieColors: Ref<string[]> = ref([])
let goalsColors: Ref<string[]> = ref([])
let categoryValues: Ref<number[]> = ref([])
let domainValues: Ref<number[]> = ref([])
let goalsLabel = ref([])
let goalsValues = ref([])
const rgbColors = ['#ff0000', '#ff8000', '#999900', '#00ff00', '#009999', '#0000ff', '#7f00ff', '#ff33ff', '#ff3399', '#a0a0a0']
let statusHeader = ref("fff")



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



let domainPieData = computed<ChartData<"pie">>(() => ({
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


let domainPercentpieData = computed<ChartData<"pie">>(() => ({
  labels: domainLables.value,
  datasets: [{
    data: domainValues.value,
    backgroundColor: pieColors.value,
    hoverOffset: 4,
    datalabels: {
      formatter: function (value, context) {

        var total = domainValues.value.reduce((accumulator, object) => {
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

let categoryPercentPieOptions = {}
let domainPercentPieOptions = {};
let categoryPieOptions = {};
let domainPieOptions = {};
let goalsPieOptions = {};
let goalsPieOptions1 = {};
let goalsPercentPieOptions = {}

let itemsList: Ref<boardItem[]> = ref([]);
let curSprint: Ref<Sprint> = ref();
const sprintDataStore = useSprintData();



onMounted(async () => {
  console.log("On mounted breakdown ")
  initData();

})

function initData() {
  itemsList.value = sprintDataStore.getsprintData()
  curSprint.value = sprintDataStore.getCursprintConfig()
  createBreakDownChart()
  statusHeader.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.value.name;
  console.log("status header " + statusHeader.value)
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


  goalsPieOptions1 = {
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
  const distinctCategory = [...new Set(itemsList.value.map(x => x.stratigicCategory))];
  const distinctDomain = [...new Set(itemsList.value.map(x => x.domain))];
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

  domainLables.value = []
  domainValues.value = []
  distinctDomain.forEach(element => {
    //console.log("Category " + element)
    domainLables.value.push(element)
    //pieColors.value.push(generateRgbColor(idx++))
    var totaldomain = itemsList.value.filter(x => x.domain == element).reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
    //console.log("Total " + totalcat)
    domainValues.value.push(totaldomain)

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


watch(
  () => sprintDataStore.getCursprintConfig().name,
  (newValue, oldValue) => {
    initData()
  }
);



</script>

<style></style>
