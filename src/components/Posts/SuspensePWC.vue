<script setup lang="ts">
import PostWithComments from "./PostWithComments.vue";
import ProgressSpinner from "primevue/progressspinner";
</script>

<template>
  <Header />
  <PostInput />
  <suspense>
    <PostWithComments />
    <template #fallback>
      <aside class="flex justify-center mt-[10%] w-full">
        <div class="mx-auto">
          <ProgressSpinner />
        </div>
      </aside>
    </template>
  </suspense>
</template>
