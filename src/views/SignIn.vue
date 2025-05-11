<template>
  <div
    class="relative flex flex-col items-center justify-center w-full min-h-screen bg-white"
  >
    <!-- Success notification -->
    <div
      v-if="showNotification"
      class="fixed z-50 px-4 py-2 text-white transition-opacity duration-500 bg-green-500 rounded-md shadow-md top-4 right-4"
      :class="{
        'opacity-100': showNotification,
        'opacity-0': !showNotification,
      }"
    >
      User logged in successfully!
    </div>

    <!-- Main content wrapper -->
    <div
      class="z-10 flex flex-col items-center justify-center w-full px-4 md:pt-10 md:pb-8 mb-0 md:mb-[180px]"
    >
      <!-- Login form container -->
      <div
        class="w-full max-w-[310px] sm:max-w-[380px] md:max-w-[436px] text-center bg-[white] rounded-lg"
      >
        <!-- Logo -->
        <div
          class="mx-auto mb-4 sm:mb-6 md:mb-[10px] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] bg-[url('/logo.png')] bg-contain bg-no-repeat bg-center"
          role="img"
          aria-label="Logo"
        />
        
        <!-- Heading -->
        <h1 class="mb-2 text-2xl sm:text-[28px] md:text-[32px] font-bold">
          Welcome Back
        </h1>
        
        <!-- Description text -->
        <p
          class="text-sm sm:text-base md:text-[17px] text-[#6D6B76] font-normal"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>

        <!-- Login form -->
        <form
          @submit.prevent="handleLogin"
          class="space-y-3 sm:space-y-4 mt-4 sm:mt-5 md:mt-[15px]"
        >
          <!-- Email field -->
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
              class="w-full px-3 sm:px-4 h-10 sm:h-12 md:h-[50px] border rounded-[5px] focus:outline-none outline-0 focus:ring-indigo-500 text-gray-800 placeholder:text-[#D9D9D9] font-normal"
              :class="[emailError ? 'border-red-500' : 'border-[#54616C]']"
              @input="emailError = ''"
            />
            <p v-if="emailError" class="mt-1 text-xs text-red-500">
              {{ emailError }}
            </p>
          </div>
          
          <!-- Password field -->
          <div class="relative flex flex-col items-start w-full">
            <label
              for="password"
              class="mb-1 text-sm sm:text-base md:text-[17px] text-left text-[#6D6B76] font-normal"
              >Password</label
            >
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              id="password"
              required
              placeholder="Enter Password"
              class="w-full px-3 sm:px-4 h-10 sm:h-12 md:h-[50px] border rounded-[5px] focus:outline-none outline-0 pr-12 text-gray-800 placeholder:text-[#D9D9D9] font-normal"
              :class="[passwordError ? 'border-red-500' : 'border-[#54616C]']"
              @input="passwordError = ''"
            />
            <font-awesome-icon
              :icon="showPassword ? 'eye-slash' : 'eye'"
              class="absolute right-3 sm:right-4 top-[35px] sm:top-[40px] md:top-[43px] text-gray-400 cursor-pointer"
              @click="togglePasswordVisibility"
            />
            <div class="flex justify-between w-full mt-1">
              <p v-if="passwordError" class="text-xs text-red-500">
                {{ passwordError }}
              </p>
              <router-link
                to="/forgetpassword"
                class="ml-auto text-xs text-gray-500 hover:underline"
              >
                Forgot Password?
              </router-link>
            </div>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="w-full h-10 sm:h-12 md:h-[50px] font-semibold text-white transition bg-[#5331E8] rounded-[5px] hover:bg-[#4526c9] mt-2"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Logging in...</span>
            <span v-else>Go to Dashboard</span>
          </button>
        </form>
      </div>
    </div>
    
    <!-- Background image - Only visible on medium screens and up -->
    <div class="hidden w-full mt-auto md:block md:mt-0 md:bottom-0 md:absolute">
      <img
        src="/bg.png"
        alt="Placeholder Graphic"
        class="object-cover w-full h-full md:object-contain"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

let router;
try {
  router = useRouter();
} catch (e) {}

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const emailError = ref("");
const passwordError = ref("");
const isSubmitting = ref(false);
const showNotification = ref(false);

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const handleLogin = async () => {
  emailError.value = "";
  passwordError.value = "";

  if (!email.value) {
    emailError.value = "Email is required";
    return;
  } else if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  if (!password.value) {
    passwordError.value = "Password is required";
    return;
  } else if (password.value.length < 6) {
    passwordError.value = "Password must be at least 6 characters";
    return;
  }

  isSubmitting.value = true;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    showNotification.value = true;

    setTimeout(() => {
      showNotification.value = false;

      if (router) {
        router.push("/dashboard");
      } else {
        window.location.href = "/dashboard";
      }
    }, 3000);
  } catch (error) {
    passwordError.value = "Login failed. Please check your credentials.";
  } finally {
    isSubmitting.value = false;
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>