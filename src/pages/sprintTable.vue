<template>
  <v-container fluid class="ma-0">
    <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id" :headers="issuesheaders"
      :row-props="rowProps" @click:row="rowClicked" :items="itemsList">
      <template v-slot:item.percentDone="{ item }">
        <!-- @vue-ignore -->
        <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
          <!-- @vue-ignore -->
          <span style="color:white"> {{ item.percentDone }} % </span>
        </v-progress-linear>
      </template>
      <template v-slot:item.planningStatus="item">
        <!-- @vue-ignore -->
        <v-icon v-if="item.item.planningStatus" color="green" icon="mdi-check-circle"></v-icon>
        <v-icon v-else color="red" icon="mdi-close-circle"></v-icon>
      </template>
    </v-data-table>
    <br></br>
    <div v-if="showDetails">
      <v-toolbar color="primary">
        <v-toolbar-title>{{ childTitle }}</v-toolbar-title>
      </v-toolbar>
      <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id"
        :headers="issuesheaders" :row-props="rowProps" @click:row="subItemrowClicked" :items="childItems">
        <template v-slot:item.percentDone="{ item }">
          <!-- @vue-ignore -->
          <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
            <!-- @vue-ignore -->
            <span style="color:white"> {{ item.percentDone }} % </span>
          </v-progress-linear>
        </template>
        <template v-slot:item.planningStatus="item">
          <!-- @vue-ignore -->
          <v-icon v-if="item.item.planningStatus" color="green" icon="mdi-check-circle"></v-icon>
          <v-icon v-else color="red" icon="mdi-close-circle"></v-icon>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>



<script setup lang='ts'>

import { boardItem } from '@/utils/boarditem';
import { onMounted, Ref, ref, watch } from 'vue';
import { useSprintData } from "../stores/sprintData";

let showDetails = ref(false)
let childItems: Ref<boardItem[]> = ref([])
let childTitle = ref("")
let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();


const issuesheaders: any = [

  { title: 'Id', key: 'id' },
  { title: 'Title', key: 'title' },
  { title: 'Type', key: "type" },
  { title: 'Goal Category', key: "goalCategory" },
  { title: "Status", key: "status" },
  { title: "Plan Status", key: "planningStatus" },
  { title: "Estimated Effort", key: "sizeEstimation" },
  { title: "Percent Done", key: "percentDone" },
  { title: "Owner", key: "assignedTo" },
  { title: "Domain", key: "domain" },
  { title: "Category", key: "stratigicCategory" },

]


onMounted(async () => {
  console.log("On mounted burndown ")
  itemsList.value = sprintDataStore.getsprintData()
  //curSprint.value = sprintDataStore.getsprintConfig()

})

function rowProps(data: any) {

  let ret_val = {}

  if (data.item.status == "Done")
    ret_val = { class: 'done_bg' }
  else {
    if (data.item.status == 'Next Sprint')
      ret_val = { class: 'error_bg' }
  }

  return ret_val;
}


function rowClicked(event, row) {
  if (showDetails.value == true) {
    showDetails.value = false;
    itemsList.value = sprintDataStore.getsprintData()
  }
  else {

    childTitle.value = "Sub items of " + row.item.title
    childItems.value = row.item.subItems
    showDetails.value = true;
    itemsList.value = sprintDataStore.getsprintData().filter(x => x.id == row.item.id)
  }

}



function subItemrowClicked(event, row) {

  showDetails.value = false
  itemsList.value = sprintDataStore.getsprintData()

}


watch(
  () => sprintDataStore.getsprintData(),
  (newValue, oldValue) => {
     itemsList.value = newValue

  }
);

</script>
