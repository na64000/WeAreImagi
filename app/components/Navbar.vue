<script setup lang="ts">
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
      isScrolled ? 'bg-primary/80 backdrop-blur-sm shadow-lg' : '',
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo (Left) -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img
              src="/logo-imagi.svg"
              alt="IMAGI Logo"
              class="w-36 h-auto sm:h-10"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Menu (Center) -->
        <div class="hidden md:flex justify-center flex-1 mx-8">
          <ul
            :class="[
              'flex space-x-4 px-6 py-1.5 rounded-full transition-all duration-300',
              'bg-white/1 backdrop-blur-sm border border-white/20',
            ]"
          >
            <li
              v-for="link in ['Home', 'Events', 'Activities', 'Talents']"
              :key="link"
            >
              <NuxtLink
                :to="link === 'Home' ? '/' : '/' + link.toLowerCase()"
                class="relative px-4 py-1.5 text-white/90 hover:text-white font-semibold transition-all duration-300 block"
              >
                {{ link }}
              </NuxtLink>
            </li>

            <!-- Kerjasama Dropdown -->
            <li class="relative group">
              <button
                class="px-4 py-1.5 text-white/90 hover:text-white font-semibold transition-all duration-300 flex items-center gap-1"
              >
                Kerjasama
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <!-- Dropdown Menu -->
              <div
                class="absolute left-0 mt-2 w-48 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left"
              >
                <div
                  :class="[
                    'rounded-lg overflow-hidden',
                    'backdrop-blur-md border border-white/20',
                    isScrolled
                      ? 'bg-primary/95 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.3)]'
                      : 'bg-white/10 shadow-[0_8px_32px_-4px_rgba(255,255,255,0.15)]',
                  ]"
                >
                  <NuxtLink
                    to="/partnership"
                    class="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Partnership
                  </NuxtLink>
                  <NuxtLink
                    to="/sponsorship"
                    class="block px-4 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Sponsorship
                  </NuxtLink>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- List Event Button (Right - Desktop Only) -->
        <div class="hidden md:flex justify-end">
          <button
            class="relative px-6 py-2 rounded-full overflow-hidden group backdrop-blur-md bg-white/10 border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20"
          >
            <span
              class="relative z-10 flex items-center gap-2 text-white font-medium"
            >
              List Event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
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

        <!-- Mobile Menu Button -->
        <div class="flex md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 transition-colors duration-300"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
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

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        class="md:hidden absolute inset-x-0 top-16 bg-primary/95 backdrop-blur-md border-t border-white/10"
      >
        <div class="px-4 pt-2 pb-3 space-y-1">
          <NuxtLink
            v-for="link in ['Home', 'Events', 'Activities', 'Talents']"
            :key="link"
            :to="link === 'Home' ? '/' : '/' + link.toLowerCase()"
            class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
            @click="mobileMenuOpen = false"
          >
            {{ link }}
          </NuxtLink>

          <!-- Mobile Kerjasama Section -->
          <div class="pt-2">
            <div class="px-3 text-sm font-medium text-white/70">Kerjasama</div>
            <NuxtLink
              to="/partnership"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
              @click="mobileMenuOpen = false"
            >
              Partnership
            </NuxtLink>
            <NuxtLink
              to="/sponsorship"
              class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors duration-300"
              @click="mobileMenuOpen = false"
            >
              Sponsorship
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Tombol List Event Animasi Blur */
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
