import { defineStore } from "pinia";

export const useTasksStore = defineStore("posts", {
  state: () => {
    return {
      taskList: [
        { id: 1, task: "do this" },
        { id: 2, task: "do that" },
      ],
    };
  },

  actions: {},
});
