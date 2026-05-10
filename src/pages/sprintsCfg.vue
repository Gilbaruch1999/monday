/* cspell:disable */
<template>
  <v-container fluid>
    <v-data-table items-per-page="60" class="datatable" hide-default-footer dense item-key="name"
      :headers="sprintHeaders" :items="sprintsList">
      <template v-slot:item.startDate="{ item }">
        {{ item.startDate.toLocaleDateString() }}
      </template>
      <template v-slot:item.nonWorkingDays="{ item }">
        {{ dateArraytoString(item.nonWorkingDays) }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon :disabled="!manageSprints" small color="blue" class="mr-2" @click="editSprint(item)">
          mdi-pencil
        </v-icon>
        <v-icon :disabled="!manageSprints" small color="red" class="mr-2" @click="deleteSprint(item)">
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>
    <div align="center">
      <v-btn v-if="manageSprints" @click="updateSprints()"" :disabled="updateRequired == false" color="orange"
        class="mr-2 mt-4">Save </v-btn>
      <v-btn @click="manageSprintsClicked()" class="mr-2 mt-4" color="orange">{{ managBtnHeader }}</v-btn>
    </div>
  </v-container>
  <v-dialog v-model="dialog" width="50%">
    <v-card :title="'Edit Sprint ' + sprintsList[editIndex].name">
      <v-form>
        <v-row>
          <v-text-field label='Sprint Name' v-model="sprintsList[editIndex].name"> </v-text-field>
          <v-text-field disabled label='boardid' v-model="sprintsList[editIndex].boardid"> </v-text-field>
          <v-text-field label='Group id' v-model="sprintsList[editIndex].groupid"> </v-text-field>
        </v-row>
        <v-row>
          <v-date-input input-format="dd.mm.yyyy" max-width="450px" class="ma-4" label='Start Day'
            v-model="sprintsList[editIndex].startDate"></v-date-input>
          <v-text-field max-width="150px" class="ma-2" label='Duration' v-model="sprintsList[editIndex].duration">
          </v-text-field>
        </v-row>
        <v-card class="bg-blue-lighten-4">
          <h2 class="ma-2">None working days</h2>
          <v-date-input input-format="dd.mm.yyyy" class="ma-4"
            v-for="(item, index) in sprintsList[editIndex].nonWorkingDays" label='Non working days'
            v-model="sprintsList[editIndex].nonWorkingDays[index]">
          </v-date-input>
          <v-row>
            <v-btn @click="populateNonWorkingDays()" class="ma-4" color="orange"> Populate </v-btn>
            <v-btn @click="addNonWorkingDay()" class="ma-4" color="orange"> Add </v-btn>
          </v-row>
        </v-card>
      </v-form>
      <template v-slot:actions>
        <v-btn color="orange" class="ms-auto" text="Update" @click="UpdateSprintItem()"></v-btn>
        <v-btn class="ms-auto" text="Cancel" @click="cancelUpdateSprintItem()"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup lang='ts'>



import { inject, onMounted, ref, type Ref } from "vue";
import { useSprintData } from "../stores/sprintData";
import { convertSprintToString, Sprint, sprintInfoStore } from "@/utils/sprintInfo";
import { addDays, createDateFromLocalText } from "@/utils/utils";
import { MondayClientSdk } from "monday-sdk-js";


const mondayapi = inject('monday') as MondayClientSdk
let sprintsList: Ref<Sprint[]> = ref([])
let editIndex = ref(0)
let oldSprintData: Ref<Sprint> = ref(new Sprint())
const sprintDataStore = useSprintData();
const manageSprints = ref(false)
const managBtnHeader = ref("Edit")

let dialog = ref(false)
let updateRequired = ref(false)



const sprintHeaders: any = [

  { title: 'Actions', key: 'actions', sortable: false }, // Action Column
  { title: 'Display Name', key: 'name' },
  { title: 'Original Name', key: 'orgName' },
  { title: 'Start Date', key: 'startDate' },
  { title: 'Duration', key: "duration" },
  { title: "Board id", key: "boardid" },
  { title: "Group id", key: "groupid" },
  { title: "Working days", key: "workingDays" },
  { title: "Non working days", key: "nonWorkingDays" },

]


onMounted(async () => {
  readSprintData();
})

function readSprintData() {
  sprintsList.value = []
  sprintDataStore.getsprintList().forEach(element => {
    sprintsList.value.push({ ...element })
  });

}


function editSprint(item: Sprint) {
  //console.log("item " + JSON.stringify(item))
  let index = sprintsList.value.findIndex(x => x.groupid == item.groupid)
  if (index != -1) {
    editIndex.value = index
    oldSprintData.value = { ...sprintsList.value[index] }
  }
  dialog.value = true
}

function deleteSprint(item: Sprint) {
  //console.log(" XXX " + JSON.stringify(idx))
  let index = sprintsList.value.findIndex(x => x.groupid == item.groupid)
  if (index != -1) {
    sprintsList.value.splice(index, 1)
    updateRequired.value = true
  }

}

function cancelUpdateSprintItem() {
  console.log("Cancel update")
  sprintsList.value[editIndex.value] = { ...oldSprintData.value };
  console.log("BBB " + sprintDataStore.getsprintList()[editIndex.value].name)
  dialog.value = false

}


function manageSprintsClicked() {

  manageSprints.value = !manageSprints.value
  if (manageSprints.value) {
    managBtnHeader.value = "Stop Edit"

  }
  else {
    managBtnHeader.value = "Edit"
    readSprintData()
  }
}

async function updateSprints() {
  var tmp: sprintInfoStore[] = []
  sprintDataStore.setsprintList(sprintsList.value)
  sprintsList.value.forEach(element => {
    tmp.push(convertSprintToString(element))
  });
  const res = await mondayapi.storage.instance.setItem("boardInfo", JSON.stringify(tmp))
  console.log("save to store results " + JSON.stringify(res))

  updateRequired.value = false;
}

function UpdateSprintItem() {
  dialog.value = false
  sprintDataStore.setsprintList(sprintsList.value)
  updateRequired.value = true

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
  var curDate: Date = new Date(sprintsList.value[editIndex.value].startDate)
  for (let index = 0; index < sprintsList.value[editIndex.value].duration; index++) {
    if (curDate.getDay() == 5 || curDate.getDay() == 6) {
      sprintsList.value[editIndex.value].nonWorkingDays.push(curDate);
    }
    curDate = new Date(addDays(curDate, 1))

  }
}

function stringToDateArray(str: string) {
  let ret_val: Date[] = []

  try {
    var tmp = str.split(",");
    if (tmp.length == 0) return [];
    else {
      tmp.forEach(element => {
        ret_val.push(createDateFromLocalText(element.trim()))
      });
    }
  } catch {
    console.log("Error in create date from text 2");
  }
  //console.log('Date is ' + retval.toLocaleDateString())
  return ret_val;
}



</script>
