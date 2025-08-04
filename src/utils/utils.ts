export function isIndexOnWeekEnd(index: number) {
  if (index == 5 || index == 6 || index == 12 || index == 13) return true
  else return false
}

export function IsWorkingDay(index: number, noWorkingDays: number[]): boolean {
  var ret_val = false
  if (noWorkingDays.findIndex((x) => x == index) == -1) ret_val = true

  return ret_val
}

export function addDays(date: Date, days: number): number {
  return date.getTime() + days * 1000 * 3600 * 24
}

export const MsecInOneDay = 1000 * 3600 * 24

export function getDaysdiff(date1: Date, date2: Date): number {

  var res = -1
  try {
    res = Math.floor((date1.getTime() - date2.getTime()) / MsecInOneDay)
  } catch {
    console.log("Error in dif. date1  " + date1 + " date 2 " + date2  )
  }

  return res
}

export function geNumberofWorkingDays(date1: Date, date2: Date): number {
  //console.log("VVV " + JSON.stringify(date1))
  var ret_val = 0
  var index = getDaysdiff(date2, date1)
  var curDate = new Date(date1)
  for (let i = 0; i < index; i++) {
    var day = curDate.getDay()
    if (day < 6) ret_val++
  }

  //console.log('Remaining working days ' + ret_val)
  return ret_val
}

export function createDateFromText1(stringdate: string) {
  var retval: Date
  // format dd-mm-yyyy
  try {
    var tmp = stringdate.split('-')
    if (tmp.length != 3) return null
    else {
      retval = new Date()
      retval.setFullYear(parseInt(tmp[2]))
      retval.setMonth(parseInt(tmp[1]) - 1)
      retval.setDate(parseInt(tmp[0]))
    }
  } catch {}
  //console.log('Date is ' + retval.toLocaleDateString())
  return retval
}


export function createDateFromText2(stringdate: string) {

  var retval: Date
  // format yyyy-mm-dd
  try {
    var tmp = stringdate.split('-')
    if (tmp.length != 3) return null
    else {
      retval = new Date()
      retval.setFullYear(parseInt(tmp[0]))
      retval.setMonth(parseInt(tmp[1]) - 1)
      retval.setDate(parseInt(tmp[2]))
    }
  } catch {
    console.log("Error in create date from text 2")
  }
  //console.log('Date is ' + retval.toLocaleDateString())
  return retval
}
