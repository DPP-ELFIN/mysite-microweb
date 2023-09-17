/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import WujieVue from "wujie-vue3";
import router from "./router";
// import {preloadApp} from 'wujie'

const { preloadApp } = WujieVue;

createApp(App).use(router).use(WujieVue).mount("#app");
preloadApp({ name: "vue3", url: "http://localhost:5175/", exec: true });
preloadApp({ name: "react", url: "http://localhost:5174/", exec: true });
