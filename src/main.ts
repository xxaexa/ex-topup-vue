import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import "./style.css"; // Mengimport styles.css
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

createApp(App).use(store).use(router).use(VueSweetalert2).mount("#app");
