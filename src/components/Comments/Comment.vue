<script setup lang="ts">
import CommentInterface from "../../types/interfaces/comments";
import parseDate from "../../utils/parseDate";

const props = defineProps({
  comment: { type: Object as () => CommentInterface },
});

const { body, users, created_at } = props.comment;
</script>

<template>
  <div class="flex px-4 pt-2 antialiased text-black">
    <img
      class="object-cover w-8 h-8 mt-1 mr-2 rounded-full"
      :src="users.profile_pic_url"
    />
    <div>
      <div class="px-4 pt-2 pb-3 rounded-lg bg-primary-100 text-primary-300">
        <div
          class="flex items-center gap-1 mb-1 text-sm font-bold leading-relaxed"
        >
          {{ users.username }}
          <div
            class="mr-1 text-xs font-normal text-gray-300 cursor-pointer font-base"
          >
            @{{ users.username.toLowerCase() }}
          </div>
        </div>
        <div class="text-xs leading-snug md:leading-normal">
          {{ body }}
        </div>
      </div>
      <div class="text-xs mt-0.5 text-gray-300">
        {{ parseDate(created_at) }}
      </div>
    </div>
  </div>
</template>
