<script setup lang="ts">
import Menubar from "primevue/menubar";
import Search from "../Inputs/Search.vue";
import AuthIcons from "./AuthIcons.vue";
</script>

<template>
  <Menubar class="fixed top-0 left-0 z-10 w-full bg-red-50"
    ><template #start>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        fill="#000000"
        viewBox="0 0 256 256"
        class="ml-5"
      >
        <path d="M192,80v88H120v32H64V80Z" opacity="0.2"></path>
        <path
          d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM40,56H216V192H200V168a8,8,0,0,0-8-8H120a8,8,0,0,0-8,8v24H72V88H184v48a8,8,0,0,0,16,0V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V192H40ZM184,192H128V176h56Z"
        ></path>
      </svg>
    </template>
    <template #item="{ item, props, hasSubmenu }">
      <router-link
        v-if="item.route"
        v-slot="{ href, navigate }"
        :to="item.route"
        custom
      >
        <a :href="href" v-bind="props.action" @click="logout">
          <span :class="item.icon" />
          <span className="bg-primary-100 rounded-full mr-2 h-3 w-3"></span>
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span className="bg-primary-100 rounded-full mr-2 h-3 w-3"></span>
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="ml-2 pi pi-fw pi-angle-down" />
      </a>
    </template>
    <template #end>
      <div class="flex items-center gap-3 mr-4">
        <Search />
        <AuthIcons />
      </div> </template
  ></Menubar>
</template>
