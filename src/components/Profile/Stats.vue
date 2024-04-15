<script setup lang="ts">
import { useUsersStore } from "../../stores/modules/users";
import { usePostsStore } from "../../stores/modules/posts";

const usersStore = useUsersStore();
const postsStore = usePostsStore();
</script>

<template>
  <div class="flex items-center justify-center gap-2 my-3">
    <div class="mx-4 font-semibold text-center">
      <p class="text-gray-300">
        {{
          postsStore.posts?.filter(
            (p) => p.users.id === usersStore.viewedUser?.id
          ).length
        }}
      </p>
      <span class="text-gray-300">Posts</span>
    </div>
    <div class="mx-4 font-semibold text-center">
      <p class="text-gray-300">
        {{ usersStore.viewedUserFollows?.length || "0" }}
      </p>
      <span class="text-gray-300">Followers</span>
    </div>
    <div class="mx-4 font-semibold text-center">
      <p class="text-gray-300">102</p>
      <span class="text-gray-300">Following</span>
    </div>
  </div>
</template>
