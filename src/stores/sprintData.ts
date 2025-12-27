import { boardItem } from "@/utils/boarditem";
import { historyData } from "@/utils/common";
import { Sprint } from "@/utils/mondayparser";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

class boardCfg {
  id: string;
  team: string;

  constructor(_id, _team) {
    this.id = _id;
    this.team = _team;
  }
}

export const useSprintData = defineStore("sprintData", () => {
  const sprintItems: Ref<boardItem[]> = ref([]);
  const curSprint: Ref<Sprint> = ref();
  const sprintList: Ref<Sprint[]> = ref([]);
  const boardid = ref("");
  const history: Ref<historyData[]> = ref([]);
  let boards: boardCfg[] = [
    new boardCfg("1647137427", "Dev"),
    new boardCfg("5048014529", "Nexus"),
  ];

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

  function setBoardid(id: string) {
    boardid.value = id;
  }

  function getHistory(): historyData[] {
    return history.value;
  }

  function setHistory(id: historyData[]) {
    history.value = id;
  }

  function getTeamName(id: string): string {
    let ret_val = "";
    let index = boards.findIndex((x) => x.id == id);
    if (index != -1) {
      ret_val = boards[index].team;
    }
    return ret_val;
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
    setHistory,
    getTeamName
  };
});
