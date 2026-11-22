<template>

  <v-card :color="getCardParentColor(item.parent)">
    <v-tooltip :text="parentTitle">
      <template v-slot:activator="{ props }">
        <v-card-title v-bind="props">{{ item.title }}</v-card-title>
      </template>
    </v-tooltip>    <v-card-text v-if="item.parent.length > 1">Parent : {{ item.parent }}
      <v-chip size="x-small" variant="flat" :color="getPointsColor(item.sizeEstimation)">{{ item.sizeEstimation
      }}</v-chip>
      <v-chip class="mr-2" size="x-small" variant="flat" color="green-darken-4">{{ item.assignedTo
      }}</v-chip>
      <v-chip class="mr-1" size="x-small" variant="flat" color="green-darken-4">{{ item.status
      }}</v-chip>
      <v-chip size="x-small" variant="flat" color="green-darken-4">{{ item.goalCategory
      }}</v-chip>

    </v-card-text>

  </v-card>

</template>

<script setup lang='ts'>
import { boardItem } from '@/utils/boarditem';
import { getCardParentColor } from '@/utils/cardcolors';



const props = defineProps<{
  item: boardItem,
  parentTitle: string;
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

</script>
