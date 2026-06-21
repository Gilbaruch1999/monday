import { boardConfig } from "@/utils/boardCfg";
import { boardItem } from "@/utils/boarditem";
import { sprintHistory } from "@/utils/historyData";
import { Sprint } from "@/utils/sprintInfo";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export class retroData
{
  velocity : number = 0;
  predictability : string = "";
  minPredictability : string = "";
  targetPredictability : string = "";
  outstandingPredictability : string = "";

}

export const useSprintData = defineStore("sprintData", () => {
  const sprintItems: Ref<boardItem[]> = ref([]);
  const curSprint: Ref<Sprint> = ref(new Sprint());
  const sprintList: Ref<Sprint[]> = ref([]);
  const history: Ref<sprintHistory[]> = ref([]);
  const retroInfo : Ref<retroData> = ref(new retroData())
  const boardData : Ref<boardConfig> = ref (new boardConfig())


  function getsprintData(): boardItem[] {
    return sprintItems.value;
  }

  function setsprintData(data: boardItem[]) {
    sprintItems.value = data;
  }

  function getCursprintConfig(): Sprint {
    return curSprint.value;
  }

  function setCursprintConfig(data: Sprint) {
    curSprint.value = data;
  }

  function getsprintList(): Sprint[] {
    return sprintList.value;
  }

  function setsprintList(list: Sprint[]) {
    sprintList.value = list;
  }

  function getHistory(): sprintHistory[] {
    return history.value;
  }

  function setHistory(_history : sprintHistory[]) {
    history.value = _history;
  }

  function getBoardCfg(): boardConfig {

    return boardData.value;
  }

  function setBoardCfg(data : boardConfig  )  {

   boardData.value = data
  }

  function setRetroInfo( data : retroData)
  {
    retroInfo.value = data

  }

  function getRetroInfo() : retroData
  {

    return retroInfo.value
  }



  return {
    getsprintData,
    setsprintData,
    getCursprintConfig,
    setCursprintConfig,
    getsprintList,
    setsprintList,
    getHistory,
    setHistory,
    getBoardCfg,
    setBoardCfg,
    setRetroInfo,
    getRetroInfo
  };
});
