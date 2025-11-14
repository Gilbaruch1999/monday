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

    </v-data-table>

    <v-form v-if="showForm">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field :disabled="editMode == 'Edit'" v-model="selectedSprint.name" label="Sprint name"
              required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="selectedSprint.groupid" label="Group id" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="selectedSprint.boardid" label="Board id" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field title="set start date" v-model="startDateStirng" label="Start date" required> </v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="selectedSprint.duration" label="Duration" required></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field multiline v-model="nonWorkingDaysStirng" label="Non working days" required></v-text-field>
          </v-col>
        </v-row>

      </v-container>
    </v-form>
  </v-container>
</template>

<script setup lang='ts'>


import { Sprint } from "@/utils/mondayparser";
import { getDummyStorage, setDummyStorage } from "@/utils/mondaystorage";
import { MondayClientSdk } from "monday-sdk-js";
import { inject, onMounted, ref, type Ref } from "vue";
import { useSprintData } from "../stores/sprintData";
import { createDateFromLocalText } from "@/utils/utils";

const mondayapi = inject('monday') as MondayClientSdk
let sprintsList: Ref<Sprint[]> = ref([])
let selectedSprint: Ref<Sprint> = ref(new Sprint())
const sprintDataStore = useSprintData();
let showForm = ref(false)
let editMode = ref("")
let startDateStirng = ref("")
let nonWorkingDaysStirng = ref("")

const sprintHeaders: any = [

  { title: 'Name', key: 'name' },
  { title: 'Start Date', key: 'startDate' },
  { title: 'Duration', key: "duration" },
  { title: "Board id", key: "boardid" },
  { title: "Group id", key: "groupid" },
  { title: "Working days", key: "workingDays" },
  { title: "Non working days", key: "nonWorkingDays" },

]


onMounted(async () => {

  sprintsList.value = [...sprintDataStore.getsprintList()];
})




function cancelUpdateSprint() {

  showForm.value = false
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
  let ret_val = []

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


  return ret_val
}
</script>
