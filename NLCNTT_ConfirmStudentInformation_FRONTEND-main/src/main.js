// import { createApp } from 'vue';
// import App from './App.vue';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import router from "./router"
// createApp(App).use(router).mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app.use(app);
app.use(router);
app.use(pinia);
app.mount("#app");
