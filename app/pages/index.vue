<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "@/components/ui/button/Button.vue";

const partnerLogos = [
  {
    src: "images/Partners/Comic_Frontier_logo.png",
    alt: "Comic Frontier Logo",
  },
  {
    src: "images/Partners/Copy of Artatix Logo - Blue.png",
    alt: "Artatix Logo",
  },
  {
    src: "images/Partners/dvst-project-new.7ddc711f.png",
    alt: "DVST Project Logo",
  },
  {
    src: "images/Partners/Logo Mitra Suzuki blok putih-03.png",
    alt: "Mitra Suzuki Logo",
  },
  {
    src: "images/Partners/logo nki.png",
    alt: "NKI Logo",
  },
  {
    src: "images/Partners/LOGO YAMAHA OUTLINE.png",
    alt: "Yamaha Logo",
  },
  {
    src: "images/Partners/LOGO-COMECORA-COLOR-1.png",
    alt: "Comecora Logo",
  },
  {
    src: "images/Partners/Minami Market Vertikal.png",
    alt: "Minami Market Logo",
  },
];

// Countdown
const countdown = ref("");
let intervalId;

onMounted(() => {
  const eventDate = new Date("2025-12-31T23:59:59").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdown.value = "Event has started!";
      clearInterval(intervalId);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.value = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>
<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.glass-bright {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glass-hover {
  transition: all 0.3s ease;
}

.glass-hover:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
}

.logo-box {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.logo-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}
</style>
<template>
  <div class="space-y-20">
    <!-- Hero Section Full Bleed dengan Hover Gradient -->
    <section
      class="relative w-screen md:h-screen left-1/2 -translate-x-1/2 bg-primary text-white overflow-hidden"
    >
      <!-- Desktop Version -->
      <div class="hidden md:block h-full">
        <img
          src="~/assets/images/IMAGI-2/poster.png"
          alt="IMAGI Festival 2025 Poster"
          class="w-full h-screen object-cover object-top"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-6"
        >
          <h1 class="text-5xl font-bold mb-4">Nama Event Terkini</h1>
          <p class="text-xl mb-2">Tanggal: 31 Desember 2025</p>
          <p class="text-2xl font-mono mb-6">{{ countdown }}</p>
          <p class="max-w-3xl mx-auto mb-8 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/events">
              <Button variant="glass" size="xl"> Lihat Event </Button>
            </NuxtLink>
            <NuxtLink to="/tickets">
              <Button variant="accent" size="xl"> Dapatkan Tiket </Button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile Version -->
      <div class="md:hidden p-6 mt-16">
        <div
          class="bg-primary border border-accent/20 rounded-2xl overflow-hidden"
        >
          <div class="aspect-video w-full relative">
            <img
              src="~/assets/images/IMAGI-2/poster.png"
              alt="IMAGI Festival 2025 Poster"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent h-20"
            ></div>
          </div>
          <div class="p-6 -mt-10 relative">
            <h1 class="text-2xl font-bold mb-2">Nama Event Terkini</h1>
            <p class="text-sm text-white/70 mb-2">Tanggal: 31 Desember 2025</p>
            <p class="text-lg font-mono mb-4 text-accent">{{ countdown }}</p>
            <p class="text-sm text-white/70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div class="flex flex-col gap-3">
              <NuxtLink to="/events" class="w-full">
                <Button variant="glass" class="w-full"> Lihat Event </Button>
              </NuxtLink>
              <NuxtLink to="/tickets" class="w-full">
                <Button variant="accent" class="w-full">
                  Dapatkan Tiket
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Daftar Event Terdekat -->
    <section class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-white mb-10">
        Event Terdekat
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="i in 4"
          :key="i"
          class="glass glass-hover rounded-lg p-4 text-white"
        >
          <img
            src="https://via.placeholder.com/400x250"
            alt="Event"
            class="rounded mb-3"
          />
          <h3 class="font-semibold text-lg">Event {{ i }}</h3>
          <p class="text-sm text-white/70">Deskripsi singkat event {{ i }}.</p>
        </div>
      </div>
    </section>
    <!-- Daftar Program -->
    <section class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-white mb-10">Program</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="i in 3"
          :key="i"
          class="relative glass glass-hover rounded-lg h-40 flex items-center justify-center text-white font-bold text-xl overflow-hidden"
        >
          <img
            src="https://via.placeholder.com/600x400"
            alt="Program"
            class="absolute inset-0 w-full h-full object-cover rounded-lg opacity-40"
          />
          <span class="relative">Program {{ i }}</span>
        </div>
      </div>
    </section>

    <!-- IOEA Section -->
    <section class="glass py-16 text-center px-4 mx-4 rounded-xl">
      <h2 class="text-3xl font-bold text-white mb-6">
        Member of International Otaku Expo Association
      </h2>
      <img
        src="/assets/images/IOEA/IOEA.png"
        alt="IOEA Logo"
        class="mx-auto h-24 object-contain mb-6"
      />
      <p class="text-white/80 max-w-2xl mx-auto mb-8">
        International Otaku Expo Association (IOEA) adalah asosiasi
        internasional yang menghubungkan dan mendukung event-event Japanese pop
        culture di seluruh dunia. Sebagai anggota resmi, IMAGI Festival
        berkomitmen untuk menyajikan kualitas event bertaraf internasional.
      </p>
      <a href="https://iofe.info" target="_blank" rel="noopener noreferrer">
        <Button variant="accent" size="lg">
          <span>Visit IOFE Website</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
        </Button>
      </a>
    </section>

    <!-- Kolaborasi -->
    <section class="glass py-16 mx-4 rounded-xl">
      <h2 class="text-3xl font-bold text-center text-white mb-10">
        Kolaborasi
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        <div
          v-for="(logo, index) in partnerLogos"
          :key="index"
          class="logo-box flex items-center justify-center aspect-video"
        >
          <nuxt-img
            :src="logo.src"
            :alt="logo.alt"
            class="max-h-16 w-auto object-contain"
            loading="lazy"
            format="webp"
            fit="contain"
            quality="90"
          />
        </div>
      </div>
    </section>

    <!-- Kontak -->
    <section
      class="glass glass-bright py-16 text-center text-white mx-4 rounded-xl"
    >
      <h2 class="text-3xl font-bold mb-6">Hubungi Kami</h2>
      <div class="flex justify-center gap-6 text-2xl">
        <a href="#" class="hover:text-secondary transition">🌐</a>
        <a href="#" class="hover:text-secondary transition">🐦</a>
        <a href="#" class="hover:text-secondary transition">📘</a>
        <a href="#" class="hover:text-secondary transition">📸</a>
      </div>
    </section>

    <!-- Kerjasama -->
    <section class="glass py-16 text-center text-white mx-4 rounded-xl">
      <h2 class="text-3xl font-bold mb-6">Kerjasama dengan WeAreImagi</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink to="/partnership">
          <Button variant="secondary" size="lg"> Ajukan Kerjasama </Button>
        </NuxtLink>
        <NuxtLink to="/sponsorship">
          <Button variant="secondary" size="lg"> Sponsorship </Button>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
