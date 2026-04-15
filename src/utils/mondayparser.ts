/* cspell:disable */
import { getDaysdiff } from "./utils";

export class groupMap {
  boardid: string = "";
  type: boardType = boardType.Scrum;
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
  name: string = "";
  startDate: Date;
  duration: number;
  boardid: string = "";
  groupid: string ="";
  workingDays: number = 0;
  nonWorkingDays: Date[];
  constructor() {
    this.duration = 0;
    this.nonWorkingDays = [];
    this.startDate = new Date();
  }
}

