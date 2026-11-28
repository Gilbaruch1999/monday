/* cspell:disable */
<template>
  <v-container fluid>

    <v-card :title="'Edit board Configuration ' + appContextInfo.boardDisplayName">
      <v-form>
        <v-row>
          <v-text-field v-model="appContextInfo.boardId" class="font-weight-bold" disabled label='Board Id'> </v-text-field>
          <v-text-field v-model="appContextInfo.boardDisplayName" class="font-weight-bold" disabled label='Board Name'> </v-text-field>
          <v-text-field v-model="appContextInfo.boardName" class="font-weight-bold" label='Board Display Name'
            @update:model-value="nameChangeCliked()"> </v-text-field>
        </v-row>
      </v-form>
      <template #actions>
        <v-btn :disabled="!boardChanged" class="ms-auto bg-orange" text="Update" @click="updateBoardConfig()"></v-btn>
        <v-btn class="ms-auto" text="Cancel" @click="cancelUpdateBoardCfg()"></v-btn>
      </template>
    </v-card>

    <v-data-table items-per-page="60" class="datatable" hide-default-footer density="compact" item-key="name"
      :headers="sprintHeaders" :items="sprintsList" :row-props="getRowProps">
      <template #item.startDate="{ item }">
        {{ item.startDate.toLocaleDateString() }}
      </template>
      <template #item.nonWorkingDays="{ item }">
        {{ dateArraytoString(item.nonWorkingDays) }}
      </template>
      <template #item.type="{ item }">
        {{ sprintType[item.type] }}
      </template>
      <template #item.actions="{ item }">
        <v-icon :disabled="!manageSprints" size="small" color="blue" class="mr-2" @click="editSprint(item)">
          mdi-pencil
        </v-icon>
        <v-icon :disabled="!manageSprints" size="small" color="red" class="mr-2" @click="deleteSprint(item)">
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>
    <div align="center">
      <v-btn v-if="manageSprints" :disabled="updateRequired == false" color="orange" class="mr-2 mt-4"
        @click="updateSprints()">Save </v-btn>
      <v-btn class="mr-2 mt-4" color="orange"  @click="manageSprints = true">{{ managBtnHeader }}</v-btn>
    </div>
  </v-container>
  <v-dialog v-model="dialog" width="50%">
    <v-card :title="'Edit Sprint ' + sprintsList[editIndex].name">
      <v-form>
        <v-row>
          <v-text-field v-model="sprintsList[editIndex].name" class="ma-4" label='Sprint Name'> </v-text-field>
          <v-text-field v-model="sprintsList[editIndex].boardid" class="ma-4" disabled label='boardid'> </v-text-field>
          <v-text-field v-model="sprintsList[editIndex].groupid" class="ma-4" label='Group id'> </v-text-field>
          <v-menu>
            <template #activator="{ props }">
              <v-text-field v-model="sprintType[sprintsList[editIndex].type]" class="ma-4" v-bind="props" label='type'>
              </v-text-field>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in Object.keys(sprintType).filter(key => isNaN(Number(key)))"
                :key="index">
                <v-list-item-title> {{ sprintType[index] }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
        <v-row>
          <v-date-input v-model="sprintsList[editIndex].startDate" input-format="dd.mm.yyyy" max-width="450px"
            class="ma-4" label='Start Day'></v-date-input>
          <v-text-field v-model="sprintsList[editIndex].duration" class="ma-4" max-width="150px" label='Duration'>
          </v-text-field>
        </v-row>
        <v-card class="bg-blue-lighten-4">
          <h2 class="ma-4">None working days</h2>
          <v-date-input v-for="(item, index) in sprintsList[editIndex].nonWorkingDays" :key="index"
            v-model="sprintsList[editIndex].nonWorkingDays[index]" input-format="dd.mm.yyyy" class="ma-4"
            label='Non working days'>
          </v-date-input>
          <v-row>
            <v-btn class="ma-4" color="orange" @click="populateNonWorkingDays()"> Populate </v-btn>
            <v-btn class="ma-4" color="orange" @click="addNonWorkingDay()"> Add </v-btn>
          </v-row>
        </v-card>
      </v-form>
      <template #actions>
        <v-btn color="orange" class="ms-auto" text="Update" @click="UpdateSprintItem()"></v-btn>
        <v-btn class="ms-auto" text="Cancel" @click="cancelUpdateSprintItem()"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup lang='ts'>



import { inject, onMounted, ref, type Ref } from "vue";
import { useSprintData } from "../stores/sprintData";
import { Sprint, sprintType } from "@/utils/sprintInfo";
import { addDays } from "@/utils/utils";
import { MondayClientSdk } from "monday-sdk-js";
import { appContext, boardConfig  } from "@/utils/boardCfg";


const mondayapi = inject('monday') as MondayClientSdk
const sprintsList: Ref<Sprint[]> = ref([])
const editIndex = ref(0)
const oldSprintData: Ref<Sprint> = ref(new Sprint())
const sprintDataStore = useSprintData();
const manageSprints = ref(false)
const managBtnHeader = ref("Edit")
const dialog = ref(false)
const updateRequired = ref(false)
const appContextInfo : Ref<appContext> = ref(new appContext())
const boardCfg : Ref<boardConfig> =  ref(new boardConfig())
const boardChanged = ref(false)




const sprintHeaders = [

  { title: 'Actions', key: 'actions', sortable: false }, // Action Column
  { title: 'Display Name', key: 'name' },
  { title: 'Original Name', key: 'orgName' },
  { title: 'Sprint type', key: 'type' },
  { title: 'Start Date', key: 'startDate' },
  { title: 'Duration', key: "duration" },
  { title: "Board id", key: "boardid" },
  { title: "Group id", key: "groupid" },
  { title: "Working days", key: "workingDays" },
  { title: "Non working days", key: "nonWorkingDays" },

]


onMounted(async () => {
  readAppContext();
  readSprintData();

})

function readSprintData() {
  sprintsList.value = []
  sprintDataStore.getsprintList().forEach(element => {
    sprintsList.value.push({ ...element })
  });

}

function readAppContext() {
  appContextInfo.value = sprintDataStore.getAppContext()
  boardCfg.value.boardId = appContextInfo.value.boardId.toString()
  boardCfg.value.displayName = appContextInfo.value.boardDisplayName
  boardCfg.value.name = appContextInfo.value.boardName

}

function editSprint(item: Sprint) {
  //console.log("item " + JSON.stringify(item))
  const index = sprintsList.value.findIndex(x => x.groupid == item.groupid)
  if (index != -1) {
    editIndex.value = index
    oldSprintData.value = { ...sprintsList.value[index] }
  }
  dialog.value = true
}

function deleteSprint(item: Sprint) {
  //console.log(" XXX " + JSON.stringify(idx))
  const index = sprintsList.value.findIndex(x => x.groupid == item.groupid)
  if (index != -1) {
    sprintsList.value.splice(index, 1)
    updateRequired.value = true
  }

}

function cancelUpdateSprintItem() {
  //console.log("Cancel update")
  sprintsList.value[editIndex.value] = { ...oldSprintData.value };
  //console.log("BBB " + sprintDataStore.getsprintList()[editIndex.value].name)
  dialog.value = false
}


function cancelUpdateBoardCfg() {
  readAppContext();
  boardChanged.value = false

}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getRowProps(sprintitem: any) {
  let ret_val = {}
  //console.log("Sprint item group " + JSON.stringify(sprintitem.item.groupid))

  if (sprintitem.item.groupid == sprintDataStore.getCursprintConfig().groupid) {
    ret_val = { class: 'done_bg' }
  }

  return ret_val
}

async function updateSprints() {
  let tmp: Sprint[] = [...sprintsList.value]
  tmp = tmp.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
  sprintDataStore.setsprintList(tmp)
  await mondayapi.storage.instance.setItem("boardInfo", JSON.stringify(tmp))
  //console.log("save to store results " + JSON.stringify(res))

  updateRequired.value = false;
}

function UpdateSprintItem() {
  dialog.value = false
  sprintsList.value[editIndex.value].workingDays = sprintsList.value[editIndex.value].duration - sprintsList.value[editIndex.value].nonWorkingDays.length
  sprintDataStore.setsprintList(sprintsList.value)
  updateRequired.value = true

}


async function updateBoardConfig() {

  appContextInfo.value.boardDisplayName = boardCfg.value.displayName
  sprintDataStore.setAppContext(appContextInfo.value)
  await mondayapi.storage.instance.setItem("boardConfig", JSON.stringify(boardCfg.value))
}

function dateArraytoString(array: Date[]) {
  let ret_val = ""
  for (let index = 0; index < array.length; index++) {
    // ret_val += array[index].toLocaleDateString("is")
    ret_val += array[index].toLocaleDateString()
    if (index < (array.length - 1))
      ret_val = ret_val + ' , '
  }
  return ret_val
}

function addNonWorkingDay() {
  //console.log("Add ")
  sprintsList.value[editIndex.value].nonWorkingDays.push(new Date())
}


function populateNonWorkingDays() {

  sprintsList.value[editIndex.value].nonWorkingDays = []
  let curDate: Date = new Date(sprintsList.value[editIndex.value].startDate)
  for (let index = 0; index < sprintsList.value[editIndex.value].duration; index++) {
    if (curDate.getDay() == 5 || curDate.getDay() == 6) {
      sprintsList.value[editIndex.value].nonWorkingDays.push(curDate);
    }
    curDate = new Date(addDays(curDate, 1))

  }
}


function nameChangeCliked() {
  boardChanged.value = true
}


</script>
