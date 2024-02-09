import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import "./style.css"; // Mengimport styles.css

import store from "./store";

createApp(App).use(router).use(store).mount("#app");
