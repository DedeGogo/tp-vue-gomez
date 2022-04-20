import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        defaultTheme: 'UserTheme',
        themes: {
            // change appearence in admin or user with the same components
            UserTheme: {
                primary: colors.green.darken2,
                secondary: colors.lime.lighten2,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
            AdminTheme: {
                primary: colors.deepPurple.darken2,
                secondary: colors.indigo.lighten2,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
        },
    },
})