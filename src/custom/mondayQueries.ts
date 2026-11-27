/* cspell:disable */
export function getBoardItemsQueryLast(boardid: string, groupid: string) {
  const tmp: string =
    "query GetBoardItemsByGroup {   boards(ids: [" +
    boardid +
    ']) { items_page(limit : 100 ,query_params: {rules: [{column_id: "group", compare_value: [' +
    groupid +
    "], operator: any_of}]}) {  items {   name   id  column_values {  column {  title  }  text } subitems { name id  column_values {  column { title  }  text  } } } } } }";

  return tmp;
}

export function getItemsIdyGroupQuery(groupid: string): string {
  const tmp: string =
    'query GetFilteredtemsByGroup {   \
  boards(ids: [5100968747]) {       \
    items_page(                     \
      limit: 100                     \
      query_params: {rules: [{column_id: "group", compare_value:  ["' +
    groupid +
    '"], operator: any_of}]}  \
    ) {       \
      items {   \
        id      \
      }         \
    }            \
  }             \
}  ';

  return tmp;
}

export function getBoardItemsByIdQuery(ids: string[]): string {
  let idsstring: string = "[";
  for (let index = 0; index < ids.length; index++) {
    idsstring = idsstring + ids[index];
    if (index < ids.length - 1) idsstring = idsstring + ", ";
  }
  idsstring = idsstring + "]";

  const tmp: string =
    "query getitembyid {    \
  items(ids: " + idsstring + ") {   \
    id    \
    name      \
     column_values {   \
          ... on StatusValue { \
        id                     \
        label                  \
        updated_at             \
      }                        \
      column { id title }   \
      text    \
    }   \
    subitems {    \
      id    \
      name    \
      parent_item {   \
        id  \
        name  \
      }     \
      column_values { \
           ... on StatusValue { \
        id  \
        label \
        updated_at  \
      }             \
        column { id title } \
        text  \
      }       \
      subitems {    \
        id          \
      name          \
      parent_item { \
        id          \
        name        \
      }             \
      column_values {       \
           ... on StatusValue {   \
        id                        \
        label               \
        updated_at          \
      }                     \
        column { id title } \
        text                 \
      }                     \
                            \
      }                     \
    }                       \
  }                         \
}  ";

  return tmp;
}

export function getAppConfigQuery(docid: string) {
  const tmp: string =
    "query getDocContentQuery { docs (object_ids:" +
    docid +
    ") { id name blocks(limit:200) {id type content}}}";

  return tmp;
}

export function getAllUsersQuery(): string {
  return "query AllUsers {users { id name email is_admin photo_tiny } }";
}

export function getBoardGroupsQuery(boardid: string): string {
  let tmp: string = "query Allboards { boards(ids: [";
  tmp = tmp + boardid + "]) { id name type groups { id title __typename } } }";

  return tmp;
}

export function getWriteLineQuery(): string {
  const tmp =
    'mutation writetext {create_doc_block(type: normal_text doc_id: 8701695 content:\
     "{\\"deltaFormat\\":[{\\"insert\\":\\"Code using api 123\\"}]}" )\
     { id } } ';

  return tmp;
}


export function updateValueQuery(boardid : string , itemid : string , colid : string , value : string)
{
    const tmp: string = 'mutation changeState{ change_simple_column_value( board_id: ' + boardid +
     ' item_id:' +  itemid + ' column_id: ' + '"' +  colid + '"' +  ' value:' +  '"' + value + '"' + ' ) {  id }}'

    return tmp;
}

