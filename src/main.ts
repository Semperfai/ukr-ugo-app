import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

// vue add tailwind
import "./assets/tailwind.scss";
import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;
createApp(App).use(router).mount("#app");
