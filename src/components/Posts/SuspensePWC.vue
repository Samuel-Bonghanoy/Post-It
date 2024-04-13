<script setup lang="ts">
import Header from "../UI/Header.vue";
import PostInput from "../Inputs/PostInput.vue";
import PostWithComments from "./PostWithComments.vue";
import ProgressSpinner from "primevue/progressspinner";
</script>

<template>
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
