export class boardConfig
{
  boardId : string = "";
  name : string = "";
  displayName : string =""


public createBoardConfigFromStorage(configFromStore : any)
{
  this.boardId = configFromStore.boardId
  this.name = configFromStore.name
  this.displayName = configFromStore.displayName
  return;
}
}
