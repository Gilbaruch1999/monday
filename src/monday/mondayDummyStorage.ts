/* cspell:disable */
import { Sprint } from "@/utils/sprintInfo";
import { createDateFromLocalText } from "@/utils/utils";

var boardinfoString : string = ""

var dummySprints : any [] = [
  {name : 'Sprint 39' , duration : 14 , startDate : "12.4.2026" , orgName : "Sprint 39 org",
   boardid : "1647137427" , groupid : "group_mm1sv64v" , workingDays : 8  ,
  nonWorkingDays : [ "16.4.2026" , "17.4.2026" , "21.4.2026" ,"22.4.2026" ,
    "24.4.2026" , "25.4.2026"]
  },
   {name : 'Sprint 40' , duration : 14 , startDate : "26.4.2026" , orgName : "Sprint 40 org",
   boardid : "1647137427" , groupid : "group_mm1rp91q" , workingDays : 10  ,
  nonWorkingDays : [ "1.5.2026" , "2.5.2026",
    "8.5.2026" , "9.5.2026"]
  },
  {name : 'Sprint 41' , duration : 14 , startDate : "10.5.2026" , orgName : "Sprint 41 org",
   boardid : "1647137427" , groupid : "group_mm25gkjt" , workingDays : 9  ,
  nonWorkingDays : [ "15.5.2026" , "16.5.2026",
    "21.5.2026" , "22.5.2026" ,"23.5.2026" ]
  }
]

export function dummyWriteItem(key : string , item : string) {
  switch (key)
  {
    case 'boardInfo' :
      boardinfoString = item ;
    break;
    default :
    break;
  }

}

export function dummyReadItem(key : string)  : string{
  let ret_val : string = ""
   switch (key)
  {
    case 'boardInfo' :
      ret_val = JSON.stringify(dummySprints) ;
    break;
    default :
    break;
  }

  return ret_val;

}
