/* cspell:disable */
<template>
  <v-container fluid class="ma-0">

    <div v-if="showFeatures">
      <v-toolbar color="primary">
        <v-toolbar-title>Sprint Features</v-toolbar-title>
      </v-toolbar>
      <v-data-table :items="featureList" items-per-page="60" class="datatable" hide-default-footer desity="compact"
        item-key="id" :headers="issuesheaders" :row-props="rowProps" @click:row="featureRowClicked">
        <template #item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.calcPercentDone() }} % </span>
          </v-progress-linear>
        </template>
        <template #item.planningCheckErrors="item">
          <!-- @vue-ignore -->
          <span> {{ getErrorString(item.item.planningCheckErrors) }}</span>
        </template>
      </v-data-table>
    </div>

    <div v-if="showEpics">
      <v-toolbar color="primary">
        <v-toolbar-title>{{ epicListTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-data-table :items="epicList" items-per-page="60" class="datatable" hide-default-footer desity="compact"
        item-key="id" :headers="issuesheaders" :row-props="rowProps" @click:row="epicRowClicked">
        <template #item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.calcPercentDone() }} % </span>
          </v-progress-linear>
        </template>
        <template #item.planningCheckErrors="item">
          <!-- @vue-ignore -->
          <span> {{ getErrorString(item.item.planningCheckErrors) }}</span>
        </template>
      </v-data-table>
    </div>

    <div v-if="showEpicDetails">
      <v-toolbar color="primary">
        <v-toolbar-title>{{ storyListTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-data-table :items="storyList" items-per-page="60" class="datatable" hide-default-footer desity="compact"
        item-key="id" :headers="issuesheaders" :row-props="rowProps">
        <template #item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.calcPercentDone() }} % </span>
          </v-progress-linear>
        </template>
        <template #item.planningCheckErrors="item">
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
import { getRowTableColorClass } from '@/custom/states';

const showEpicDetails = ref(false)
const storyListTitle = ref("Sprint Stories")
const epicListTitle = ref("Sprint Epics")
const featureList: Ref<boardItem[]> = ref([]);
const epicList: Ref<boardItem[]> = ref([]);
const lastEpicList: Ref<boardItem[]> = ref([]);
const storyList: Ref<boardItem[]> = ref([]);
const taskList: Ref<boardItem[]> = ref([]);
const showEpics = ref(false)
const showFeatures = ref(true)
const sprintDataStore = useSprintData();

const issuesheaders = [

  { title: 'Id', key: 'id' },
  { title: 'Title', key: 'title' },
  { title: 'Type', key: "type" },
  { title: 'Goal Category', key: "goalCategory" },
  { title: "Status", key: "status" },
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function rowProps(data: any) {
  return getRowTableColorClass(data.item.status)
  //return getCardColorClass(data.item.status)

 /* let ret_val = {}

  switch (data.item.status) {
    case 'Done':
      //ret_val = { class: 'done_bg' }
      ret_val = { class: 'bg-green-darken-1' }
      break
    case 'Next Sprint':
      ret_val = { class: 'error_bg' }
      break;
    case 'Pushed Out':
      ret_val = { class: 'pushedOut_bg' }
      break;
  }
  return ret_val*/
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function epicRowClicked(event: any, row: any) {
  showEpicDetails.value = true;
  storyListTitle.value = "childrent of Epic " + row.item.title
  storyList.value = sprintDataStore.getsprintData().filter(x => x.parent == row.item.id)
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (newValue, oldValue) => {
    getItems()

  }
);



</script>
