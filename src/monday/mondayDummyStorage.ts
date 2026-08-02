/* cspell:disable */

import { sprintHistory } from "@/utils/historyData";
import { Sprint } from "@/utils/sprintInfo";
import { createDateFromLocalText } from "@/utils/utils";

var boardinfoString: string = "";



export function getMondayDummySprintsConfig() : Sprint[] {

var dummySprints: Sprint[] = [

   {
    name: "Sprint 42",
    duration: 14,
    startDate: createDateFromLocalText("19.7.2026"),
    orgName: "Sprint 42 org",
    boardid: "1647137427",
    groupid: "group_mm25gkjt",
    workingDays: 10,
    nonWorkingDays: [
      createDateFromLocalText("24.7.2026"),
      createDateFromLocalText("25.7.2026"),
      createDateFromLocalText("31.7.2026"),
      createDateFromLocalText("1.8.2026"),
    ],
  },

   {
    name: "Sprint Q3.1.2026",
    duration: 14,
    startDate: createDateFromLocalText("2.8.2026"),
    orgName: "Sprint Q3.1.2026",
    boardid: "1647137427",
    groupid: "group_mm25gkjt",
    workingDays: 10,
    nonWorkingDays: [
      createDateFromLocalText("7.8.2026"),
      createDateFromLocalText("8.8.2026"),
      createDateFromLocalText("14.8.2026"),
      createDateFromLocalText("15.8.2026"),
    ],
  },
];

return dummySprints

}



export function getMondayDummyHistory() : string {


var historyStore  : sprintHistory[] = [
  { sprint: "Sprint 22", groupid: "", velocity: 37, predictability: 70 },
  { sprint: "Sprint 23", groupid: "", velocity: 33, predictability: 80 },
  { sprint: "Sprint 24", groupid: "", velocity: 39, predictability: 57 },
  { sprint: "Sprint 25", groupid: "", velocity: 75, predictability: 92 },
  { sprint: "Sprint 26", groupid: "", velocity: 62, predictability: 49 },
  { sprint: "Sprint 27", groupid: "", velocity: 48, predictability: 60 },
  { sprint: "Sprint 28", groupid: "", velocity: 71, predictability: 72 },
  { sprint: "Sprint 29", groupid: "", velocity: 28, predictability: 48 },
  { sprint: "Sprint 30", groupid: "", velocity: 47, predictability: 65 },
  { sprint: "Sprint 31", groupid: "", velocity: 52, predictability: 100 },
  { sprint: "Sprint 32", groupid: "", velocity: 57, predictability: 58 },
  { sprint: "Sprint 33", groupid: "", velocity: 65, predictability: 90 },
  { sprint: "Sprint 34", groupid: "", velocity: 53, predictability: 93 },
  { sprint: "Sprint 35", groupid: "", velocity: 37, predictability: 61 },
  { sprint: "Sprint 36", groupid: "", velocity: 55, predictability: 77 },
  { sprint: "Sprint 37", groupid: "", velocity: 48, predictability: 70 },
  { sprint: "Sprint 38", groupid: "", velocity: 30, predictability: 64 },
  { sprint: "Sprint 39", groupid: "", velocity: 44, predictability: 86 },
]

return JSON.stringify(historyStore)
}




