<template>
  <v-container fluid>
    <div class="text-center">
      <h1>Structured retrospective</h1>
    </div>
    <v-card class="text-center">
      <v-card-title>PO feedback</v-card-title>
      <v-row>
        <div class="ma-4">
          <v-radio-group v-model="POFeedback">
            <v-radio label="Not Happy" value=0></v-radio>
            <v-radio label="Happy" value=1></v-radio>
            <v-radio label="Excited" value=2></v-radio>
          </v-radio-group>
        </div>
        <div class="ma-4">
          <v-img :width="200" aspect-ratio="16/9" cover :src="poImages[POFeedback]?.src"></v-img>
        </div>
      </v-row>
    </v-card>
    <v-card class="text-center">
      <v-card-title>Predictability and velocity scores</v-card-title>
      <v-container fluid>
        <v-row class="text-start">
          <v-col cols="2" class="justify-start">
            <div class="preditem"> Velocity : {{ retroInfo.velocity }}</div>
            <div class="preditem"> Predictability : {{ retroInfo.predictability }}</div>
          </v-col>
          <v-col cols="3">
            <div class="preditem"> Minimum Goals Predictability : {{ retroInfo.minPredictability }}</div>
            <div class="preditem"> Target Goals Predictability : {{ retroInfo.targetPredictability }}</div>
            <div class="preditem"> Outstanding Goals Predictability : {{ retroInfo.outstandingPredictability }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card class="text-center">
      <v-card-title>Burn down and burn up</v-card-title>

    </v-card>

    <v-card class="text-center">
      <v-card-title>Practices scoring</v-card-title>
      <retro-item v-for="(item, index) in retroItems" :itemtext="item.name" v-model="retroItems[index]"></retro-item>
    </v-card>
    <v-card>
      <v-card-title class="text-center">Historic KPI trends</v-card-title>
      <history :edit-history="false"></history>
    </v-card>

  </v-container>
</template>

<script setup lang="ts">

import { retroData, useSprintData } from '@/stores/sprintData';
import { retroItemInfo } from '@/utils/retroItem';
import { onMounted, ref, type Ref } from 'vue';
import History from './history.vue';

const sprintDataStore = useSprintData();
const poImages = [
  { src: "minimum.jpeg", text: "Not happy", color: "#ff6347" },
  { src: "target.jpeg", text: "Happy", color: "#43A047" },
  { src: "outstanding.jpeg", text: "Excited", color: "#F48FB1" },
]
const retroInfo: Ref<retroData> = ref(new retroData())
const POFeedback: Ref<number> = ref(-1);
const retroItems: retroItemInfo[] = [
  { name: "Relative Estimations", status: "", comment: "" },
  { name: "Sprint pre-planning", status: "", comment: "" },
  { name: "Sprint planning", status: "", comment: "" }
]

onMounted(async () => {

  retroInfo.value = sprintDataStore.getRetroInfo()
})


</script>
<style lang="css" scoped>
.preditem {
  font-size: clamp(0.5rem, 2.5vw, 1rem);
  font-weight: bold
}
</style>
