import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import { createPinia } from "pinia";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Lara });
app.use(router);
app.use(pinia);

app.mount("#app");
