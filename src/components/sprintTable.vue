<template>
  <v-container fluid class="ma-0">
    <v-data-table items-per-page="20" class="datatable" hide-default-footer dense item-key="id" :headers="issuesheaders"
      :row-props="rowProps" :items="props.sprintItems">
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
      <template v-slot:expanded-row="{ item }">
        <!-- @vue-ignore -->
        <v-data-table hide-default-footer dense item-key="id" :headers="issuesheaders" :row-props="rowProps"
          :items="item.subItems"></v-data-table>
      </template>
    </v-data-table>



  </v-container>
</template>



<script setup lang='ts'>


import { boardItem } from '@/utils/boarditem';

const props = defineProps({
  sprintItems: {
    type: boardItem[0],
    required: true
  },
});


const issuesheaders: any = [
  { text: 'Expand', value: 'data-table-expand', align: 'start' },
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
  //console.log("Row props xxx" + JSON.stringify(data.item))
  if (data.item.status == "Done")
    return { class: 'done_bg' }
}

</script>
