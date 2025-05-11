import { createRouter, createWebHistory } from "vue-router";
import SplashScreen from "@/views/SplashScreen.vue";
import SignIn from "@/views/SignIn.vue";
import ForgetPassword from "@/views/ForgetPassword.vue";
import PasswordResetting from "@/views/PasswordResetting.vue";
import DashboardLayout from "@/layout/DashboardLayout.vue";
import DashBoard from "@/component/DashBoard/DashBoard.vue";
import Campaign from "@/component/DashBoard/Campaign.vue";
import CollaborationHub from "@/component/DashBoard/CollaborationHub.vue";
import Influencer from "@/component/DashBoard/Influencer.vue"
import Revenue from "@/component/DashBoard/Revenue.vue"
import Content from "@/component/DashBoard/Content.vue"
import Platform from "@/component/DashBoard/Platform.vue"
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
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        { path: "DashBoard", name: "Dashboard", component: DashBoard },
        { path: "Campaign", name: "Campaign", component: Campaign },
        {
          path: "CollaborationHub",
          name: "CollaborationHub",
          component: CollaborationHub,
        },
        {
          path: "Influencer",
          name: "Influencer",
          component: Influencer,
        },
        {
          path: "revenue",
          name: "revenue",
          component: Revenue,
        },
        {
          path: "platform",
          name: "platform",
          component: Platform,
        },
        {
          path: "content",
          name: "content",
          component: Content,
        },
      ],
    },
  ],
});

export default router;
