<script setup lang="ts">
import { retroItemInfo } from '@/utils/retroItem';
import { ref, Ref } from 'vue';


const modelValue = defineModel<retroItemInfo>() // Default name is 'modelValue'
const selectedValue = ref('Choose Score')
const retroStatuses : string[] = [
'NA' , 'Lacking' , 'Doing' , "Excelling"
]

const props = defineProps<{
  itemtext: string
}>()


function selectionChanged(item : string) {
  selectedValue.value = item
  if (modelValue.value !== undefined) {
    modelValue.value.status = item
  }

}

</script>

<template>

  <v-container fluid>
    <v-row class="text-start">
      <v-col cols="2" class="justify-start">
      <h3>{{ itemtext }}</h3>
      </v-col>
       <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn class="mt-4"
          color="primary"
          v-bind="props"
        >{{ selectedValue }}
        </v-btn>
      </template>
      <v-list >
        <v-list-item
          v-for="(item, index) in retroStatuses"
          :key="index"
          :value="index"        >
          <v-list-item-title @click="selectionChanged(item)">{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-text-field class="ml-6" label="Comment"> </v-text-field>

    </v-row>
  </v-container>




</template>
