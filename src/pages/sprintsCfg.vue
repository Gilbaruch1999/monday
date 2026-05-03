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
        <v-icon small color="blue" class="mr-2" @click="editSprint(item)">
          mdi-pencil
        </v-icon>
        <v-icon small color="red" class="mr-2" @click="deleteSprint(item )">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:item.index="{ index }">
        {{ index + 1 }}
      </template>

    </v-data-table>
    <div align="center">
      <v-btn @click="updateSprints()"" :disabled="updateRequired == false" color="orange" class="mr-4">Save </v-btn>
      <v-btn @click="cancelUpdate()" class="mr-4">Cancel </v-btn>
    </div>

  </v-container>
  <v-dialog v-model="dialog" width="50%">
    <v-card :title="'Edit Sprint ' + editedSprint.name">
      <v-form>
        <v-row>
          <v-text-field label='Sprint Name' v-model="editedSprint.name"> </v-text-field>
          <v-text-field disabled label='boardid' v-model="editedSprint.boardid"> </v-text-field>
          <v-text-field label='Group id' v-model="editedSprint.groupid"> </v-text-field>
        </v-row>
        <v-row>
          <v-text-field type="date" label='Start Day' v-model="startDateStirng"> </v-text-field>
          <v-text-field label='Duration' v-model="editedSprint.duration"> </v-text-field>
        </v-row>
        <v-row>
          <v-text-field label='Non working days' v-model="nonWorkingDaysStirng" required> </v-text-field>

        </v-row>
      </v-form>
      <template v-slot:actions>
        <v-btn color="orange" class="ms-auto" text="Update" @click="UpdateSprintItem()"></v-btn>
        <v-btn class="ms-auto" text="Cancel" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>

</template>

<script setup lang='ts'>


//import { MondayClientSdk } from "monday-sdk-js";
import { inject, onMounted, ref, type Ref } from "vue";
import { useSprintData } from "../stores/sprintData";
import { Sprint} from "@/utils/sprintInfo";
import { convertDateFormat1, createDateFromLocalText, createDateFromText2 } from "@/utils/utils";
import { MondayClientSdk } from "monday-sdk-js";


const mondayapi = inject('monday') as MondayClientSdk
let sprintsList: Ref<Sprint[]> = ref([])
const sprintDataStore = useSprintData();
let startDateStirng = ref("")
let nonWorkingDaysStirng = ref("")
let dialog = ref(false)
let editedSprint: Ref<Sprint> = ref(new Sprint())
let updateRequired = ref(false)


const sprintHeaders: any = [

  { title: 'Actions', key: 'actions', sortable: false }, // Action Column
  { title: 'index', key: 'index' },
  { title: 'Display Name', key: 'orgName' },
  { title: 'Original Name', key: 'name' },
  { title: 'Start Date', key: 'startDate' },
  { title: 'Duration', key: "duration" },
  { title: "Board id", key: "boardid" },
  { title: "Group id", key: "groupid" },
  { title: "Working days", key: "workingDays" },
  { title: "Non working days", key: "nonWorkingDays" },

]


onMounted(async () => {

  sprintsList.value = [...sprintDataStore.getsprintList()];
  readStorage();
})


function editSprint(item: Sprint) {
  //console.log("item " + JSON.stringify(item))
  editedSprint.value = { ...item }
  startDateStirng.value = convertDateFormat1(editedSprint.value.startDate)
  nonWorkingDaysStirng.value = dateArraytoString(editedSprint.value.nonWorkingDays)
  dialog.value = true
}

function deleteSprint(item: Sprint ) {
  //console.log(" XXX " + JSON.stringify(idx))
  let index = sprintsList.value.findIndex(x => x.groupid == item.groupid)
  if (index != -1) {
    sprintsList.value.splice(index, 1)
    updateRequired.value = true
  }

}

function cancelUpdate() {
  sprintsList.value = [...sprintDataStore.getsprintList()];
  updateRequired.value = false;
}


function updateSprints() {
  sprintDataStore.setsprintList(sprintsList.value)
  updateRequired.value = false;
}

function UpdateSprintItem() {
  dialog.value = false
  let index = sprintsList.value.findIndex(x => x.groupid == editedSprint.value.groupid)
  if (index != -1) {
    console.log("Start date " + startDateStirng.value)
    editedSprint.value.nonWorkingDays = stringToDateArray(nonWorkingDaysStirng.value)
    editedSprint.value.startDate = createDateFromText2(startDateStirng.value)
    sprintsList.value[index] = { ...editedSprint.value }
    sprintDataStore.setsprintList(sprintsList.value)
    updateRequired.value = true
  }
}

function dateArraytoString(array: Date[]) {
  let ret_val = ""
  for (let index = 0; index < array.length; index++) {
    ret_val += array[index].toLocaleDateString()
    if (index < (array.length - 1))
      ret_val = ret_val + ' , '
  }
  return ret_val
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



async function readStorage() {

    const res = await mondayapi.storage.instance.getItem("sprints")
    console.log("in sprint cfg Result from storage key " + JSON.stringify(res))


}


</script>
