<script setup lang="ts">
import ProfileDetails from "./ProfileDetails.vue";
import Post from "../Posts/Post.vue";
</script>

<template>
  <!-- component -->
  <div class="app">
    <main
      class="container grid grid-cols-1 gap-6 px-2 mx-auto my-12 lg:grid-cols-[40%_60%] w-[95%] mt-[-0.001%]"
    >
      <ProfileDetails />
      <div class="col-start-2"><Post /> <Post /></div>
    </main>
  </div>
</template>
