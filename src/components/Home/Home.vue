<script setup lang="ts">
import Navbar from "../Navigation/Navbar.vue";
import Sidebar from "../Navigation/Sidebar.vue";
import Divider from "../UI/Divider.vue";
import { useUsersStore } from "../../stores/modules/users";

const usersStore = useUsersStore();

usersStore.checkSession();
</script>

<template>
  <div class="w-screen h-screen overflow-x-hidden bg-primary-50">
    <Navbar />
    <!-- Sidebar -->
    <section class="flex w-full h-full mt-[3%]">
      <div class="w-[20%] h-screen flex max-h-screen fixed left-0">
        <Sidebar />
        <Divider />
      </div>
      <!-- Main Content -->
      <main
        class="flex flex-col w-[80%] pt-10 mx-auto font-sans bg-midnight"
        style="margin-left: 20%"
      >
        <router-view />
      </main>
    </section>
  </div>
</template>
