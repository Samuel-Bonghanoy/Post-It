<script setup lang="ts">
import Textarea from "primevue/textarea";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <div class="flex justify-start card">
    <Textarea v-model="value" autoResize rows="5" cols="30" class="w-[100%]" />
  </div>
</template>
