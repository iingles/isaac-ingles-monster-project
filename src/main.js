import Vue from 'vue'
import Monster from './Monster.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(Monster),
}).$mount('#app')


