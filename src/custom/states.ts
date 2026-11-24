export const states = ["Not Started", "WIP", "Wait", "Done"];
export const mapStates: Map<string, string[]> = new Map([
  ["Not Started", ["Pending", "Next Sprint"]],
  ["WIP", ["Work In Progress", "Needs PO Review"]],
  ["Wait", ["Stuck"]],
  ["Done", ["Done"]],
]);

function checkIfInState(state: string, stateForCheck: string): boolean {
  const arr = mapStates.get(state) ?? [];
  return arr.includes(stateForCheck) ? true : false;
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
  let ret_val;
  switch (status) {
    case "Pending":
    case "Not Started": {
      ret_val = "grey";
      break;
    }
    case "Next Sprint": {
      ret_val = "red";
      break;
    }
    case "Work In Progress":
    case "Needs PO Review":
    case "WIP": {
      ret_val = "yellow";
      break;
    }
    case "Stuck":
    case "Wait": {
      ret_val = "orange";
      break;
    }
    case "Done": {
      ret_val = "#008000";

      break;
    }
    default: {
      ret_val = "black";
      break;
    }
  }
  return ret_val;
}

export function getCardColorClass(state: string) {
  let ret_val = "ma-1 ";
  switch (state) {
    case "Done": {
      ret_val = ret_val + "bg-light-green-darken-3";
      break;
    }
    case "Pending":
    case "Not Started": {
      ret_val = ret_val + "bg-blue-grey-lighten-4";
      break;
    }
    case "Stuck":
    case "Wait": {
      ret_val = ret_val + "bg-red-accent-4";
      break;
    }
    case "Work In Progress":
    case "WIP": {
      ret_val = ret_val + "bg-yellow-darken-2";
      break;
    }
    default: {
      ret_val = ret_val + "bg-black";
      break;
    }
  }
  return ret_val;
}

export function getRowTableColorClass(status: string) {
  let ret_val;

  switch (status) {
    case "Pending":
      ret_val = { class: "bg-blue-grey-lighten-4" };
      break;
    case "Work In Progress":
    case "Needs PO Review":
      ret_val = { class: "bg-yellow-lighten-1" };
      break;
    case "Stuck":
      ret_val = { class: "bg-red-darken-1" };
      break;
    case "Done":
      ret_val = { class: "bg-green-accent-3" };
      break;
    default:
      ret_val = { class: "bg-black" };
  }

  return ret_val;
}
