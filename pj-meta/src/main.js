import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLandsTileMap from 'vue-lands-tile-map'

createApp(App).use(VueLandsTileMap).use(store).use(router).mount('#app')
