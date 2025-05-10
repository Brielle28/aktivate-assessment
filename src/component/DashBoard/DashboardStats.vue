<script setup>
import { ref, onMounted } from "vue";

const isSmallScreen = ref(false);

onMounted(() => {
  const checkWidth = () => {
    isSmallScreen.value = window.innerWidth < 640;
  };
  checkWidth();
  window.addEventListener("resize", checkWidth);
  return () => window.removeEventListener("resize", checkWidth);
});

const stats = ref([
  {
    title: "Total Campaign Spend",
    value: "$1,434.32",
    change: "+11.35%",
    isPositive: true,
    chartData: [10, 15, 20, 18, 30],
    highlightIndex: 4,
    highlightColor: "#10B981",
  },
  {
    title: "Total Campaigns",
    value: "50",
    change: "+11.35%",
    isPositive: false,
    chartData: [25, 20, 30, 22, 15],
    highlightIndex: 4,
    highlightColor: "#EF4444",
  },
  {
    title: "Active Campaigns",
    value: "5",
    change: "+11.35%",
    isPositive: true,
    chartData: [5, 10, 15, 10, 25],
    highlightIndex: 4,
    highlightColor: "#10B981",
  },
]);
</script>

<template>
  <!-- Desktop version -->
  <div class="hidden sm:flex sm:flex-row w-full bg-[#0C0A1B] text-white divide-x divide-gray-800 rounded-lg shadow-lg">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="flex flex-col justify-between flex-1 p-6"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center text-xs text-gray-400">
          <img src="/rec.png" alt="rec" class="h-4 w-4 mr-1.5" />
          <span class="text-sm font-medium">{{ stat.title }}</span>
        </div>
        <div class="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- Value and Chart in same line -->
      <div class="flex items-center justify-between w-full mb-4">
        <!-- Value -->
        <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
        <!-- Chart -->
        <div class="flex items-end justify-between w-24 h-12 space-x-1">
          <div
            v-for="(value, i) in stat.chartData"
            :key="i"
            class="flex-1 rounded-sm opacity-70"
            :class="{
              'bg-gray-700': i !== stat.highlightIndex,
              'opacity-100': i === stat.highlightIndex,
            }"
            :style="{
              height: `${value * 3}%`,
              backgroundColor:
                i === stat.highlightIndex ? stat.highlightColor : '#4B5563',
            }"
          ></div>
        </div>
      </div>

      <!-- lines -->
      <div
        class="w-full h-3 bg-[url('/lines.png')] bg-contain bg-no-repeat bg-center mb-4"
        role="lines"
        aria-label="/lines.png"
      />

      <!-- Footer -->
      <div class="flex items-center justify-between text-xs text-gray-400">
        <div
          class="flex items-center mr-2"
          :class="stat.isPositive ? 'text-green-500' : 'text-red-500'"
        >
          <svg
            v-if="stat.isPositive"
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 mr-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3 mr-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ stat.change }}</span>
        </div>
        <span class="text-gray-500">Compared to last month</span>
      </div>
    </div>
  </div>

  <!-- Mobile version (carousel) -->
  <div class="block w-full sm:hidden">
    <!-- Carousel container -->
    <div 
      class="flex pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory"
      style="scroll-snap-type: x mandatory;"
    >
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="inline-block min-w-[85%] mr-4 p-6 bg-[#0C0A1B] rounded-lg flex-shrink-0 snap-center"
      >
        <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center text-xs text-gray-400">
            <img src="/rec.png" alt="rec" class="h-4 w-4 mr-1.5" />
            <span class="text-sm font-medium">{{ stat.title }}</span>
          </div>
          <div class="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Value and Chart in same line -->
        <div class="flex items-center justify-between w-full mb-4">
          <!-- Value -->
          <div class="text-2xl font-bold text-white">{{ stat.value }}</div>
          <!-- Chart -->
          <div class="flex items-end justify-between w-24 h-12 space-x-1">
            <div
              v-for="(value, i) in stat.chartData"
              :key="i"
              class="flex-1 rounded-sm opacity-70"
              :class="{
                'bg-gray-700': i !== stat.highlightIndex,
                'opacity-100': i === stat.highlightIndex,
              }"
              :style="{
                height: `${value * 3}%`,
                backgroundColor:
                  i === stat.highlightIndex ? stat.highlightColor : '#4B5563',
              }"
            ></div>
          </div>
        </div>

        <!-- lines -->
        <div
          class="w-full h-3 bg-[url('/lines.png')] bg-contain bg-no-repeat bg-center mb-4"
          role="lines"
          aria-label="/lines.png"
        />

        <!-- Footer -->
        <div class="flex items-center justify-between text-xs text-gray-400">
          <div
            class="flex items-center mr-2"
            :class="stat.isPositive ? 'text-green-500' : 'text-red-500'"
          >
            <svg
              v-if="stat.isPositive"
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 mr-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 mr-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{{ stat.change }}</span>
          </div>
          <span class="text-gray-500">Compared to last month</span>
        </div>
      </div>
    </div>

    <!-- Carousel indicators -->
    <div class="flex justify-center mt-4 space-x-2">
      <div
        v-for="(_, index) in stats"
        :key="index"
        class="w-2 h-2 bg-gray-500 rounded-full"
        :class="{ 'bg-blue-500': index === 0 }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>