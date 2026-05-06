import { boardItem } from "@/utils/boarditem";
import { historyGraphData, sprintHistory } from "@/utils/historyData";
import { Sprint } from "@/utils/sprintInfo";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

class boardCfg {
  id: string;
  team: string;

  constructor(_id : string , _team : string) {
    this.id = _id;
    this.team = _team;
  }
}

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
  const boardid = ref("");
  const history: Ref<sprintHistory[]> = ref([]);
  const retroInfo : Ref<retroData> = ref(new retroData())
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

  function getHistory(): sprintHistory[] {
    return history.value;
  }

  function setHistory(_history : sprintHistory[]) {
    history.value = _history;
  }

  function getTeamName(id: string): string {
    let ret_val = "";
    let index = boards.findIndex((x) => x.id == id);
    if (index != -1) {
      ret_val = boards[index].team;
    }
    return ret_val;
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
    getBoardid,
    setBoardid,
    getHistory,
    setHistory,
    getTeamName,
    setRetroInfo,
    getRetroInfo
  };
});
