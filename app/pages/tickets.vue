<script setup>
import { ref } from "vue";

// Data dummy untuk event-event
const events = ref([
  {
    id: 1,
    title: "IMAGI Festival 2025",
    description:
      "Festival budaya pop Jepang terbesar di Indonesia yang menampilkan berbagai macam hiburan, workshop, dan kompetisi.",
    date: "26-27 Agustus 2025",
    location: "Jakarta Convention Center",
    image: "https://via.placeholder.com/800x500",
    status: "open", // atau 'closed'
    price: "Rp 150.000",
  },
  {
    id: 2,
    title: "IMAGI Concert Night",
    description:
      "Konser spesial menghadirkan artis-artis dan band JPop terkenal dalam satu malam yang tak terlupakan.",
    date: "28 Agustus 2025",
    location: "Istora Senayan",
    image: "https://via.placeholder.com/800x500",
    status: "closed",
    price: "Rp 500.000",
  },
  // Tambahkan event lainnya di sini
]);
</script>

<template>
  <div class="min-h-screen text-white py-16 px-4 sm:px-6 lg:px-8">
    <!-- Header Section -->
    <div class="max-w-7xl mx-auto mb-12">
      <h1 class="text-4xl font-bold mb-4">Event Tickets</h1>
      <p class="text-gray-400">
        Discover and get your tickets for upcoming events
      </p>
    </div>

    <!-- Events List -->
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Event Card -->
      <div
        v-for="event in events"
        :key="event.id"
        class="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div class="flex flex-col md:flex-row">
          <!-- Event Image -->
          <div class="md:w-1/3 relative pb-[56.25%] md:pb-[100%]">
            <img
              :src="event.image"
              :alt="event.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <!-- Event Details -->
          <div class="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 class="text-2xl font-bold mb-3">{{ event.title }}</h2>
              <p class="text-gray-400 mb-4">{{ event.description }}</p>

              <!-- Event Info -->
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-gray-300">
                  <svg
                    class="w-5 h-5 mr-2"
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
                  <span>{{ event.date }}</span>
                </div>
                <div class="flex items-center text-gray-300">
                  <svg
                    class="w-5 h-5 mr-2"
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
                  <span>{{ event.location }}</span>
                </div>
              </div>
            </div>

            <!-- Ticket Button -->
            <div class="flex items-center justify-between">
              <span class="text-xl font-semibold">{{ event.price }}</span>
              <button
                :class="[
                  'px-6 py-2 rounded-lg font-medium transition-all duration-300',
                  event.status === 'open'
                    ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed',
                ]"
                :disabled="event.status === 'closed'"
              >
                {{ event.status === "open" ? "Get Tickets" : "Sold Out" }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>
