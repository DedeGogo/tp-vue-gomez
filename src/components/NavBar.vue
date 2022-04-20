<template>
  <v-app-bar color="primary" :theme="getTheme">
    <v-btn icon @click="drawer = !drawer" color="secondary"> </v-btn>
    <v-btn color="secondary" class="mx-2" :to="{ name: 'UserApp' }" @click="setUserTheme"> Espace Utilisateur </v-btn>
    <v-btn color="secondary" class="mx-2" :to="{ name: 'AdminApp' }" @click="setAdminTheme"> Espace Admin </v-btn>
    <v-btn color="secondary" class="mx-2" @click="handleLogOut"> Logout </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    drawer: true,
  }),
  computed: {
    getTheme: function () {
      return this.$store.state.theme
    },
  },
  methods: {
    handleLogOut: async function () {
      await this.$store.dispatch('logOut')
    },
    setUserTheme: async function () {
      await this.$store.dispatch('changeTheme', 'UserTheme')
    },
    setAdminTheme: async function () {
      await this.$store.dispatch('changeTheme', 'AdminTheme')
    },
  },
}
</script>

<style></style>
