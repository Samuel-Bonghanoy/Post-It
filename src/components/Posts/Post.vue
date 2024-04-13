<script setup lang="ts">
import type PostsInterface from "../../types/interfaces/posts";
import Reactions from "./Reactions.vue";
import CommentInput from "../Inputs/CommentInput.vue";
import parseDate from "../../utils/parseDate";
import router from "../../router";

const props = defineProps({
  post: { type: Object as () => PostsInterface },
});

const { title, body, created_at, users, id } = props.post;

const navigateToUser = () => {
  router.push(`/home/profile/${users.id}`);
};

const navigateToPost = () => {
  router.push(`/home/posts/${id}`);
};
</script>

<template>
  <div
    class="mb-2 bg-primary-200 h-fit py-2 rounded-lg shadow w-[95%] transition duration-300 ease-out hover:scale-[1.01] hover:shadow-slate-800"
  >
    <div @click="navigateToPost">
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
            <div class="text-xs font-thin text-gray-400">
              • {{ parseDate(created_at) }}
            </div>
          </div>
        </div>
      </div>

      <div class="px-2 mx-3 mb-1 text-sm text-primary-300">
        <h1 class="mb-1.5 text-2xl font-bold">{{ title }}</h1>
        {{ body }}
      </div>
    </div>
    <Reactions :post-id="id" />

    <CommentInput :post-id="id" />
  </div>
</template>
