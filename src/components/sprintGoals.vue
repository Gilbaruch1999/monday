<template>
  <v-container fluid>
    <div>
    <v-toolbar color="primary" title="Sprint Goals">
    </v-toolbar>
    <v-card min-height="150" class="ma-0 " v-for="category in sprintGoalsCategory">
      <v-card-title> {{ category }}</v-card-title>
      <v-row>
        <v-card class="ma-2 mr-5" :key="category" :color="getGoalColor(item)"
          v-for="item in getGoals(category)">
          <div class="text-h6 font-weight-bold ma-2">
            {{ item.title }}
          </div>
          <p class="text-body-2 ma-2">status : {{ item.status }}</p>
        </v-card>
      </v-row>
    </v-card>
    </div>
  </v-container>


</template>
<script setup lang='ts'>
import { boardItem } from '@/utils/boarditem';
import { onMounted } from 'vue';
const goalsCategory = ["Minimum", "Target", "Outstanding"]

const props = defineProps<{
  boardItems : boardItem[]

}>()


const sprintGoalsCategory = ["Minimum" , 'Target' , 'Outstanding']

function getGoals(category : string)
{

  return props.boardItems.filter(x=>x.goalCategory == category)
}

onMounted(() => {

  //console.log("Mounted " + JSON.stringify(props.sprintGoals))

})


function getGoalColor(item: boardItem) {
   var ret_val = ""
  switch (item.status) {
    case "Work In Progress":
    case "Wait" :
      ret_val = 'yellow'
      break;
    case "Done":
      ret_val = 'green'
      break
    case "Not Done":
      ret_val = 'red'
      break
    default:
      ret_val = "red"
  }
  return ret_val;
}

</script>
