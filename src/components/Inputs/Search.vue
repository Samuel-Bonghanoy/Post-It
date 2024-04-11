<script setup lang="ts"></script>

<template>
  <div class="flex items-center gap-3">
    <div class="relative flex-grow-0 flex-shrink hidden sm:block">
      <input
        type="text"
        class="w-full p-3 border-0 rounded-lg bg-gray-50 bg-purple-white"
        placeholder="Search somthing..."
        style="min-width: 400px"
      />
      <div
        class="absolute top-0 right-0 flex items-center justify-center p-4 pr-3 text-purple-lighter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
