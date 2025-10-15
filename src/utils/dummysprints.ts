import { Sprint } from "./mondayparser";
import { createDateFromLocalText } from "./utils";

export function getDummySprintList() {
  let ret_val = [];
  let sprint: Sprint = {
    name: "Sprint 26",
    startDate: createDateFromLocalText("21.9.2025"),
    duration: 28,
    boardid: "",
    groupid: "",
    workingDays: 0,
    nonWorkingDays: [
      createDateFromLocalText("22.9.2025"),
      createDateFromLocalText("23.9.2025"),
      createDateFromLocalText("24.9.2025"),
      createDateFromLocalText("26.9.2025"),
      createDateFromLocalText("27.9.2025"),
      createDateFromLocalText("1.10.2025"),
      createDateFromLocalText("2.10.2025"),
      createDateFromLocalText("3.10.2025"),
      createDateFromLocalText("4.10.2025"),
      createDateFromLocalText("6.10.2025"),
      createDateFromLocalText("7.10.2025"),
      createDateFromLocalText("10.10.2025"),
      createDateFromLocalText("11.10.2025"),
      createDateFromLocalText("13.10.2025"),
      createDateFromLocalText("14.10.2025"),
      createDateFromLocalText("17.10.2025"),
      createDateFromLocalText("18.10.2025"),
    ],
  };
  sprint.boardid = "1661635292";
  sprint.groupid = "group_mkvwj9pf";
  sprint.workingDays = sprint.duration - sprint.nonWorkingDays.length;
  ret_val.push({ ...sprint });
  sprint.boardid = "1647137427";
  sprint.groupid = "group_mkvbj73t";
  ret_val.push({ ...sprint });
  sprint = {
    name: "Sprint 27",
    startDate: createDateFromLocalText("19.10.2025"),
    duration: 14,
    boardid: "1661635292",
    groupid: "group_mkwn416h",
    workingDays: 0,
    nonWorkingDays: [
      createDateFromLocalText("24.10.2025"),
      createDateFromLocalText("25.10.2025"),
      createDateFromLocalText("24.9.2025"),
      createDateFromLocalText("31.10.2025"),
      createDateFromLocalText("1.11.2025"),
    ],
  };
  sprint.workingDays = sprint.duration - sprint.nonWorkingDays.length;
  ret_val.push({ ...sprint });
  sprint.boardid = "1647137427";
  sprint.groupid = "group_mkvs6xtj";
  ret_val.push({ ...sprint });

  return ret_val;
}
