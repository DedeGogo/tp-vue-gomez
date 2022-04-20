<template>
  <v-navigation-drawer v-model="drawer" color="primary" :theme="getTheme">
    <v-list-item v-for="entry in contentType" :key="entry.id">
      <router-link :to="{ name: entry.page }">{{ entry.legend }}</router-link>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: ['contentType'],
  data: function () {
    return {
      drawer: true,
    }
  },
  computed: {
    getTheme: function () {
      console.log(`theme ${this.$store.state.theme}`)
      return this.$store.state.theme
    },
  },
}
</script>

<style></style>
