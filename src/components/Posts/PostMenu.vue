<script setup lang="ts">
import { ref } from "vue";

const isActive = ref(false);

const onClick = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div class="flex justify-between w-[10%] justify-self-end p-0 m-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="#352f44"
      class="transition-all duration-75 hover:fill-primary-300 hover:cursor-pointer"
      viewBox="0 0 256 256"
    >
      <path
        d="M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      class="transition-all duration-75 hover:fill-primary-300 hover:cursor-pointer"
      :class="[isActive ? 'fill-primary-300' : 'fill-primary-100']"
      @click="onClick"
      viewBox="0 0 256 256"
    >
      <path
        d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"
      ></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="#352f44"
      viewBox="0 0 256 256"
      class="transition-all duration-75 hover:fill-primary-300 hover:cursor-pointer"
    >
      <path
        d="M229.66,109.66l-48,48A8,8,0,0,1,168,152V112h-3a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h3V56a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V216a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16Z"
      ></path>
    </svg>
  </div>
</template>
