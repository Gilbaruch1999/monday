<template>
  <div class="my-12">
    <v-row>
      <v-card width="400px" height="50px">
        <v-card-title class="text-center">Task</v-card-title>
      </v-card>
      <v-card v-for="n in states" :key="n" class="text-center" width="400px" height="50px">
        <v-card-title>{{ n }}</v-card-title>
      </v-card>
    </v-row>
  </div>

</template>

<script setup lang='ts'>

import { boardItem } from '@/utils/boarditem';
import { onMounted, ref } from 'vue';
const props = defineProps<{
  sprintPlanList: boardItem[]


}>()

let states = ref(['Not started','WIP','Wait','Done'])


onMounted(async () => {

  //console.log("On mounted sprint plan")

})




function calcWidth() {
  var w = 50;


  return w + '%'
}


</script>
