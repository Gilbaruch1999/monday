import { Sprint } from "./mondayparser";
import { createDateFromLocalText } from "./utils";

export function getDummySprintList() {
  let ret_val = [];

  let sprint = {
    name: "Sprint 27",
    startDate: createDateFromLocalText("19.10.2025"),
    duration: 14,
    boardid: "1647137427",
    groupid: "group_mkvs6xtj",
    workingDays: 0,
    nonWorkingDays: [
      createDateFromLocalText("24.10.2025"),
      createDateFromLocalText("25.10.2025"),
      createDateFromLocalText("31.10.2025"),
      createDateFromLocalText("1.11.2025"),
    ],
  };
  sprint.workingDays = sprint.duration - sprint.nonWorkingDays.length;
  ret_val.push({ ...sprint });
  sprint.boardid = "5048014529";
  sprint.groupid = "group_mkvs6xtj";
  ret_val.push({ ...sprint });

   sprint = {
    name: "Sprint 28",
    startDate: createDateFromLocalText("2.11.2025"),
    duration: 14,
    boardid: "1647137427",
    groupid: "group_mkvsxg6g",
    workingDays: 0,
    nonWorkingDays: [
      createDateFromLocalText("7.11.2025"),
      createDateFromLocalText("8.11.2025"),
      createDateFromLocalText("14.11.2025"),
      createDateFromLocalText("15.11.2025"),
    ],
  };
  sprint.workingDays = sprint.duration - sprint.nonWorkingDays.length;
  ret_val.push({ ...sprint });
  sprint.boardid = "5048014529";
  sprint.groupid = "group_mkvsxg6g";
  ret_val.push({ ...sprint });

  return ret_val;
}
