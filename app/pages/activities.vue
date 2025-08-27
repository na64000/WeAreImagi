<script setup>
const activities = [
  {
    name: "Workshop Cosplay",
    type: "Workshop & Tutorial",
    role: "Learn costume making and character makeup",
    description:
      "Belajar teknik dasar cosplay dari para profesional, mulai dari pembuatan kostum hingga makeup character.",
    gradientStyle: {},
  },
  {
    name: "Dance Competition",
    type: "Stage Performance",
    role: "Solo and Group Dance Battle",
    description:
      "Kompetisi dance cover dengan berbagai kategori. Tunjukkan bakat dan kreativitasmu dalam menari!",
    gradientStyle: {},
  },
  {
    name: "Game Tournament",
    type: "E-Sports Competition",
    role: "Mobile Legends & Valorant",
    description: "Tournament game dengan berbagai kategori dan hadiah menarik.",
    gradientStyle: {},
  },
  {
    name: "Art Gallery",
    type: "Exhibition",
    role: "Digital Art & Illustration",
    description:
      "Pameran karya seni dari berbagai artis berbakat. Lukisan, ilustrasi digital, dan berbagai bentuk seni visual.",
    gradientStyle: {},
  },
  {
    name: "Music Show",
    type: "Live Performance",
    role: "J-Rock & J-Pop Cover",
    description:
      "Penampilan musik dari band-band J-Rock dan J-Pop cover terbaik Indonesia.",
    gradientStyle: {},
  },
  {
    name: "Merch Market",
    type: "Shopping Area",
    role: "Anime & Game Merchandise",
    description:
      "Berbagai merchandise anime, game, dan pop culture Jepang dari vendor terpilih.",
    gradientStyle: {},
  },
];

const updateGradient = (e, index) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  activities[index].gradientStyle = {
    background: `radial-gradient(circle at ${x}px ${y}px, rgba(244,79,68,0.25), transparent 70%)`,
  };
};

const resetGradient = (index) => {
  activities[index].gradientStyle = {};
};
</script>

<template>
  <div
    class="min-h-screen bg-primary text-neutralWhite px-6 py-12 max-w-7xl mx-auto"
  >
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-neutralWhite drop-shadow-lg">
        Activities
      </h1>
      <p class="mt-3 text-neutralWhite/70 max-w-2xl mx-auto">
        Explore our exciting activities at IMAGI Festival. From workshops to
        competitions, exhibitions to performances, immerse yourself in Japanese
        pop culture!
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-2xl border border-accent/20"
    >
      <div
        v-for="(activity, index) in activities"
        :key="index"
        class="relative p-6 bg-primary border border-accent/20 transition-colors duration-500 group overflow-hidden"
        :class="[
          index === 0 ? 'rounded-tl-2xl' : '',
          index === 2 ? 'rounded-tr-2xl' : '',
          index === activities.length - 3 ? 'rounded-bl-2xl' : '',
          index === activities.length - 1 ? 'rounded-br-2xl' : '',
        ]"
        @mousemove="updateGradient($event, index)"
        @mouseleave="resetGradient(index)"
      >
        <!-- Efek gradient mengikuti cursor -->
        <div
          class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          :style="activity.gradientStyle"
        ></div>

        <!-- Foto activity -->
        <div
          class="relative z-10 mb-4 aspect-square w-full overflow-hidden rounded-lg border border-accent/20"
        >
          <img
            :src="`https://placehold.co/400x400?text=${encodeURIComponent(
              activity.type
            )}`"
            :alt="activity.name"
            class="object-cover w-full h-full"
          />
        </div>

        <!-- Nama Activity -->
        <div class="relative z-10">
          <h2 class="text-xl font-semibold mb-1">{{ activity.name }}</h2>
          <p class="text-sm text-accent mb-2">{{ activity.type }}</p>
          <p class="text-sm text-neutralWhite/70 mb-4">{{ activity.role }}</p>
          <p class="text-sm text-neutralWhite/50">{{ activity.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-h-screen {
  background: linear-gradient(
    to bottom,
    rgba(17, 17, 17, 0.9),
    rgba(17, 17, 17, 0.95)
  );
}
</style>
