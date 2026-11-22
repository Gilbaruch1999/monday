
<template>
  <v-container class="ma-1" fluid>
    <v-row>
      <v-col v-for="(state, index) in states" :key="state" width="250px">
        <v-card :class="getCardColorClass(state)" elevation="5" max-width="400px" min-height="20">
          <v-card-title class="ma-1">{{ state }}
            <v-btn v-if="(index == 0)" :disabled="changeList.length === 0" @click="updateStates()">Update</v-btn>
          </v-card-title>

          <VueDraggable :data-column-id="state" v-model="processedValue" class="flex flex-col gap-2 min-h-[150px]"
            @end="(event) => onDragEnd(event)" group="kanban" :animation="300">
            <v-card v-for="card in getItems(state)" :key="card.id" class="ma-1" elevation="2">
              <kanban-card :item="card" :parent-title="getParentTitle(card.parent)" />
            </v-card>
          </VueDraggable>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang='ts'>
/* eslint-disable */

const mondayapi = inject('monday') as MondayClientSdk
import { boardItem } from '@/utils/boarditem';
import { computed, inject, onMounted, Ref, ref, watch } from 'vue';
import { useSprintData } from "../stores/sprintData";
import { useUsersData } from '@/stores/usersData';
import { DraggableEvent, VueDraggable } from 'vue-draggable-plus'
import { getCardColorClass, mapStates, states } from '@/custom/states';
import { MondayClientSdk } from 'monday-sdk-js';
import { updateValueQuery } from '@/monday/mondayQueries';
import { boardConfig } from '@/utils/boardCfg';
import { statusColId } from '@/custom/snooze/fields-snooze';

class changeItem {
  itemid: string = ""
  fromState: string = ""
  toState: string = ""

  constructor(id: string, from: string, to: string) {
    this.itemid = id
    this.fromState = from
    this.toState = to
  }

}

let itemsList: Ref<boardItem[]> = ref([]);
let changeList: Ref<changeItem[]> = ref([]);
let filterByName = ref(false)
const sprintDataStore = useSprintData();
const userStore = useUsersData();
let boardcfg: boardConfig = new boardConfig()

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
      AddChangeToList(itemsList.value[index].id, String(event.from.dataset.columnId), String(event.to.dataset.columnId))
    }
  }
}


function AddChangeToList(id: string, fromState: string, toState: string) {

  let index = changeList.value.findIndex(x => x.itemid == id)
  if (index == -1) {
    changeList.value.push(new changeItem(id, fromState, toState))
  }
  else {
    if (changeList.value[index].fromState == toState) {
      changeList.value.splice(index, 1);

    }
    else {
      changeList.value[index].toState = toState;
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
  boardcfg = sprintDataStore.getBoardCfg()


}

function getItems(state: any): boardItem[] {
  let ret_val: boardItem[] = []
  let list: boardItem[] = itemsList.value.filter(x => (x.type == "Story") || ((x.type == "Epic" && x.numOfSubitems == 0)))
  var allowedStates: string[] = mapStates.get(state) ?? [];
  ret_val = list.filter(item => allowedStates.includes(item.status));
  console.log("get items. status  " + state + " allowed state " + JSON.stringify(allowedStates))
  console.log("returned num of items " + ret_val.length)

  return ret_val;

}



async function updateStates() {

  //console.log("Update List " + JSON.stringify(changeList.value))
  for (let index = 0; index < changeList.value.length; index++) {
    var allowedStates: string[] = mapStates.get(changeList.value[index].toState) ?? [];
    if (allowedStates.length > 0) {
      var qstr = updateValueQuery(boardcfg.boardId, changeList.value[index].itemid, statusColId, allowedStates[0]);
      // console.log("Query is " + qstr)
      var res = await mondayapi.api(qstr);
      console.log("Result of update " + JSON.stringify(res))
    }
  }
  changeList.value.splice(0, changeList.value.length)

}

function getParentTitle(parentID: string): string {
  let index = itemsList.value.findIndex(x => x.parent == parentID)
  if (index != -1)
    return "parent: " + itemsList.value[index].title
  else
    return "No Parent"
}


watch(
  () => userStore.getCurrentUser(),
  (newValue, oldValue) => {
    filterByName.value = true
    InitData()

  }
);


</script>
