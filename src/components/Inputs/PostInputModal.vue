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

  if (isEmptyString(title.value) || isEmptyString(body.value)) return;

  postsStore.createPost(body.value, title.value);

  body.value = "";
  title.value = "";
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
      <div class="p-4 mb-6 bg-primary-200 rounded-lg shadow w-[95%] text-black">
        <input
          v-model="title"
          name="message"
          placeholder="Title"
          class="w-[40%] p-2 mb-2 text-sm placeholder-gray-500 bg-primary-300 border border-transparent rounded-lg appearance-none rounded-tg focus:outline-none"
        />
        <textarea
          v-model="body"
          name="message"
          placeholder="Type something..."
          class="w-full p-2 text-sm placeholder-gray-500 border border-transparent rounded-lg appearance-none bg-primary-300 rounded-tg focus:outline-none"
        ></textarea>
        <footer class="flex justify-between mt-2">
          <div class="flex gap-2">
            <span
              class="flex items-center w-8 h-8 px-2 transition duration-300 ease-out rounded-full cursor-pointer text-primary-300 bg-primary-100 hover:bg-primary-50 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </span>
            <span
              class="flex items-center w-8 h-8 px-2 transition duration-300 ease-out rounded-full cursor-pointer text-primary-300 bg-primary-100 hover:bg-primary-50 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span
              class="flex items-center w-8 h-8 px-2 transition duration-300 ease-out rounded-full cursor-pointer text-primary-300 bg-primary-100 hover:bg-primary-50 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
            </span>
          </div>
          <button
            @click="onPostClick"
            class="flex items-center px-4 py-2 text-sm text-white transition duration-300 ease-out rounded-lg shadow-lg bg-primary-100 hover:bg-primary-50 hover:text-white"
          >
            Post
            <svg
              class="ml-1"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </footer>
      </div>
    </Dialog>
  </div>
</template>
