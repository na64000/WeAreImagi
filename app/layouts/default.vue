<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen bg-[#111111] text-neutral-100 flex flex-col">
    <Navbar />
    <main :class="['w-full flex-1', { 'pt-24': !isIndexPage }]">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

const route = useRoute();
const isIndexPage = computed(() => route.path === "/");
</script>
