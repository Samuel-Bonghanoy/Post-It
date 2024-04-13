<script setup lang="ts">
import { ref } from "vue";

const comment = ref("");
</script>

<template>
  <div
    class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400"
  >
    <img
      class="object-cover w-10 h-10 mr-2 rounded-full shadow cursor-pointer"
      alt="User avatar"
      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    />
    <span class="absolute inset-y-0 right-0 flex items-center pr-6">
      <button
        type="submit"
        class="p-1 focus:outline-none focus:shadow-none hover:text-primary-50"
      >
        <svg
          class="ml-1"
          viewBox="0 0 24 24"
          width="19"
          height="19"
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
    </span>
    <input
      type="search"
      v-model="comment"
      class="w-full py-2 pl-4 pr-10 text-sm text-black placeholder-gray-500 border border-transparent appearance-none bg-primary-300 rounded-tg focus:outline-none"
      style="border-radius: 25px"
      placeholder="Post a comment..."
      autocomplete="off"
    />
  </div>
</template>
