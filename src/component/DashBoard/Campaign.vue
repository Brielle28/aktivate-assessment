<template>
  <section class="p-4 text-white bg-transparent md:w-full">
    <div
      class="flex flex-col items-start justify-between gap-3 mb-6 md:flex-row md:items-center md:gap-0"
    >
      <div
        class="flex items-center w-full gap-2 pb-2 overflow-x-auto md:gap-4 md:w-auto md:pb-0"
      >
        <button
          class="pb-1 font-medium text-white border-b-2 border-white whitespace-nowrap"
        >
          Campaigns
        </button>
        <button
          class="pb-1 font-medium text-white border-b-2 border-transparent opacity-70 whitespace-nowrap"
        >
          Active
        </button>
        <button
          class="text-white bg-[#3A3846] rounded-full px-3 py-0.5 text-sm font-medium whitespace-nowrap"
        >
          Pending
        </button>
      </div>
      <div class="flex items-center self-end gap-2 md:self-auto">
        <button
          class="flex items-center justify-center gap-2 w-[260px] h-[44px] rounded-[100px] bg-[#5331E8] text-[#FFFFFF]"
        >
          <h1
            class="p-2 bg-[#CDC2FF] rounded-full flex items-center justify-center"
          >
            <font-awesome-icon
              :icon="['fas', 'plus']"
              class="text-[10px] text-black"
            />
          </h1>
          <h1 class="text-[14px] font-semibold">Create New Campaign</h1>
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
    >
      <div
        v-for="(campaign, index) in campaigns"
        :key="index"
        class="bg-[#090618] border border-gray-800 rounded-xl p-4 w-full"
      >
        <div class="flex items-center justify-between mb-3">
          <div class="flex -space-x-2">
            <img
              v-for="(user, idx) in campaign.users.slice(0, 4)"
              :key="idx"
              :src="user"
              class="border-2 border-[#090618] rounded-full w-7 h-7"
              alt="User avatar"
            />
            <div
              v-if="campaign.users.length > 4"
              class="flex items-center justify-center text-xs font-semibold bg-gray-500 border-2 border-[#090618] rounded-full w-7 h-7"
            >
              +{{ campaign.users.length - 4 }}
            </div>
          </div>
          <a href="#" class="text-[#CDC2FF] underline text-xs font-medium"
            >View Report</a
          >
        </div>
        <div class="mb-3">
          <img
            :src="campaign.image"
            :alt="campaign.title"
            class="object-cover w-full h-40 rounded-lg"
          />
        </div>
        <div>
          <div class="text-[#E1DCF7] font-thin text-xs uppercase my-[15px]">
            Campaign Plan
          </div>
          <div class="flex flex-col justify-start gap-1">
            <h3 class="text-sm font-normal text-[#E1DCF7] md:text-[15px]">
              <span class="font-semibold text-white">{{ campaign.title }}</span>
              {{ campaign.subTitle }}
            </h3>
          </div>
          <p class="mb-4 text-[#E1DCF7] text-xs md:text-[15px] line-clamp-2">
            {{ campaign.description }}
          </p>
        </div>

        <div
          class="flex flex-col justify-between gap-4 md:flex-row md:items-center"
        >
          <div
            class="relative flex flex-col space-y-[8px] font-sans text-white"
          >
            <div
              class="absolute left-[5px] top-3 bottom-3 w-[2px] bg-[#CDC2FF]"
            ></div>
            <div class="flex items-center text-xs md:text-[15px]">
              <div
                class="w-3 h-3 mr-1 rounded-full shadow-lg bg-[#CDC2FF] z-10"
              ></div>
              <div class="flex items-baseline">
                <div class="mr-2 font-semibold text-[#CDC2FF]">Start Date:</div>
                <div>{{ campaign.start }}</div>
              </div>
            </div>
            <div class="flex items-center text-xs md:text-[15px]">
              <div
                class="w-3 h-3 mr-1 rounded-full shadow-lg bg-[#CDC2FF] z-10"
              ></div>
              <div class="flex items-baseline">
                <div class="mr-2 font-semibold text-[#CDC2FF]">End Date:</div>
                <div>{{ campaign.end }}</div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center gap-2">
            <button
              class="flex items-center justify-center size-[30px] border border-[#FFFFFF80] rounded-full p-[10px]"
            >
              <font-awesome-icon
                icon="fa-brands fa-facebook-f"
                class="text-[#FFFFFF80]"
              />
            </button>
            <button
              class="flex items-center justify-center size-[30px] border border-[#FFFFFF80] rounded-full p-[10px]"
            >
              <font-awesome-icon
                icon="fa-brands fa-instagram"
                class="text-[#FFFFFF80]"
              />
            </button>
            <button
              class="flex items-center justify-center size-[30px] border border-[#FFFFFF80] rounded-full p-[10px]"
            >
              <font-awesome-icon
                icon="fa-brands fa-tiktok"
                class="text-[#FFFFFF80]"
              />
            </button>
            <button
              class="flex items-center justify-center size-[30px] border border-[#FFFFFF80] rounded-full p-[10px]"
            >
              <font-awesome-icon
                :icon="['fab', 'x-twitter']"
                class="text-[#FFFFFF80]"
              />
            </button>
            <button
              class="flex items-center justify-center size-[30px] border border-[#FFFFFF80] rounded-full p-[10px]"
            >
              <font-awesome-icon
                icon="fa-brands fa-snapchat"
                class="text-[#FFFFFF80]"
              />
            </button>
          </div>
        </div>
        <div
          class="bg-[#1D192F] h-[38px] rounded-md overflow-hidden mb-2 mt-5 relative"
        >
          <div
            :class="[
              index % 2 === 0
                ? 'bg-gradient-to-r from-[#28243b] to-[#9747FF]'
                : 'bg-gradient-to-r from-[#6951EB] to-[#9747FF]',
              'h-full',
            ]"
            :style="`width: ${index % 2 === 0 ? '73' : '73'}%`"
          ></div>
          <div
            class="absolute inset-0 flex items-center justify-end px-4 text-sm font-bold text-white"
          >
            <span class="flex items-center">
              {{ index % 2 === 0 ? "73" : "73" }}%
              <font-awesome-icon icon="fa-solid fa-arrow-up" class="w-4 h-4 ml-1 text-green-500"/>
            </span>
          </div>
        </div>
        <!-- campaign stat -->
        <div class="w-full h-[1px] bg-gray-600 mt-4"></div>
        <div
          class="grid grid-cols-3 gap-x-4 gap-y-2 text-[10px] md:text-[13px] mt-4"
        >
          <div v-for="(stat, i) in campaign.stats" :key="i">
            <div class="text-[#B0ADC0] font-bold">{{ stat.label }}</div>
            <div class="font-bold text-white">{{ stat.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {campaigns} from "@/Utils/Campaign.js"
</script>

<style scoped>
/* Mobile styles */
@media (max-width: 767px) {
  /* Horizontal scrolling for tabs */
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 8px;
  }
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }

  /* Line clamp for description */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* Custom scrollbar for desktop */
@media (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1d192f;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #5331e8;
    border-radius: 10px;
  }
}
</style>
