<template>
  <v-container fluid class="ma-1">
    <v-row>
      <v-col width="250px" :key="state" v-for="state in states">
        <v-card elevation="5" :class="getColorClass(state)" min-height="20" max-width="400px">
          <v-card-title class="ma-1">{{ state }}</v-card-title>
          <v-card elevation="2" class="ma-1 " :key="card.id" v-for="card in getItems(state)">
            <kanban-card :item="card">
            </kanban-card>
          </v-card>
        </v-card>
      </v-col>

    </v-row>
  </v-container>

</template>

<script setup lang='ts'>

import { boardItem } from '@/utils/boarditem';
import { onMounted, Ref, ref, watch } from 'vue';
import { useSprintData } from "../stores/sprintData";

import colors from 'vuetify/util/colors'
import { useUsersData } from '@/stores/usersData';

let itemsList: Ref<boardItem[]> = ref([]);
let filterByName = ref(false)
const sprintDataStore = useSprintData();
const userStore = useUsersData();
let states = ref(['Not started', 'WIP', 'Wait', 'Done'])

onMounted(async () => {

  //console.log("On mounted sprint plan")
  filterByName.value = false;
  InitData();

})

function InitData() {

   itemsList.value = sprintDataStore.getsprintData()

  if (filterByName.value) {
     itemsList.value  =   itemsList.value.filter(X => (X.assignedTo.includes(userStore.getCurrentUser().name)))
  }


}

function getItems(state : any): boardItem[] {
  let ret_val: boardItem[] = []
  let list: boardItem[]


  switch (state) {
    case "Not started":
      ret_val = itemsList.value.filter(x => x.status.includes("New") )
      break;
    case "Done":
      ret_val = itemsList.value.filter(x => x.status == 'Done')
      break;
    case "Wait":
      ret_val = itemsList.value.filter(x => x.status == 'Stuck')
      break;
    case 'WIP':
      ret_val = itemsList.value.filter(x => (x.status.includes("Work")))
      break
    default:
      ret_val = itemsList.value.filter(x => x.status == state )
      break;
  }
  return ret_val;

}

function getColorClass(state: string) {

  let ret_val = "ma-1 "
  switch (state) {
    case "Done":
      ret_val = ret_val + "bg-light-green-darken-3";
      break;
    case "Not started":
      ret_val = ret_val + "bg-blue-grey-lighten-3";
      break;
    case "Wait":
      ret_val = ret_val + "bg-red-accent-4";
      break;
    case 'WIP':
      ret_val = ret_val + "bg-yellow-darken-2";
      break
    default:
      ret_val = ret_val + "bg-blue-grey-lighten-3";
      break;
  }

  return ret_val

}


watch(
  () => userStore.getCurrentUser(),
  (newValue, oldValue) => {
    filterByName.value = true
    InitData()

  }
);


</script>
