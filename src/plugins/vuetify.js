import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// Translation provided by Vuetify (javascript)
import ja from '../assets/ja_extended';
import en from '../assets/en_extended';
import de from '../assets/de_extended';

export default new Vuetify({
    theme: { dark: true },
    lang: {
        locales: {ja, en, de},
        current: 'de'
    }
});
