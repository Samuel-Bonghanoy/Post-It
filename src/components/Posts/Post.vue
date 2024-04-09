<script setup lang="ts">
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import PostMenu from "./PostMenu.vue";
import type PostsInterface from "../../types/interfaces/posts";

const props = defineProps({
  post: { type: Object as () => PostsInterface },
});

console.log(props);
</script>

<template>
  <div class="card w-[95%]">
    <Card>
      <template #title>
        <div class="flex items-center gap-2">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
          <h1>{{ props.post?.title }}</h1>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap">
          <p class="p-0 mt-[-15px] pb-4">
            {{ props.post?.body }}
          </p>
          <PostMenu />
        </div>
      </template>
    </Card>
  </div>
</template>
