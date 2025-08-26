<template>
  <div class="min-h-screen bg-primary p-8 text-white">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-neutral-100 drop-shadow-lg">Events</h1>
      <p class="mt-3 text-gray-400 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
        perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium.
      </p>
    </div>

    <div
      class="grid gap-0 border border-white/10 rounded-lg overflow-hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="(event, index) in events"
        :key="index"
        class="group relative border border-white/10 bg-primary transition-all duration-700 ease-in-out hover:border-current overflow-hidden"
        :class="cornerClass(index)"
        :style="{ borderColor: event.color + '40' }"
      >
        <!-- Event Image -->
        <div class="aspect-video w-full relative">
          <img
            :src="event.image"
            :alt="event.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0"
            :style="{
              background: `linear-gradient(to bottom, transparent 50%, ${event.color}40 100%)`,
            }"
          ></div>
        </div>

        <div class="relative z-10 p-6">
          <h3 class="text-xl font-semibold mb-2">{{ event.title }}</h3>
          <p class="text-white/80 mb-4">{{ event.date }}</p>
          <button
            class="px-4 py-2 bg-white font-semibold rounded transition-all duration-500 ease-in-out hover:opacity-90"
            :style="{ color: event.color }"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imagiPoster from "@/assets/images/IMAGI/Imagi 1.jpg";
import imagi2Poster from "@/assets/images/IMAGI-2/poster.png";

const events = [
  {
    title: "IMAGI 2",
    date: "9 November 2025, Banjarbaru",
    color: "#3B82F6",
    image: imagi2Poster,
  },
  {
    title: "IMAGI",
    date: "15 Desember 2025, Banjarmasin",
    color: "#F44F44",
    image: imagiPoster,
  },
  {
    title: "Dreamfest",
    date: "22 Januari 2026, Banjarbaru",
    color: "#CCA56C",
    image: "https://placehold.co/800x450/CCA56C/ffffff?text=Dreamfest",
  },
  {
    title: "Haru no Sakuragi",
    date: "Maret 2026, Banjarbaru",
    color: "#6CCFA0",
    image: "https://placehold.co/800x450/6CCFA0/ffffff?text=Haru+no+Sakuragi",
  },
  {
    title: "Next Event",
    date: "2026",
    color: "#A56CFF",
    image: "https://placehold.co/800x450/A56CFF/ffffff?text=Coming+Soon",
  },
];

// total kolom kita tetapkan = 3
const cols = 3;

function cornerClass(index) {
  const len = events.length;
  return {
    "rounded-tl-lg": index === 0,
    "rounded-tr-lg": index === cols - 1,
    "rounded-bl-lg": index === len - cols,
    "rounded-br-lg": index === len - 1,
  };
}
</script>
