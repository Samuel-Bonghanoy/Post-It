<script setup lang="ts"></script>

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
        class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
      >
        <svg
          class="w-6 h-6 text-gray-400 transition duration-300 ease-out hover:text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
    </span>
    <input
      type="search"
      class="w-full py-2 pl-4 pr-10 text-sm text-black placeholder-gray-500 border border-transparent appearance-none bg-primary-300 rounded-tg focus:outline-none"
      style="border-radius: 25px"
      placeholder="Post a comment..."
      autocomplete="off"
    />
  </div>
</template>
