<template>
  <v-app-bar app color="secondary" dark>
    <v-btn icon @click="drawer = !drawer" color="succes"> </v-btn>
    <v-btn class="mx-2" :to="{ name: 'UserApp' }"> Espace Utilisateur </v-btn>
    <v-btn class="mx-2" :to="{ name: 'AdminApp' }"> Espace Admin </v-btn>
    <v-btn class="mx-2" @click="handleLogOut"> Logout </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: true,
  }),
  methods: {
    handleLogOut: async function () {
      await this.$store.dispatch('logOut')
    },
  },
}
</script>

<style></style>
