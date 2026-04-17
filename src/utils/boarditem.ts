import { createDateFromText2 } from "./utils";

export enum PlanningErrorsIndex {
  noEstimationError = 0,
  tooManyOwners = 1,
  subItemError = 2,
  itemNotBroken = 3,
  parentSizeError = 4,
  noCompletionDate = 5,
  subitemNotDone = 6,
}

export class boardItem {
  id: string = "";
  title: string = "";
  domain: string = "";
  strategicCategory: string = "";
  goalCategory: string = "";
  type: string = "";
  assignedTo: string = "";
  sizeEstimation: string = "";
  storyPoints: number;
  doneStoryPoints: number;
  percentDone: number;
  status: string = "";
  subItems: boardItem[];
  subitemsPoints: number;
  subitemsDonePoints: number;
  DoneDate: Date = new Date(0);
  startDate: Date = new Date();
  starWorkDate: Date = new Date();
  planningStatus: boolean;
  planningCheck: boolean;
  planningCheckErrors: boolean[];
  parent: string;
  constructor() {
    this.storyPoints = 0;
    this.doneStoryPoints = 0;
    this.subItems = [];
    this.subitemsPoints = 0;
    this.subitemsDonePoints = 0;
    this.percentDone = 0;
    this.planningStatus = true;
    this.planningCheck = false;
    this.parent = "";
    this.planningCheckErrors = new Array(
      Object.keys(PlanningErrorsIndex).filter((key) => isNaN(Number(key)))
        .length,
    ).fill(false);


  }

  updateFields(column_values: any) {
    //console.log('Columns ' + JSON.stringify(column_values))
    column_values.forEach((column: any) => {
      switch (column.column.title) {
        case "Status":
          this.status = column.text;
          break;
        case "Domain":
          this.domain = column.text;
          break;
        case "Strategic Category":
          this.strategicCategory = column.text;
          break;
        case "Goal Category":
          this.goalCategory = column.text;
          break;
        case "Story Points":
          this.sizeEstimation = column.text;
          break;
        case "Assigned":
          this.assignedTo = column.text;
          break;
        case "Points":
          if (column.text != "") {
            this.storyPoints = parseInt(column.text);
          }
          break;
        case "Issue Type":
          this.type = column.text;
          break;
        case "DoneDate":
        case "CompletionDate":
        case "SubItemDoneDate":
          if (this.status == "Done") {
            this.DoneDate = createDateFromText2(column.text);
          }
          break;
        case "StartDate":
          this.startDate = createDateFromText2(column.text);
          break;
        case "StartWorkDate":
          this.starWorkDate = createDateFromText2(column.text);
          break;
        default:
        //console.log('undefined column ' + JSON.stringify(column.column))
      }
    });
    this.updateStoryPoints();
  }

  updateStoryPoints() {
    switch (this.sizeEstimation) {
      case "xS":
        this.storyPoints = 1;
        break;
      case "S":
        this.storyPoints = 2;
        break;
      case "M":
        this.storyPoints = 4;
        break;
      case "L":
        this.storyPoints = 8;
        break;
      case "xL":
        this.storyPoints = 16;
        break;
      default:
        this.storyPoints = 0;
    }
    if (this.status == "Not Planned") {
      this.storyPoints = 0;
    }
  }

  updateSubItemPoints() {
    this.subitemsPoints = this.subItems.reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
    this.subitemsDonePoints = this.subItems
      .filter((x) => x.status == "Done")
      .reduce((accumulator, object) => {
        return accumulator + object.storyPoints;
      }, 0);

    if (this.status == "Done") {
      this.percentDone = 100;
      this.doneStoryPoints = this.storyPoints;
    } else {
      if (this.subitemsPoints > 0) {
        this.percentDone = Math.round(
          (100 * this.subitemsDonePoints) / this.subitemsPoints,
        );
      }
    }
  }

  checkForPlanningIssues() {

    try {
      this.planningCheck = true;
      if (this.parent != "" && this.assignedTo.includes(",")) {
        this.planningCheckErrors[PlanningErrorsIndex.tooManyOwners] = true;
        this.planningCheck = false;
      }

      if (this.storyPoints == 0 && this.sizeEstimation != "No Effort") {
        this.planningCheck = false;
        this.planningCheckErrors[PlanningErrorsIndex.noEstimationError] = true;
      }
      if (this.subItems.length == 0 && this.storyPoints >= 4) {
        this.planningCheck = false;
        this.planningCheckErrors[PlanningErrorsIndex.itemNotBroken] = true;
      }

      this.subItems.forEach((item) => {
        if (item.storyPoints == 0 && item.sizeEstimation != "No Effort") {
          this.planningCheck = false;
          this.planningCheckErrors[PlanningErrorsIndex.noEstimationError] =
            true;
        }
        if (item.planningCheck == false) {
          this.planningCheck = false;
          this.planningCheckErrors[PlanningErrorsIndex.subItemError] = true;
        }
      });

      if (this.subItems.length > 0) {
        let subitemstot = this.subItems.reduce((accumulator, object) => {
          return accumulator + object.storyPoints;
        }, 0);
        if (
          subitemstot > this.storyPoints * 1.75 ||
          subitemstot < this.storyPoints * 0.75
        ) {
          this.planningCheck = false;
          this.planningCheckErrors[PlanningErrorsIndex.parentSizeError] = true;
        }
      }

      if (this.status == "Done") {
        if (this.DoneDate.getTime() == 0) {
          this.planningCheck = false;
          this.planningCheckErrors[PlanningErrorsIndex.noCompletionDate] = true;
          //console.log(this.title +  "  No done date !!!!!!!!!")
        }

        this.subItems.forEach((element) => {
          if (element.status != "Done") {
            this.planningCheck = false;
            this.planningCheckErrors[PlanningErrorsIndex.subitemNotDone] = true;
          }
        });
      }
    } catch {
      console.log("Error in plan check for " + JSON.stringify(this));
    }
  }
}
