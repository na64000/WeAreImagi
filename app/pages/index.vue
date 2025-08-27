<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import heroImage from "~/assets/images/IMAGI-2/poster.png";
import Prism from "~/components/Prism/Prism.vue";
import BlurText from "~/components/BlurText.vue";

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
  {
    src: "images/Partners/amanah-minuman.webp",
    alt: "Amanah Minuman Logo",
  },
  {
    src: "images/Partners/bank-kalsel.webp",
    alt: "Bank Kalsel Logo",
  },
  {
    src: "images/Partners/cocacola.webp",
    alt: "Coca Cola Logo",
  },
  {
    src: "images/Partners/GICOF-LOGO-Kor2.webp",
    alt: "GICOF Logo",
  },
  {
    src: "images/Partners/haluapp.webp",
    alt: "Halu App Logo",
  },
  {
    src: "images/Partners/icl.webp",
    alt: "ICL Logo",
  },
  {
    src: "images/Partners/im3.webp",
    alt: "IM3 Logo",
  },
  {
    src: "images/Partners/naderu.webp",
    alt: "Naderu Logo",
  },
  {
    src: "images/Partners/amanah-borneo-park.webp",
    alt: "Amanah Borneo Park Logo",
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
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.logo-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
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
<template>
  <!-- Mobile box 16:9 -->
  <section class="w-full flex justify-center px-4 pt-20 md:hidden">
    <div
      class="w-full max-w-xl rounded-xl overflow-hidden shadow-lg flex flex-col bg-black/20 backdrop-blur-md"
    >
      <!-- Bagian Poster -->
      <div class="w-full aspect-w-16 aspect-h-9 relative">
        <img
          :src="heroImage"
          alt="IMAGI 2 Poster"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Bagian Keterangan Event -->
      <div class="p-4 flex flex-col gap-4 text-center text-white">
        <!-- Logo IMAGI 2 -->
        <div class="mx-auto w-36 h-auto">
          <img
            src="~/assets/images/IMAGI-2/logo.png"
            alt="IMAGI 2 Logo"
            class="w-full h-auto"
          />
        </div>

        <p class="text-sm text-white/90">
          Creator, Cosplay, Community Convention terbesar di Kalimantan telah
          hadir kembali!
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <!-- Tombol Lihat Detail Event -->
          <button
            class="px-6 py-3 rounded-lg border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300"
          >
            Lihat Detail Event
          </button>

          <!-- Tombol Dapatkan Tiket -->
          <button
            class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Dapatkan Tiket
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Desktop fullscreen fixed background -->
  <div
    class="hidden md:flex w-full h-screen bg-cover bg-center bg-top bg-fixed items-center justify-center relative"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <!-- Gradient overlay -->
    <div
      class="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#111111] to-transparent"
    ></div>
    <div class="relative z-10 text-center text-white max-w-3xl space-y-4 px-4">
      <img
        src="~/assets/images/IMAGI-2/logo.png"
        alt="IMAGI 2"
        class="mx-auto"
      />
      <p class="text-xl text-white/90">
        Creator, Cosplay, Community Convention terbesar di Kalimantan telah
        hadir kembali!
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <!-- Tombol Lihat Detail Event -->
        <button
          class="px-6 py-3 rounded-lg border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300"
        >
          Lihat Detail Event
        </button>

        <!-- Tombol Dapatkan Tiket -->
        <button
          class="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-all duration-300"
        >
          Dapatkan Tiket
        </button>
      </div>
    </div>
  </div>

  <div>
    <!-- Animated Text Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4">
        <!-- Hero Text -->
        <div class="flex flex-col items-center justify-center space-y-6">
          <h3
            class="text-2xl font-medium text-white/90 tracking-wide font-sora text-center"
          >
            We're not creators, But, we are creating
          </h3>
          <h1
            class="text-6xl font-bold text-white font-sora text-center drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            We Are Imagi
          </h1>
          <p
            class="mt-8 text-gray-300 opacity-0 animate-fade-in max-w-2xl mx-auto text-center font-sora text-lg leading-relaxed"
          >
            Bergabunglah dengan kami dalam perjalanan mengubah kreativitas
            menjadi realitas. Bersama-sama, kita menciptakan pengalaman yang tak
            terlupakan.
          </p>

          <!-- Action Button dengan Icon -->
          <div class="mt-12 opacity-0 animate-fade-in">
            <button
              class="inline-flex items-center justify-center rounded-lg px-8 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-medium shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <span class="mr-2">Berkenalan Lebih Jauh</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7-7 7M3 12h17"
                />
              </svg>
            </button>
          </div>

          <!-- Decorative Icon -->
          <div class="mt-16 opacity-0 animate-fade-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white/30 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute inset-0 pointer-events-none"></div>
      </div>
    </section>

    <!-- Daftar Event Terdekat -->
    <section class="px-4 sm:px-6 lg:px-8 space-y-20 py-20 max-w-6xl mx-auto">
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
    <section class="max-w-6xl mx-auto px-4 mb-20">
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

    <!-- Kolaborasi -->
    <section
      class="relative py-16 mx-4 rounded-xl mb-20 max-w-6xl mx-auto overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <Prism
          class="w-full h-full"
          :height="2"
          :base-width="3"
          animation-type="rotate"
          :glow="0.6"
          :noise="0.2"
        />
      </div>
      <h2 class="relative z-10 text-3xl font-bold text-center text-white mb-10">
        Kolaborasi
      </h2>
      <div
        class="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4"
      >
        <div
          v-for="(logo, index) in partnerLogos"
          :key="index"
          class="logo-box flex items-center justify-center h-32"
        >
          <nuxt-img
            :src="logo.src"
            :alt="logo.alt"
            class="max-h-20 w-auto object-contain"
            loading="lazy"
            format="webp"
            fit="contain"
            quality="90"
          />
        </div>
      </div>
    </section>

    <!-- Ikut & Bergabung -->
    <section class="py-16 mb-20 max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center text-white">
        Ikut & Bergabung
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Social Media Links -->
        <div class="flex flex-col items-center justify-start gap-4">
          <h3 class="text-xl font-semibold text-white/90 mb-4">Ikuti Kami</h3>
          <div class="flex flex-col gap-3 w-full max-w-lg mx-auto">
            <a
              href="https://twitter.com/imagifest"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border border-[#1DA1F2]/20 hover:border-[#1DA1F2]/30 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                />
              </svg>
              <span class="font-medium">Twitter/X</span>
            </a>
            <a
              href="https://discord.gg/imagifest"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#5865F2]/10 hover:bg-[#5865F2]/20 border border-[#5865F2]/20 hover:border-[#5865F2]/30 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                />
              </svg>
              <span class="font-medium">Discord</span>
            </a>
            <a
              href="https://facebook.com/imagifest"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/20 hover:border-[#1877F2]/30 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              <span class="font-medium">Facebook</span>
            </a>

            <a
              href="https://instagram.com/imagi.fest"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#E4405F]/10 hover:bg-[#E4405F]/20 border border-[#E4405F]/20 hover:border-[#E4405F]/30 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
              <span class="font-medium">Instagram</span>
            </a>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 hover:border-[#25D366]/30 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              <span class="font-medium">Whatsapp</span>
            </a>

            <a
              href="https://t.me/imagifest"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/20 hover:border-[#0088cc]/30 text-white/90 hover:text-white transition-all duration-300 group"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path
                  d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                />
              </svg>
              <span class="font-medium">Telegram</span>
            </a>
          </div>
        </div>

        <!-- Discord Widget with Glow -->
        <div class="relative flex justify-center mt-8">
          <div
            class="absolute inset-0 bg-[#5865F2]/20 blur-[100px] rounded-full transform translate-y-20"
          ></div>
          <div class="relative">
            <iframe
              src="https://discord.com/widget?id=1247495231163600988&theme=dark"
              class="relative z-10 w-[350px] h-[500px] rounded-xl border border-[#5865F2]/30 bg-black/30 backdrop-blur-sm"
              allowtransparency="true"
              frameborder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
            <div
              class="absolute inset-0 rounded-xl border border-[#5865F2]/20 z-20 pointer-events-none shadow-[0_0_50px_-12px_rgba(88,101,242,0.3)]"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kerjasama -->
    <section
      class="glass py-16 text-center text-white rounded-xl max-w-6xl mx-auto"
    >
      <h2 class="text-3xl font-bold mb-6">Kerjasama dengan WeAreImagi</h2>
      <div class="flex flex-wrap justify-center gap-4">
        <NuxtLink
          to="/partnership"
          class="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300"
        >
          Ajukan Kerjasama
        </NuxtLink>
        <NuxtLink
          to="/sponsorship"
          class="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all duration-300"
        >
          Sponsorship
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
