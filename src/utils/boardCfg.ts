import { userData } from "./users";

export class boardConfig {
  boardId: string = "";
  name: string = "";
  displayName: string = "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public createBoardConfigFromStorage(configFromStore: any) {
    this.boardId = configFromStore.boardId;
    this.name = configFromStore.name;
    this.displayName = configFromStore.displayName;
    return;
  }
}

export class appContext {
  boardId: number = -1;
  currentUser: userData = new userData();
}
