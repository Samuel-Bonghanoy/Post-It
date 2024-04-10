<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import isEmptyString from "../../utils/isEmptyString";
import { usePostsStore } from "../../stores/modules/posts";
import { ref } from "vue";

const postsStore = usePostsStore();

const visible = ref(false);
const title = ref("");
const body = ref("");

const onPostClick = () => {
  visible.value = false;

  console.log(title.value, body);

  if (isEmptyString(title.value) || isEmptyString(body.value)) return;

  postsStore.createPost(body.value, title.value);

  body.value = "";
  title.value = "";
  console.log("yues");
};
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
        <Textarea
          v-model="body"
          autoResize
          rows="5"
          cols="30"
          class="w-[100%]"
        />
        <Button
          label="Write Post"
          class="self-end w-[20%] mt-2"
          @click="onPostClick"
          severity="success"
        />
      </div>
    </Dialog>
  </div>
</template>
