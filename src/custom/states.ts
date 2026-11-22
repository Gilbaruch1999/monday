export const states = ["Not Started", "WIP", "Wait", "Done"];
export const mapStates: Map<string, string[]> = new Map([
  ["Not started", ["Pending", "Next Sprint"]],
  ["WIP", ["Work In Progress", "Needs PO Review"]],
  ["Wait", ["Stuck"]],
  ["Done", ["Done"]],
]);

function checkIfInState(state: string, stateForCheck: string): boolean {
  let arr = mapStates.get(state) ?? [];
  if (arr.includes(stateForCheck)) return true;
  else return false;
}

export function isDoneState(state: string): boolean {
  return checkIfInState("Done", state);
}

export function isWIPState(state: string): boolean {
  return checkIfInState("WIP", state);
}

export function isRemovedState(state: string): boolean {
  return checkIfInState("Removed", state);
}

export function getCardColor(status: string) {
  let ret_val = "";
  switch (status) {
    case "Pending":
    case "Not Started":
      ret_val = "grey";
      break;
    case "Next Sprint":
      ret_val = "red";
      break;
    case "Work In Progress":
    case "Needs PO Review":
    case "WIP":
      ret_val = "yellow";
      break;
    case "Stuck":
    case "Wait":
      ret_val = "orange";
      break;
    case "Done":
      ret_val = "#008000";

      break;
    default:
      ret_val = "black";
      break;
  }

  console.log("Get card color " + status + " color " + ret_val)
  return ret_val;
}

export function getCardColorClass(state: string) {
  let ret_val = "ma-1 ";
  switch (state) {
    case "Done":
      ret_val = ret_val + "bg-light-green-darken-3";
      break;
    case "Pending":
    case "Not Started":
      ret_val = ret_val + "bg-blue-grey-lighten-3";
      break;
    case "Stuck":
    case "Wait":
      ret_val = ret_val + "bg-red-accent-4";
      break;
    case "Work In Progress":
    case "WIP":
      ret_val = ret_val + "bg-yellow-darken-2";
      break;
    default:
      ret_val = ret_val + "bg-black";
      break;
  }
  return ret_val;
}
