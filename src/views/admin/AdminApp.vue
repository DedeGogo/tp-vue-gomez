<template>
  <v-app>
    <nav-bar />
    <nav-drawer />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import NavDrawer from "../../components/NavDrawer.vue";
import NavBar from "../../components/NavBar.vue";
import AppFooter from "../../components/AppFooter.vue";

export default {
  components: { NavDrawer, NavBar, AppFooter },
  name: "UserApp",
  data: () => ({
    drawer: true,
  }),
};
</script>

<style>
router-link {
  margin: 5px;
}
</style>
