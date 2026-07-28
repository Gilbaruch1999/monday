/* cspell:disable */
<template>

  <v-toolbar color="primary " :title="toolBarTitle">
    <v-btn class="mt-6" @click="$router.push('/burndown')">BurnDown</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintTable')">Sprint items</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintGoals')">Goals</v-btn>
    <v-btn class="mt-6" @click="$router.push('/breakdown')">BreakDown pie</v-btn>
    <v-btn class="mt-6" @click="$router.push('/kanban')">Kanban</v-btn>
    <v-btn class="mt-6" @click="$router.push('/history')">History</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintsCfg')">Board Config</v-btn>
    <v-btn class="mt-6" @click="$router.push('/retro')">Retrospective</v-btn>
    <v-btn v-if="false" class="mt-6" @click="$router.push('/retroOnLine')">Online Retrospective</v-btn>


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
    <v-menu class="mt-6" v-if="userStore.getOrgUser().is_admin">
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
      <v-img alt="Avatar" :src="currentUser.image_link"></v-img>

    </v-avatar>
  </v-toolbar>


</template>


<script setup lang='ts'>

import { inject, onMounted, ref, type Ref } from "vue";
import { MondayClientSdk } from "monday-sdk-js";

import { boardItem, initColumnMap, PlanningErrorsIndex } from "@/utils/boarditem";
import { getMondayDummyBoardItems, getMondayDummyContext } from "@/monday/mondayBoardItems";
import { getAllUsersQuery, getBoardItemsQuery, getAppConfigQuery, getBoardConfigQuery, getWriteLineQuery2, getStatusUpdateDate } from "@/monday/mondayQueries";
import { createDateFromLocalText, getDaysdiff } from "@/utils/utils";
import { useSprintData } from "../stores/sprintData";


import router from "@/router";
import { sprintHistory } from "@/utils/historyData";
import { getMondayDummyUsers } from "@/monday/mondayDummyUsers";
import { createUserList, userData } from "@/utils/users";
import { useUsersData } from "@/stores/usersData";
import { convertJSONtoSprint, Sprint } from "@/utils/sprintInfo";

import { boardConfig } from "@/utils/boardCfg";
import { getMondayDummyBoardConfig } from "@/monday/mondayDummyConfig";
import { getMondayDummyHistory, getMondayDummySprintsConfig } from "@/monday/mondayDummyStorage";



const mondayapi = inject('monday') as MondayClientSdk
const userStore = useUsersData();
let getFromDummy = ref(false);
let toolBarTitle = ref("")
//let boardId = ref("")
let bconfig: Ref<boardConfig> = ref(new boardConfig());
let curSprint: Sprint = new Sprint();

let groupid = ref("");
let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();
let usersList: Ref<userData[]> = ref([])
let currentUser: Ref<userData> = ref(new userData())



onMounted(async () => {
  console.log("Starting app version v152")
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
  //await writeTestDoc();
  await getBoardConfig(bconfig.value.boardId)
  await getUserList();
  await initData();
  console.log("Done toolbar on mounted ")

})


async function initData() {

  initColumnMap();
  await getHistoryData();
  curSprint = findCurrentSprint()
  if (curSprint.duration == -1) {
    console.log("No current sprint");
    router.push({ path: '/sprintsCfg' })
    return;
  }
  else {
    groupid.value = curSprint.groupid
    console.log("current sprint " + curSprint.name)
    console.log("current sprint start date " + curSprint.startDate.toLocaleDateString())
  }
  await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
  sprintDataStore.setsprintData(itemsList.value)
  toolBarTitle.value = sprintDataStore.getBoardCfg().displayName + " " + curSprint.name + " progress status"
  sprintDataStore.setCursprintConfig(curSprint)

  router.push({ path: '/burndown' })
}

async function getHistoryData() {
  var tmp: any;
  var history: sprintHistory[] = [];
  if (getFromDummy.value) {
    tmp = JSON.parse(getMondayDummyHistory())
    history = tmp as sprintHistory[]
  }
  else {
    var res1 = await mondayapi.storage.instance.getItem("historyInfo");
    history = JSON.parse(res1.data.value)
    //console.log("History from storage  " + JSON.stringify(history))
  }

  sprintDataStore.setHistory(history)
}




async function getBoardConfig(bid: string) {
  var sprintscfgMonday: any;
  var sprintList: Sprint[] = []

  console.log("Started get board config")

  if (getFromDummy.value) {
    sprintscfgMonday = getMondayDummyBoardConfig().data
    sprintList.push(...getMondayDummySprintsConfig())
    //console.log("Sprints list xxxx" + JSON.stringify(sprintList))
  }
  else {

    var qstr = getBoardConfigQuery(bid);
    var res = await mondayapi.api(qstr);
    //console.log("get board config from api" + JSON.stringify(res))
    sprintscfgMonday = res.data;

    var res1 = await mondayapi.storage.instance.getItem("boardInfo");
    //console.log("res1 " + JSON.stringify(res1))
    if ((res1.data.value === null)) {
      console.log("Board sprints configuration is empty")
      var tmp: never[] = []
      await mondayapi.storage.instance.setItem("boardInfo", JSON.stringify(tmp))

    }
    else {
      //console.log("Result from storage key " + JSON.stringify(res1.data.value))
      let arr = JSON.parse(res1.data.value)
      arr.forEach((element: any) => {
        //console.log("Sprint from storage key " + JSON.stringify(element))
        let sprint: Sprint = convertJSONtoSprint(element);
        //console.log("Sprint " + sprint.name + " start date " + sprint.startDate.toLocaleDateString())
        sprintList.push(sprint)
      });
    }
    //console.log("Sprints from storage " + JSON.stringify(sprintList))
  }
  console.log("Sprints config from storage" + JSON.stringify(sprintscfgMonday))
  sprintscfgMonday.boards.forEach((board: any) => {
    bconfig.value.name = board.name
    bconfig.value.displayName = board.name
    // to do change this code
    bconfig.value.displayName = "Dev 1"
    board.groups.forEach((group: any) => {
      let sprintx = createSprintFromBoardConfig(group, bid)
      let index = sprintList.findIndex(x => x.groupid == sprintx.groupid)
      if (index == -1)
        sprintList.unshift(sprintx)
      else {
        sprintList[index].orgName = group.title
      }
    });
  });
  //console.log("Bconfig is " + JSON.stringify(bconfig.value))
  // read board configuration from storage if it exists
  if (!getFromDummy.value) {
    res1 = await mondayapi.storage.instance.getItem("boardConfig");
    if ((res1.data.value === null)) {
      console.log("Board Configuration is empty")
    }
    else {
      console.log("Board config from storage " + JSON.stringify((res1.data.value)))
      bconfig.value.createBoardConfigFromStorage(JSON.parse(res1.data.value))
    }
  }

  console.log("board configuration " + JSON.stringify(bconfig.value))

  sprintDataStore.setsprintList(sprintList)
  sprintDataStore.setBoardCfg(bconfig.value)
}


async function getContext() {
  let context: any = {};
  if (getFromDummy.value) {
    context = getMondayDummyContext();
    bconfig.value.boardId = context['boardId']
  }
  else {

    //console.log("Get from API async ")
    var res = await mondayapi.get('context')
    //console.log("Res " + JSON.stringify(res))
    context = res.data;
    try {
      bconfig.value.boardId = context['boardId']
      console.log("Board id " + bconfig.value.boardId)
    }
    catch {

    }
  }
  currentUser.value.id = context['user'].id

  //console.log("board id " + boardId.value)
}

function findCurrentSprint(): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();
  let boardSprintTable = sprintDataStore.getsprintList()
  for (let index = 0; index < boardSprintTable.length; index++) {
    //console.log("Start date " +boardSprintTable[index].name + " " +  boardSprintTable[index].startDate.toLocaleDateString())
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
  newSprint.orgName = newSprint.name
  newSprint.nonWorkingDays = []
  newSprint.workingDays = newSprint.duration - newSprint.nonWorkingDays.length

  newSprint.startDate = createDateFromLocalText(sprintdata.startDate);
  newSprint.startDate.setHours(0, 0, 0, 0)
  sprintdata.nonWorkingDays.forEach((element: string) => {

    newSprint.nonWorkingDays.push(createDateFromLocalText(element))
  })
  newSprint.workingDays = newSprint.duration - newSprint.nonWorkingDays.length

  return newSprint

}


function createSprintFromBoardConfig(groupdata: any, bid: string): Sprint {

  let newSprint = new Sprint();

  newSprint.orgName = groupdata.title
  newSprint.name = groupdata.title
  newSprint.nonWorkingDays = []
  newSprint.boardid = bid
  newSprint.groupid = groupdata.id

  return newSprint

}

async function getBoardItems(sprintStart: Date, sprintLength: number, groupid: string) {
  var data: any;
  itemsList.value = []
  if (getFromDummy.value) {
    data = getMondayDummyBoardItems();
    data = data.data
    //console.log("Get from Dummy !!!!" + JSON.stringify(data))
  }
  else {
    var qstr = getBoardItemsQuery(bconfig.value.boardId, groupid);
    // console.log("Query " + qstr)
    var res = await mondayapi.api(qstr);
    //console.log("get boards from api" + JSON.stringify(res))
    data = res.data

  }
  try {
    if (data.items.length == 0)
      console.log("No items")

  }
  catch {
    data = {}
    console.log("Error from API " + JSON.stringify(data))
    data['items'] = []

  }
  itemsList.value = []
  //@ts-ignore
  console.log("Items " + JSON.stringify(data))
  data.items.forEach((item: { subitems: any[]; }) => {

  //  board.items_page.items.forEach((item: { name: string; id: string; column_values: any; subitems: any[]; }) => {

      var featureItem: boardItem = new boardItem(item);
      itemsList.value.push(featureItem)
      var rootid = featureItem.id


      item.subitems.forEach((subItemElement: any) => {
        var subitem: boardItem = new boardItem(subItemElement);
        // console.log("Item type " + subitem.type)
        if (subitem.type == "Task" || subitem.type == "Story")
          subitem.rootItemId = rootid
        itemsList.value.push(subitem);

      }); // end 2Nd level loop

    }); // end item loop


  // console.log("Items " + JSON.stringify(itemsList.value))
  console.log("Number of items " + itemsList.value.length)
  updateAllLevels()
}


function updateAllLevels() {
  for (let index = 0; index < itemsList.value.length; index++) {
    switch (itemsList.value[index].type) {
      case "Task":
        updateParents(index)
        break;
      case "Story":
        updateParents(index)
        itemsList.value[index].checkForPlanningIssues()
        break;
      case "Epic":
            updateParents(index)
        itemsList.value[index].checkForPlanningIssues()
        break;
      case "Feature":
    itemsList.value[index].checkForPlanningIssues()
    break;
  }
}

}

function updateParents(index: number) {

  itemsList.value[index].checkForPlanningIssues();
  var pindex = itemsList.value.findIndex(x => x.id == itemsList.value[index].parent)
  var rootIndex = itemsList.value.findIndex(x => x.id == itemsList.value[index].rootItemId)
  if (pindex != -1)
     itemsList.value[pindex].numOfSubitems++
  if (rootIndex != -1) {
    itemsList.value[index].domain = itemsList.value[rootIndex].domain
    itemsList.value[index].strategicCategory = itemsList.value[rootIndex].strategicCategory
  }
  // check if this is a  story taht does not have children
  if ( itemsList.value[index].type == "Story" )
  {
    if (itemsList.value.findIndex(x=>x.parent ==  itemsList.value[index].id) == -1)
    {
      // if have no childrent update story points
       itemsList.value[index].storyPoints =   itemsList.value[index].getPointsFromSize()

    }
  }
  while (pindex != -1) {
    var spoints = itemsList.value[index].storyPoints
    var donePoints = 0;
    if (itemsList.value[index].status == "Done") {
      if (isDateInSprint(curSprint.startDate, itemsList.value[index].DoneDate, curSprint.duration)) {
        donePoints = itemsList.value[index].storyPoints
        itemsList.value[index].doneStoryPoints = itemsList.value[index].storyPoints
      }
      else {
        spoints = 0;
      }
    }

    itemsList.value[pindex].storyPoints += spoints;
    itemsList.value[pindex].doneStoryPoints += donePoints;

    if (itemsList.value[index].planningCheck == false) {
      itemsList.value[pindex].setErrorIndication(PlanningErrorsIndex.subItemError)

    }
    pindex = itemsList.value.findIndex(x => x.id == itemsList.value[pindex].parent)

  }

}

function isDateInSprint(startDate: Date, checkDate: Date, sprintLen: number): boolean {
  var diff = getDaysdiff(checkDate, startDate)
  if ((diff >= 0) && (diff <= sprintLen))
    return true
  else
    return false;

}

async function sprintChanged(item: Sprint) {
  console.log("Sprint changed to " + JSON.stringify(item))
  //console.log("sprints " + JSON.stringify(sprintDataStore.getsprintList()))
  let index = sprintDataStore.getsprintList().findIndex(x => x.name == item.name)
  console.log("index " + index)
  if (index != -1) {
    curSprint = sprintDataStore.getsprintList()[index]
    toolBarTitle.value = curSprint.name + " status"
    await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
    sprintDataStore.setsprintData(itemsList.value)
    sprintDataStore.setCursprintConfig(curSprint)
  }
  toolBarTitle.value = sprintDataStore.getBoardCfg().displayName + " " + curSprint.name + " progress status"
}




async function getUserList() {
  var userinfo;
  if (getFromDummy.value) {
    userinfo = getMondayDummyUsers();

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
    userStore.setOrgUser(usersList.value[index]);

  }
  //console.log("Users " + JSON.stringify( usersList.value))
}


function userChanged(item: userData) {

  userStore.setCurrentUser(item)
  currentUser.value = item;
}


</script>

<style></style>
