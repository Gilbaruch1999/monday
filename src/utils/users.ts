export class userData {
  id: string = "";
  name: string ="";
  email: string = "";
  is_admin: boolean = false;
  image_link : string = ""
}

export function createUserList(data: any): userData[] {
  let ret_val: userData[] = [];
  data.data.users.forEach((user) => {
    let newUser = new userData();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.id = user.id;
    newUser.is_admin = user.is_admin;
    newUser.image_link = user.photo_tiny;

    ret_val.push(newUser);
  });

  return ret_val;
}

export function findUser(list : userData[] , name : string) : userData
{
  let index = list.findIndex(x=>x.name == name)
  if (index != -1)
  return list[index]
  else
    return null;

}
