<template>
  <div id="app">
    <h1>Tarefas</h1>
    <task-progress :progress="progress" />
    <new-task @taskAdded="addTask"></new-task>
    <task-grid
      :tasks="tasks"
      @deletedTask="deletedTask"
      @taskStateChanged="toggleTaskState"
    />
  </div>
</template>

<script>
import taskGrid from "./components/TaskGrid.vue";
import newTask from "./components/NewTask.vue";
import taskProgress from "./components/TaskProgress.vue";

export default {
  components: { taskGrid, newTask, taskProgress },
  data() {
    return {
      tasks: [
        { name: "Lavar a louça", pending: false },
        { name: "Comprar roupa", pending: true },
      ],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name == task.name;
      const reallyNew = this.tasks.filter(sameName).length == 0;
      if (reallyNew) {
        this.tasks.push({ ...task, pending: true });
      }
    },
    deletedTask(i) {
      this.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    this.tasks = Array.isArray(array) ? array : [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
