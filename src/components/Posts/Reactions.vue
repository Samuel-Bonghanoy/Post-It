<script setup lang="ts">
import { ref } from "vue";
import LikedBy from "./LikedBy.vue";
import { usePostsStore } from "../../stores/modules/posts";
import { useUsersStore } from "../../stores/modules/users";

const postsStore = usePostsStore();
const usersStore = useUsersStore();

const likeClicked = ref(false);
const shareClicked = ref(false);

const props = defineProps({
  postId: Number,
});

const onLikeClick = () => {
  likeClicked.value = !likeClicked.value;

  postsStore.likePost(usersStore.currentUser.id, props.postId);

  console.log(usersStore.currentUser.id, props.postId);
};
</script>

<template>
  <div class="flex justify-start mb-3 border-primary-100">
    <div class="flex justify-end w-full pt-2 pr-5 mt-1">
      <LikedBy />
      <span
        class="w-8 h-8 px-2 py-2 mr-2 text-center transition duration-300 ease-out rounded-full cursor-pointer hover:bg-primary-100"
        @click="onLikeClick"
        :class="[
          likeClicked
            ? 'bg-primary-300 text-primary-50'
            : 'bg-primary-50 text-primary-300',
        ]"
      >
        <svg
          class="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          ></path>
        </svg>
      </span>
      <span
        class="flex items-center justify-center w-8 h-8 px-2 py-2 mr-2 text-center transition duration-300 ease-out rounded-full cursor-pointer bg-primary-50 text-primary-300 hover:bg-primary-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16px"
          fill="#ffffff"
          stroke="currentColor"
          viewBox="0 0 256 256"
        >
          <path
            d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"
          ></path>
        </svg>
      </span>
      <span
        class="w-8 h-8 px-2 py-2 mr-2 text-center transition duration-300 ease-out rounded-full cursor-pointer hover:bg-primary-100"
        @click="shareClicked = !shareClicked"
        :class="[
          shareClicked
            ? 'bg-primary-300 text-primary-50'
            : 'bg-primary-50 text-primary-300',
        ]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="14px"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          ></path>
        </svg>
      </span>
    </div>
  </div>
  <div class="flex w-full border-t border-gray-100">
    <div class="flex flex-row mx-5 mt-3 text-xs">
      <div
        class="flex items-center mb-2 mr-4 font-normal rounded-md text-primary-300"
      >
        Comments:
        <div class="ml-1 text-gray-400 text-ms">30</div>
      </div>
      <div
        class="flex items-center mb-2 mr-4 font-normal rounded-md text-primary-300"
      >
        Views:
        <div class="ml-1 text-gray-400 text-ms">60k</div>
      </div>
    </div>
    <div class="flex justify-end w-full mx-5 mt-3 text-xs">
      <div class="flex items-center mb-2 mr-4 rounded-md text-primary-300">
        Likes:
        <div class="ml-1 text-gray-400 text-ms">120k</div>
      </div>
    </div>
  </div>
</template>
