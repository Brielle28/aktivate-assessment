<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-[220px] bg-[#f5f5f5] p-4">
      <nav class="space-y-2">
        <RouterLink to="/dashboard/DashBoard" class="block">DashBoard</RouterLink>
        <RouterLink to="/dashboard/Campaign" class="block">Campaign</RouterLink>
        <RouterLink to="/dashboard/CollaborationHub" class="block">Collaboration Hub</RouterLink>
        <RouterLink to="/dashboard/Influencer" class="block">Influencer</RouterLink>
      </nav>
    </aside>

    <nav>
        <h1>navbar here </h1>
    </nav>

    <!-- Content -->
    <main class="flex-1 p-6 bg-white">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
