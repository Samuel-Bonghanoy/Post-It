<script setup lang="ts">
import router from "../../router";
import { usePostsStore } from "../../stores/modules/posts";
import LikesModalFollowButton from "./LikesModalFollowButton.vue";

const props = defineProps({
  postId: Number,
});

const postsStore = usePostsStore();

const postLikers = await postsStore.getPostLikes(props.postId as number);

const navigateToUser = (userId: number) => {
  router.push(`/home/profile/${userId}`);
};
</script>

<template>
  <div v-if="postLikers.length === 0">Nobody has liked this post yet.</div>
  <div
    v-for="user in postLikers"
    :key="user.id"
    class="flex flex-row items-center justify-between px-2 py-3 mx-3 mb-3 rounded-lg bg-primary-200"
  >
    <div class="flex">
      <div
        @click="navigateToUser(user.users.id)"
        class="w-auto h-auto rounded-full"
      >
        <img
          class="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
          alt="User avatar"
          :src="user.users.profile_pic_url"
        />
      </div>
      <div class="flex flex-col mt-1 ml-4">
        <div class="text-sm font-semibold text-primary-300">
          {{ user.users.username }}
        </div>
        <div class="flex w-full mt-1">
          <div class="mr-1 text-xs text-gray-300 cursor-pointer font-base">
            @{{ user.users.username.toLowerCase() }}
          </div>
        </div>
      </div>
    </div>
    <LikesModalFollowButton :user-id="user.users.id" />
  </div>
</template>
