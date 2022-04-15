<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list-item>
      <router-link :to="{ name: 'ProductsPage' }">Products</router-link>
    </v-list-item>
    <v-list-item>
      <router-link :to="{ name: 'ProductPage' }">Product</router-link>
    </v-list-item>
    <v-list-item>
      <router-link :to="{ name: 'RecepiesPage' }">Recettes</router-link>
    </v-list-item>
    <v-list-item>
      <router-link :to="{ name: 'RecepiePage' }">Recette</router-link>
    </v-list-item>
    <v-list-item>
      <router-link :to="{ name: 'DashBoard' }">Mon Espace</router-link>
    </v-list-item>
    <v-list-item>
      <router-link :to="{ name: 'ShoppingList' }">Ma liste de courses</router-link>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  data: () => ({
    drawer: true,
  }),
}
</script>

<style></style>
