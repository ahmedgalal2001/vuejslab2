import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axiosInstance from "./axios";

const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;
app.config.globalProperties.$userStore = store;
app.use(store).use(router).mount("#app");
