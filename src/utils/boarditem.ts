import { createDateFromText2 } from "./utils";

export class boardItem {
  id: string;
  title: string;
  domain: string;
  stratigicCategory: string;
  goalCategory: string;
  type: string;
  assignedTo: string;
  sizeEstimation: string;
  storyPoints: number;
  doneStoryPoints: number;
  percentDone: number;
  status: string;
  subItems: boardItem[];
  subitemsPoints: number;
  subitemsDonePoints: number;
  DoneDate: Date;
  startDate: Date;
  starWorktDate: Date;
  planningStatus: boolean;
  planningCheck: boolean;
  parent : string;
  constructor() {
    this.storyPoints = 0;
    this.doneStoryPoints = 0;
    this.subItems = [];
    this.subitemsPoints = 0;
    this.subitemsDonePoints = 0;
    this.percentDone = 0;
    this.planningStatus = true;
    this.planningCheck = false;
    this.parent = ""
  }

  updateFields(column_values) {
    //console.log('Columns ' + JSON.stringify(column_values))
    column_values.forEach((column) => {
      switch (column.column.title) {
        case "Status":
          this.status = column.text;
          break;
        case "Domain":
          this.domain = column.text;
          break;
        case "Strategic Category":
          this.stratigicCategory = column.text;
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
          this.starWorktDate = createDateFromText2(column.text);
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
  }

  updateSubItemPoints() {
    this.subitemsPoints = this.subItems.reduce((accumulator, object) => {
      return accumulator + object.storyPoints;
    }, 0);
    //console.log("subitem points " + this.subitemsPoints)
    this.subitemsDonePoints = this.subItems
      .filter((x) => x.status == "Done")
      .reduce((accumulator, object) => {
        return accumulator + object.storyPoints;
      }, 0);
      //console.log("subitem done points " + this.subitemsDonePoints)

    if (this.status == "Done") {
      this.percentDone = 100;
      this.doneStoryPoints = this.storyPoints;
      //console.log('Story is done')
    } else {
      if (this.subitemsPoints > 0) {
        this.percentDone = Math.round(
          (100 * this.subitemsDonePoints) / this.subitemsPoints
        );
        //console.log("Percent done " + this.percentDone)
      }
    }
    /* console.log("Story " + this.title)
     console.log('Done Story points ' + this.doneStoryPoints)
     console.log('Done subitems Story points ' + this.subitemsDonePoints)*/
  }

checkForPlanningIssues() {
    this.planningCheck = true;
    // if (this.planningStatus != "Planning") return;
    //console.log("Checking planning status " + JSON.stringify(this))
    if (this.storyPoints == 0 && this.sizeEstimation != "No Effort")
    {
      this.planningCheck = false;
      //console.log("Planning error 1 0 estimation " + JSON.stringify(this))
    }
    if (this.subItems.length == 0 && this.storyPoints >= 4)
      this.planningCheck = false;
    this.subItems.forEach((item) => {
      if (item.storyPoints == 0 && item.sizeEstimation != "No Effort")
      {
        this.planningCheck = false;
        console.log("Planning error 2 0 estimation " + JSON.stringify(item.sizeEstimation) + " Name " + item.title + " Points " + item.storyPoints)
      }
    });

    if (this.subItems.length > 0) {
      let subitemstot = this.subItems.reduce((accumulator, object) => {
        return accumulator + object.storyPoints;
      }, 0);
      if (subitemstot > this.storyPoints * 1.75) {
        this.planningCheck = false;
      }
    }
    if (this.status == "Done")
    {
      this.subItems.forEach(element => {
        if (element.status != "Done")
          this.planningCheck = false

      });
    }
  }


}
