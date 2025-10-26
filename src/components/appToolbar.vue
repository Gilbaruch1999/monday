<template>

  <v-toolbar class="mt-6" color="primary " :title="toolBarTitle">
    <v-btn class="mt-6" @click="$router.push('/burndown')">BurnDown</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintTable')">Sprint items</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintGoals')">Goals</v-btn>
    <v-btn class="mt-6" @click="$router.push('/breakdown')">BreakDown pie</v-btn>
    <v-btn class="mt-6" @click="$router.push('/kanban')">Kanban</v-btn>
    <v-btn class="mt-6" @click="$router.push('/history')">History</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintsCfg')">Manage Sprints</v-btn>
    <v-btn class="mt-6" @click="reloadData()">Reload Data</v-btn>
    <v-menu class="mt-6">
      <template v-slot:activator="{ props }">
        <v-btn class="mt-6" color="white" light v-bind="props">
          {{ curSprint.name }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in sprintNames" :key="index">
          <v-list-item-title @click="sprintChanged(item)" class="ma-2"> {{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>


</template>


<script setup lang='ts'>
import { inject, onMounted, ref, type Ref } from "vue";
import { MondayClientSdk } from "monday-sdk-js";

import { boardItem } from "@/utils/boarditem";
import { getDummyBoardItems, getDummyContext } from "@/utils/mondaydummy";
import { Sprint } from "@/utils/mondayparser";
import { getBoardItemsQuery } from "@/utils/queries";
import { getDaysdiff } from "@/utils/utils";
import { useSprintData } from "../stores/sprintData";


import router from "@/router";
import { getDummySprintList } from "@/utils/dummysprints";


const mondayapi = inject('monday') as MondayClientSdk
let getFromDummy = ref(false);
let toolBarTitle = ref("")
let boardId = ref("")
let curSprint: Sprint = new Sprint();
let CurrentBoardType = ref("");
let groupid = ref("");
let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();
let sprintNames: Ref<string[]> = ref([])


onMounted(async () => {
  console.log("Starting app version v84")
  var res = await mondayapi.get('context')
  //console.log("Res " + JSON.stringify(res))
  try {
    if (res.hasOwnProperty('data')) {
      getFromDummy.value = false

    }
    else {
      console.log("No API")
      getFromDummy.value = true
    }

  }
  catch {
    console.log("use dummy data ");
    getFromDummy.value = true;
  }

  await getContext();
  await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
  //console.log("items list " + JSON.stringify(itemsList.value))
  sprintDataStore.setsprintData(itemsList.value)
  //console.log("Sprint data " + JSON.stringify(sprintDataStore.getsprintData()))
  toolBarTitle.value = curSprint.name + " status"
  router.push({ path: '/burndown' })

})


async function reloadData() {

  itemsList.value = []
  await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
  console.log("items list " + JSON.stringify(itemsList.value))
  sprintDataStore.setsprintData(itemsList.value)

}

async function getContext() {
  let context = {};
  if (getFromDummy.value) {
    context = getDummyContext();
    //console.log("Dummy Context " + JSON.stringify(context))
    boardId.value = context['boardId']
  }
  else {

    //console.log("Get from API async ")
    var res = await mondayapi.get('context')
    //console.log("Res " + JSON.stringify(res))
    context = res.data;
    try {
      boardId.value = context['boardId']
      console.log("Board id " + boardId.value)
    }
    catch {

    }
  }
  sprintDataStore.setBoardid(boardId.value)
  await InitSprintTable();
  //console.log("board id " + boardId.value)
  curSprint = findCurrentSprint(boardId.value)
  groupid.value = curSprint.groupid
  console.log("current sprint " + JSON.stringify(curSprint))
  sprintDataStore.setCursprintConfig(curSprint)
}

function findCurrentSprint(boardid: string): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();
  //console.log("board id " + boardid)
  //console.log("Sprints 1" + JSON.stringify(sprintDataStore.getsprintList()))
  //console.log("Sprints 2" + JSON.stringify(sprintDataStore.getsprintList()[0]))
  let boardSprintTable = sprintDataStore.getsprintList().filter(x => x.boardid == boardid)
  //console.log("Sprints " + JSON.stringify(boardSprintTable))
  for (let index = 0; index < boardSprintTable.length; index++) {
    var diff = getDaysdiff(curDate, boardSprintTable[index].startDate);
    if (diff >= 0 && diff < boardSprintTable[index].duration) {
      ret_val = boardSprintTable[index];
    }
  }
  return ret_val;
}

async function InitSprintTable() {

  if (getFromDummy.value == false) {
    await getSprintsFromStorage()
  }
  else {
    let tempdata: Sprint[] = getDummySprintList();
    sprintDataStore.setsprintList(tempdata);
  }
  sprintNames.value = [];
  sprintDataStore.getsprintList().filter(x => x.boardid == boardId.value).forEach(element => {
    sprintNames.value.push(element.name)
  });
}

async function getSprintsFromStorage() {
  let sprintarr: Sprint[] = []
  let res = await mondayapi.storage.getItem("sprints")
  let tempdata = JSON.parse(res.data.value);
  console.log("temp data " + JSON.stringify(tempdata))
  for (let index = 0; index < tempdata.length; index++) {
    let newSprint = new Sprint();
    let stdate = new Date(tempdata[index].startDate)
    stdate.setHours(0,0,0,0)
    newSprint = { ...tempdata[index] };
    newSprint.nonWorkingDays = []
    //console.log("index is " + index + " tmp data " + JSON.stringify(tempdata[index]))
    newSprint.startDate = stdate;
    tempdata[index].startDate = stdate;
    tempdata[index].nonWorkingDays.forEach(element => {

      stdate = new Date(element)
      stdate.setHours(0,0,0,0)
      newSprint.nonWorkingDays.push(new Date(stdate))

    });
    //console.log("Sprints from DB after conversion. index : " + index + " " + JSON.stringify(newSprint))
    sprintarr.push(newSprint)
  }
  //console.log("set sprint list " + JSON.stringify(sprintarr))
  sprintDataStore.setsprintList(sprintarr)

}


async function getBoardItems(sprintStart: Date, sprintLength: number, groupid: string) {
  var data;
  itemsList.value = []
  if (getFromDummy.value) {
    data = getDummyBoardItems(boardId.value);
    data = data.data
    //console.log("Get from Dummy " + JSON.stringify(data))
  }
  else {
    var qstr = getBoardItemsQuery(boardId.value, groupid);
    // console.log("Query " + qstr)
    var res = await mondayapi.api(qstr);
    //console.log("get boards from api" + JSON.stringify(res))
    data = res.data
  }
  try {
    if (data.boards.length == 0)
      console.log("No boards")

  }
  catch {
    data = {}
    console.log("Error from API " + JSON.stringify(data))
    data['boards'] = []

  }

  data.boards.forEach(board => {
    console.log("found " + board.items_page.items.length + " board items")
    board.items_page.items.forEach(item => {
      //console.log("item " + JSON.stringify(item))
      var bitem: boardItem = new boardItem();
      bitem.title = item.name
      bitem.id = item.id
      //console.log('New Item ' + bitem.title)
      bitem.updateFields(item.column_values);
      // get sub items
      try {
        if (item.subitems.length > 0) {
          item.subitems.forEach(subitem => {
            //console.log("Found sub item @@@@ " + JSON.stringify(subitem))
            var sbitem: boardItem = new boardItem();
            sbitem.title = subitem.name
            sbitem.id = subitem.id
            //console.log("new sub item " + sbitem.title)
            sbitem.updateFields(subitem.column_values);
            sbitem.updateStoryPoints();
            sbitem.checkForPlanningIssues();
            switch (sbitem.status) {
              case "Done":
                //console.log("Calling is date in sprint " + bitem.title + "  " +  JSON.stringify(sbitem.title) + " " + sbitem.DoneDate)
                if (isDateInSprint(sprintStart, sbitem.DoneDate, sprintLength))
                  bitem.subItems.push(sbitem)
                break;
              case "Removed":
                break;
              default:
                bitem.subItems.push(sbitem)
                break;
            }

            //console.log("created sub item $$$$$$ " + JSON.stringify(sbitem))
          });
        }
      }
      catch {

      }
      bitem.updateSubItemPoints();
      bitem.checkForPlanningIssues();
      itemsList.value.push(bitem)

    }); // end item loop

  }); // end board loop

}


function isDateInSprint(startDate: Date, checkDate: Date, sprintLen: number): boolean {
  //console.log("Is date in sprint start")
  var diff = getDaysdiff(checkDate, startDate)
  //console.log("Check date " + checkDate.toLocaleDateString() + " diff " + diff)
  //console.log("Is date in sprint end")
  if ((diff >= 0) && (diff <= sprintLen))
    return true
  else
    return false;

}

async function sprintChanged(item) {
  console.log("Sprint changed to " + JSON.stringify(item))
  let index = sprintDataStore.getsprintList().findIndex(x => x.boardid == boardId.value && x.name == item)
  console.log("index " + index)
  if (index != -1) {
    curSprint = sprintDataStore.getsprintList()[index]
    toolBarTitle.value = curSprint.name + " status"
    sprintDataStore.setCursprintConfig(curSprint)
    await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
  }


}

</script>

<style></style>
