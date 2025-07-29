<template>
  <v-container fluid>
    <div>
    <v-toolbar color="primary" title="Sprint Goals">
    </v-toolbar>
    <v-card min-height="150" class="ma-0 " v-for="category in sprintGoalsCategory">
      <v-card-title> {{ category }}</v-card-title>
      <v-row>
        <v-card class="ma-2 mr-5" :key="category"
          v-for="goal in getGoals(category)">
          <div class="text-h6 font-weight-bold ma-2">
            {{ goal.title }}
          </div>
          <p class="text-body-2 ma-2">status : {{ goal.status }}</p>
        </v-card>
      </v-row>
    </v-card>
    </div>
  </v-container>


</template>
<script setup lang='ts'>
import { sprintGoal } from '@/utils/sprintGoal';
import { onMounted } from 'vue';
const goalsCategory = ["Minimum", "Target", "Outstanding"]

const props = defineProps<{
  sprintGoals : sprintGoal[]

}>()



const sprintGoalsCategory = ["Minimum" , 'Target' , 'Outstanding']

function getGoals(category : string)
{

  return props.sprintGoals.filter(x=>x.category == category)
}

onMounted(() => {

  console.log("Mounted " + JSON.stringify(props.sprintGoals))

})


</script>
