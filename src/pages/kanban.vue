<template>
  <v-container fluid class="ma-1">
    <v-row>
      <v-col width="250px" :key="state" v-for="state in states">
        <v-card elevation="5" :class="getColorClass(state)" min-height="20">
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
import { onMounted, Ref, ref } from 'vue';
import { useSprintData } from "../stores/sprintData";
import colors from 'vuetify/util/colors'

let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();

let states = ref(['Not started', 'WIP', 'Wait', 'Done'])
/*
  <v-card v-for="n in states" :key="n" class="text-center" width="18%" height="50px">
        <v-card-title>{{ n }}</v-card-title>
      </v-card>*/
onMounted(async () => {

  //console.log("On mounted sprint plan")
  itemsList.value = sprintDataStore.getsprintData()

})

function getItems(state): boardItem[] {
  let ret_val: boardItem[] = []
  let list: boardItem[]


  switch (state) {
    case "Not started":
      ret_val = itemsList.value.filter(x => x.status.includes("Please") && x.subItems.length == 0)
      break;
    case "Done":
      ret_val = itemsList.value.filter(x => x.status == state && x.subItems.length == 0)
      break;
    case "Wait":
      ret_val = itemsList.value.filter(x => x.status == 'Wait' && x.subItems.length == 0)
      break;
    case 'WIP':
      ret_val = itemsList.value.filter(x => x.status == "Work In Progress" && x.subItems.length == 0)
      break
    default:
      ret_val = itemsList.value.filter(x => x.status == state && x.subItems.length == 0)
      break;
  }

  list = itemsList.value.filter(x => x.subItems.length > 0)
  list.forEach(element => {

    switch (state) {
      case "Not started":
        ret_val=ret_val.concat(element.subItems.filter(x => x.status.includes("Please")))
        break;
      case "Done":
        ret_val=ret_val.concat(element.subItems.filter(x => x.status == state))
        break;
      case "Wait":
        ret_val=ret_val.concat(element.subItems.filter(x => x.status == 'Wait'))
        break;
      case 'WIP':
        ret_val=ret_val.concat(element.subItems.filter(x => x.status == 'Work In Progress'))
        break
      default:
        ret_val=ret_val.concat(element.subItems.filter(x => x.status == state))
        break;
    }

  });

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




</script>
