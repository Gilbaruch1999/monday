<template>

  <v-toolbar color="primary " :title="toolBarTitle">
    <v-btn class="mt-6" @click="$router.push('/burndown')">BurnDown</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintTable')">Sprint items</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintGoals')">Goals</v-btn>
    <v-btn class="mt-6" @click="$router.push('/breakdown')">BreakDown pie</v-btn>
    <v-btn class="mt-6" @click="$router.push('/kanban')">Kanban</v-btn>
    <v-btn class="mt-6" @click="$router.push('/history')">History</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintsCfg')">View Sprints</v-btn>
    <v-btn class="mt-6" @click="reloadData()">Reload Data</v-btn>
    <v-menu class="mt-6">
      <template v-slot:activator="{ props }">
        <v-btn class="mt-6" color="white" light v-bind="props">
          {{ curSprint.name }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in sprintDataStore.getsprintList()" :key="index">
          <v-list-item-title @click="sprintChanged(item)" class="ma-2"> {{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu class="mt-6" v-if="getFromDummy == true">
      <template v-slot:activator="{ props }">
        <v-btn class="mt-6" color="white" light v-bind="props">
          {{ boardId }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in boardids" :key="index">
          <v-list-item-title @click="boardIdChanged(item)" class="ma-2"> {{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     <v-menu class="mt-6" v-if="getFromDummy == true || currentUser.is_admin">
      <template v-slot:activator="{ props }">
        <v-btn class="mt-6" color="white" light v-bind="props">
          {{ currentUser.name }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in userStore.getUsers()" :key="index">
          <v-list-item-title @click="userChanged(item)" class="ma-2"> {{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-avatar class="mt-6" size="36px">
      <v-img alt="Avatar"
        :src="currentUser.image_link"></v-img>

    </v-avatar>
  </v-toolbar>


</template>


<script setup lang='ts'>
import { inject, onMounted, ref, type Ref } from "vue";
import { MondayClientSdk } from "monday-sdk-js";

import { boardItem } from "@/utils/boarditem";
import { getDummyBoardItems, getDummyContext } from "@/utils/mondaydummy";
import { Sprint } from "@/utils/mondayparser";
import { getAllUsersQuery, getBoardItemsQuery, getDocContentQuery } from "@/utils/queries";
import { createDateFromLocalText, createDateFromText2, getDaysdiff } from "@/utils/utils";
import { useSprintData } from "../stores/sprintData";


import router from "@/router";
import { getDummyDocContent } from "@/utils/docsdummy";
import { historyData } from "@/utils/common";
import { getDummyUsers } from "@/utils/dummyusers";
import { createUserList, userData } from "@/utils/users";
import { useUsersData } from "@/stores/usersData";


const mondayapi = inject('monday') as MondayClientSdk
const userStore = useUsersData();
let getFromDummy = ref(false);
let toolBarTitle = ref("")
let boardId = ref("")
let curSprint: Sprint = new Sprint();

let groupid = ref("");
let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();
let boardids = ["1647137427", "5048014529"]
let usersList: Ref<userData[]> = ref([])
let currentUser : Ref<userData> = ref(new userData())
//let sprintNames: Ref<string[]> = ref([])


onMounted(async () => {
  console.log("Starting app version v112")
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
  await getUserList();
  await initData();
})

async function initData() {
  var content;
  if (getFromDummy.value) {
    content = getDummyDocContent();
  }
  else {
    var docquery = getDocContentQuery('5083213836')
    content = await mondayapi.api(docquery);
    //console.log("Doc content " + JSON.stringify(content))
  }

  await parseConfiguration(content, boardId.value)
  curSprint = findCurrentSprint(boardId.value)
  groupid.value = curSprint.groupid
  console.log("current sprint " + JSON.stringify(curSprint))
  await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
  sprintDataStore.setsprintData(itemsList.value)
  toolBarTitle.value =sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.name + " progress status"
  sprintDataStore.setCursprintConfig(curSprint)
  router.push({ path: '/burndown' })

}


async function reloadData() {

  itemsList.value = []
  await initData()

}

async function getContext() {
  let context = {};
  if (getFromDummy.value) {
    context = getDummyContext();
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
  currentUser.value.id = context['user'].id
  sprintDataStore.setBoardid(boardId.value)
  console.log("board id " + boardId.value)
}

function findCurrentSprint(boardid: string): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();
  let boardSprintTable = sprintDataStore.getsprintList().filter(x => x.boardid == boardid)
  for (let index = 0; index < boardSprintTable.length; index++) {
    var diff = getDaysdiff(curDate, boardSprintTable[index].startDate);
    if (diff >= 0 && diff < boardSprintTable[index].duration) {
      ret_val = boardSprintTable[index];
    }
  }
  return ret_val;
}



function createSprint(sprintdata: any): Sprint {

  let newSprint = new Sprint();
  newSprint = { ...sprintdata };
  newSprint.nonWorkingDays = []
  newSprint.workingDays = newSprint.duration - newSprint.nonWorkingDays.length

  newSprint.startDate = createDateFromLocalText(sprintdata.startDate);
  newSprint.startDate.setHours(0, 0, 0, 0)
  sprintdata.nonWorkingDays.forEach(element => {

    newSprint.nonWorkingDays.push(createDateFromLocalText(element))
  })
  newSprint.workingDays = newSprint.duration - newSprint.nonWorkingDays.length

  return newSprint

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
    //console.log("found " + board.items_page.items.length + " board items")
    board.items_page.items.forEach(item => {
      //console.log("item " + JSON.stringify(item))
      var bitem: boardItem = new boardItem();
      bitem.title = item.name
      bitem.id = item.id
      bitem.parent = ""
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
            sbitem.parent = bitem.title
            //console.log("new sub item " + sbitem.title)
            sbitem.updateFields(subitem.column_values);
            sbitem.goalCategory = bitem.goalCategory
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
  var diff = getDaysdiff(checkDate, startDate)
  if ((diff >= 0) && (diff <= sprintLen))
    return true
  else
    return false;

}

async function sprintChanged(item) {
  console.log("Sprint changed to " + JSON.stringify(item))
  //console.log("sprints " + JSON.stringify(sprintDataStore.getsprintList()))
  let index = sprintDataStore.getsprintList().findIndex(x => x.boardid == boardId.value && x.name == item.name)
  console.log("index " + index)
  if (index != -1) {
    curSprint = sprintDataStore.getsprintList()[index]
    toolBarTitle.value = curSprint.name + " status"
    await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
    sprintDataStore.setsprintData(itemsList.value)
    sprintDataStore.setCursprintConfig(curSprint)
  }
    toolBarTitle.value =sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.name + " progress status"
}

function boardIdChanged(item) {
  //console.log("VVVV" +  JSON.stringify(item))
  boardId.value = item
  useSprintData().setBoardid(boardId.value)
  initData();

}



async function getUserList() {
  var userinfo;
  if (getFromDummy.value) {
    userinfo = getDummyUsers();

  }
  else {
    let query = getAllUsersQuery()
    userinfo = await mondayapi.api(query)

  }
  usersList.value = createUserList(userinfo);
  userStore.setUsers(usersList.value)
  let index = usersList.value.findIndex(x => x.id == currentUser.value.id)
  if (index != -1) {
    currentUser.value = { ...usersList.value[index] }
    userStore.setCurrentUser(usersList.value[index])
  }
  //console.log("Users " + JSON.stringify( usersList.value))
}


function userChanged(item) {

  userStore.setCurrentUser(item)
  currentUser.value = item;
}

function parseConfiguration(data: any, boardId: string) {
  let sprintarr: Sprint[] = []
  let historyArr: historyData[] = []
  data.data.docs[0].blocks.forEach(element => {

    //console.log("Block " + JSON.stringify(element.content))
    try {
      //console.log("parsing element " + JSON.stringify(element.content))
      if (JSON.stringify(element.content).includes("groupid")) {
        let tmp = JSON.parse(element.content)
        //console.log("element data tmp  " + JSON.stringify(tmp))
        let sprint = JSON.parse(tmp.deltaFormat[0].insert)
        let newsprint = createSprint(sprint);
        if (newsprint.boardid == boardId) {
          //console.log("new Sprint is xxx" + JSON.stringify(newsprint))
          sprintarr.push(newsprint)
        }
      }
      if (JSON.stringify(element.content).includes("dataLabels")) {
        let tmp1 = JSON.parse(element.content)
        let history: historyData = JSON.parse(tmp1.deltaFormat[0].insert)
        //console.log("History data  " + JSON.stringify(history))
        if (history.boardid == boardId) {
          historyArr.push(history)
        }

      }
    }


    catch (e) {
      console.log("On catch error is " + e)

    }
  });
  sprintDataStore.setsprintList(sprintarr)
  sprintDataStore.setHistory(historyArr)
  //console.log("History data " + JSON.stringify(sprintDataStore.getHistory()))

}

</script>

<style></style>
