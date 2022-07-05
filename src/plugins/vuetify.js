import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
  // Vue内でCSS変数を使用
  theme: {
    themes: {
      light: {
        main: '#61c1b3',
        text1: '#3E5F80',
        text2: '#fffcdb',
      },
    },
    options: { customProperties: true },
  },
});
