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
  name: 'AdminApp',
  data: () => ({
    drawer: true,
    drawerContent: [
      {
        id: 1,
        page: 'DisplayProducts',
        legend: 'Produits',
      },
      {
        id: 2,
        page: 'EditProduct',
        legend: 'Modifier un Produit',
      },
      {
        id: 3,
        page: 'NewProduct',
        legend: 'Créer un Nouveau Produit',
      },
      {
        id: 4,
        page: 'ModerateComments',
        legend: 'Moderer les commentaires',
      },
      {
        id: 5,
        page: 'ModerateRecepies',
        legend: 'Moderer les recettes',
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
