<template>
  <v-container fluid class="ma-1">
    <v-row>
      <v-col width="250px" :key="state" v-for="state in states">
        <v-card elevation="5" :class="getColorClass(state)" min-height="20" max-width="400px">
          <v-card-title class="ma-1">{{ state }}</v-card-title>
          <VueDraggable :data-column-id="state"  @end="(event) => onDragEnd(event)" v-model="processedValue" group="kanban" :animation="300"
            class="flex flex-col gap-2 min-h-[150px]">
            <v-card elevation="2" class="ma-1" :key="card.id" v-for="card in getItems(state)">
              <kanban-card :item="card">
              </kanban-card>
            </v-card>
          </VueDraggable>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script setup lang='ts'>


import { boardItem } from '@/utils/boarditem';
import { computed, onMounted, Ref, ref, watch } from 'vue';
import { useSprintData } from "../stores/sprintData";
import { useUsersData } from '@/stores/usersData';
import { DraggableEvent, VueDraggable } from 'vue-draggable-plus'
import { mapStates, states } from '@/custom/states';

let itemsList: Ref<boardItem[]> = ref([]);
let filterByName = ref(false)
const sprintDataStore = useSprintData();
const userStore = useUsersData();

/*
let states = ref(['Not started', 'WIP', 'Wait', 'Done'])

let mapStates: Map<string, string[]> = new Map([
  ['Not started', ['Pending', 'Next Sprint']],
  ['WIP', ['Work In Progress', 'Needs PO Review']],
  ['Wait', ['Stuck']],
  ['Done', ['Done']],
]);*/


const processedValue = computed<boardItem[]>({
  get(state: any): boardItem[] {
    return getItems(state) // Transform on read
  },
  set(newValue) {

  }
})



const onDragEnd = (event: DraggableEvent) => {
  //console.log('Drag from  ' + event.from.dataset.columnId)
  //console.log('Drag to  ' + event.to.dataset.columnId)
  var allowedStates: string[] = mapStates.get(String(event.to.dataset.columnId)) ?? [];
  if (allowedStates.length > 0) {

    var list = getItems(String(event.from.dataset.columnId))
    //console.log("item title " + list[parseInt(String(event.oldIndex))].title)
    let index = itemsList.value.findIndex(x => x.id == list[parseInt(String(event.oldIndex))].id)
    if (index != -1) {
      //console.log("Updating status of  " +   itemsList.value[index].title)
      itemsList.value[index].status = allowedStates[0]
    }
  }
}


onMounted(async () => {

  //console.log("On mounted sprint plan")
  filterByName.value = false;
  InitData();


})

function InitData() {

  itemsList.value = sprintDataStore.getsprintData()

  if (filterByName.value) {
    itemsList.value = itemsList.value.filter(X => (X.assignedTo.includes(userStore.getCurrentUser().name)))
  }


}

function getItems(state: any): boardItem[] {
  let ret_val: boardItem[] = []
  let list: boardItem[] = itemsList.value.filter(x => (x.type == "Story") || ((x.type == "Epic" && x.numOfSubitems == 0)))
  var allowedStates: string[] = mapStates.get(state) ?? [];
  ret_val = list.filter(item => allowedStates.includes(item.status));

  return ret_val;

}

function getStateName(state: string): string {

  let tmp = mapStates.has(state)
  if (tmp) {
    return String(mapStates.get(state))
  }
  else
    return "Not found"

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


watch(
  () => userStore.getCurrentUser(),
  (newValue, oldValue) => {
    filterByName.value = true
    InitData()

  }
);


</script>
