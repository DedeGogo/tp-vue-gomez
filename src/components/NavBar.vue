<template>
  <v-app-bar app color="secondary" dark>
    <v-btn icon @click="drawer = !drawer" color="succes"> </v-btn>

    <v-btn :to="{ name: 'AdminApp' }"> Espace Admin </v-btn>
    <v-btn :to="{ name: 'LoggedOut' }"> Logout </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  data: () => ({
    drawer: true,
  }),
};
</script>

<style></style>

- IN Style : it will have two styes depending on weather it is called by UserApp
or by AdminApp
