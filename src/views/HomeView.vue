<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

// @ts-ignore
console.log(window.Telegram.WebApp);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
