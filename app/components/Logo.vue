<template>
  <img :src="src" alt="Logo" class="h-10 w-auto object-contain" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: "~/assets/images/logo-imagi.svg", // perhatikan: ada '/' di depan
  },
});
</script>
