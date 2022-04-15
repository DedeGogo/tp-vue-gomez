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
      <router-link :to="{ name: 'ShoppingList' }"
        >Ma liste de courses</router-link
      >
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  data: () => ({
    drawer: true,
  }),
};
</script>

<style></style>

This component : - the drawer value should be instatiated in state or passed
down from UserApp in order to allow communication with NavBar - in mobile it
becomes a foot navigation bar - IN Style : it will have two styes depending on
weather it is called by UserApp or by AdminApp
