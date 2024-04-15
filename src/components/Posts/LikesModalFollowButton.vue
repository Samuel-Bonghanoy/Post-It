<script setup lang="ts">
import { useUsersStore } from "../../stores/modules/users";
import { ref } from "vue";

const props = defineProps({
  userId: Number,
});

const { userId } = props;

const usersStore = useUsersStore();

const followed = ref(
  usersStore.currentUserFollowing.filter((u) => u.followed_user_id === userId)
    .length !== 0
);

const onFollow = () => {
  if (followed.value) {
    usersStore.unfollowUser(
      usersStore.currentUser?.id as number,
      userId as number
    );
  } else {
    usersStore.followUser(
      usersStore.currentUser?.id as number,
      userId as number
    );
  }

  followed.value = !followed.value;
};
</script>

<template>
  <button
    @click="onFollow"
    class="transition duration-300 ease-out shadow-lg bg-primary-100 hover:bg-primary-50 hover:text-white w-[15%] p-2 rounded-lg"
  >
    {{ followed ? "Unfollow" : "Follow" }}
  </button>
</template>
