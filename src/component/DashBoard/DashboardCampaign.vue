<template>
  <section class="p-4 mt-[61px] text-white bg-transparent md:w-full">
    <!-- Header with tabs and see all button -->
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
        <span class="text-sm text-white md:inline">See all</span>
        <div class="flex gap-1">
          <button class="bg-[#141129] px-2 rounded-full py-1">
            <font-awesome-icon icon="fa-solid fa-less-than" class="text-xs" />
          </button>
          <button class="bg-[#141129] px-2 rounded-full py-1">
            <font-awesome-icon
              icon="fa-solid fa-greater-than"
              class="text-xs"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Campaign cards -->
    <div class="grid gap-4 pb-4 md:grid md:grid-cols-2 md:pb-0">
      <div
        v-for="(campaign, index) in campaigns"
        :key="index"
        class="bg-[#090618] border-0 rounded-xl p-4 max-w-[300px] md:min-w-[448px] flex-shrink-0 md:flex-shrink"
      >
        <!-- User avatars and view report -->
        <div class="flex items-center justify-between mb-3">
          <div class="flex -space-x-2">
            <img
              v-for="(user, idx) in campaign.users.slice(0, 4)"
              :key="idx"
              :src="user"
              class="border-2 border-white rounded-full w-7 h-7"
              alt="User avatar"
            />
            <div
              v-if="campaign.users.length > 4"
              class="flex items-center justify-center text-xs font-semibold bg-gray-500 border-2 border-white rounded-full w-7 h-7"
            >
              +{{ campaign.users.length - 4 }}
            </div>
          </div>
          <a href="#" class="text-[#CDC2FF] underline text-xs font-medium"
            >View Report</a
          >
        </div>

        <!-- Campaign image -->
        <div class="mb-3">
          <img
            :src="campaign.image"
            :alt="campaign.title"
            class="object-cover w-full h-40 border-2 rounded-lg bor"
          />
        </div>

        <!-- Campaign details -->
        <div>
          <div class="text-[#E1DCF7] font-thin text-xs uppercase my-[15px]">
            Campaign Plan
          </div>
          <div
            class="flex flex-col justify-start gap-1 md:flex-row md:items-center"
          >
            <h3 class="text-sm font-normal text-[#E1DCF7] md:text-[15px]">
              <span class="font-semibold text-white"> {{ campaign.title }}</span>
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

        <!-- Progress bar -->
        <div
          class="bg-[#1D192F] h-[38px] rounded-md overflow-hidden mb-2 mt-5 relative"
        >
          <!-- Progress fill -->
          <div
            class="bg-[#D4FB2B] h-full"
            :style="`width: ${campaign.progress}%`"
          ></div>

          <!-- Centered percentage text -->
          <div
            class="absolute inset-0 flex items-center justify-center text-xs text-white md:text-[17px] font-bold md:left-[280px]"
          >
            {{ campaign.progress }}%
          </div>
        </div>

        <div class="w-full h-[1px] bg-gray-600 mt-4"></div>

        <!-- Stats grid -->
        <div
          class="grid grid-cols-3 text-xs gap-x-4 gap-y-2 text-[10px] md:text-[13px] mt-4"
        >
          <div>
            <div class="text-[#B0ADC0] font-bold">VIEWS</div>
            <div class="font-medium text-white">-</div>
          </div>
          <div>
            <div class="text-[#B0ADC0] font-bold">IMPRESSION</div>
            <div class="font-medium text-white">-</div>
          </div>
          <div>
            <div class="text-[#B0ADC0] font-bold">ENGAGEMENT RATE</div>
            <div class="font-bold text-white">-</div>
          </div>
          <div>
            <div class="text-[#B0ADC0] font-bold">TOP AGE</div>
            <div class="font-bold text-white">-</div>
          </div>
          <div>
            <div class="text-[#B0ADC0] font-bold">LOCATION</div>
            <div class="font-bold text-white">-</div>
          </div>
          <div>
            <div class="text-[#B0ADC0] font-bold">TOTAL AUDIENCE</div>
            <div class="font-bold text-white">-</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { campaigns } from "@/Utils/DashBoardcampaigns.js";
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

  /* Horizontal scrolling for cards */
  .flex.overflow-x-auto {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .flex.overflow-x-auto > div {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }

  /* Line clamp for description */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
