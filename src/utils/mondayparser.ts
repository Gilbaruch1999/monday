import { createDateFromText1, getDaysdiff } from "./utils";

export class groupMap {
  boardid: string;
  groupid: string;
  type: boardType;
}

export enum boardType {
  Scrum,
  Kanban,
}

export class Sprint {
  name: string;
  startDate: Date;
  duration: number;
}

export let sprintTable: Sprint[] = [
  { name: "Sprint 22", startDate: createDateFromText1("27-7-2025"), duration: 14 },
  { name: "Sprint 23", startDate: createDateFromText1("10-8-2025"), duration: 14 },
  { name: "Sprint 24", startDate: createDateFromText1("24-8-2025"), duration: 14 },
];

export let BoardToGroupMap: groupMap[] = [
  { boardid: "1647137427", groupid: "group_mks9stxg", type: boardType.Scrum },
  { boardid: "1661635292", groupid: "group_mkt8hnp0", type: boardType.Kanban },
];

export function findCurrentSprint(): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();

  for (let index = 0; index < sprintTable.length; index++) {

    var diff = getDaysdiff(curDate,  sprintTable[index].startDate);
    if (diff >= 0 && diff <= sprintTable[index].duration) {
      return sprintTable[index];
    }
  }
}
