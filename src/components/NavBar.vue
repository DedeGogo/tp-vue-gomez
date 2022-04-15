<template>
  <v-app-bar app color="secondary" dark>
    <v-btn icon @click="drawer = !drawer" color="succes"> </v-btn>
    <v-btn class="mx-2" :to="{ name: 'UserApp' }"> Espace Utilisateur </v-btn>
    <v-btn class="mx-2" :to="{ name: 'AdminApp' }"> Espace Admin </v-btn>
    <v-btn class="mx-2" :to="{ name: 'LoggedOut' }"> Logout </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: true,
  }),
}
</script>

<style></style>
