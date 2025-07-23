export function getBoardItemsQuery(boardid: string) {
  var tmp: string =
    'query GetBoardItemsByGroup {   boards(ids: [1647137427]) {     items_page(query_params: {rules: [{column_id: "group", compare_value: ["group_mks964n9"], operator: any_of}]}) {       items {         name         id      column_values {       column {                 title               }                   text           }              subitems {           name           id            column_values {       column {                 title               }                   text           }              }     }          }     }   }'
  return tmp
}
