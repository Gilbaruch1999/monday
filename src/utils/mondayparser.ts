export function extractBoardId(context: string) {
  console.log(' @@@' + context)
  context.replace('\\', '')
  console.log(' !!!' + context)

  let jsonObject = JSON.parse(context)

  console.log(' !!!' + JSON.stringify(jsonObject.theme))

  return jsonObject
}
