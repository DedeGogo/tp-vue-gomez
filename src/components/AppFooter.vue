<template>
  <v-footer padless :theme="getTheme">
    <v-col class="text-center" cols="12"> {{ new Date().getFullYear() }} — <strong>Recettes Magiques</strong> </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    getTheme: function () {
      return this.$store.state.theme
    },
  },
}
</script>

<style></style>
