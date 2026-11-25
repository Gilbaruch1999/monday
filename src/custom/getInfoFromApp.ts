/* cspell:disable */
import { boardItem } from "@/utils/boarditem";
import { Sprint } from "@/utils/sprintInfo";

import { SeamlessApiClient } from "@mondaydotcomorg/api";
import { getBoardItemsByIdQuery, getItemsIdyGroupQuery } from "./mondayQueries";
import {
  getDummyIdsList,
  getMondayDummyBoardItems,
  getMondayDummyContext,
} from "@/monday/mondayBoardItems";
import mondaySdk from "monday-sdk-js";
const mondayApiSdk = mondaySdk();
import { sprintHistory } from "@/utils/historyData";
import { BaseMondayContext } from "@/monday/mondayAppInterface";
const apiClient = new SeamlessApiClient();

export async function getItemsFromApp(curSprint: Sprint): Promise<boardItem[]> {
  const ret_val: boardItem[] = [];
  let boarddata;
  let itemIds;
  let qstr = getItemsIdyGroupQuery(curSprint.groupid);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const idsdata: any = await apiClient.request(qstr);

  console.log("return from API " + JSON.stringify(idsdata));
  try {
    itemIds = idsdata.data.data.boards[0].items_page.items.map(
      (x: { id: string }) => x.id,
    );
    console.log("ids " + JSON.stringify(itemIds));

    qstr = getBoardItemsByIdQuery(itemIds);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await apiClient.request(qstr);
    console.log("get boards from api" + JSON.stringify(res));
    boarddata = res.data.data;
  } catch {
    console.log("No API using dummy data");
    boarddata = getMondayDummyBoardItems().data;
    itemIds = getDummyIdsList().data.boards[0].items_page.items.map(
      (x: { id: string }) => x.id,
    );
  }
  console.log("Board data is " + JSON.stringify(boarddata));
  //console.log("item ids " + JSON.stringify(itemIds));
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

export async function getAppContext(): Promise<BaseMondayContext> {
  const res = await mondayApiSdk.get("context");
  let dataFromApi;
  console.log(" Res  " + JSON.stringify(res));

  if (typeof res.data === "undefined") {
    dataFromApi = getMondayDummyContext();
  } else {
      dataFromApi = res.data as unknown as BaseMondayContext;
  }
  console.log("App context " + JSON.stringify(dataFromApi));
  return dataFromApi as BaseMondayContext;

  /*
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let context: any
  if (getFromDummy.value) {
    context = getMondayDummyContext()
    bconfig.value.boardId = context['boardId']
  } else {
    // console.log("Get from API async ")
    const res = await mondayapi.get('context')
    // console.log("Res " + JSON.stringify(res))
    context = res.data
    try {
      bconfig.value.boardId = context['boardId']
      console.log('Board id ' + bconfig.value.boardId)
    } catch {  }
  }
  currentUser.value.id = context['user'].id

  // console.log("board id " + boardId.value)*/
}
