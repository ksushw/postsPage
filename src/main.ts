import 'vuetify/styles';
import '@fortawesome/fontawesome-free/css/all.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, fa } from 'vuetify/iconsets/fa';
import { createPinia } from 'pinia';
// Components
import { createApp } from 'vue';

import './style.css';
import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});

createApp(App).use(vuetify).use(createPinia()).mount('#app');
