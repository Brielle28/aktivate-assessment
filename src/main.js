import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css"
import "@fortawesome/fontawesome-free/css/all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUp, faCheck, faCoffee, faGreaterThan, faLessThan, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import { faFacebookF, faInstagram, faSnapchat, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faCoffee, faSmile, faX, faCheck, faEye, faEyeSlash, faGreaterThan, faLessThan, faFacebookF, faInstagram, faTiktok, faXTwitter, faSnapchat, faPlus, faArrowUp);
const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount("#app");