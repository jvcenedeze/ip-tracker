import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
