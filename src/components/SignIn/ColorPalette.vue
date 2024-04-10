<template>
  <div class="relative">
    <button
      type="button"
      class="inline-flex items-center justify-center w-8 h-8 text-white transition-colors duration-200 rounded-full bg-white/10 hover:bg-white/20"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        leaveToClass: 'hidden',
        hideOnOutsideClick: true,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 256 256"
        class="fill-gray-500"
      >
        <path
          d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"
        ></path>
      </svg>
    </button>
    <div
      class="absolute top-[2.5rem] right-0 hidden w-[12rem] p-3 bg-white/20 rounded-md shadow flex-col justify-start items-start gap-3.5 inline-flex origin-top"
    >
      <div class="inline-flex flex-col items-start justify-start gap-2">
        <span class="text-sm font-medium text-white">Primary Colors</span>
        <div
          class="inline-flex flex-wrap items-start self-stretch justify-start gap-2"
        >
          <a
            v-for="item of gradients"
            :key="item.name"
            @click="updateValue(item)"
            :class="['w-4 h-4 rounded-full cursor-pointer', item.color]"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const gradients = ref([
  {
    name: "beam",
    color: "bg-purple-300",
    value:
      "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-900 via-purple-600 to-purple-900",
  },
  {
    name: "oceanic",
    color: "bg-blue-300",
    value: "bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",
  },
  {
    name: "rocket",
    color: "bg-yellow-300",
    value:
      "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800",
  },
  {
    name: "sunrise",
    color: "bg-slate-300",
    value: "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900",
  },
  {
    name: "gotham",
    color: "bg-gray-500",
    value: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
  },
  {
    name: "emeral",
    color: "bg-emerald-300",
    value: "bg-gradient-to-br from-emerald-500 to-lime-600",
  },
]);

const updateValue = (item) => {
  if (!document.startViewTransition) {
    emit("update:modelValue", item.value);

    return;
  }

  document.startViewTransition(() => emit("update:modelValue", item.value));
};
</script>
