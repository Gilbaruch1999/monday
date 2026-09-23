/* cspell:disable */
<template>
  <v-container fluid class="ma-0">

    <div v-if="showFeatures">
      <v-toolbar color="primary">
        <v-toolbar-title>Sprint Features</v-toolbar-title>
      </v-toolbar>
      <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id"
        :headers="issuesheaders" :row-props="rowProps" @click:row="featureRowClicked" :items="featureList">
        <template v-slot:item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.calcPercentDone() }} % </span>
          </v-progress-linear>
        </template>
        <template v-slot:item.planningCheckErrors="item">
          <!-- @vue-ignore -->
          <span> {{ getErrorString(item.item.planningCheckErrors) }}</span>
        </template>
      </v-data-table>
    </div>

    <div v-if="showEpics">
      <v-toolbar color="primary">
        <v-toolbar-title>{{ epicListTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id"
        :headers="issuesheaders" :row-props="rowProps" @click:row="epicRowClicked" :items="epicList">
        <template v-slot:item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.calcPercentDone() }} % </span>
          </v-progress-linear>
        </template>
        <template v-slot:item.planningCheckErrors="item">
          <!-- @vue-ignore -->
          <span> {{ getErrorString(item.item.planningCheckErrors) }}</span>
        </template>
      </v-data-table>
    </div>


    <div v-if="showEpicDetails">
       <v-toolbar color="primary">
        <v-toolbar-title>{{ storyListTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id"
        :headers="issuesheaders" :row-props="rowProps" @click:row="storyRowClicked" :items="storyList">
        <template v-slot:item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.calcPercentDone() }} % </span>
          </v-progress-linear>
        </template>
        <template v-slot:item.planningCheckErrors="item">
          <!-- @vue-ignore -->
          <span> {{ getErrorString(item.item.planningCheckErrors) }}</span>
        </template>
      </v-data-table>
    </div>

  </v-container>
</template>



<script setup lang='ts'>

import { boardItem, PlanningErrorsIndex } from '@/utils/boarditem';
import { onMounted, Ref, ref, watch } from 'vue';
import { useSprintData } from "../stores/sprintData";
import { useUsersData } from '@/stores/usersData';


let showEpicDetails = ref(false)

const userStore = useUsersData();

let storyListTitle = ref("Sprint Stories")
let epicListTitle = ref("Sprint Epics")
let featureList: Ref<boardItem[]> = ref([]);
let epicList: Ref<boardItem[]> = ref([]);
let lastEpicList: Ref<boardItem[]> = ref([]);
let storyList: Ref<boardItem[]> = ref([]);
let taskList: Ref<boardItem[]> = ref([]);
let showEpics = ref(false)
let showFeatures = ref(true)
const sprintDataStore = useSprintData();

const issuesheaders: any = [

  { title: 'Id', key: 'id' },
  { title: 'Title', key: 'title' },
  { title: 'Type', key: "type" },
  { title: 'Goal Category', key: "goalCategory" },
  { title: "Status", key: "status" },
  { title: "Planning Status", key: "planningStatus" },
  { title: "Plan Errors", key: "planningCheckErrors" },
  { title: "Estimated Effort", key: "sizeEstimation" },
  { title: "Story Points", key: "storyPoints" },
  { title: "Percent Done", key: "percentDone" },
  { title: "Owner", key: "assignedTo" },
  { title: "Domain", key: "domain" },
  { title: "Category", key: "strategicCategory" },
  { title: "items", key: "numOfSubitems" },

]


onMounted(async () => {
  //console.log("On mounted burndown ")
  getItems()


})


function getItems() {
  taskList.value = sprintDataStore.getsprintData().filter(x => x.type == "task")
  storyList.value = sprintDataStore.getsprintData().filter(x => (x.type == "Story") || (x.type == "Bug"))
  epicList.value = sprintDataStore.getsprintData().filter(x => (x.type == "Epic"))
  featureList.value = sprintDataStore.getsprintData().filter(x => (x.type == "Feature")).sort((a, b) => a.sortOrder - b.sortOrder)
  lastEpicList.value = epicList.value
}

function rowProps(data: any) {
  let ret_val = {}

  switch (data.item.status) {
    case 'Done':
      ret_val = { class: 'done_bg' }
      break
    case 'Next Sprint':
      ret_val = { class: 'error_bg' }
      break;
    case 'Pushed Out':
      ret_val = { class: 'pushedOut_bg' }
      break;
  }
  return ret_val
}


function featureRowClicked(event: any, row: any) {
  if (showEpics.value == true) {
    showEpics.value = false;
    showEpicDetails.value = false;
    epicListTitle.value = "Sprint Epics"
    getItems()
  }
  else {
    showEpics.value = true;
    epicListTitle.value = "Children of feature " + row.item.title
    featureList.value = sprintDataStore.getsprintData().filter(x => x.id == row.item.id)
    epicList.value = sprintDataStore.getsprintData().filter(x => x.parent == row.item.id)

  }
}


function epicRowClicked(event: any, row: any) {
  showEpicDetails.value = true;
  storyListTitle.value = "childrent of Epic " + row.item.title
  storyList.value = sprintDataStore.getsprintData().filter(x => x.parent == row.item.id)
}



function storyRowClicked(event: any, row: any) {

}


function getErrorString(erros: boolean[]): string {
  let ret_val: string = "";
  for (let index = 0; index < erros.length; index++) {

    if (erros[index]) {
      ret_val = ret_val + PlanningErrorsIndex[index].toString() + " "
    }

  }
  return ret_val

}

watch(
  () => sprintDataStore.getsprintData(),
  (newValue, oldValue) => {
    getItems()

  }
);



</script>
