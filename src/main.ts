import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import Panel from "primevue/panel";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: Lara });
app.use(router);

app.component("Panel", Panel);

app.mount("#app");
