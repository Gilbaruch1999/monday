import { createDateFromText1 } from './utils'

export class boardItem {
  id: string
  title: string
  domain: string
  assignedTo: string
  sizeEstimation: string
  storyPoints: number
  doneStoryPoints: number
  status: string
  subItems: boardItem[]
  subitemPoints: number
  subitemDonePoints: number
  DoneDate: Date
  constructor() {
    this.storyPoints = 0
    this.doneStoryPoints = 0
    this.subItems = []
    this.subitemPoints = 0
    this.subitemDonePoints = 0
  }

  updateFields(column_values) {
    //console.log('Columns ' + JSON.stringify(column_values))
    column_values.forEach((column) => {
      switch (column.column.title) {
        case 'Status':
          this.status = column.text
          break
        case 'Domain':
          this.domain = column.text
          break
        case 'Story Points':
          this.sizeEstimation = column.text
          break
        case 'Assigned':
          this.assignedTo = column.text
          break
        case 'Points':
          if (column.text != '') {
            this.storyPoints = parseInt(column.text)
          }
          break
        case 'DoneDate':
        case 'SubItemDoneDate':
          this.DoneDate = createDateFromText1(column.text)
          console.log('Done Date' + column.text)

          break
        default:
        //console.log('undefined column ' + JSON.stringify(column.column))
      }
    })
    this.updateStoryPoints()
  }

  updateStoryPoints() {
    switch (this.sizeEstimation) {
      case 'xS':
        this.storyPoints = 1
        break
      case 'S':
        this.storyPoints = 2
        break
      case 'M':
        this.storyPoints = 4
        break
      case 'L':
        this.storyPoints = 8
        break
      case 'xL':
        this.storyPoints = 16
        break
      default:
        this.storyPoints = 0
    }
  }

  updateSubItemPoints() {
    this.subitemPoints = this.subItems.reduce((accumulator, object) => {
      return accumulator + object.storyPoints
    }, 0)
    this.subitemDonePoints = this.subItems
      .filter((x) => x.status == 'Done')
      .reduce((accumulator, object) => {
        return accumulator + object.storyPoints
      }, 0)

    if (this.status == 'Done') {
      this.doneStoryPoints = this.storyPoints
      //console.log('Story is done')
    } else {
      if (this.subitemPoints > 0) {
        var percent = this.subitemDonePoints / this.subitemPoints
        //console.log('Percent ' + percent)
        this.doneStoryPoints = Math.round(this.storyPoints * percent)
      }
    }

    //console.log('Done Story points ' + this.doneStoryPoints)
  }
}
