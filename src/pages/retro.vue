<script setup lang="ts">
import Breakdown from './breakdown.vue';
import Burndown from './burndown.vue';
import History from './history.vue';
import SprintGoals from './sprintGoals.vue';

</script>

<template>
<SprintGoals></SprintGoals>
<Burndown graph-type-prop='BurnDown' :graph-detailed-prop="false"></Burndown>
<Burndown graph-type-prop='BurnDown'></Burndown>
<Burndown graph-type-prop='BurnUp'></Burndown>

<History></History>
<br></br><br></br>
<Breakdown :retro-mode="true"></Breakdown>
</template>
