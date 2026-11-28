/* cspell:disable */
import { boardItem } from "@/utils/boarditem";
import { convertJSONtoSprint, Sprint } from "@/utils/sprintInfo";

import { SeamlessApiClient } from "@mondaydotcomorg/api";
import {
  getAllUsersQuery,
  getBoardGroupsQuery,
  getBoardItemsByIdQuery,
  getItemsIdyGroupQuery,
} from "./mondayQueries";
import {
  getDummyIdsList,
  getMondayDummyBoardItems,
  getMondayDummyContext,
} from "@/monday/mondayBoardItems";
import mondaySdk from "monday-sdk-js";
const mondayApiSdk = mondaySdk();
import { sprintHistory } from "@/utils/historyData";
import { BoardViewContext } from "@/monday/mondayAppInterface";
import { appContext, boardConfig } from "@/utils/boardCfg";
import { userData } from "@/utils/users";
import { getMondayDummyUsers } from "@/monday/mondayDummyUsers";
import { getMondayDummySprintsConfig } from "@/monday/mondayDummyStorage";
const apiClient = new SeamlessApiClient();

/*
read board items per sprint
Read features , epic and stories
*/
export async function getItemsFromApp(curSprint: Sprint): Promise<boardItem[]> {
  const ret_val: boardItem[] = [];
  let boarddata;
  let itemIds;
  let qstr = getItemsIdyGroupQuery(curSprint.groupid);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const idsdata: any = await apiClient.request(qstr);

 // console.log("return from API get items from group " + JSON.stringify(idsdata));
  try {
    itemIds = idsdata.data.data.boards[0].items_page.items.map(
      (x: { id: string }) => x.id,
    );
    //console.log("ids " + JSON.stringify(itemIds));

    qstr = getBoardItemsByIdQuery(itemIds);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await apiClient.request(qstr);
    //console.log("get boards from api" + JSON.stringify(res));
    boarddata = res.data.data;
  } catch {
    //console.log("No API using dummy data");
    boarddata = getMondayDummyBoardItems().data;
    itemIds = getDummyIdsList().data.boards[0].items_page.items.map(
      (x: { id: string }) => x.id,
    );
  }
  //console.log("Board data is " + JSON.stringify(boarddata));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  boarddata?.items.forEach((item: { subitems: any[] }) => {
    const featureItem: boardItem = new boardItem(item);
    if (featureItem.type == "Feature") {
      const tmpidx = itemIds.findIndex((x: string) => x == featureItem.id);
      if (tmpidx != -1) {
        // console.log("Setting sort order of item " + featureItem.title + " to " + tmpidx)
        featureItem.sortOrder = tmpidx;
      }
    }
    ret_val.push(featureItem);
    const rootid = featureItem.id;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item.subitems.forEach((subItemElement: any) => {
      const subitem: boardItem = new boardItem(subItemElement);
      // console.log("Item type " + subitem.type)
      if (subitem.type == "Task" || subitem.type == "Story") {
        subitem.rootItemId = rootid;
        subitem.goalCategory = featureItem.goalCategory;
      }
      ret_val.push(subitem);
    }); // end 2Nd level loop
  }); // end item loop

  console.log("Number of items " + ret_val.length);
  //console.log("Item 0  " + JSON.stringify(ret_val[0]));

  return ret_val;
}

/*
read the history data velocity and predictability per sprint
*/

export async function getHistoryData(): Promise<sprintHistory[]> {
  let history: sprintHistory[];
  const res = await mondayApiSdk.storage.instance.getItem("historyInfo");
  if (res.data.success) {
    history = JSON.parse(res.data.value);
  } else {
    return [];
  }
  // console.log("History from storage  " + JSON.stringify(history))
  return history;
}

/*
read application context
*/

export async function getAppContext(): Promise<appContext> {
  const res = await mondayApiSdk.get("context");
  let dataFromApi;
  const ret_val: appContext = new appContext();
  // console.log(" Res  " + JSON.stringify(res));

  if (isApiResponseValid(res)) {
    dataFromApi = res.data as unknown as BoardViewContext;
  } else {
    dataFromApi = getMondayDummyContext();
  }

  //console.log("App context " + JSON.stringify(dataFromApi));
  ret_val.boardId = dataFromApi.boardId;
  ret_val.currentUser.id = dataFromApi.user.id;
  return ret_val;
}

/*
read the list of all users
*/
export async function getAppUserList(): Promise<userData[]> {
  const query = getAllUsersQuery();
  const res: unknown = await apiClient.request(query);
  let dataFromApi;
  let ret_val: userData[];

  if (isApiResponseValid(res)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dataFromApi = res.data;
  } else {
    dataFromApi = getMondayDummyUsers();
  }
  // eslint-disable-next-line prefer-const
  ret_val = mondayCreateUserList(dataFromApi);

  return ret_val;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isApiResponseValid(res: any): boolean {
  let ret_val = false;
  if (typeof res === "object" && res !== null && "data" in res) ret_val = true;

  return ret_val;
}

/**********************************************************************************************
create the list of users
***********************************************************************************************/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mondayCreateUserList(data: any): userData[] {
  const ret_val: userData[] = [];
  data.data.users.forEach(
    (user: {
      name: string;
      email: string;
      id: string;
      is_admin: boolean;
      photo_tiny: string;
    }) => {
      const newUser = new userData();
      newUser.name = user.name;
      newUser.email = user.email;
      newUser.id = user.id;
      newUser.is_admin = user.is_admin;
      newUser.image_link = user.photo_tiny;

      ret_val.push(newUser);
    },
  );

  return ret_val;
}

/**********************************************************************************************
read the sprint configuration (i.e groups ) from storage and app boards
***********************************************************************************************/
export async function getSprintConfiguration(
  context: appContext,
): Promise<Sprint[]> {
  /*
  1) Get from storage all sprints related to this board - create initial sprint list
  2) Get from monday API all group ids (i.e sprints)
  3) Add all groups which do not apear in the sprints from storage

  */

  let ret_val: Sprint[] = [];
  const res = await mondayApiSdk.storage.instance.getItem("boardInfo");
  //console.log("storage result from api " + JSON.stringify(res));
  if (isApiResponseValid(res)) {
    //console.log("Result from storage key " + JSON.stringify(res.data.value));
    const arr = JSON.parse(res.data.value);
    for (const element of arr) {
      const sprint: Sprint = convertJSONtoSprint(element);
      // console.log("Sprint " + sprint.name + " start date " + sprint.startDate.toLocaleDateString())
      ret_val.push(sprint);
    }
  }
  //console.log("Sprint from storage key " + JSON.stringify(ret_val));

  // read all groups in the board
  const query = getBoardGroupsQuery(context.boardId.toString());
  const apiRes: unknown = await apiClient.request(query);
  if (isApiResponseValid(apiRes)) {
    //console.log("Sprints from application " + JSON.stringify(apiRes));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    apiRes.data.data.boards.forEach((board) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      board.groups.forEach((group: { id: any; title: any }) => {
        const id = group.id;
        const title = group.title;
        const index = ret_val.findIndex((x) => x.groupid == id);
        if (index == -1) {

          const newSprint: Sprint = new Sprint();
          newSprint.boardid = context.boardId.toString();
          newSprint.groupid = id;
          newSprint.orgName = title;
          newSprint.name = title;
          console.log("Found new sprint !!!!!! " + JSON.stringify(newSprint))
          ret_val.push(newSprint);
        }
      });
    });
  } else {
    ret_val = getMondayDummySprintsConfig();
  }

  return ret_val;
}


export async function getBoardConfiguration(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  context: appContext,
): Promise<boardConfig> {
  const ret_val: boardConfig = new boardConfig();

  const res = await mondayApiSdk.storage.instance.getItem("boardConfig");
  console.log( "storage result from get board config api " + JSON.stringify(res));
  if (isApiResponseValid(res)) {
    ret_val.createBoardConfigFromStorage(res.data.value);
  }
  else
  {
    ret_val.displayName = "test 1"
  }

  console.log("Board configuration " + JSON.stringify(ret_val))
  return ret_val;
}
