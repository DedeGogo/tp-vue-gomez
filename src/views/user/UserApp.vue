<template>
  <v-app>
    <nav-bar />
    <nav-drawer v-bind:contentType="drawerContent" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import NavDrawer from '../../components/NavDrawer.vue'
import NavBar from '../../components/NavBar.vue'
import AppFooter from '../../components/AppFooter.vue'

export default {
  components: { NavDrawer, NavBar, AppFooter },
  name: 'UserApp',
  data: () => ({
    drawer: true,
    drawerContent: [
      {
        id: 1,
        page: 'ProductsPage',
        legend: 'Produits',
      },
      {
        id: 2,
        page: 'RecepiesPage',
        legend: 'Recettes',
      },
      {
        id: 3,
        page: 'DashBoard',
        legend: 'Mon Espace',
      },
      {
        id: 4,
        page: 'ShoppingList',
        legend: 'Ma liste de courses',
      },
    ],
  }),
}
</script>

<style>
router-link {
  margin: 5px;
}
</style>
