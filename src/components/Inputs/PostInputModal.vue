<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Textarea from "./Textarea.vue";
import InputText from "primevue/inputtext";
import { ref } from "vue";

const visible = ref(false);
const title = ref("");
const body = ref("");
</script>

<template>
  <div class="flex justify-center card">
    <Button
      label="Write Post"
      icon="pi pi-external-link"
      @click="visible = true"
      class="h-[70%] text-black"
      >Write Post</Button
    >
    <Dialog
      v-model:visible="visible"
      modal
      header="What's on your mind?"
      :style="{ width: '50rem' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
      class="flex flex-col"
    >
      <div class="flex flex-col gap-2">
        <h3 class="font-semibold">Post Title</h3>
        <InputText v-model="title" />

        <h3 class="font-semibold">Post Content</h3>
        <Textarea v-model="body" />
        <Button
          label="Write Post"
          class="self-end w-[20%] mt-2"
          @click="visible = false"
          severity="success"
        />
      </div>
    </Dialog>
  </div>
</template>
