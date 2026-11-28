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
      <v-img alt="Avatar" :src="currentUser.image_link"  />

    </v-avatar>
  </v-toolbar>

</template>

<script setup lang='ts'>

import type { sprintHistory } from '@/utils/historyData'
import type { MondayClientSdk } from 'monday-sdk-js'

import { inject, onMounted, ref, type Ref } from 'vue'
import { initFieldsMap } from '@/custom/fields'
import { isDoneState } from '@/custom/states'
import { getMondayDummyHistory  } from '@/monday/mondayDummyStorage'
import router from '@/router'
import { useUsersData } from '@/stores/usersData'
import { appContext, boardConfig } from '@/utils/boardCfg'
import { boardItem, PlanningErrorsIndex } from '@/utils/boarditem'
import { Sprint } from '@/utils/sprintInfo'
import { userData } from '@/utils/users'
import { getDaysdiff } from '@/utils/utils'
import { useSprintData } from '../stores/sprintData'
import { getAppContext, getAppUserList, getBoardConfiguration, getItemsFromApp, getSprintConfiguration } from '@/custom/getInfoFromApp'

const mondayapi = inject('monday') as MondayClientSdk
const userStore = useUsersData()
const getFromDummy = ref(false)
const toolbarTitle = ref('')
const bconfig: Ref<boardConfig> = ref(new boardConfig())

let curSprint: Sprint = new Sprint()

const itemsList: Ref<boardItem[]> = ref([])
const sprintDataStore = useSprintData()
const usersList: Ref<userData[]> = ref([])
const currentUser: Ref<userData> = ref(new userData())
const vBtnClass = 'mt-6 text-title-medium font-weight-bold'

onMounted(async () => {

  await initFieldsMap()
  await getHistoryData()
  const appContextInfo = await getAppContext()
  usersList.value =  await getAppUserList()
  const sprints = await getSprintConfiguration(appContextInfo)
  sprintDataStore.setsprintList(sprints)
  //console.log("Got sprints " + JSON.stringify(sprints))
  bconfig.value = await getBoardConfiguration(appContextInfo)
  appContextInfo.boardDisplayName = bconfig.value.displayName
  appContextInfo.boardName = bconfig.value.name

  curSprint = findCurrentSprint()
  console.log("current sprint " + JSON.stringify(curSprint))
  if (curSprint.duration == -1) {
    console.log('No current sprint')
    router.push({ path: '/sprintsCfg' })
    return
  }
  //console.log("App context " + JSON.stringify(appContextInfo))
  sprintDataStore.setAppContext(appContextInfo)
  await getAllSprintItems(curSprint)

  console.log('current sprint ' + curSprint.name)
  console.log('current sprint start date ' + curSprint.startDate.toLocaleString())
  updateCurrentUser(appContextInfo)
  sprintDataStore.setCursprintConfig(curSprint)
  router.push({ path: '/burndown' })

})


async function getAllSprintItems(SprintInfo : Sprint )
{
  itemsList.value = [...await getItemsFromApp(SprintInfo)]
  updateLevel('Story')
  updateLevel('Epic')
  updateLevel('Feature')
  sprintDataStore.setsprintData(itemsList.value)

}

// todo check if it works and remove
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

// todo check and see if this still make sense
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

}

// todo move to util
function isDateInSprint(startDate: Date, checkDate: Date, sprintLen: number): boolean {
  const diff = getDaysdiff(checkDate, startDate)
  return (diff >= 0) && (diff <= sprintLen) ? true : false
}

async function sprintChanged(item: Sprint) {
  console.log('Sprint changed to ' + JSON.stringify(item))
  // console.log("sprints " + JSON.stringify(sprintDataStore.getsprintList()))
  const index = sprintDataStore.getsprintList().findIndex(x => x.name == item.name)
  if (index != -1) {
    curSprint = sprintDataStore.getsprintList()[index]
    toolbarTitle.value = curSprint.name + ' status'
    await getAllSprintItems(curSprint)
    sprintDataStore.setsprintData(itemsList.value)
    sprintDataStore.setCursprintConfig(curSprint)
  }
  toolbarTitle.value = sprintDataStore.getAppContext().boardDisplayName + ' ' + curSprint.name + ' progress status'
}

function updateCurrentUser(context : appContext )
{
 // console.log('update current user context ' + JSON.stringify(context) )
 //console.log('update current user list ' + JSON.stringify(usersList.value) )
  const index = usersList.value.findIndex(x => x.id == context.currentUser.id)
  if (index != -1) {
    currentUser.value = { ...usersList.value[index] }
    userStore.setCurrentUser(usersList.value[index])
    userStore.setOrgUser(usersList.value[index])
  }
}


function userChanged(item: userData) {
  userStore.setCurrentUser(item)
  currentUser.value = item
}



</script>

<style></style>
