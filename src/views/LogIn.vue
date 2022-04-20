<template>
  <v-container fluid class="pa-0 ma-0">
    <v-app>
      <v-app-bar flat dark color="primary" class="font-weight-bold"
        ><v-spacer></v-spacer><v-toolbar-title class="display-1"> Boite à Recettes</v-toolbar-title><v-spacer></v-spacer
      ></v-app-bar>
      <v-card max-width="400" class="mx-auto mt-6" flat color="transparent" height="100%">
        <v-app-bar flat dark depressed color="primary">
          <v-spacer></v-spacer>
          <v-toolbar-title>Bienvenu.e à ta Boite à Recettes</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-app-bar>
        <v-container>
          <v-card flat color="transparent">
            <v-card-text>
              <v-form v-model="isValid">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  required
                  dense
                  class="white align-baseline"
                  prepend-icon="mdi-email"
                  placeholder="Enter your name"
                ></v-text-field>
                <!-- <v-text-field
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  required
                  dense
                  class="white align-baseline"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  placeholder="Enter password"
                ></v-text-field> -->
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                depressed
                :disabled="!isValid"
                color="light-blue lighten-5 headline font-weight-medium"
                @click="handleSignin"
                >Login</v-btn
              >
            </v-card-actions>
            <v-divider inset class="ma-6"></v-divider>
            <div class="text-center text-capitalize mb-2 light-blue lighten-4"></div>
          </v-card>
        </v-container>
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      nameRules: [(v) => !!v || 'A name is required'],
      // password: '',
      // passwordRules: [(v) => !!v || 'Password is required'],
      isValid: true,
    }
  },
  methods: {
    handleSignin: async function () {
      await this.$store.dispatch('logIn', this.name)
    },
  },
}
</script>
