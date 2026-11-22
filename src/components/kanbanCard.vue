<template>

  <v-card :color="getCardParentColor(item.parent)">
    <v-tooltip :text="parentTitle">
      <template #activator="{ props: activatorProps }">
        <v-card-title v-bind="activatorProps">{{ item.title }}</v-card-title>
      </template>
    </v-tooltip>

    <v-card-text v-if="item.parent.length > 1">Parent : {{ item.parent }}
      <v-chip :color="getPointsColor(item.sizeEstimation)" size="x-small" variant="flat">{{ item.sizeEstimation
      }}</v-chip>

      <v-chip class="mr-2" color="green-darken-4" size="x-small" variant="flat">{{ item.assignedTo
      }}</v-chip>

      <v-chip class="mr-1" color="green-darken-4" size="x-small" variant="flat">{{ item.status
      }}</v-chip>

      <v-chip color="green-darken-4" size="x-small" variant="flat">{{ item.goalCategory
      }}</v-chip>

    </v-card-text>

  </v-card>

</template>

<script setup lang='ts'>
import type { boardItem } from '@/utils/boarditem';
import { getCardParentColor } from '@/utils/cardcolors';



// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  item: boardItem,
  parentTitle: string;
}>()

function getPointsColor(size: string) {

  let ret_val;
  switch (size) {
    case 'xS': {
      ret_val = "green-darken-3"
      break;
    }
    case 'S': {
      ret_val = "light-green-lighten-2"
      break;
    }
    case 'M': {
      ret_val = "yellow-lighten-2"
      break;
    }
    case 'L': {
      ret_val = "amber-darken-1"
      break;
    }
    case 'xL': {
      ret_val = "red-darken-2"
      break;
    }

    default: {
      ret_val = "deep-purple-lighten-1"
    }
  }
  return ret_val

}

</script>
