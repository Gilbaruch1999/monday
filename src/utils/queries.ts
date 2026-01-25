export function getBoardItemsQuery(boardid: string , groupid : string) {
 // var tmp: string =
 //   'query GetBoardItemsByGroup {   boards(ids: [1647137427]) {     items_page(query_params: {rules: [{column_id: "group", compare_value: ["group_mks964n9"], operator: any_of}]}) {       items {         name         id      column_values {       column {                 title               }                   text           }              subitems {           name           id            column_values {       column {                 title               }                   text           }              }     }          }     }   }'

  var tmp: string =
    'query GetBoardItemsByGroup {   boards(ids: [' + boardid +
    ']) { items_page(limit : 100 ,query_params: {rules: [{column_id: "group", compare_value: [' +
    groupid + '], operator: any_of}]}) {  items {   name   id  column_values {  column {  title  }  text } subitems { name id  column_values {  column { title  }  text  } } } } } }'

    return tmp
}

export function getDocContentQuery(docid: string) {

  var tmp: string =
    'query getDocContentQuery { docs (object_ids:' +  docid + ') { id name blocks(limit:200) {id type content}}}'

    return tmp
}



export function getAllUsersQuery() : string
{
  return 'query AllUsers {users { id name email is_admin photo_tiny } }'
}
