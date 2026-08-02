interface mondayFields {
  id: string;
  title: string;
  status: string;
  type: string;
  assignedTo: string;
  domain: string;
  strategicCategory: string;
  goalCategory: string;
  sizeEstimation: string;
  storyPoints: number;
}

export enum PlanningErrorsIndex {
  noEstimationError = 0,
  tooManyOwners = 1,
  subItemError = 2,
  itemNotBroken = 3,
  parentSizeError = 4,
  noCompletionDate = 5,
  subitemNotDone = 6,
}

export class boardItem implements mondayFields {
  id: string = "";
  title: string = "";
  status: string = "";
  type: string = "";
  assignedTo: string = "";
  domain: string = "";
  strategicCategory: string = "";
  goalCategory: string = "";
  sizeEstimation: string = "";
  storyPoints: number = 0;

  doneStoryPoints: number;
  percentDone: number = 0;
  //subItems: boardItem[] = [];
  numOfSubitems: number = 0;
  subitemsPoints: number = 0;
  subitemsDonePoints: number;
  DoneDate: Date = new Date(0);
  planningStatus: string = "";
  planningCheck: boolean;
  planningCheckErrors: boolean[] = [];
  parent: string = "";
  rootItemId: string = "";
  constructor(item: any) {
    this.title = item.name;
    this.id = item.id;
    try {
      this.parent = item.parent_item.id;
      //console.log("Parent id " + this.parent)
    } catch {}
    this.storyPoints = 0;
    this.doneStoryPoints = 0;
    this.subitemsPoints = 0;
    this.subitemsDonePoints = 0;
    this.planningCheck = false;

    this.planningCheckErrors = new Array(
      Object.keys(PlanningErrorsIndex).filter((key) => isNaN(Number(key)))
        .length,
    ).fill(false);
    this.updateFields(item.column_values);
  }

  mondayUpdateFields(column_values: any) {
    //console.log('Columns ' + JSON.stringify(column_values))
    column_values.forEach((column: any) => {
      let internalId = columnToId.get(column.column.id);
      switch (internalId) {
        case statusID:
          this.status = column.text;
          if (this.status == "Done") {
            let donedate = new Date(column.updated_at);
            donedate.setHours(0, 0, 0, 0);
            this.DoneDate = donedate;
          }
          break;
        case domainID:
          this.domain = column.text;
          break;
        case strategicCategoryID:
          this.strategicCategory = column.text;
          break;
        case goalCategoryID:
          this.goalCategory = column.text;
          break;
        case sizeEstimationID:
          this.sizeEstimation = column.text;
          //console.log("Size is " + this.sizeEstimation)
          break;
        case assignedToID:
          this.assignedTo = column.text;
          break;
        case issueTypeID:
          this.type = column.text;
          break;
        case planningStatusID:
          this.planningStatus = column.text;
          break;
        default:
        //console.log('undefined column ' + JSON.stringify(column.column))
      }
    });

    this.updateStoryPoints();
  }

  updateFields(column_values: any) {
    // todo add other apps here
    this.mondayUpdateFields(column_values);
  }

  calcPercentDone() {
    if (this.status == "Done") return 100;
    if (this.storyPoints == 0) return 0;
    else return Math.round((100 * this.doneStoryPoints) / this.storyPoints);
  }

  updateStoryPoints() {
    if (this.type == "Task") this.storyPoints = this.getPointsFromSize()

  }

  getPointsFromSize(): number {
    var ret_val: number = 0;
    switch (this.sizeEstimation) {
      case "xS":
        ret_val = 1;
        break;
      case "S":
        ret_val = 2;
        break;
      case "M":
        ret_val = 4;
        break;
      case "L":
        ret_val = 8;
        break;
      case "xL":
        ret_val = 16;
        break;
      default:
        ret_val = 0;
    }
    if (this.status == "Not Planned") {
      ret_val = 0;
    }
    return ret_val;
  }

  checkPlanningStatusTask() {
    if (this.assignedTo.includes(",")) {
      this.setErrorIndication(PlanningErrorsIndex.tooManyOwners);
    }
    if (this.storyPoints == 0 && this.sizeEstimation != "No Effort") {
      this.setErrorIndication(PlanningErrorsIndex.noEstimationError);
    }
    if (this.storyPoints >= 4) {
      this.setErrorIndication(PlanningErrorsIndex.itemNotBroken);
    }
  }

  checkPlanningStatusStory() {

    this.planningCheckErrors = []
     if (this.storyPoints == 0 && this.sizeEstimation != "No Effort") {
      this.setErrorIndication(PlanningErrorsIndex.noEstimationError);
    }

    if (this.storyPoints >= 4 && this.numOfSubitems == 0) {
      this.setErrorIndication(PlanningErrorsIndex.itemNotBroken);
    }

  }


  checkSizeEstimation() {
    // check that story size is correct compare to size estimation

    var points = this.getPointsFromSize();
    if (points > this.storyPoints * 1.75 || points < this.storyPoints * 0.75) {
      this.setErrorIndication(PlanningErrorsIndex.parentSizeError);
    }
  }



  setErrorIndication(index: PlanningErrorsIndex) {
    this.planningCheck = false;
    this.planningCheckErrors[index] = true;
  }

  checkPlanningStatusEpic() {

  }

   checkPlanningStatusFeature() {

  }

  checkForPlanningIssues() {
    this.planningCheck = true;
    switch (this.type) {
      case "Task":
        this.checkPlanningStatusTask();
        break;
      case "Story":
        this.checkPlanningStatusStory();
       this. checkSizeEstimation()
        break;
        case "Epic":
        this.checkPlanningStatusEpic();
        break;
      case "Feature":
        this.checkPlanningStatusFeature();
        break;
    }
  }
}

let columnToId: Map<string, number> = new Map();

const assignedToID = 1;
const statusID = 2;
const domainID = 3;
const strategicCategoryID = 4;
const goalCategoryID = 5;
const sizeEstimationID = 6;
const issueTypeID = 7;
const planningStatusID = 8;

export function initColumnMap() {
  columnToId.clear();
  columnToId.set("multiple_person_mkr4pbc8", assignedToID);
  columnToId.set("multiple_person_mkt7ggz9", assignedToID);
  columnToId.set("person", assignedToID);

  columnToId.set("status", statusID);
  columnToId.set("status4__1", statusID);
  columnToId.set("color_mm5k4f4", statusID);

  columnToId.set("color_mkperz3j", domainID);
  columnToId.set("color_mm5fj7av", domainID);

  columnToId.set("color_mkr3bggc", strategicCategoryID);
  columnToId.set("color_mm5fqavz", strategicCategoryID);

  columnToId.set("color_mktax0mb", goalCategoryID);
  columnToId.set("color_mm5k7m7a", goalCategoryID);

  columnToId.set("status_17__1", sizeEstimationID);
  columnToId.set("status_19__1", sizeEstimationID);
  columnToId.set("color_mm5fnp1x", sizeEstimationID);

  columnToId.set("color_mm5fx8bd", issueTypeID);

  columnToId.set("color_mm5fb7mm", planningStatusID);
}
