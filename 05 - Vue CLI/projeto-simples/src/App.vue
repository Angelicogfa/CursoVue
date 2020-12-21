<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Click</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titulo: "Teste data usando vue",
    };
  },
};
</script>

<style>
#app {
  background-color: chocolate;
  color: white;
}
</style>