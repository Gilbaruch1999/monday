export function getBoardItemsQuery(boardid: string , groupid : string) {

  var tmp: string =
    'query GetBoardItemsByGroup {   boards(ids: [' + boardid +
    ']) { items_page(limit : 100 ,query_params: {rules: [{column_id: "group", compare_value: [' +
    groupid + '], operator: any_of}]}) {  items {   name   id  column_values {  column {  title  }  text } subitems { name id  column_values {  column { title  }  text  } } } } } }'

    return tmp
}

export function getAppConfigQuery(docid: string) {

  var tmp: string =
    'query getDocContentQuery { docs (object_ids:' +  docid + ') { id name blocks(limit:200) {id type content}}}'

    return tmp
}



export function getAllUsersQuery() : string
{
  return 'query AllUsers {users { id name email is_admin photo_tiny } }'
}


export function getBoardConfigQuery( boardid : string) : string
{

var tmp : string = 'query Allboards { boards(ids: ['
tmp = tmp + boardid + ']) { id name type groups { id title __typename } } }'

return tmp
}
