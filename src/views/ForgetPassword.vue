<template>
  <div
    class="relative flex flex-col items-center justify-center w-full min-h-screen bg-[white] md:justify-start md:overflow-scroll overflow-hidden"
  >
    <div
      v-if="showNotification"
      class="fixed z-50 px-4 py-2 text-white transition-opacity duration-500 bg-green-500 rounded-md shadow-md top-4 right-4"
      :class="{
        'opacity-100': showNotification,
        'opacity-0': !showNotification,
      }"
    >
      Redirecting to Password Reset Page
    </div>

    <div
      class="z-10 flex flex-col items-center justify-start w-full px-4 py-8 mb-0 md:mb-[180px] mt-4 sm:mt-8 md:mt-0"
    >
      <div
        class="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[436px] text-center bg-white rounded-lg"
      >
        <div
          class="mx-auto mb-4 sm:mb-6 md:mb-[10px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-[url('/logo.png')] bg-contain bg-no-repeat bg-center"
          role="img"
          aria-label="Logo"
        />
        
        <h1 class="mb-2 text-2xl sm:text-[28px] md:text-[32px] font-bold">
          Forgot Password
        </h1>
        <p
          class="text-sm sm:text-base md:text-[17px] text-[#6D6B76] font-[400px] mb-6"
        >
          Enter your email address below to receive a password reset link.
        </p>

        <form
          @submit.prevent="handlePasswordReset"
          class="space-y-5 sm:space-y-6 mt-3 sm:mt-4 md:mt-[15px]"
        >
          <div class="flex flex-col items-start">
            <label
              for="email"
              class="mb-1 text-sm sm:text-base md:text-[17px] text-left text-[#6D6B76] font-normal"
              >Email</label
            >
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="Enter Email Address"
              class="font-normal w-full px-3 sm:px-4 h-10 sm:h-12 md:h-[50px] border rounded-[5px] focus:outline-none outline-0 focus:ring-indigo-500"
              :class="[emailError ? 'border-red-500' : 'border-[#54616C]']"
              @input="emailError = ''"
            />
            <p v-if="emailError" class="mt-1 text-xs text-red-500">
              {{ emailError }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full h-10 sm:h-12 md:h-[50px] font-semibold text-white transition bg-[#5331E8] rounded-[5px] hover:bg-[#4526c9]"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Sending reset link...</span>
            <span v-else>Send Password Reset Link</span>
          </button>
        </form>
      </div>
    </div>

    <div class="absolute bottom-0 hidden w-full md:block">
      <img
        src="/bg.png"
        alt="Placeholder Graphic"
        class="object-contain w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let router;
try {
  router = useRouter();
} catch (e) {
  // Router not available
}

const email = ref("");
const emailError = ref("");
const isSubmitting = ref(false);
const showNotification = ref(false);

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const handlePasswordReset = async () => {
  emailError.value = "";
  if (!email.value) {
    emailError.value = "Email is required";
    return;
  } else if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  isSubmitting.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    showNotification.value = true;

    email.value = "";

    setTimeout(() => {
      showNotification.value = false;

      if (router) {
        router.push("/passwordresetting");
      } else {
        window.location.href = "/passwordresetting";
      }
    }, 3000);
  } catch (error) {
    emailError.value = "Failed to send reset link. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
