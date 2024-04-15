<script setup lang="ts">
import { useUsersStore } from "../../stores/modules/users";
import { useRoute } from "vue-router";
import MutualContacts from "./MutualContacts.vue";
import Stats from "./Stats.vue";
import { ref } from "vue";

const route = useRoute();
const userId = Number(route.params.id);

const usersStore = useUsersStore();

const followed = ref(
  usersStore.currentUserFollowing.filter((u) => u.followed_user_id === userId)
    .length !== 0
);

await usersStore.getUserById(userId);

const { username, bio, profile_pic_url } = usersStore.viewedUser;

const onFollow = () => {
  if (followed.value) {
    usersStore.unfollowUser(usersStore.currentUser?.id as number, userId);
  } else {
    usersStore.followUser(usersStore.currentUser?.id as number, userId);
  }

  followed.value = !followed.value;
};
</script>

<template>
  <aside class="fixed w-[30%]">
    <div
      class="flex flex-col items-center p-6 rounded-lg shadow text-primary-300 bg-primary-200"
    >
      <div class="flex flex-col items-center gap-1 text-center">
        <img
          class="object-cover w-32 h-32 p-2 mb-4 bg-white rounded-full shadow"
          :src="profile_pic_url"
          alt=""
        />
        <p class="font-bold">{{ username }}</p>
        <div
          class="flex items-center justify-center text-sm italic leading-normal text-gray-300"
        >
          {{ bio }}
        </div>
      </div>
      <stats />
      <button
        @click="onFollow"
        class="transition duration-300 ease-out shadow-lg bg-primary-100 hover:bg-primary-50 hover:text-white w-[50%] mt-4 p-2 rounded-lg"
      >
        {{ followed ? "Unfollow" : "Follow" }}
      </button>
    </div>
    <mutual-contacts />
  </aside>
</template>
