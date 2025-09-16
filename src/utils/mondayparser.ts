import { createDateFromText1, getDaysdiff } from "./utils";

export class groupMap {
  boardid: string;
  type: boardType;
}

export enum boardType {
  Scrum,
  Kanban,
}

export interface sprintInfo {
  name: string;
  startDate: Date;
  duration: number;
  nonWorkingDays: Date[];
}

export class Sprint implements sprintInfo {
  name: string;
  startDate: Date;
  duration: number;
  boardid: string;
  groupid: string;
  workingDays: number;
  nonWorkingDays: Date[];
}


export let sprintInfoTable: sprintInfo[] = [
  {
    name: "Sprint 25",
    startDate: createDateFromText1("7-9-2025"),
    duration: 14,
    nonWorkingDays: [
      createDateFromText1("12-9-2025"),
      createDateFromText1("13-9-2025"),
      createDateFromText1("19-9-2025"),
      createDateFromText1("20-9-2025"),

    ],
  },
  {
    name: "Sprint 26",
    startDate: createDateFromText1("21-9-2025"),
    duration: 28,
    nonWorkingDays: [
      createDateFromText1("22-9-2025"),
      createDateFromText1("23-9-2025"),
      createDateFromText1("24-9-2025"),
      createDateFromText1("26-9-2025"),
      createDateFromText1("27-9-2025"),
      createDateFromText1("1-10-2025"),
      createDateFromText1("2-10-2025"),
      createDateFromText1("3-10-2025"),
      createDateFromText1("4-10-2025"),
      createDateFromText1("6-10-2025"),
      createDateFromText1("7-10-2025"),
      createDateFromText1("10-10-2025"),
      createDateFromText1("11-10-2025"),
      createDateFromText1("13-10-2025"),
      createDateFromText1("14-10-2025"),
      createDateFromText1("17-10-2025"),
      createDateFromText1("18-10-2025"),
    ],
  },
];

export let sprintDataTable: Sprint[] = [
  // Nexus

  {
    name: "Sprint 25",
    startDate: new Date(),
    duration: 0,
    boardid: "1661635292",
    groupid: "group_mkvd1j87",
    workingDays: 0,
    nonWorkingDays: [],
  },
  {
    name: "Sprint 26",
    startDate: new Date(),
    duration: 0,
    boardid: "1661635292",
    groupid: "group_mktpsjn9",
    workingDays: 0,
    nonWorkingDays: [],
  },

  // Dev

  {
    name: "Sprint 25",
    startDate: new Date(),
    duration: 0,
    boardid: "1647137427",
    groupid: "group_mktrd8e1",
    workingDays: 0,
    nonWorkingDays: [],
  },
  {
    name: "Sprint 26",
    startDate: new Date(),
    duration: 0,
    boardid: "1647137427",
    groupid: "group_mkvbj73t",
    workingDays: 10,
    nonWorkingDays: [],
  },
];

export let BoardToGroupMap: groupMap[] = [
  { boardid: "1647137427", type: boardType.Scrum },
  { boardid: "1661635292", type: boardType.Kanban },
];

export function findCurrentSprint(boardid: string): Sprint {
  var ret_val = new Sprint();
  var curDate = new Date();

  let boardSprintTable = sprintDataTable.filter((x) => x.boardid == boardid);

  for (let index = 0; index < boardSprintTable.length; index++) {
    var diff = getDaysdiff(curDate, boardSprintTable[index].startDate);
    //console.log("Diff is " + diff)
    if (diff >= 0 && diff < boardSprintTable[index].duration) {
      ret_val = boardSprintTable[index];
    }
  }
  return ret_val;
}
