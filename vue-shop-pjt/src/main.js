import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

window.kakao.init("5163e514636631346e4ee54608f23de7");
