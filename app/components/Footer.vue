<script setup lang="ts">
import LightRays from "./LightRays.vue";

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/imagifest", icon: "🐦" },
  { name: "Instagram", href: "https://instagram.com/imagifest", icon: "📸" },
  { name: "Facebook", href: "https://facebook.com/imagifest", icon: "📘" },
  { name: "Discord", href: "https://discord.gg/imagifest", icon: "💬" },
];

const quickLinks = [
  { name: "Events", href: "/events" },
  { name: "Activities", href: "/activities" },
  { name: "Talents", href: "/talents" },
  { name: "Partnership", href: "/partnership" },
  { name: "Sponsorship", href: "/sponsorship" },
];
</script>

<template>
  <footer class="relative border-t border-white/10 mt-20">
    <div class="absolute inset-0 z-0">
      <LightRays
        rays-origin="bottom-center"
        rays-color="#000B4D"
        :rays-speed="0.5"
        :light-spread="1.5"
        :ray-length="1"
        :pulsating="true"
        :follow-mouse="true"
        :mouse-influence="0.1"
        :noise-amount="0.05"
        :distortion="0.1"
      />
    </div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Column 1: IMAGI Info -->
        <div class="space-y-4">
          <img src="/logo-imagi.svg" alt="IMAGI Logo" class="h-8" />
          <p class="text-sm text-white/70">
            Creator, Cosplay, Community Convention terbesar di Kalimantan yang
            menggabungkan kreativitas, hiburan, dan komunitas dalam satu
            platform.
          </p>
          <div class="flex gap-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/70 hover:text-white transition-colors duration-300"
              :aria-label="link.name"
            >
              {{ link.icon }}
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink
                :to="link.href"
                class="text-white/70 hover:text-white transition-colors duration-300"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Column 3: IOEA -->
        <div class="glass py-6 px-4 rounded-xl">
          <h3 class="font-semibold text-white mb-4">
            Member of International Otaku Expo Association
          </h3>
          <img
            src="/assets/images/IOEA/IOEA.png"
            alt="IOEA Logo"
            class="h-16 object-contain mb-4"
          />
          <p class="text-sm text-white/70 mb-4">
            International Otaku Expo Association (IOEA) adalah asosiasi
            internasional yang menghubungkan dan mendukung event-event Japanese
            pop culture di seluruh dunia.
          </p>
          <a
            href="https://iofe.info"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300"
          >
            <span>Visit IOFE Website</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
              />
              <path
                d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div
        class="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50"
      >
        <p>
          © {{ new Date().getFullYear() }} IMAGI Festival. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
