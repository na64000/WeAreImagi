<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed w-full transition-all duration-300 z-50',
      isScrolled
        ? 'bg-primary/80 backdrop-blur-sm shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center">
        <!-- Desktop Menu (Left) -->
        <div class="hidden md:flex space-x-8 flex-1">
          <NuxtLink
            to="/"
            class="text-neutralWhite hover:text-accent transition"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/events"
            class="text-neutralWhite hover:text-accent transition"
            >Events</NuxtLink
          >
          <NuxtLink
            to="/activities"
            class="text-neutralWhite hover:text-accent transition"
            >Activities</NuxtLink
          >
          <NuxtLink
            to="/talents"
            class="text-neutralWhite hover:text-accent transition"
            >Talents</NuxtLink
          >
        </div>

        <!-- Logo (Center) -->
        <div class="flex justify-center flex-1">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/logo-imagi.svg"
              alt="IMAGI Logo"
              class="w-36 h-auto sm:h-10"
            />
          </NuxtLink>
        </div>

        <!-- List Event Button (Right - Desktop Only) -->
        <div class="hidden md:flex flex-1 justify-end">
          <button
            class="list-event-btn relative px-6 py-2 group overflow-hidden"
          >
            <span
              class="absolute inset-0 w-full h-full border border-transparent"
            ></span>
            <span
              class="absolute inset-0 w-full h-full bg-accent/20 rounded-lg opacity-20 group-hover:opacity-100 blur-sm transition-opacity duration-500"
            ></span>
            <span
              class="absolute inset-[1px] bg-primary rounded-lg z-10"
            ></span>
            <span
              class="absolute inset-0 w-full h-full bg-accent rounded-lg animate-border opacity-75"
            ></span>
            <span
              class="relative z-20 text-neutralWhite inline-flex items-center"
            >
              <span class="mr-1">List Event</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        <!-- Mobile: Logo (Left) and Menu Button (Right) -->
        <div class="flex justify-between items-center w-full md:hidden">
          <NuxtLink to="/" class="flex items-center">
            <img src="/logo-imagi.svg" alt="IMAGI Logo" class="w-28 h-auto" />
          </NuxtLink>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-800 focus:outline-none transition"
          >
            <!-- Burger -->
            <svg
              v-if="!mobileMenuOpen"
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!-- Close -->
            <svg
              v-else
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed top-0 right-0 w-[80%] h-screen bg-primary/95 backdrop-blur-md border-l border-accent/20 md:hidden transform z-40"
      >
        <div
          class="h-16 flex items-center justify-end px-6 border-b border-accent/20"
        >
          <button
            @click="mobileMenuOpen = false"
            class="p-2 text-white hover:text-accent transition-colors"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        <div class="px-8 py-12 flex flex-col gap-6">
          <NuxtLink
            v-for="(link, index) in ['Home', 'Events', 'Activities', 'Talents']"
            :key="link"
            :to="link === 'Home' ? '/' : '/' + link.toLowerCase()"
            class="block text-2xl font-medium text-white hover:text-accent transition-colors duration-300"
            @click="mobileMenuOpen = false"
          >
            {{ link }}
          </NuxtLink>
        </div>
      </div>
    </transition>

    <!-- Backdrop -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 bg-black/50 md:hidden z-30"
        @click="mobileMenuOpen = false"
      ></div>
    </transition>
  </nav>
</template>

<style scoped>
.list-event-btn {
  transition: all 0.3s ease;
}

.list-event-btn:hover {
  transform: translateY(-1px);
}

.animate-border {
  background-size: 200% 200%;
  animation: moveGradient 4s linear infinite;
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.list-event-btn:active {
  transform: translateY(1px);
}
</style>
