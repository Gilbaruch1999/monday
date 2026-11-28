import { userData } from "./users";

export class boardConfig {
  boardId: string = "";
  name: string = "";
  displayName: string = "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public createBoardConfigFromStorage(configFromStore: any) {
    const data = JSON.parse(configFromStore); // Converts to a normal JSON string
    console.log("Converted 1 " + JSON.stringify(data))

    this.boardId = data.boardId;
    this.name = data.name;
    this.displayName = data.displayName;
    return;
  }
}

export class appContext {
  boardId: number = -1;
  boardName : string = "";
  boardDisplayName = ""
  currentUser: userData = new userData();
}
