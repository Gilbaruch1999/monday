<template>
  <v-container fluid>
    <div class="d-flex justify-space-around align-center bg-grey-lighten-4">

      <div class="ma-4">
        <div class="text-subtitle-2"> {{ poImageText }} </div>
        <v-img :aspect-ratio="1" :color="poImageColor" :src="poImageSrc" width="300"></v-img>
      </div>


    </div>
    <div>
      <v-toolbar color="primary" title="Sprint Goals">
      </v-toolbar>
      <v-card min-height="150" :color="category.color" class="my-2" v-for="category in goalsCategory">
        <v-card-title class=""> {{ category.name }}</v-card-title>
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
import { onMounted, ref , watch } from 'vue';
const goalsCategory = [
  { name: "Minimum", color: "#ff6347" },
  { name: "Target", color: "#43A047" },
  { name: "Outstanding", color: "#F48FB1" },

]

const poImage = [
  { src: "minimum.jpeg", text: "Not happy", color: "#ff6347" },
  { src: "target.jpeg", text: "Happy", color: "#43A047" },
  { src: "outstanding.jpeg", text: "Excited", color: "#F48FB1" },
]

let poImageSrc = ref("")
let poImageColor = ref("")
let poImageText = ref("")


const props = defineProps<{
  boardItems: boardItem[]


}>()

/*
const props = defineProps({
  boardItems: {
    type: boardItem[0],
    required: true
  },
});
*/

function getGoals(category: string) {

  return props.boardItems.filter(x => x.goalCategory == category)
}

onMounted(() => {

  //console.log("Mounted " + JSON.stringify(props.sprintGoals))
  updatePOStatus(props.boardItems)

})


function updatePOStatus(items : boardItem[]) {
  let index = 0;

  //console.log("!!!" +  props.boardItems.filter(x => x.goalCategory == "Minimum" && x.status != "Done").length)
  if (items.filter(x => x.goalCategory == "Minimum" && x.status != "Done").length == 0) {
    index = 1

    if (items.filter(x => x.goalCategory == "Target" && x.status != "Done").length == 0)
      index = 2
  }
  poImageSrc.value = poImage[index].src
  poImageColor.value = poImage[index].color
  poImageText.value = poImage[index].text
}

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


watch(
  () => props.boardItems,
  (newValue, oldValue) => {
    console.log("Watch called " + JSON.stringify(newValue))
    updatePOStatus(newValue)
  }
);

</script>
