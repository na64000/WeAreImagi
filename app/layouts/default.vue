<template>
  <div class="min-h-screen bg-[#111111] text-neutral-100">
    <Navbar />
    <main
      :class="[
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        { 'pt-24': !isIndexPage },
      ]"
    >
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isIndexPage = computed(() => route.path === "/");
</script>
