import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css"
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCheck, faCoffee, faX } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import router from './router';

library.add(faCoffee, faSmile, faX, faCheck, faEye, faEyeSlash);
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");