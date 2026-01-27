import { userData } from "@/utils/users";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";


export const useUsersData = defineStore("usersStore", () => {

  const usersList: Ref<userData[]> = ref([]);
  const currentUser : Ref<userData> = ref()
  const orgUser : Ref<userData> = ref(new userData())

  function getUsers() : userData[]
  {
    return usersList.value;
  }

  function setUsers(data : userData[] )
  {
    usersList.value = data;
  }

  function setCurrentUser(data : userData)
  {
    currentUser.value = data;
  }

  function getCurrentUser() : userData
  {
    return (currentUser.value)
  }


  function getOrgUser() : userData
  {
    return (orgUser.value)
  }


  function setOrgUser(data : userData)
  {
    orgUser.value = data;
  }




  return {
    getUsers,
    setUsers,
    setCurrentUser,
    getCurrentUser,
    getOrgUser,
    setOrgUser
  };
});
