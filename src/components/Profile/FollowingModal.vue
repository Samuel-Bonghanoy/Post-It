<script setup lang="ts">
import router from "../../router";
import { useUsersStore } from "../../stores/modules/users";
import LikesModalFollowButton from "../Posts/LikesModalFollowButton.vue";

const usersStore = useUsersStore();

const navigateToUser = (userId: number) => {
  router.push(`/home/profile/${userId}`);
};
</script>

<template>
  <div v-if="usersStore.viewedUserFollowing.length === 0">No followers.</div>
  <div
    v-for="user in usersStore.viewedUserFollowing"
    :key="user.followed_user_id"
    class="flex flex-row items-center justify-between px-2 py-3 mx-3 mb-3 rounded-lg bg-primary-200"
  >
    <div class="flex">
      <div
        @click="navigateToUser(user.followedUserDetails.id)"
        class="w-auto h-auto rounded-full"
      >
        <img
          class="object-cover w-12 h-12 rounded-full shadow cursor-pointer"
          alt="User avatar"
          :src="user.followedUserDetails.profile_pic_url"
        />
      </div>
      <div class="flex flex-col mt-1 ml-4">
        <div class="text-sm font-semibold text-primary-300">
          {{ user.followedUserDetails.username }}
        </div>
        <div class="flex w-full mt-1">
          <div class="mr-1 text-xs text-gray-300 cursor-pointer font-base">
            @{{ user.followedUserDetails.username.toLowerCase() }}
          </div>
        </div>
      </div>
    </div>
    <LikesModalFollowButton :user-id="user.followedUserDetails.id" />
  </div>
</template>
