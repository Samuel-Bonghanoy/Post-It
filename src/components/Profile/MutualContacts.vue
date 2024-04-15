<script setup lang="ts">
import { useUsersStore } from "../../stores/modules/users";

const usersStore = useUsersStore();

const followed = usersStore.currentUserFollowing?.map(
  (u) => u.followedUserDetails.id
);
const following = usersStore.viewedUserFollowing?.map(
  (u) => u.followedUserDetails.id
);

const mutualsId = followed?.filter((u) => following?.includes(u));

const mutuals = usersStore.currentUserFollowing?.filter((u) =>
  mutualsId?.includes(u.followedUserDetails.id)
);

console.log(followed, following, mutuals);
</script>

<template>
  <div class="p-6 mt-6 rounded-lg shadow bg-primary-200">
    <h3 class="mb-4 text-sm font-semibold text-primary-300">Mutual Contacts</h3>
    <ul class="flex items-center justify-start space-x-2">
      <li
        v-for="user in mutuals"
        :key="user.followedUserDetails.id"
        class="flex flex-col items-center space-y-2"
      >
        <a class="block p-1 bg-white rounded-full" href="#">
          <img
            class="object-cover rounded-full w-14 h-14"
            :src="user.followedUserDetails.profile_pic_url"
          />
        </a>
        <!-- Username -->
        <span class="text-xs text-gray-300">
          {{ user.followedUserDetails.username }}</span
        >
      </li>
    </ul>
  </div>
</template>
