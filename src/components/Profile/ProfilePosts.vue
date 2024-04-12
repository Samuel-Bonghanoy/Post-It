<script setup lang="ts">
import { ref } from "vue";
import { usePostsStore } from "../../stores/modules/posts";
import { useUsersStore } from "../../stores/modules/users";
import Post from "../Posts/Post.vue";

const postsStore = usePostsStore();
const usersStore = useUsersStore();

const currentUserPosts = ref(
  postsStore.posts?.filter((p) => p.users.id === usersStore.currentUser?.id)
);
</script>

<template>
  <div class="col-start-2">
    <div v-for="post in currentUserPosts" :key="post.id">
      <Post :post="post" />
    </div>
  </div>
</template>
