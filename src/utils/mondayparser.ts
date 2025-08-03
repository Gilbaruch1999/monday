export class groupMap
{
  boardid : string;
  groupid : string;
}

export let BoardToGroupMap : groupMap[] = [
  {boardid : "1647137427" , groupid : "group_mks9stxg"} , {boardid : "1661635292" , groupid : "group_mkt8hnp0"}
]

/*
export function extractBoardId(context: string) {
  console.log(' @@@' + context)
  context.replace('\\', '')
  console.log(' !!!' + context)

  let jsonObject = JSON.parse(context)

  console.log(' !!!' + JSON.stringify(jsonObject.theme))

  return jsonObject
}*/
