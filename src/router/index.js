import { createRouter, createWebHistory } from "vue-router";
import SplashScreen from "@/views/SplashScreen.vue";
import SignIn from "@/views/SignIn.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import PasswordResetting from "@/views/PasswordResetting.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "SplashScreen", component: SplashScreen },
    { path: "/signin", name: "SignIn", component: SignIn },
    {
      path: "/forgetpassword",
      name: "ForgetPassword",
      component: ForgetPassword,
    },
    {
      path: "/passwordresetting",
      name: "PasswordResetting",
      component: PasswordResetting,
    },
    
  ],
});

export default router;
