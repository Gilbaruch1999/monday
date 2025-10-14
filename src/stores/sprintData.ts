import { boardItem } from '@/utils/boarditem';
import { Sprint } from '@/utils/mondayparser';
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue';


export const useSprintData = defineStore('sprintData', () => {

    const sprintItems: Ref<boardItem[]> = ref([]);
    const curSprint : Ref<Sprint> = ref()
    const sprintList : Ref<Sprint[]> = ref([])

    function getsprintData(): boardItem[] {

            return sprintItems.value
    }


    function setsprintData(data: boardItem[]) {
        sprintItems.value = data;
    }


    function getsprintConfig(): Sprint {

            return curSprint.value
    }


    function setsprintConfig(data: Sprint) {
        curSprint.value = data;
    }


      function getsprintList(): Sprint[] {

            return sprintList.value
    }


    function setsprintList(list : Sprint[]) {
        sprintList.value = list;
    }



    return { getsprintData, setsprintData , getsprintConfig , setsprintConfig , getsprintList , setsprintList }

})


