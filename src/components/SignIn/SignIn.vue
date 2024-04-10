<script setup lang="ts">
import ColorPalette from "./ColorPalette.vue";
import { ref } from "vue";
import router from "../../router";

const username = ref("");
const password = ref("");

const gradient = ref(
  "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900"
);

const login = () => {
  router.push("/home");
};
</script>

<template>
  <div
    :class="[
      'min-h-screen p-8 flex items-center justify-center transition-all duration-200',
      gradient,
    ]"
  >
    <div
      class="fixed top-0 left-0 flex items-center justify-end w-full gap-3 p-8"
    >
      <ColorPalette v-model="gradient" />
    </div>

    <div
      class="flex flex-col gap-6 shadow-xl bg-white/10 p-9 rounded-xl backdrop-blur-xl"
    >
      <div class="text-center">
        <span
          class="flex items-center justify-center p-4 rounded-full bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 256 256"
            fill="#ffffff"
            class="mr-3"
          >
            <path d="M192,80v88H120v32H64V80Z" opacity="0.2"></path>
            <path
              d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
            ></path>
          </svg>
        </span>
      </div>

      <input
        class="justify-center p-3 font-semibold text-white rounded-lg bg-white/10 placeholder:text-white/60 focus:outline-none focus:bg-white/20"
        placeholder="Username"
        v-model="username"
      />
      <input
        class="justify-center p-3 font-semibold text-white rounded-lg placeholder:text-white/60 bg-white/10 focus:outline-none focus:bg-white/20"
        placeholder="Password"
        v-model="password"
        type="password"
      />

      <button
        @click="login"
        class="px-3 py-2 text-white transition-colors duration-300 rounded-full bg-black/10 hover:bg-black/20 border-1 shadow-2 focus:outline-0 focus:bg-black/30"
      >
        Log in
      </button>
    </div>
  </div>
</template>
