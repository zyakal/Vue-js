import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

createApp(App).use(router).use(store).mount("#app");

window.Kakao.init("5163e514636631346e4ee54608f23de7");
