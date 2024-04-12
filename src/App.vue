<script setup lang="ts"></script>

<template>
  <div class="w-screen h-screen overflow-x-hidden bg-primary-100">
    <suspense>
      <template #default>
        <router-view></router-view>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </div>
</template>
