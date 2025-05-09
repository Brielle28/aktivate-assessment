<template>
  <div class="relative flex flex-col items-center justify-start w-full min-h-screen bg-white">
    <div 
      v-if="showNotification" 
      class="fixed z-50 px-4 py-2 text-white transition-opacity duration-500 bg-green-500 rounded-md shadow-md top-4 right-4"
      :class="{ 'opacity-100': showNotification, 'opacity-0': !showNotification }"
    >
      Password Changed successfully!
    </div>

    <div class="z-10 flex flex-col items-center justify-start w-full px-4 py-8 md:pb-8 mb-0 md:mb-[180px]">
      <div class="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[436px] text-center bg-white rounded-lg">
        <div
          class="mx-auto mb-4 sm:mb-6 md:mb-[10px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-[url('/logo.png')] bg-contain bg-no-repeat bg-center"
          role="img"
          aria-label="Logo"
        />
        <h1 class="mb-2 text-2xl sm:text-[28px] md:text-[32px] font-bold">Set New Password</h1>
        <p class="text-sm sm:text-base md:text-[17px] text-[#6D6B76] font-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>

        <form @submit.prevent="handleSubmit" class="space-y-3 sm:space-y-5 mt-3 sm:mt-4 md:mt-[15px]">
          
          <div class="relative flex flex-col items-start w-full">
            <label
              for="newPassword"
              class="text-sm sm:text-base md:text-[17px] text-left text-[#6D6B76] font-normal"
              >New Password</label
            >
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="newPassword"
              id="newPassword"
              required
              placeholder="Enter new password"
              class="placeholder:text-[#D9D9D9] font-normal w-full px-3 sm:px-4 h-10 sm:h-12 md:h-[50px] border rounded-[5px] focus:outline-none outline-0 pr-12"
              :class="[passwordError ? 'border-red-500' : 'border-[#54616C]']"
              @input="passwordError = ''"
            />
            <font-awesome-icon
              :icon="showPassword ? 'eye-slash' : 'eye'"
              class="absolute right-3 sm:right-4 top-[35px] sm:top-[40px] md:top-[43px] text-gray-400 cursor-pointer"
              @click="togglePasswordVisibility"
            />
          </div>
          <div class="relative flex flex-col items-start w-full">
            <label
              for="confirmPassword"
              class="text-sm sm:text-base md:text-[17px] text-left text-[#6D6B76] font-normal"
              >Confirm Password</label
            >
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm Password"
              class="placeholder:text-[#D9D9D9] font-normal w-full px-3 sm:px-4 h-10 sm:h-12 md:h-[50px] border rounded-[5px] focus:outline-none outline-0 pr-12"
              :class="[confirmPasswordError ? 'border-red-500' : 'border-[#54616C]']"
              @input="confirmPasswordError = ''"
            />
            <font-awesome-icon
              :icon="showPassword ? 'eye-slash' : 'eye'"
              class="absolute right-3 sm:right-4 top-[35px] sm:top-[40px] md:top-[43px] text-gray-400 cursor-pointer"
              @click="togglePasswordVisibility"
            />
            <p v-if="confirmPasswordError" class="mt-1 text-sm text-red-500">
              {{ confirmPasswordError }}
            </p>
          </div>

          <button
            type="submit"
            class="w-full h-10 sm:h-12 md:h-[50px] font-semibold text-white transition bg-[#5331E8] rounded-[5px] hover:bg-[#4526c9] mt-10"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Saving new password...</span>
            <span v-else>Go to Dashboard</span>
          </button>
        </form>
      </div>
    </div>
    <!-- Background image with responsive handling -->
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
import { ref, watch } from "vue";
import { useRouter } from 'vue-router';

let router;
try {
  router = useRouter();
} catch (e) {
}

const newPassword = ref("");
const confirmPassword = ref("");
const showPassword = ref(false);
const passwordError = ref("");
const confirmPasswordError = ref("");
const isSubmitting = ref(false);
const showNotification = ref(false);

const handleSubmit = async () => {
  passwordError.value = "";
  confirmPasswordError.value = "";
  
  if (!newPassword.value) {
    passwordError.value = "Password is required";
    return;
  } else if (newPassword.value.length < 6) {
    passwordError.value = "Password must be at least 6 characters";
    return;
  }
  
  if (!confirmPassword.value) {
    confirmPasswordError.value = "Please confirm your password";
    return;
  }
  
  // Check if passwords match
  if (newPassword.value !== confirmPassword.value) {
    confirmPasswordError.value = "Passwords don't match";
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    showNotification.value = true;
    
    setTimeout(() => {
      showNotification.value = false;
      
      if (router) {
        router.push('/dashboard');
      } else {
        window.location.href = '/dashboard';
      }
    }, 3000);
    
  } catch (error) {
    passwordError.value = "Failed to update password. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>