import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Lara from "./presets/lara";
import { createPinia } from "pinia";
import router from "./router";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import StyleClass from "primevue/styleclass";

const pinia = createPinia();
const app = createApp(App);

app.component("InputText", InputText);
app.component("Button", Button);
app.directive("styleclass", StyleClass);

app.use(PrimeVue, { unstyled: true, pt: Lara });
app.use(router);
app.use(pinia);

app.mount("#app");
