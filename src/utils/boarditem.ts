import { createDateFromText1 } from "./utils";

export class boardItem {
  id: string;
  title: string;
  domain: string;
  stratigicCategory: string;
  type: string;
  assignedTo: string;
  sizeEstimation: string;
  storyPoints: number;
  doneStoryPoints: number;
  percentDone : number
  status: string;
  subItems: boardItem[];
  subitemsPoints: number;
  subitemsDonePoints: number;
  DoneDate: Date;
  constructor() {
    this.storyPoints = 0;
    this.doneStoryPoints = 0;
    this.subItems = [];
    this.subitemsPoints = 0;
    this.subitemsDonePoints = 0;
    this.percentDone = 0;
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
        case "SubItemDoneDate":
          this.DoneDate = createDateFromText1(column.text);
          //console.log('Done Date' + column.text)

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
    this.subitemsDonePoints = this.subItems
      .filter((x) => x.status == "Done")
      .reduce((accumulator, object) => {
        return accumulator + object.storyPoints;
      }, 0);

    if (this.status == "Done") {
      this.percentDone = 100
      this.doneStoryPoints = this.storyPoints;
      //console.log('Story is done')
    }
    else
    {
      if (this.subitemsPoints > 0 )
      {
        this.percentDone =  Math.round((100 * this.doneStoryPoints) / this.subitemsPoints)
      }
    }
    /* console.log("Story " + this.title)
     console.log('Done Story points ' + this.doneStoryPoints)
     console.log('Done subitems Story points ' + this.subitemsDonePoints)*/
  }
}
