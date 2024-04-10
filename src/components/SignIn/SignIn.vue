<template>
  <div
    :class="[
      'min-h-screen p-8 flex items-center justify-center transition-all duration-200',
      gradient,
    ]"
  >
    <div
      class="fixed top-0 left-0 flex items-center justify-end w-full gap-3 p-8"
    >
      <ColorPalette v-model="gradient" />
    </div>

    <div
      class="flex flex-col gap-6 shadow-xl bg-white/10 p-9 rounded-xl backdrop-blur-xl"
    >
      <div class="text-center">
        <span
          class="inline-flex items-center justify-center p-4 rounded-full bg-white/10"
        >
          <i class="text-4xl text-white pi pi-user" />
        </span>
      </div>
      <InputText placeholder="Username" />
      <InputText placeholder="Password" />
      <Button label="Login" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorPalette from "./ColorPalette.vue";
import { ref } from "vue";

const gradient = ref(
  "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-400 to-purple-900"
);
</script>
