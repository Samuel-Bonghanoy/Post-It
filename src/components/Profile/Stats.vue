<script setup lang="ts">
import { useUsersStore } from "../../stores/modules/users";
import { usePostsStore } from "../../stores/modules/posts";
import Dialog from "primevue/dialog";
import { ref } from "vue";
import FollowsModal from "./FollowsModal.vue";
import FollowingModal from "./FollowingModal.vue";

const usersStore = useUsersStore();
const postsStore = usePostsStore();

const visibleFollows = ref(false);
const visibleFollowing = ref(false);
</script>

<template>
  <div class="flex items-center justify-center gap-2 my-3">
    <div class="mx-4 font-semibold text-center">
      <p class="text-gray-300">
        {{
          postsStore.posts?.filter(
            (p) => p.users.id === usersStore.viewedUser?.id
          ).length
        }}
      </p>
      <span class="text-gray-300">Posts</span>
    </div>
    <div class="mx-4 font-semibold text-center">
      <p class="text-gray-300">
        {{ usersStore.viewedUserFollows?.length || "0" }}
      </p>
      <span
        @click="visibleFollows = !visibleFollows"
        class="text-gray-300 hover:text-primary-100 hover:cursor-pointer"
        >Followers</span
      >
    </div>
    <div class="mx-4 font-semibold text-center">
      <p class="text-gray-300">
        {{ usersStore.viewedUserFollowing?.length || "0" }}
      </p>
      <span
        @click="visibleFollowing = !visibleFollowing"
        class="text-gray-300 hover:text-primary-100 hover:cursor-pointer"
        >Following</span
      >
    </div>
  </div>
  <Dialog
    v-model:visible="visibleFollows"
    modal
    header="Followed By"
    :style="{ width: '50rem', maxHeight: '25rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    class="flex flex-col"
  >
    <FollowsModal />
  </Dialog>
  <Dialog
    v-model:visible="visibleFollowing"
    modal
    header="Following"
    :style="{ width: '50rem', maxHeight: '25rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    class="flex flex-col"
  >
    <FollowingModal />
  </Dialog>
</template>
