import { createDateFromText1, getDaysdiff } from "./utils";

export class groupMap {
  boardid: string;
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
  boardid: string;
  groupid: string;
}

export let sprintTable: Sprint[] = [
  // Nexus

  {
    name: "Sprint 23",
    startDate: createDateFromText1("10-8-2025"),
    duration: 14,
    boardid: "1661635292",
    groupid: "group_mktpsjn9",
  },
  {
    name: "Sprint 24",
    startDate: createDateFromText1("24-8-2025"),
    duration: 14,
    boardid: "1661635292",
    groupid: "group_mkv1tkt4",
  },
  // Dev

  {
    name: "Sprint 23",
    startDate: createDateFromText1("10-8-2025"),
    duration: 14,
    boardid: "1647137427",
    groupid: "group_mkswz04s",
  },
  {
    name: "Sprint 24",
    startDate: createDateFromText1("24-8-2025"),
    duration: 14,
    boardid: "1647137427",
    groupid: "group_mktaxw83",
  },
  {
    name: "Sprint 25",
    startDate: createDateFromText1("7-9-2025"),
    duration: 14,
    boardid: "1647137427",
    groupid: "group_mktrd8e1",
  },
];

export let BoardToGroupMap: groupMap[] = [
  { boardid: "1647137427", type: boardType.Scrum },
  { boardid: "1661635292", type: boardType.Kanban },
];

export function findCurrentSprint(boardid: string): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();

  let boardSprintTable = sprintTable.filter((x) => x.boardid == boardid);

  for (let index = 0; index < boardSprintTable.length; index++) {
    var diff = getDaysdiff(curDate, boardSprintTable[index].startDate);
    //console.log("Diff is " + diff)
    if (diff >= 0 && diff < boardSprintTable[index].duration) {
      ret_val = boardSprintTable[index];
    }
  }
  return ret_val;
}
