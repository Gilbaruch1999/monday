<template>

  <v-toolbar color="primary " :title="toolBarTitle">
    <v-btn class="mt-6" @click="$router.push('/burndown')">BurnDown</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintTable')">Sprint items</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintGoals')">Goals</v-btn>
    <v-btn class="mt-6" @click="$router.push('/breakdown')">BreakDown pie</v-btn>
    <v-btn class="mt-6" @click="$router.push('/kanban')">Kanban</v-btn>
    <v-btn class="mt-6" @click="$router.push('/history')">History</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintsCfg')">Manage Sprints</v-btn>
  </v-toolbar>


</template>


<script setup lang='ts'>
import { inject, onMounted, ref, type Ref } from "vue";
import { MondayClientSdk } from "monday-sdk-js";

import { boardItem } from "@/utils/boarditem";
import { getDummyBoardItems, getDummyContext } from "@/utils/mondaydummy";
import { boardType, Sprint } from "@/utils/mondayparser";
import { getBoardItemsQuery } from "@/utils/queries";
import { getDaysdiff } from "@/utils/utils";
import { useSprintData } from "../stores/sprintData";


import router from "@/router";
import { getDummyStorage } from "@/utils/mondaystorage";
import { getDummySprintList } from "@/utils/dummysprints";

const mondayapi = inject('monday') as MondayClientSdk
let getFromDummy = ref(false);
let toolBarTitle = ref("")
let boardId = ref("")
let curSprint: Sprint;
let CurrentBoardType = ref("");
let groupid = ref("");
let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();


onMounted(async () => {
  console.log("Starting app version v58")
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
  await getBoardItems(curSprint.startDate, curSprint.duration);
  //console.log("items list " + JSON.stringify(itemsList.value))
  sprintDataStore.setsprintData(itemsList.value)
  //console.log("Sprint data " + JSON.stringify(sprintDataStore.getsprintData()))
  toolBarTitle.value = curSprint.name + " status"
  router.push({ path: '/burndown' })

})


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
  await InitSprintTable();
  sprintDataStore.getsprintList().filter(x => x.boardid == boardId.value );
  curSprint = findCurrentSprint( groupid.value)
  console.log("current sprint " + JSON.stringify(curSprint))
  sprintDataStore.setCursprintConfig(curSprint)
}

function findCurrentSprint(boardid: string ): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();
  let boardSprintTable = sprintDataStore.getsprintList().filter(x => x.boardid == boardId.value )
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
    let res = await mondayapi.storage.getItem("sprints")
    try {
      console.log("Sprints from DB results" + JSON.stringify(res))
      let tempdata = JSON.parse(res.data.value);
      sprintDataStore.setsprintList(tempdata)
    }
    catch {

    }

  }
  else {
    let tempdata: Sprint[] = getDummySprintList();
    sprintDataStore.setsprintList(tempdata)
  }
}


async function getBoardItems(sprintStart: Date, sprintLength: number) {
  var data;
  itemsList.value = []
  if (getFromDummy.value) {
    data = getDummyBoardItems(boardId.value);
    data = data.data
    //console.log("Get from Dummy " + JSON.stringify(data))
  }
  else {
    var qstr = getBoardItemsQuery(boardId.value, groupid.value);
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
  var diff = getDaysdiff(checkDate, startDate)
  //console.log("Check date " + checkDate.toLocaleDateString() + " diff " + diff)

  if ((diff >= 0) && (diff <= sprintLen))
    return true
  else
    return false;

}


</script>

<style></style>
