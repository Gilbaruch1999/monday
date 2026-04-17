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

