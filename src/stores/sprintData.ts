import { boardItem } from "@/utils/boarditem";
import { historyData } from "@/utils/common";
import { Sprint } from "@/utils/mondayparser";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useSprintData = defineStore("sprintData", () => {
  const sprintItems: Ref<boardItem[]> = ref([]);
  const curSprint: Ref<Sprint> = ref();
  const sprintList: Ref<Sprint[]> = ref([]);
  const boardid = ref("");
  const history : Ref<historyData[]> = ref([])

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

   function getBoardid(): string {
    return boardid.value;
  }

  function setBoardid(id : string) {
     boardid.value = id;
  }

  function getHistory(): historyData[] {
    return history.value;
  }

  function setHistory(id : historyData[]) {
     history.value = id;
  }


  return {
    getsprintData,
    setsprintData,
    getCursprintConfig,
    setCursprintConfig,
    getsprintList,
    setsprintList,
    getBoardid,
    setBoardid,
    getHistory,
    setHistory
  };
});
