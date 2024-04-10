<script setup lang="ts">
import PostInputModal from "../Inputs/PostInputModal.vue";
import { useUsersStore } from "../../stores/modules/users";

const usersStore = useUsersStore();

console.log(usersStore.currentUser?.username);
</script>

<template>
  <div class="flex justify-between w-[95%]">
    <h1 class="pb-3 mb-3 text-4xl font-bold text-slate-100">
      Welcome Back, {{ usersStore.currentUser?.username }}
    </h1>
    <PostInputModal />
  </div>
</template>
