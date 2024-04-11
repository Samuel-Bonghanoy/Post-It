<script setup lang="ts">
import Avatar from "primevue/avatar";
import { useUsersStore } from "../../stores/modules/users";

const usersStore = useUsersStore();

const logout = () => {
  usersStore.logout();
};
</script>

<template>
  <div class="flex-initial">
    <div class="relative flex items-center justify-end">
      <div class="flex items-center mr-4">
        <div class="relative block">
          <button
            type="button"
            class="relative inline-block px-3 py-2 rounded-full hover:bg-gray-200"
          >
            <div class="flex items-center h-5">
              <div class="_xpkakx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div class="block">
        <div class="relative inline">
          <button
            type="button"
            class="relative inline-flex items-center px-2 py-1 border rounded-full bg-gray-50 hover:shadow-lg"
          >
            <div @click="logout" class="pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path
                  d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"
                ></path>
              </svg>
            </div>

            <div
              class="flex items-center flex-grow-0 flex-shrink-0 h-8 pl-5 w-13"
            >
              <Avatar
                image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                shape="circle"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
