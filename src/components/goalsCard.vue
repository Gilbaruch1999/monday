<template>
  <v-card :color="getCardColor(item)">
    <v-card-title>{{ item.title }}</v-card-title>
    <v-chip size="x-small" variant="flat" :color="getPointsColor(item.sizeEstimation)">{{ item.sizeEstimation
    }}</v-chip>
    <span class="ma-1">{{ item.assignedTo }}</span>
    <span class="ma-1">{{ item.status }} </span>
     <v-icon v-if="item.planningCheck" color="black" icon="mdi-check-circle"></v-icon>
     <v-icon v-else color="black" icon="mdi-close-circle"></v-icon>

  </v-card>

</template>

<script setup lang='ts'>
import { boardItem } from '@/utils/boarditem';



const props = defineProps<{
  item: boardItem
}>()

function getPointsColor(size: string) {

  let ret_val = "";
  switch (size) {
    case 'xS':
      ret_val = "green-darken-3"
      break;
    case 'S':
      ret_val = "light-green-lighten-2"
      break;
    case 'M':
      ret_val = "yellow-lighten-2"
      break;
    case 'L':
      ret_val = "amber-darken-1"
      break;
    case 'xL':
      ret_val = "red-darken-2"
      break;

    default:
      ret_val = "deep-purple-lighten-1"
  }
  return ret_val

}

function getCardColor(item: boardItem) {
  let ret_val = ""
  switch (item.status) {
    case "Done":
      ret_val = "green"
      break;
    case "Next Sprint":
    case "Wait":
    case "Stuck":
      ret_val = "red"
      break;
    case "Pushed Out":
      ret_val = "black"
      break;
    case "Work In Progress":
      ret_val = "yellow"
      break;
    default:

      break;
  }

  if (item.status.includes("Review"))
  ret_val = "yellow";

  return ret_val

}
</script>
