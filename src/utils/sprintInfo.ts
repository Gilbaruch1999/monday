import { convertDateFormat2, createDateFromLocalText } from "./utils";

export interface sprintInfo {
  name: string;
  startDate: Date;
  duration: number;
  nonWorkingDays: Date[];
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
    this.duration = -1;
    this.nonWorkingDays = [];
    this.startDate = new Date(0);
  }
}

export function convertJSONtoSprint(data: any): Sprint {
  let ret_val = new Sprint();
  ret_val.duration = data.duration;
  ret_val.name = data.name;
  ret_val.orgName = data.orgName;
  ret_val.boardid = data.boardid;
  ret_val.groupid = data.groupid;
  ret_val.workingDays = data.workingDays;
  //console.log("String date " + data.startDate)
  ret_val.startDate = new Date(data.startDate);
  //console.log("Start date " + ret_val.startDate.toLocaleDateString())
  data.nonWorkingDays.forEach((element: string) => {
    ret_val.nonWorkingDays.push( new Date(element));
  });
  ret_val.workingDays = ret_val.duration - ret_val.nonWorkingDays.length

  return ret_val;
}

