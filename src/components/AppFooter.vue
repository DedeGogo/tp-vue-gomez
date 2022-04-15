<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Recettes Magiques</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style></style>

- IN Style : it will have two styes depending on weather it is called by UserApp
or by AdminApp
