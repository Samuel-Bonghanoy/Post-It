<script setup lang="ts">
import ProfileDetails from "./ProfileDetails.vue";
import ProfilePosts from "./ProfilePosts.vue";
import ProgressSpinner from "primevue/progressspinner";
</script>

<template>
  <!-- component -->
  <div class="app">
    <main
      class="container grid grid-cols-1 gap-6 px-2 mx-auto my-12 lg:grid-cols-[40%_60%] w-[95%] mt-[-0.001%]"
    >
      <suspense>
        <ProfileDetails />
        <template #fallback>
          <aside class="flex justify-center mt-[10%] w-full">
            <div class="mx-auto">
              <ProgressSpinner />
            </div>
          </aside>
        </template>
      </suspense>

      <ProfilePosts />
    </main>
  </div>
</template>
