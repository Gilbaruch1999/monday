/* cspell:disable */
<template>

  <v-toolbar :class="vBtnClass" color="primary" :title="toolbarTitle">
    <v-btn :class="vBtnClass" @click="$router.push('/burndown')">BurnDown</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/sprintTable')">Sprint items</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/sprintGoals')">Goals</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/breakdown')">BreakDown pie</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/kanban')">Kanban</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/history')">History</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/sprintsCfg')">Board Config</v-btn>
    <v-btn :class="vBtnClass" @click="$router.push('/retro')">Retrospective</v-btn>

    <v-menu class="mt-6">
      <template #activator="{ props }">
        <v-btn :class="vBtnClass" color="white" v-bind="props">
          {{ curSprint.name }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in sprintDataStore.getsprintList()" :key="index">
          <v-list-item-title class="ma-2" @click="sprintChanged(item)"> {{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu v-if="userStore.getOrgUser().is_admin" class="mt-6">
      <template #activator="{ props }">
        <v-btn class="mt-6" color="white" v-bind="props">
          {{ currentUser.name }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in userStore.getUsers()" :key="index">
          <v-list-item-title class="ma-2" @click="userChanged(item)"> {{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-avatar class="mt-6" size="36px">
      <v-img alt="Avatar" :src="currentUser.image_link" />

    </v-avatar>
  </v-toolbar>

</template>

<script setup lang='ts'>

import type { sprintHistory } from '@/utils/historyData'
import type { MondayClientSdk } from 'monday-sdk-js'

import { inject, onMounted, ref, type Ref } from 'vue'
import { initFieldsMap } from '@/custom/snooze/fields-snooze'
import { isDoneState } from '@/custom/states'
import { getDummyIdsList, getMondayDummyBoardItems, getMondayDummyContext } from '@/monday/mondayBoardItems'
import { getMondayDummyBoardConfig } from '@/monday/mondayDummyConfig'
import { getMondayDummyHistory, getMondayDummySprintsConfig } from '@/monday/mondayDummyStorage'
import { getMondayDummyUsers } from '@/monday/mondayDummyUsers'
import { getAllUsersQuery, getBoardConfigQuery, getBoardItemsByIdQuery, getItemsIdyGroupQuery } from '@/monday/mondayQueries'
import router from '@/router'
import { useUsersData } from '@/stores/usersData'
import { boardConfig } from '@/utils/boardCfg'
import { boardItem, PlanningErrorsIndex } from '@/utils/boarditem'
import { convertJSONtoSprint, Sprint } from '@/utils/sprintInfo'
import { createUserList, userData } from '@/utils/users'
import { getDaysdiff } from '@/utils/utils'
import { useSprintData } from '../stores/sprintData'

const mondayapi = inject('monday') as MondayClientSdk
const userStore = useUsersData()
const getFromDummy = ref(false)
const toolbarTitle = ref('')
const bconfig: Ref<boardConfig> = ref(new boardConfig())
let curSprint: Sprint = new Sprint()

const groupid = ref('')
const itemsList: Ref<boardItem[]> = ref([])
const sprintDataStore = useSprintData()
const usersList: Ref<userData[]> = ref([])
const currentUser: Ref<userData> = ref(new userData())
const vBtnClass = 'mt-6 text-title-medium font-weight-bold'

onMounted(async () => {
  console.log('Starting app version v191')
  const res = await mondayapi.get('context')
  // console.log("Res " + JSON.stringify(res))
  try {
    // eslint-disable-next-line no-prototype-builtins
    if (res.hasOwnProperty('data')) {
      getFromDummy.value = false
    } else {
      console.log('No API')
      getFromDummy.value = true
    }
  } catch {
    console.log('use dummy data ')
    getFromDummy.value = true
  }
  await getContext()
  // await writeTestDoc();
  await getBoardConfig(bconfig.value.boardId)
  await getUserList()
  await initData()
  console.log('Done toolbar on mounted ')
})

async function initData() {
  initFieldsMap()
  await getHistoryData()
  curSprint = findCurrentSprint()
  if (curSprint.duration == -1) {
    console.log('No current sprint')
    router.push({ path: '/sprintsCfg' })
    return
  } else {
    groupid.value = curSprint.groupid
    console.log('current sprint ' + curSprint.name)
    console.log('current sprint start date ' + curSprint.startDate.toLocaleString())
  }
  await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid)
  sprintDataStore.setsprintData(itemsList.value)
  toolbarTitle.value = sprintDataStore.getBoardCfg().displayName + ' ' + curSprint.name + ' progress status'
  sprintDataStore.setCursprintConfig(curSprint)

  router.push({ path: '/burndown' })
}

async function getHistoryData() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let tmp: any
  let history: sprintHistory[]
  if (getFromDummy.value) {
    tmp = JSON.parse(getMondayDummyHistory())
    history = tmp as sprintHistory[]
    sprintDataStore.setHistory(history)
  } else {
    const res1 = await mondayapi.storage.instance.getItem('historyInfo')
    history = JSON.parse(res1.data.value)
    // console.log("History from storage  " + JSON.stringify(history))
    if (res1.data.value == null) {
      const tmphistory: sprintHistory[] = [
        { sprint: 'Sprint 35', velocity: 37, normVelocity: 37, predictability: 61 },
        { sprint: 'Sprint 36', velocity: 55, normVelocity: 55, predictability: 71 },
        { sprint: 'Sprint 37', velocity: 48, normVelocity: 48, predictability: 70 },
        { sprint: 'Sprint 38', velocity: 30, normVelocity: 30, predictability: 64 },
        { sprint: 'Sprint 39', velocity: 44, normVelocity: 44, predictability: 86 },
        { sprint: 'Sprint 40', velocity: 39, normVelocity: 39, predictability: 91 },
        { sprint: 'Sprint 41', velocity: 38, normVelocity: 38, predictability: 100 },
        { sprint: 'Sprint 42', velocity: 42, normVelocity: 42, predictability: 70 },
        { sprint: 'Sprint 43', velocity: 32, normVelocity: 32, predictability: 64 },
        { sprint: 'Sprint 44', velocity: 51, normVelocity: 51, predictability: 78 },
        { sprint: 'Sprint 45', velocity: 35, normVelocity: 35, predictability: 100 },
        { sprint: 'Sprint 46', velocity: 35, normVelocity: 35, predictability: 72 },

      ]
      sprintDataStore.setHistory(tmphistory)
    } else {
      sprintDataStore.setHistory(history)
    }
  }
}

async function getBoardConfig(bid: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sprintscfgMonday: any
  const sprintList: Sprint[] = []

  console.log('Started get board config')

  if (getFromDummy.value) {
    sprintscfgMonday = getMondayDummyBoardConfig().data
    sprintList.push(...getMondayDummySprintsConfig())
    // console.log("Sprints list xxxx" + JSON.stringify(sprintList))
  } else {
    const qstr = getBoardConfigQuery(bid)
    const res = await mondayapi.api(qstr)
    // console.log("get board config from api" + JSON.stringify(res))
    sprintscfgMonday = res.data

    const res1 = await mondayapi.storage.instance.getItem('boardInfo')
    // console.log("res1 " + JSON.stringify(res1))
    if ((res1.data.value === null)) {
      console.log('Board sprints configuration is empty')
      const tmp: never[] = []
      await mondayapi.storage.instance.setItem('boardInfo', JSON.stringify(tmp))
    } else {
      // console.log("Result from storage key " + JSON.stringify(res1.data.value))
      const arr = JSON.parse(res1.data.value)
      for (const element of arr) {
        // console.log("Sprint from storage key " + JSON.stringify(element))
        const sprint: Sprint = convertJSONtoSprint(element)
        // console.log("Sprint " + sprint.name + " start date " + sprint.startDate.toLocaleDateString())
        sprintList.push(sprint)
      }
    }
    // console.log("Sprints from storage " + JSON.stringify(sprintList))
  }
  // console.log("Sprints config from storage" + JSON.stringify(sprintscfgMonday))
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sprintscfgMonday.boards.forEach((board: any) => {
    bconfig.value.name = board.name
    bconfig.value.displayName = board.name
    // to do change this code
    bconfig.value.displayName = 'Dev 1'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    board.groups.forEach((group: any) => {
      const sprintx = createSprintFromBoardConfig(group, bid)
      const index = sprintList.findIndex(x => x.groupid == sprintx.groupid)
      if (index == -1)
        sprintList.unshift(sprintx)
      else {
        sprintList[index].orgName = group.title
      }
    })
  })
  // console.log("Bconfig is " + JSON.stringify(bconfig.value))
  // read board configuration from storage if it exists
  if (!getFromDummy.value) {
    const res1 = await mondayapi.storage.instance.getItem('boardConfig')
    if ((res1.data.value === null)) {
      console.log('Board Configuration is empty')
    } else {
      console.log('Board config from storage ' + JSON.stringify((res1.data.value)))
      bconfig.value.createBoardConfigFromStorage(JSON.parse(res1.data.value))
    }
  }

  console.log('board configuration ' + JSON.stringify(bconfig.value))

  sprintDataStore.setsprintList(sprintList)
  sprintDataStore.setBoardCfg(bconfig.value)
}

async function getContext() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let context: any
  if (getFromDummy.value) {
    context = getMondayDummyContext()
    bconfig.value.boardId = context['boardId']
  } else {
    // console.log("Get from API async ")
    const res = await mondayapi.get('context')
    // console.log("Res " + JSON.stringify(res))
    context = res.data
    try {
      bconfig.value.boardId = context['boardId']
      console.log('Board id ' + bconfig.value.boardId)
    } catch { /* empty */ }
  }
  currentUser.value.id = context['user'].id

  // console.log("board id " + boardId.value)
}

function findCurrentSprint(): Sprint {
  let ret_val = new Sprint()
  const curDate = new Date()
  const boardSprintTable = sprintDataStore.getsprintList()
  for (const element of boardSprintTable) {
    // console.log("Start date " +boardSprintTable[index].name + " " +  boardSprintTable[index].startDate.toLocaleDateString())
    const diff = getDaysdiff(curDate, element.startDate)
    if (diff >= 0 && diff < element.duration) {
      ret_val = element
    }
  }
  return ret_val
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createSprintFromBoardConfig(groupdata: any, bid: string): Sprint {
  const newSprint = new Sprint()

  newSprint.startDate = new Date()
  newSprint.duration = 14
  newSprint.orgName = groupdata.title
  newSprint.name = groupdata.title
  newSprint.nonWorkingDays = []
  newSprint.boardid = bid
  newSprint.groupid = groupdata.id

  return newSprint
}

async function getBoardItems(sprintStart: Date, sprintLength: number, groupid: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let boarddata: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let idsdata: any
  const ids: string[] = []
  itemsList.value = []
  if (getFromDummy.value) {
    boarddata = getMondayDummyBoardItems()
    idsdata = getDummyIdsList()
    boarddata = boarddata.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    idsdata.data.boards.forEach((board: { items_page: { items: { id: any }[] } }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      board.items_page.items.forEach((item: { id: any }) => {
        ids.push(item.id)
      })
    })
    // console.log("got dummy items " + JSON.stringify(boarddata))
    // boarddata = boarddata.boards[0].items_page
  } else {
    let qstr = getItemsIdyGroupQuery(groupid)
    // console.log("Query " + qstr)
    idsdata = await mondayapi.api(qstr)
    // console.log("Return from get board items " + JSON.stringify(idsdata))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    idsdata.data.boards.forEach((board: { items_page: { items: { id: any }[] } }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      board.items_page.items.forEach((item: { id: any }) => {
        ids.push(item.id)
      })
    })
    qstr = getBoardItemsByIdQuery(ids)
    const res = await mondayapi.api(qstr)
    // console.log("get boards from api" + JSON.stringify(res))
    boarddata = res.data
  }
  try {
    if (boarddata.items.length === 0)
      console.log('No items')
  } catch {
    boarddata = {}
    console.log('Error from API ' + JSON.stringify(boarddata))
    boarddata['items'] = []
  }
  itemsList.value = []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  boarddata.items.forEach((item: { subitems: any[] }) => {
    const featureItem: boardItem = new boardItem(item)
    if (featureItem.type == 'Feature') {
      const tmpidx = ids.findIndex(x => x == featureItem.id)
      if (tmpidx != -1) {
        // console.log("Setting sort order of item " + featureItem.title + " to " + tmpidx)
        featureItem.sortOrder = tmpidx
      }
    }
    itemsList.value.push(featureItem)
    const rootid = featureItem.id

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item.subitems.forEach((subItemElement: any) => {
      const subitem: boardItem = new boardItem(subItemElement)
      // console.log("Item type " + subitem.type)
      if (subitem.type == 'Task' || subitem.type == 'Story') {
        subitem.rootItemId = rootid
        subitem.goalCategory = featureItem.goalCategory
      }
      itemsList.value.push(subitem)
    }) // end 2Nd level loop
  }) // end item loop

  // console.log("Items " + JSON.stringify(itemsList.value))
  console.log('Number of items ' + itemsList.value.length)
  updateLevel('Task')
  updateLevel('Story')
  updateLevel('Epic')
  updateLevel('Feature')
  // updateAllLevels()
  // checkStorySize()
}

function updateLevel(type: string) {
  const arr = itemsList.value.filter(x => x.type == type)
  for (const element of arr) {
    switch (element.type) {
      case 'Task': {
        break
      }
      case 'Story':
      case 'Epic':
      case 'Feature': {
        if (element.numOfSubitems == 0)
          element.storyPoints = element.getPointsFromSize()
        break
      }
    }
    element.checkForPlanningIssues()
    const index = itemsList.value.findIndex(x => x.id == element.id)
    if (index != -1)
      updateParents(index)
  }
}

function updateParents(index: number) {
  const pindex = itemsList.value.findIndex(x => x.id == itemsList.value[index].parent)
  // console.log("pindex " +  pindex)
  const rootIndex = itemsList.value.findIndex(x => x.id == itemsList.value[index].rootItemId)
  if (rootIndex != -1) {
    itemsList.value[index].domain = itemsList.value[rootIndex].domain
    itemsList.value[index].strategicCategory = itemsList.value[rootIndex].strategicCategory
  }
  itemsList.value[index].checkForPlanningIssues()
  if (pindex != -1) {
    itemsList.value[pindex].numOfSubitems++
    let spoints = itemsList.value[index].storyPoints
    let donePoints = 0
    if (isDoneState(itemsList.value[index].status)) {
      // console.log("Done item " + JSON.stringify(itemsList.value[index]))
      if (isDateInSprint(curSprint.startDate, itemsList.value[index].DoneDate, curSprint.duration)) {
        donePoints = itemsList.value[index].storyPoints
        itemsList.value[index].doneStoryPoints = itemsList.value[index].storyPoints
      } else {
        spoints = 0;
        itemsList.value[index].doneInCurrentSprint = false;
      }
    }

    itemsList.value[pindex].storyPoints += spoints
    itemsList.value[pindex].doneStoryPoints += donePoints

    if (itemsList.value[index].planningCheck == false) {
      itemsList.value[pindex].setErrorIndication(PlanningErrorsIndex.subItemError)
    }
  }
  // pindex = itemsList.value.findIndex(x => x.id == itemsList.value[pindex].parent)

  // }
}

function isDateInSprint(startDate: Date, checkDate: Date, sprintLen: number): boolean {
  const diff = getDaysdiff(checkDate, startDate)
  return (diff >= 0) && (diff <= sprintLen) ? true : false
}

async function sprintChanged(item: Sprint) {
  console.log('Sprint changed to ' + JSON.stringify(item))
  // console.log("sprints " + JSON.stringify(sprintDataStore.getsprintList()))
  const index = sprintDataStore.getsprintList().findIndex(x => x.name == item.name)
  console.log('index ' + index)
  if (index != -1) {
    curSprint = sprintDataStore.getsprintList()[index]
    toolbarTitle.value = curSprint.name + ' status'
    await getBoardItems(curSprint.startDate, curSprint.duration, curSprint.groupid)
    sprintDataStore.setsprintData(itemsList.value)
    sprintDataStore.setCursprintConfig(curSprint)
  }
  toolbarTitle.value = sprintDataStore.getBoardCfg().displayName + ' ' + curSprint.name + ' progress status'
}

async function getUserList() {
  let userinfo
  if (getFromDummy.value) {
    userinfo = getMondayDummyUsers()
  } else {
    const query = getAllUsersQuery()
    userinfo = await mondayapi.api(query)
  }
  usersList.value = createUserList(userinfo)
  userStore.setUsers(usersList.value)
  const index = usersList.value.findIndex(x => x.id == currentUser.value.id)
  if (index != -1) {
    currentUser.value = { ...usersList.value[index] }
    userStore.setCurrentUser(usersList.value[index])
    userStore.setOrgUser(usersList.value[index])
  }
  // console.log("Users " + JSON.stringify( usersList.value))
}

function userChanged(item: userData) {
  userStore.setCurrentUser(item)
  currentUser.value = item
}

</script>

<style></style>
