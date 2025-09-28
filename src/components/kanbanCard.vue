<template>
<v-card>
<v-card-title>{{ item.title }}</v-card-title>
<v-chip size="x-small" variant="flat" color="deep-purple-lighten-1">{{ item.sizeEstimation }}</v-chip>
<span class="ma-1">{{ item.assignedTo }}</span> <span class="ma-1">{{ item.goalCategory }}</span>

</v-card>

</template>

<script setup lang='ts'>
import { boardItem } from '@/utils/boarditem';



const props = defineProps<{
  item : boardItem
}>()

</script>
