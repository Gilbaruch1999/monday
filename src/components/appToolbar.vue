/* cspell:disable */
<template>

  <v-toolbar color="primary " :title="toolBarTitle">
    <v-btn class="mt-6" @click="$router.push('/burndown')">BurnDown</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintTable')">Sprint items</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintGoals')">Goals</v-btn>
    <v-btn class="mt-6" @click="$router.push('/breakdown')">BreakDown pie</v-btn>
    <v-btn class="mt-6" @click="$router.push('/kanban')">Kanban</v-btn>
    <v-btn class="mt-6" @click="$router.push('/history')">History</v-btn>
    <v-btn class="mt-6" @click="$router.push('/sprintsCfg')">Sprints</v-btn>
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
// <v-btn class="mt-6" @click="$router.push('/retroOnLine')">On Line retro</v-btn>
import { inject, onMounted, ref, type Ref } from "vue";
import { MondayClientSdk } from "monday-sdk-js";

import { boardItem } from "@/utils/boarditem";
import { getMondayDummyBoardItems, getMondayDummyContext } from "@/monday/mondayBoardItems";
import { getAllUsersQuery, getBoardItemsQuery, getAppConfigQuery, getBoardConfigQuery, getWriteLineQuery, getWriteLineQuery1, getWriteLineQuery2 } from "@/monday/mondayQueries";
import { createDateFromLocalText, createDateFromText2, getDaysdiff } from "@/utils/utils";
import { useSprintData } from "../stores/sprintData";


import router from "@/router";
import { getMondayDummyBoardConfig, getMondayDummyConfig } from "@/monday/mondayDummyConfig";
import { historyGraphData, sprintHistory } from "@/utils/historyData";
import { getMondayDummyUsers } from "@/monday/mondayDummyUsers";
import { createUserList, userData } from "@/utils/users";
import { useUsersData } from "@/stores/usersData";
import { Sprint } from "@/utils/sprintInfo";
import { dummyReadItem } from "@/monday/mondayDummyStorage";
import { addLineOfTextToDoc } from "@/monday/mondayWriteDoc";


const mondayapi = inject('monday') as MondayClientSdk
const userStore = useUsersData();
let getFromDummy = ref(false);
let toolBarTitle = ref("")
let boardId = ref("")
let curSprint: Sprint = new Sprint();

let groupid = ref("");
let itemsList: Ref<boardItem[]> = ref([]);
const sprintDataStore = useSprintData();
let usersList: Ref<userData[]> = ref([])
let currentUser: Ref<userData> = ref(new userData())



onMounted(async () => {
  console.log("Starting app version v145")
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
  await getUserList();
  await initData();

})

async function writeTestDoc()
{

console.log("Writing to document !!!")
var tmp = getWriteLineQuery2("test 1 large title" , "large_title")
console.log("query " + tmp)
var res = await mondayapi.api(tmp);
console.log("Return from write doc " + JSON.stringify(res))



/*  let afterBlockId = "00c8f923-16a1-4052-8ba9-7701a4d7199c"
 const data = {
    type: "normal text", // or "large title", "quote", etc.
    content: {
      deltaFormat: [
        {
          insert: "New block content from SDK"
        }
      ]
    },
    afterBlockId
  };

 let res =  await mondayapi.execute("addDocBlock", data);
 console.log("Results from add line api " + JSON.stringify(res))
*/

  //await addLineOfTextToDoc(mondayapi , "00c8f923-16a1-4052-8ba9-7701a4d7199c")

}

async function initData() {
  var content;
  if (getFromDummy.value) {
    content = getMondayDummyConfig();
  }
  else {
    var docquery = getAppConfigQuery('5083213836')
    content = await mondayapi.api(docquery);
    //console.log("Doc content " + JSON.stringify(content))
  }

  //await parseConfiguration(content, boardId.value)
  await getBoardConfig(boardId.value)
  await getHistoryData(boardId.value)

  curSprint = findCurrentSprint(boardId.value)
  if (curSprint.duration == -1) {
    console.log("No current sprint");
    router.push({ path: '/sprintsCfg' })
    return;
  }
  groupid.value = curSprint.groupid
  console.log("current sprint " + JSON.stringify(curSprint))
  await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid);
  sprintDataStore.setsprintData(itemsList.value)

  toolBarTitle.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.name + " progress status"
  sprintDataStore.setCursprintConfig(curSprint)

  router.push({ path: '/burndown' })


}



async function getHistoryData(bid: string) {
  var tmp: any;
  var history: sprintHistory[] = [];
  if (getFromDummy.value) {
    tmp = JSON.parse(dummyReadItem("historyInfo"))
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
  var sprintscfgStorage: any
  var currentSprints: Sprint[] = []
  console.log("Started get board config")

  if (getFromDummy.value) {
    sprintscfgMonday = getMondayDummyBoardConfig();
    sprintscfgMonday = sprintscfgMonday.data
    sprintscfgStorage = JSON.parse(dummyReadItem("boardInfo"))

  }
  else {
    var qstr = getBoardConfigQuery(bid);
    //console.log("Query " + qstr)
    var res = await mondayapi.api(qstr);
    //console.log("get board config from api" + JSON.stringify(res))
    sprintscfgMonday = res.data;

    var res1 = await mondayapi.storage.instance.getItem("boardInfo");
    //console.log("res1 " + JSON.stringify(res1))
    if ((res1.data.value === null)) {
      console.log("Board configuration is empty")
      var tmp: never[] = []
      await mondayapi.storage.instance.setItem("boardInfo", JSON.stringify(tmp))
      sprintscfgStorage = []

    }
    else {
      //console.log("Result from storage key " + JSON.stringify(res1))
      sprintscfgStorage = JSON.parse(res1.data.value);
    }
  }
  // remove after debug
  if (sprintscfgStorage.length == 0) {
    sprintscfgMonday = getMondayDummyBoardConfig();
    sprintscfgMonday = sprintscfgMonday.data
    sprintscfgStorage = JSON.parse(dummyReadItem("boardInfo"))
  }
  sprintscfgStorage.forEach((sprint: any) => {
    var sprintx = createSprint(sprint)
    //console.log("Start Date YYYY " + sprintx.startDate)
    currentSprints.push(sprintx)

  });

  sprintscfgMonday.boards.forEach((board: any) => {
    board.groups.forEach((group: any) => {
      let sprintx = createSprintFromBoardConfig(group, bid)
      let index = currentSprints.findIndex(x => x.groupid == sprintx.groupid)
      if (index == -1)
        currentSprints.unshift(sprintx)
      else {
        currentSprints[index].orgName = group.title
      }
    });
  });

  //console.log("Sprints list xxx " + JSON.stringify(currentSprints))
  sprintDataStore.setsprintList(currentSprints)
}


async function getContext() {
  let context: any = {};
  if (getFromDummy.value) {
    context = getMondayDummyContext();
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
  //console.log("board id " + boardId.value)
}

function findCurrentSprint(boardid: string): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();
  let boardSprintTable = sprintDataStore.getsprintList().filter(x => x.boardid == boardid)
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
    data = getMondayDummyBoardItems(boardId.value);
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
  //@ts-ignore
  data.boards.forEach(board => {
    console.log("found " + board.items_page.items.length + " board items")
    board.items_page.items.forEach((item: { name: string; id: string; column_values: any; subitems: any[]; }) => {
      //console.log("item " + JSON.stringify(item.name))
      // console.log("sub items XXX " + JSON.stringify(item.subitems))
      var bitem: boardItem = new boardItem();
      bitem.title = item.name
      bitem.id = item.id
      bitem.parent = ""
      //console.log('New Item ' + bitem.title)
      bitem.updateFields(item.column_values);
      // get sub items
      try {
        if (item.subitems.length > 0) {
          //  console.log("num of subitems " + JSON.stringify(item.subitems.length))
          item.subitems.forEach(subitem => {
            //  console.log("Found sub item @@@@ " + JSON.stringify(subitem.name))
            var sbitem: boardItem = new boardItem();
            sbitem.title = subitem.name
            sbitem.id = subitem.id
            sbitem.parent = bitem.title
            //console.log("new sub item " + sbitem.title)
            sbitem.updateFields(subitem.column_values);

            sbitem.goalCategory = bitem.goalCategory
            sbitem.updateStoryPoints()
            sbitem.checkForPlanningIssues();

            switch (sbitem.status) {
              case "Done":
                // console.log("Calling is date in sprint " + bitem.title + "  " +  JSON.stringify(sbitem.title) + " " + sbitem.DoneDate)
                if (isDateInSprint(sprintStart, sbitem.DoneDate, sprintLength) || sbitem.DoneDate.getTime() == 0)
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
        console.log("Error in subitem")

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

async function sprintChanged(item: Sprint) {
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
  toolBarTitle.value = sprintDataStore.getTeamName(sprintDataStore.getBoardid()) + " Team " + curSprint.name + " progress status"
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
/*
async function parseConfiguration(data: any, boardId: string) {
  let sprintarr: Sprint[] = []
  let historyArr: historyData[] = []

  data.data.docs[0].blocks.forEach((element: { content: string; }) => {

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
  //sprintDataStore.setsprintList(sprintarr)
  //sprintDataStore.setHistory(historyArr)
  //console.log("History data " + JSON.stringify(sprintDataStore.getHistory()))

}
*/


</script>

<style></style>
