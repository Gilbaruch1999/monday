export function getBoardItemsQueryOld(boardid: string, groupid: string) {
  var tmp: string =
    "query GetBoardItemsByGroup {   boards(ids: [" +
    boardid +
    ']) { items_page(limit : 100 ,query_params: {rules: [{column_id: "group", compare_value: [' +
    groupid +
    "], operator: any_of}]}) {  items {   name   id  column_values {  column {  title  }  text } subitems { name id  column_values {  column { title  }  text  } } } } } }";

  return tmp;
}

export function getBoardItemsQuery(boardid: string, groupid: string): string {
  var tmp: string =
    ' query getBoardItemsByGroup { \
  boards(ids: [ ' + boardid + ' ]) { \
  name \
    items_page(limit : 100,query_params: {rules: [{column_id: "group", compare_value: ["' + groupid  + '"], operator: any_of}]}) { \
      items { \
        name \
        id \
     column_values { \
        ... on StatusValue { \
        id \
        label \
        updated_at \
      }\
      column { \
        id \
        title \
        type \
        settings \
      } \
      text \
    }\
        subitems { \
          name \
          id \
          board { \
            id \
          } \
           column_values { \
              ... on StatusValue { \
        id \
        label \
        updated_at \
      } \
      column { \
        id \
        title \
        type \
        settings \
      }         \
      text \
    } \
        } \
    } \
      } \
    } \
  } \ ';
  return tmp;
}

export function getAppConfigQuery(docid: string) {
  var tmp: string =
    "query getDocContentQuery { docs (object_ids:" +
    docid +
    ") { id name blocks(limit:200) {id type content}}}";

  return tmp;
}

export function getAllUsersQuery(): string {
  return "query AllUsers {users { id name email is_admin photo_tiny } }";
}

export function getBoardConfigQuery(boardid: string): string {
  var tmp: string = "query Allboards { boards(ids: [";
  tmp = tmp + boardid + "]) { id name type groups { id title __typename } } }";

  return tmp;
}

export function getWriteLineQuery(): string {
  var tmp =
    'mutation writetext {create_doc_block(type: normal_text doc_id: 8701695 content:\
     "{\\"deltaFormat\\":[{\\"insert\\":\\"Code using api 123\\"}]}" )\
     { id } } ';

  return tmp;
}

export function getWriteLineQuery1(textstring: string): string {
  var tmp =
    'mutation writetext {create_doc_block(type: normal_text doc_id: 8701695 content:\
     "{\\"deltaFormat\\":[{\\"insert\\":\\"' +
    textstring +
    '\\"}]}" )\
     { id } } ';

  return tmp;
}

export function getWriteLineQuery2(textstring: string, type: string): string {
  var tmp =
    "mutation writetext {create_doc_block(type: " +
    type +
    ' doc_id: 8701695 content:\
     "{\\"deltaFormat\\":[{\\"insert\\":\\"' +
    textstring +
    '\\"}]}" )\
     { id } } ';

  return tmp;
}

export function getStatusUpdateDate(ids: string): string {
  var tmp =
    "query getStatusDateChange{ \
  items(ids: " +
    ids +
    ') { \
    id \
    name \
     parent_item { \
      id \
    } \
    column_values(ids: ["status" , "status4__1"]) { \
      ... on StatusValue { \
        id \
        label \
        updated_at } } } }';

  return tmp;
}
