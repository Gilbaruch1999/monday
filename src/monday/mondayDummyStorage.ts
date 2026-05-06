/* cspell:disable */

import { sprintHistory } from "@/utils/historyData";

var boardinfoString: string = "";

var dummySprints: any[] = [
  {
    name: "Sprint 39",
    duration: 14,
    startDate: "12.4.2026",
    orgName: "Sprint 39 org",
    boardid: "1647137427",
    groupid: "group_mm1sv64v",
    workingDays: 8,
    nonWorkingDays: [
      "16.4.2026",
      "17.4.2026",
      "21.4.2026",
      "22.4.2026",
      "24.4.2026",
      "25.4.2026",
    ],
  },
  {
    name: "Sprint 40",
    duration: 14,
    startDate: "26.4.2026",
    orgName: "Sprint 40 org",
    boardid: "1647137427",
    groupid: "group_mm1rp91q",
    workingDays: 10,
    nonWorkingDays: ["1.5.2026", "2.5.2026", "8.5.2026", "9.5.2026"],
  },
  {
    name: "Sprint 41",
    duration: 14,
    startDate: "10.5.2026",
    orgName: "Sprint 41 org",
    boardid: "1647137427",
    groupid: "group_mm25gkjt",
    workingDays: 9,
    nonWorkingDays: [
      "15.5.2026",
      "16.5.2026",
      "21.5.2026",
      "22.5.2026",
      "23.5.2026",
    ],
  },
];

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




export function dummyWriteItem(key: string, item: string) {
  switch (key) {
    case "boardInfo":
      boardinfoString = item;
      break;
    default:
      break;
  }
}

export function dummyReadItem(key: string): string {
  let ret_val: string = "";
  switch (key) {
    case "boardInfo":
      ret_val = JSON.stringify(dummySprints);
      break;
      case "historyInfo":
      ret_val = JSON.stringify(historyStore);
      break;
    default:
      break;
  }

  return ret_val;
}
