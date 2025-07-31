<template>
  <v-container fluid>
    <div>
      <v-toolbar color="primary" title="Sprint Goals">
      </v-toolbar>
      <v-card min-height="150" :color="category.color" class="my-2" v-for="category in goalsCategory">
        <v-card-title  class=""> {{ category.name }}</v-card-title>
        <v-row>
          <v-card class="my-8 mx-4" :key="category.name" :color="getGoalColor(item)"
            v-for="item in getGoals(category.name)">
            <div class="text-h6 font-weight-bold ma-2">
              {{ item.title }}
            </div>
            <p class="text-body-2 mx-2">status : {{ item.status }}</p>
          </v-card>
        </v-row>
      </v-card>
    </div>
  </v-container>


</template>
<script setup lang='ts'>
import { boardItem } from '@/utils/boarditem';
import { onMounted } from 'vue';
const goalsCategory = [
  { name: "Minimum", color: "#1e90ff" },
  { name: "Target", color: "#7FFF00" },
  { name: "Outstanding", color: "#FFa500" },

]


const props = defineProps<{
  boardItems: boardItem[]

}>()


function getGoals(category: string) {

  return props.boardItems.filter(x => x.goalCategory == category)
}

onMounted(() => {

  //console.log("Mounted " + JSON.stringify(props.sprintGoals))

})


function getGoalColor(item: boardItem) {
  var ret_val = ""
  switch (item.status) {
    case "Work In Progress":
    case "Wait":
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
