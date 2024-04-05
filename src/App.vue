<script setup lang="ts">
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <div class="w-screen h-screen bg-midnight">
    <Navbar />
    <div class="flex flex-col w-6/12 pt-10 mx-auto font-sans bg-midnight">
      <h1 class="pb-3 text-3xl font-black text-slate-100"></h1>
      <!-- <router-view /> -->
    </div>
  </div>
</template>

<style scoped></style>
