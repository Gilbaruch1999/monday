import { convertDateFormat2 } from "./utils";

export interface sprintInfo {
  name: string;
  startDate: Date;
  duration: number;
  nonWorkingDays: Date[];
}

export class sprintInfoStore {
  name: string = "";
  orgName: string = "";
  startDate: string = "";
  duration: number = 0;
  boardid: string = "";
  groupid: string = "";
  workingDays: number = 0;
  nonWorkingDays: String[] = [];
}

export class Sprint implements sprintInfo {
  name: string = "";
  orgName: string = "";
  startDate: Date;
  duration: number;
  boardid: string = "";
  groupid: string = "";
  workingDays: number = 0;
  nonWorkingDays: Date[];
  constructor() {
    this.duration = 0;
    this.nonWorkingDays = [];
    this.startDate = new Date();
  }
}

export function convertSprintToString(data: Sprint): sprintInfoStore {
  let ret_val = new sprintInfoStore();
  ret_val.duration = data.duration;
  ret_val.name = data.name;
  ret_val.orgName = data.orgName;
  ret_val.boardid = data.boardid;
  ret_val.groupid = data.groupid;
  ret_val.workingDays = data.workingDays;
  ret_val.startDate = convertDateFormat2(data.startDate);
  data.nonWorkingDays.forEach(element => {
    ret_val.nonWorkingDays.push(convertDateFormat2(element));

  });

  return ret_val;
}
