<script setup lang="ts">
import { useUsersStore } from "../../stores/modules/users";

const usersStore = useUsersStore();

const { username, bio } = usersStore.currentUser;
</script>

<template>
  <aside class="fixed w-[30%]">
    <div
      class="flex flex-col items-center p-6 rounded-lg shadow text-primary-300 bg-primary-200"
    >
      <div class="flex flex-col items-center gap-1 text-center">
        <img
          class="w-32 h-32 p-2 mb-4 bg-white rounded-full shadow"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"
          alt=""
        />
        <p class="font-bold">{{ username }}</p>
        <div
          class="flex items-center justify-center text-sm italic leading-normal text-gray-300"
        >
          {{ bio }}
        </div>
      </div>
      <div class="flex items-center justify-center gap-2 my-3">
        <div class="mx-4 font-semibold text-center">
          <p class="text-gray-300">102</p>
          <span class="text-gray-300">Posts</span>
        </div>
        <div class="mx-4 font-semibold text-center">
          <p class="text-gray-300">102</p>
          <span class="text-gray-300">Followers</span>
        </div>
        <div class="mx-4 font-semibold text-center">
          <p class="text-gray-300">102</p>
          <span class="text-gray-300">Folowing</span>
        </div>
      </div>
      <button
        class="transition duration-300 ease-out shadow-lg bg-primary-100 hover:bg-primary-50 hover:text-white w-[50%] mt-4 p-2 rounded-lg"
      >
        Follow
      </button>
    </div>

    <div class="p-6 mt-6 rounded-lg shadow bg-primary-200">
      <h3 class="mb-4 text-sm font-semibold text-primary-300">
        Mutual Contacts
      </h3>
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
          <span class="text-xs text-gray-300"> Sage </span>
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
          <span class="text-xs text-gray-300"> Jett </span>
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
          <span class="text-xs text-gray-300"> Sky </span>
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
          <span class="text-xs text-gray-300"> Olivia </span>
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
          <span class="text-xs text-gray-300"> Julia </span>
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
          <span class="text-xs text-gray-300"> Hendrick </span>
        </li>
      </ul>
    </div>
  </aside>
</template>
