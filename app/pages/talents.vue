<template>
  <div class="min-h-screen bg-primary text-white px-6 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-neutral-100 drop-shadow-lg">
        Talents
      </h1>
      <p class="mt-3 text-gray-400 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-2xl border border-neutral-800"
    >
      <div
        v-for="(talent, index) in talents"
        :key="index"
        class="relative p-6 bg-[#111111] border border-neutral-800 transition-colors duration-500 group overflow-hidden"
        :class="[
          index === 0 ? 'rounded-tl-2xl' : '',
          index === 2 ? 'rounded-tr-2xl' : '',
          index === talents.length - 3 ? 'rounded-bl-2xl' : '',
          index === talents.length - 1 ? 'rounded-br-2xl' : '',
        ]"
        @mousemove="updateGradient($event, index)"
        @mouseleave="resetGradient(index)"
      >
        <!-- Efek gradient mengikuti cursor -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          :style="talent.gradientStyle"
        ></div>

        <!-- Foto talent -->
        <div
          class="relative z-10 mb-4 aspect-square w-full overflow-hidden rounded-lg border border-neutral-700"
        >
          <img
            src="https://placehold.co/400x400?text=Talent"
            alt="Talent Placeholder"
            class="object-cover w-full h-full"
          />
        </div>

        <!-- Nama Talent -->
        <div class="relative z-10">
          <h2 class="text-xl font-semibold mb-1">{{ talent.name }}</h2>
          <p class="text-sm text-gray-400 mb-2">@{{ talent.instagram }}</p>
          <p class="text-sm text-gray-300 mb-4">{{ talent.role }}</p>

          <!-- Icon Sosial Media -->
          <div class="flex space-x-3">
            <a
              v-for="(link, platform) in talent.socials"
              :key="platform"
              :href="link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon :icon="icons[platform]" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const talents = ref([
  {
    name: "Sakura",
    instagram: "sakura_dance",
    role: "Dance Cover",
    socials: {
      instagram: "https://instagram.com/sakura_dance",
      youtube: "https://youtube.com/@sakuradance",
    },
    gradientStyle: {},
  },
  {
    name: "Kaze Band",
    instagram: "kazeband_id",
    role: "J-Rock Band",
    socials: {
      instagram: "https://instagram.com/kazeband_id",
      tiktok: "https://tiktok.com/@kazeband",
    },
    gradientStyle: {},
  },
  {
    name: "Aoi Cos",
    instagram: "aoi_cos",
    role: "Cosplayer",
    socials: {
      instagram: "https://instagram.com/aoi_cos",
      facebook: "https://facebook.com/aoicos",
    },
    gradientStyle: {},
  },
]);

// Mapping platform -> icon
const icons = {
  instagram: "mdi:instagram",
  youtube: "mdi:youtube",
  tiktok: "ic:baseline-tiktok",
  facebook: "mdi:facebook",
};

// Gradient mengikuti cursor
const updateGradient = (e, index) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  talents.value[index].gradientStyle = {
    background: `radial-gradient(circle at ${x}px ${y}px, rgba(244,79,68,0.25), transparent 70%)`,
  };
};

const resetGradient = (index) => {
  talents.value[index].gradientStyle = {};
};
</script>
