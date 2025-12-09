<template>
  <v-app>
    <v-main>
      <AppToolbar></AppToolbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import AppToolbar from './components/appToolbar.vue';

  //
</script>
<style>

.datatable th {
  background-color: #1867C0;
  font-size: 16px !important;
  font-weight: bolder;
  font-style: italic;
  color: white;

}

.datatable td {
  font-size: 14x !important;
  font-weight: bolder;
}

.tableitem {
  font-size: 14x !important;
  font-weight: bolder;
}

.Tablehlink {
  font-size: 14x !important;
  font-weight: bolder;
  color: DodgerBlue;
  text-decoration-line: underline;
}

.done_bg {
  background-color: lightgreen
}


.warn_bg {
  background-color: yellow
}

.error_bg {
  background-color: red
}

.PushedOut_bg {
  background-color: black
}

</style>
