<template>
  <div>
    <transition name="fade">
      <div
        v-if="show"
        class="flex items-center justify-center h-screen w-full bg-[white] text-[#5331E8] text-3xl font-bold transition-all duration-1000"
      >
        <div class="animate-bounce font-bold text-[18px] md:text-[50px]">Welcome to Aktivate</div>
      </div>
    </transition>
    <div class="absolute bottom-0 w-full">
      <img
        src="/bg.png"
        alt="Placeholder Graphic"
        class="object-contain w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const show = ref(true);
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    show.value = false;
    router.push("/signin");
  }, 3000);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
