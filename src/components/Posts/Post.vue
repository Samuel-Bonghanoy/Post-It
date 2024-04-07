<script setup lang="ts">
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import PostMenu from "./PostMenu.vue";
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
          <h1>Sample Post</h1>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap">
          <p class="p-0 mt-[-15px] pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
          <PostMenu />
        </div>
      </template>
    </Card>
  </div>
</template>
