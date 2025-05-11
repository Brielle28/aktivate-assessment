<template>
  <div class="flex flex-col h-screen md:flex-row bg-[#100C21]">
    <!-- Sidebar -->
    <aside
      class="md:overflow-hidden fixed z-50 w-full h-screen text-[#CDC2FF] transition-all duration-300 bg-[#090618] shadow-lg md:w-[301px] md:static md:h-[570px] md:m-3 md:shadow-xl md:rounded-[30px]"
      :class="{
        'transform -translate-x-full md:translate-x-0': !isMobileSidebarOpen,
      }"
    >
      <!-- Mobile Close Icon -->
      <div class="flex justify-end px-4 pt-3 md:hidden">
        <button @click="closeMobileSidebar" class="text-[#CDC2FF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex items-center justify-center gap-3 md:mt-3 md:p-4">
        <div class="flex items-center">
          <div
            class="mx-auto mb-4 sm:mb-6 md:mb-[10px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[173.610px] md:h-[41px] bg-[url('/Logo2.png')] bg-contain bg-no-repeat bg-center"
            role="img"
            aria-label="Logo"
          />
        </div>
      </div>
      <nav class="px-[26px] md:mt-6 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          class="flex items-center gap-3 px-4 py-3 transition-colors rounded-[100px] hover:bg-[#1D192F]"
          :class="{ 'bg-[#1D192F]': isRoutActive(item.routeName) }"
          @click="closeMobileSidebar"
        >
          <img :src="item.icon" alt="icon" class="w-5 h-5" />
          <span>{{ item.label }}</span>
        </router-link>
      </nav>
      <!-- <div
        class="hidden md:flex top-[400px] right-1 items-center justify-center absolute mx-auto w-[350px] h-[200px] bg-[url('/Aside.png')] bg-contain bg-no-repeat bg-center"
        role="img"
        aria-label="Logo"
      /> -->
      <div
        class="hidden md:flex top-[400px] right-1 items-center justify-center absolute mx-auto w-[350px] h-[200px] bg-[url('/Aside.png')] bg-contain bg-no-repeat bg-center z-0 pointer-events-none"
        role="img"
        aria-label="Logo"
      />
    </aside>

    <!-- Backdrop for mobile sidebar -->
    <div
      v-if="isMobileSidebarOpen"
      class="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
      @click="closeMobileSidebar"
    ></div>
    <!-- Main Content Area -->
    <div class="flex flex-col flex-1 bg-[#100C21]">
      <!-- Navbar -->
      <header class="bg-transparent">
        <div class="flex items-center justify-between px-4 py-3">
          <div class="flex items-center">
            <!-- Mobile sidebar toggle only -->
            <button
              @click="toggleMobileSidebar"
              class="mr-3 text-gray-600 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <h1 class="text-xl text-[#6D6B76] font-light">
              {{ currentPageTitle }}
            </h1>
          </div>

          <!-- Search -->
          <div class="relative hidden mx-4 md:block md:w-[357px]">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              class="w-full py-2 pl-10 pr-4 border-0 bg-[#090618] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div class="flex items-center">
            <!-- Notifications -->
            <button class="p-2 text-[#CDC2FF] hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <!-- Profile -->
            <button class="flex items-center ml-[25.05px]">
              <img
                src="/profile.png"
                alt="Profile"
                class="w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </header>

      <main class="flex-1 p-6 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { navItems } from "@/Utils/navItems.js";
const isMobileSidebarOpen = ref(false);
const route = useRoute();
const router = useRouter();
const currentPageTitle = computed(() => {
  const path = route.path;
  if (path.includes("/DashBoard")) return "Dashboard";
  if (path.includes("/Campaign")) return "Campaigns";
  if (path.includes("/CollaborationHub")) return "Collaboration Hub";
  if (path.includes("/Influencer")) return "Influencers";
  return "Dashboard";
});
const isRoutActive = (routeName) => {
  return route.path.includes(`/dashboard/${routeName}`);
};
const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
};
const closeMobileSidebar = () => {
  isMobileSidebarOpen.value = false;
};
onMounted(() => {
  if (route.path === "/dashboard" || route.path === "/dashboard/") {
    router.push("/dashboard/DashBoard");
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    isMobileSidebarOpen.value = false;
  }
});
</script>
