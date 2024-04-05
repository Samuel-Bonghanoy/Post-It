<script setup lang="ts">
import Navbar from "./components/Navigation/Navbar.vue";
</script>

<template>
  <div class="w-screen h-screen overflow-x-hidden bg-primary-50">
    <Navbar />
    <section class="flex w-full h-full">
      <div class="w-[25%] relative">
        <div
          class="w-[0.3px] h-full absolute top-[5%] left-[90%] bg-primary-200"
        ></div>
      </div>

      <div class="flex flex-col w-[75%] pt-10 mx-auto font-sans bg-midnight">
        <h1 class="pb-3 text-4xl font-bold text-slate-100">
          Welcome Back, Amy
        </h1>
        <!-- <router-view /> -->
      </div>
    </section>
  </div>
</template>

<style scoped></style>
