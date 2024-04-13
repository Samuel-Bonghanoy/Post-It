<script setup lang="ts">
import PostList from "./PostList.vue";
import Header from "../UI/Header.vue";
import PostInput from "../Inputs/PostInput.vue";
import ProgressSpinner from "primevue/progressspinner";
</script>

<template>
  <Header />
  <PostInput />
  <suspense>
    <PostList />
    <template #fallback>
      <aside class="flex justify-center mt-[10%] w-full">
        <div class="mx-auto">
          <ProgressSpinner />
        </div>
      </aside>
    </template>
  </suspense>
</template>
