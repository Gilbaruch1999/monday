/* cspell:disable */

import { sprintHistory } from "@/utils/historyData";
import { Sprint, sprintType } from "@/utils/sprintInfo";
import { createDateFromLocalText } from "@/utils/utils";

export function getMondayDummySprintsConfig(): Sprint[] {
  const dummySprints: Sprint[] = [
    {
      name: "Sprint 52",
      duration: 14,
      startDate: createDateFromLocalText("25.10.2026"),
      orgName: "Sprint 52",
      boardid: "1647137427",
      groupid: "group_mm7tqqt6",
      workingDays: 9,
      type: sprintType.execution,
      nonWorkingDays: [
        createDateFromLocalText("27.10.2026"),
        createDateFromLocalText("30.10.2026"),
        createDateFromLocalText("31.10.2026"),
        createDateFromLocalText("6.11.2026"),
        createDateFromLocalText("7.11.2026"),
      ],
    },
    {
      name: "Sprint 53",
      duration: 14,
      startDate: createDateFromLocalText("8.11.2026"),
      orgName: "Sprint 53",
      boardid: "1647137427",
      groupid: "group_mm88wsxx",
      workingDays: 10,
      type: sprintType.execution,
      nonWorkingDays: [
        createDateFromLocalText("13.11.2026"),
        createDateFromLocalText("14.11.2026"),
        createDateFromLocalText("20.11.2026"),
        createDateFromLocalText("21.11.2026"),
      ],
    },
     {
      name: "Sprint 54",
      duration: 14,
      startDate: createDateFromLocalText("22.11.2026"),
      orgName: "Sprint 53",
      boardid: "1647137427",
      groupid: "group_mm88wsyy",
      workingDays: 10,
      type: sprintType.execution,
      nonWorkingDays: [
        createDateFromLocalText("27.11.2026"),
        createDateFromLocalText("28.11.2026"),
        createDateFromLocalText("3.12.2026"),
        createDateFromLocalText("4.12.2026"),
      ],
    },
  ];

  return dummySprints;
}

export function getMondayDummyHistory(): string {
  const historyStore: sprintHistory[] = [
    { sprint: "Sprint 22", normVelocity: 37, velocity: 37, predictability: 70 },
    { sprint: "Sprint 23", normVelocity: 33, velocity: 33, predictability: 80 },
    { sprint: "Sprint 24", normVelocity: 39, velocity: 39, predictability: 57 },
    { sprint: "Sprint 25", normVelocity: 70, velocity: 75, predictability: 92 },
    { sprint: "Sprint 26", normVelocity: 62, velocity: 62, predictability: 49 },
    { sprint: "Sprint 27", normVelocity: 48, velocity: 48, predictability: 60 },
    { sprint: "Sprint 28", normVelocity: 80, velocity: 71, predictability: 72 },
    { sprint: "Sprint 29", normVelocity: 28, velocity: 28, predictability: 48 },
    { sprint: "Sprint 30", normVelocity: 47, velocity: 47, predictability: 65 },
    { sprint: "Sprint 32", normVelocity: 57, velocity: 57, predictability: 58 },
    { sprint: "Sprint 33", normVelocity: 65, velocity: 65, predictability: 90 },
    { sprint: "Sprint 34", normVelocity: 53, velocity: 53, predictability: 93 },
    { sprint: "Sprint 35", normVelocity: 37, velocity: 37, predictability: 61 },
    { sprint: "Sprint 36", normVelocity: 55, velocity: 55, predictability: 77 },
    { sprint: "Sprint 37", normVelocity: 48, velocity: 48, predictability: 70 },
    { sprint: "Sprint 38", normVelocity: 30, velocity: 30, predictability: 64 },
    { sprint: "Sprint 39", normVelocity: 44, velocity: 44, predictability: 86 },
  ];

  return JSON.stringify(historyStore);
}
