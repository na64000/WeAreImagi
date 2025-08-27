<template>
  <div class="min-h-screen bg-primary p-8 text-white">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-neutral-100 drop-shadow-lg">Events</h1>
      <p class="mt-3 text-gray-400 max-w-2xl mx-auto">
        Jangan lewatkan event-event menarik yang akan datang. Bergabunglah
        dengan ribuan pengunjung lainnya di berbagai acara spektakuler kami!
      </p>
    </div>

    <!-- Grid 1 Kolom -->
    <div class="grid gap-6 grid-cols-1 max-w-5xl mx-auto">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="group relative border border-white/10 bg-primary/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 ease-in-out hover:border-white/30 hover:bg-primary/60 hover:shadow-2xl hover:shadow-white/10"
        :style="{ borderColor: event.color + '30' }"
      >
        <!-- Container dengan Floating Card Design -->
        <div class="flex flex-col sm:flex-row h-full relative">
          <!-- Kolom Poster (Kiri) - Floating Card Style -->
          <div class="sm:w-2/5 relative p-4">
            <div
              class="aspect-[16/9] relative transform hover:scale-105 transition-all duration-500 ease-out"
            >
              <!-- Card Shadow -->
              <div
                class="absolute inset-0 bg-black/20 rounded-xl blur-lg transform translate-y-2"
              ></div>

              <!-- Main Card -->
              <div
                class="relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 shadow-2xl"
              >
                <img
                  :src="event.image"
                  :alt="event.title"
                  class="w-full h-full object-cover"
                />
                <!-- Overlay gradient -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
                ></div>

                <!-- Decorative corner accent -->
                <div
                  class="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-t-[30px] border-l-transparent"
                  :style="{ borderTopColor: event.color + '60' }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Kolom Keterangan (Kanan) -->
          <div class="sm:w-3/5 p-6 flex flex-col justify-between">
            <div class="flex-1">
              <!-- Header Event -->
              <div class="mb-4">
                <h3
                  class="text-2xl font-bold text-white mb-2 group-hover:text-opacity-90 transition-colors"
                >
                  {{ event.title }}
                </h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    class="px-2 py-1 rounded-full text-xs font-medium border"
                    :style="{
                      borderColor: event.color + '50',
                      color: event.color,
                    }"
                  >
                    {{ event.category }}
                  </span>
                </div>
              </div>

              <!-- Event Details -->
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-white/80">
                  <svg
                    class="w-4 h-4 mr-2 flex-shrink-0"
                    :style="{ color: event.color }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="text-sm">{{ event.date }}</span>
                </div>
                <div class="flex items-center text-white/80">
                  <svg
                    class="w-4 h-4 mr-2 flex-shrink-0"
                    :style="{ color: event.color }"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-sm">{{ event.location }}</span>
                </div>
              </div>

              <!-- Description -->
              <p
                class="text-white/70 text-sm leading-relaxed mb-6 line-clamp-3"
              >
                {{ event.description }}
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-3">
              <button
                class="flex-1 px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                Lihat Detail
              </button>
              <button
                class="flex-1 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                :style="{
                  backgroundColor: event.color,
                  color: 'white',
                }"
                @mouseover="
                  (e) => (e.target.style.backgroundColor = event.color + 'dd')
                "
                @mouseout="
                  (e) => (e.target.style.backgroundColor = event.color)
                "
              >
                Dapatkan Tiket
              </button>
            </div>
          </div>
        </div>

        <!-- Hover Effect Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-transparent group-hover:to-white/5 transition-all duration-500 pointer-events-none"
          :style="{
            background: `linear-gradient(135deg, transparent 0%, ${event.color}10 100%)`,
          }"
        ></div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div
      class="text-center mt-16 p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
    >
      <h2 class="text-2xl font-bold text-white mb-4">
        Tidak Mau Ketinggalan Event?
      </h2>
      <p class="text-white/70 mb-6">
        Subscribe newsletter kami untuk mendapatkan update terbaru tentang
        event-event mendatang
      </p>
      <button
        class="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
      >
        Subscribe Newsletter
      </button>
    </div>
  </div>
</template>

<script setup>
import BlurText from "~/components/BlurText.vue";
import imagiPoster from "@/assets/images/IMAGI/Imagi 1.jpg";
import imagi2Poster from "@/assets/images/IMAGI-2/poster.png";
import dfabpPoster from "@/assets/images/DFABP-3/DFABP-bg.png";

const events = [
  {
    title: "IMAGI 2",
    date: "9 November 2025",
    location: "Banjarbaru",
    color: "#3B82F6",
    image: imagi2Poster,
    status: "upcoming",
    category: "Gaming",
    description:
      "Interactive Media Art & Gaming Indonesia 2025. Event gaming terbesar di Kalimantan Selatan dengan berbagai kompetisi menarik dan pameran teknologi terdepan.",
  },
  {
    title: "IMAGI",
    date: "15 Desember 2025",
    location: "Banjarmasin",
    color: "#F44F44",
    image: imagiPoster,
    status: "upcoming",
    category: "Gaming",
    description:
      "Festival gaming dan media interaktif yang mempertemukan para gamer, developer, dan tech enthusiast dalam satu tempat untuk berbagi pengalaman dan pengetahuan.",
  },
  {
    title: "DreamFest Amanah Borneo Park",
    date: "22 Januari 2026",
    location: "Banjarbaru",
    color: "#CCA56C",
    image: dfabpPoster,
    status: "upcoming",
    category: "Music",
    description:
      "Festival musik dan seni impian yang memukau dengan lineup artis nasional dan internasional. Rasakan pengalaman musik yang tak terlupakan di venue terbesar di Kalimantan Selatan.",
  },
  {
    title: "Haru no Sakuragi",
    date: "Maret 2026",
    location: "Banjarbaru",
    color: "#6CCFA0",
    image: "https://placehold.co/800x450/6CCFA0/ffffff?text=Haru+no+Sakuragi",
    status: "coming-soon",
    category: "Cultural",
    description:
      "Festival musim semi dengan nuansa Jepang yang menampilkan budaya, kuliner, dan seni tradisional Jepang dalam suasana yang autentik dan meriah.",
  },
  {
    title: "Next Event",
    date: "2026",
    location: "TBA",
    color: "#A56CFF",
    image: "https://placehold.co/800x450/A56CFF/ffffff?text=Coming+Soon",
    status: "coming-soon",
    category: "Special",
    description:
      "Event spektakuler yang akan segera diumumkan. Bersiaplah untuk pengalaman yang belum pernah ada sebelumnya dengan konsep yang revolusioner.",
  },
];
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  display: box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  overflow: hidden;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
  animation-delay: 1.5s;
}
</style>
