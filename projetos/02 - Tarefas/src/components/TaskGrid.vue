<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <task v-for="(task, i) in tasks" :task="task" :key="task.name"
      @taskStateChanged='$emit("taskStateChanged", i)'
      @deletedTask='$emit("deletedTask", i)'> </task>
    </template>
    <p v-else class="no-tasks">Sua vida está em dia :-)</p>
  </div>
</template>

<script>
import task from "./Task.vue";

export default {
  components: { task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>