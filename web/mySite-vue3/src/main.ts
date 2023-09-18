/** @format */

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import wujie from "wujie-vue3";

createApp(App).use(router).use(wujie).mount("#app");
