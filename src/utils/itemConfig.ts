
/*

strategic category can be anything
Domain is high level product description
Feature is sub item of domain

*/

let  category : any = ['User Needs' , 'Game Content' , 'Vision' , 'Monetization' , 'Cosmetics' , 'Technical debt']
let  domain : any = ['User Needs' , 'Game Content' , 'Vision' , 'Monetization' , 'Cosmetics' , 'Technical debt']





let  test2 : any =
{

 feature :  new Map<string, string[]>([
  ['Category', ["Admin"]],
  ['2', ["Editor"]]
])

}

const userRoles = new Map<string, string[]>([
  ['Category', ["Admin"]],
  ['2', ["Editor"]]
]);


const oldUserRoles = new Map<string, string>([
  ['Category', "Admin"],
  ['2', "Editor"]
]);
