<template>
  <button
    type="button"
    class="inline-flex items-center justify-center w-8 h-8 transition-colors duration-200 bg-gray-100 rounded-full dark:bg-surface-800 hover:bg-gray-200 dark:hover:bg-surface-700 text-surface-700 hover:text-surface-900 dark:text-surface-500 dark:hover:text-surface-300"
    @click="toggleDarkMode"
  >
    <i class="pi toggle-icon" />
  </button>
</template>

<script setup lang="ts">
const toggleDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};
</script>

<style>
.toggle-icon:before {
  content: "\e9c8";
}

:root[class="dark"] .toggle-icon:before {
  content: "\e9c7";
}
</style>
