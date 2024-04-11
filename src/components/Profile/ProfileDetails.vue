<script setup lang="ts"></script>

<template>
  <aside class="">
    <div class="p-10 bg-white rounded-lg shadow">
      <div class="flex flex-col items-center gap-1 text-center">
        <img
          class="w-32 h-32 p-2 mb-4 bg-white rounded-full shadow"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
          alt=""
        />
        <p class="font-semibold">John Doe</p>
        <div
          class="flex items-center justify-center text-sm leading-normal text-gray-400"
        >
          <svg
            viewBox="0 0 24 24"
            class="mr-1"
            width="16"
            height="16"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Los Angeles, California
        </div>
      </div>
      <div class="flex items-center justify-center gap-2 my-3">
        <div class="mx-4 font-semibold text-center">
          <p class="text-black">102</p>
          <span class="text-gray-400">Posts</span>
        </div>
        <div class="mx-4 font-semibold text-center">
          <p class="text-black">102</p>
          <span class="text-gray-400">Followers</span>
        </div>
        <div class="mx-4 font-semibold text-center">
          <p class="text-black">102</p>
          <span class="text-gray-400">Folowing</span>
        </div>
      </div>
    </div>

    <div class="p-6 mt-6 bg-white rounded-lg shadow">
      <h3 class="mb-4 text-sm font-semibold text-gray-600">Following</h3>
      <ul class="flex items-center justify-center space-x-2">
        <!-- Story #1 -->
        <li class="flex flex-col items-center space-y-2">
          <!-- Ring -->
          <a class="block p-1 bg-white rounded-full" href="#">
            <img
              class="w-16 rounded-full"
              src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
            />
          </a>
          <!-- Username -->
          <span class="text-xs text-gray-500"> Sage </span>
        </li>

        <!-- Story #1 -->
        <li class="flex flex-col items-center space-y-2">
          <!-- Ring -->
          <a class="block p-1 bg-white rounded-full" href="#">
            <img
              class="w-16 rounded-full"
              src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
            />
          </a>

          <!-- Username -->
          <span class="text-xs text-gray-500"> Jett </span>
        </li>

        <!-- Story #2 -->
        <li class="flex flex-col items-center space-y-2">
          <!-- Ring -->
          <a class="block p-1 bg-white rounded-full" href="#">
            <!-- Thumbnail -->
            <img
              class="w-16 rounded-full"
              src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
            />
          </a>

          <!-- Username -->
          <span class="text-xs text-gray-500"> Sky </span>
        </li>

        <!-- Story #3 -->
        <li class="flex flex-col items-center space-y-2">
          <!-- Ring -->
          <a class="block p-1 bg-white rounded-full" href="#">
            <!-- Thumbnail -->
            <img
              class="w-16 rounded-full"
              src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
            />
          </a>

          <!-- Username -->
          <span class="text-xs text-gray-500"> Olivia </span>
        </li>

        <!-- Story #4 -->
        <li class="flex flex-col items-center space-y-2">
          <!-- Ring -->
          <a class="block p-1 bg-white rounded-full" href="#">
            <img
              class="w-16 rounded-full"
              src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
            />
          </a>

          <!-- Username -->
          <span class="text-xs text-gray-500"> Julia </span>
        </li>
        <!-- Story #1 -->
        <li class="flex flex-col items-center space-y-2">
          <!-- Ring -->
          <a class="block p-1 bg-white rounded-full" href="#">
            <!-- Thumbnail -->
            <img
              class="w-16 rounded-full"
              src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"
            />
          </a>

          <!-- Username -->
          <span class="text-xs text-gray-500"> Hendrick </span>
        </li>
      </ul>
    </div>
  </aside>
</template>
