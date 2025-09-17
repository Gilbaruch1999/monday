<template>
  <v-container fluid class="ma-0">
    <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id" :headers="issuesheaders"
      :row-props="rowProps"  @click:row="rowClicked" :items="props.sprintItems">
      <template v-slot:item.percentDone="{ item } ">
         <!-- @vue-ignore -->
        <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
           <!-- @vue-ignore -->
          <span style="color:white"> {{item.percentDone }} % </span>
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
      <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="id" :headers="issuesheaders"
      :row-props="rowProps"  @click:row="subItemrowClicked" :items="childItems">
      <template v-slot:item.percentDone="{ item } ">
         <!-- @vue-ignore -->
        <v-progress-linear v-model="item.percentDone" height="25" style="color: blue; background-color: darkcyan">
           <!-- @vue-ignore -->
          <span style="color:white"> {{item.percentDone }} % </span>
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
import { Ref, ref } from 'vue';

const props = defineProps({
  sprintItems: {
    type: boardItem[0],
    required: true
  },
});

let showDetails = ref(false)
let childItems : Ref<boardItem[]> = ref([])
let childTitle = ref("")

const issuesheaders: any = [

  { title: 'Id', key: 'id' },
  { title: 'Title', key: 'title' },
  { title: 'Type', key: "type" },
  { title: "Status", key: "status" },
  { title: "Plan Status", key: "planningStatus" },
  { title: "Estimated Effort", key: "sizeEstimation" },
  { title: "Percent Done", key: "percentDone" },
  { title: "Owner", key: "assignedTo" },
  { title: "Domain", key: "domain" },
  { title: "Category", key: "stratigicCategory" },

]


function rowProps(data: any) {

  if (data.item.status == "Done")
    return { class: 'done_bg' }
}


function rowClicked(event , row) {

  childTitle.value = "Sub items of " + row.item.title
  childItems.value = row.item.subItems
  showDetails.value = true;
}



function subItemrowClicked(event , row) {

 showDetails.value = false

}

</script>
