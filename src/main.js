import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'

createApp(App)
  .use(store)
  .use(router)
  .use(VueAwesomeSwiper, /* { default options with global component } */)
  .mount("#app");
