import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import mixins from "./mixins";

createApp(App).mixin(mixins).use(router).use(store).mount("#app");

window.Kakao.init("5163e514636631346e4ee54608f23de7");
