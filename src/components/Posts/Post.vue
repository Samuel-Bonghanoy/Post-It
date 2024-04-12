<script setup lang="ts">
import type PostsInterface from "../../types/interfaces/posts";
import Reactions from "./Reactions.vue";
import Comment from "../Comments/Comment.vue";
import CommentInput from "../Inputs/CommentInput.vue";
import parseDate from "../../utils/parseDate";

const props = defineProps({
  post: { type: Object as () => PostsInterface },
});
</script>

<template>
  <div class="mb-6 bg-primary-200 h-fit py-2 rounded-lg shadow w-[95%]">
    <div class="flex flex-row px-2 py-3 mx-3">
      <div class="w-auto h-auto rounded-full">
        <img
          class="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
          alt="User avatar"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        />
      </div>
      <div class="flex flex-col mt-1 ml-4">
        <div class="text-sm font-semibold text-primary-300">John Doe</div>
        <div class="flex w-full mt-1">
          <div class="mr-1 text-xs text-gray-300 cursor-pointer font-base">
            @johndoe
          </div>
          <div class="text-xs font-thin text-gray-400">
            • {{ parseDate(props.post?.created_at) }}
          </div>
        </div>
      </div>
    </div>

    <div class="px-2 mx-3 mb-1 text-sm text-primary-300">
      <h1 class="mb-1.5 text-2xl font-bold">{{ props.post?.title }}</h1>
      {{ props.post?.body }}
    </div>
    <Reactions />

    <Comment />

    <CommentInput />
  </div>
</template>
