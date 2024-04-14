<script setup lang="ts">
import router from "../../router";
import { usePostsStore } from "../../stores/modules/posts";

const postsStore = usePostsStore();

const props = defineProps({
  postId: Number,
});

const navigateToUser = () => {
  router.push(`/home/profile/${users.id}`);
};
</script>

<template>
  <div class="flex flex-row px-2 py-3 mx-3">
    <div @click="navigateToUser" class="w-auto h-auto rounded-full">
      <img
        class="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
        alt="User avatar"
        :src="users.profile_pic_url"
      />
    </div>
    <div class="flex flex-col mt-1 ml-4">
      <div class="text-sm font-semibold text-primary-300">
        {{ users.username }}
      </div>
      <div class="flex w-full mt-1">
        <div class="mr-1 text-xs text-gray-300 cursor-pointer font-base">
          @{{ users.username.toLowerCase() }}
        </div>
      </div>
    </div>
  </div>
</template>
