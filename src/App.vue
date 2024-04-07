<script setup lang="ts">
import Navbar from "./components/Navigation/Navbar.vue";
import Sidebar from "./components/Navigation/Sidebar.vue";
import Post from "./components/Posts/Post.vue";
import Header from "./components/UI/Header.vue";
</script>

<template>
  <div class="w-screen h-screen overflow-x-hidden bg-primary-50">
    <Navbar />
    <section class="flex w-full h-full">
      <div class="w-[20%] sticky flex">
        <Sidebar />
        <div
          class="w-[0.3px] h-full absolute top-[5%] left-[90%] bg-primary-200"
        ></div>
      </div>

      <div class="flex flex-col w-[80%] pt-10 mx-auto font-sans bg-midnight">
        <Header />
        <router-view />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
