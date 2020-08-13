import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: '#009688',
                secondary: '#26A69A',
                accent: '#96000f',
                error: '#FF3000',
            },
        },
    },
});
