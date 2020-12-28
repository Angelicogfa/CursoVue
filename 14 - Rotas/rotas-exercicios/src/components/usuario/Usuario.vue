<template>
  <div class="usuario">
    <h2>Usuarios</h2>
    <hr />
    <router-view></router-view>
    <button @click="irParaInicio" sucesso>Voltar</button>
  </div>
</template>


<script>
export default {
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
  methods: {
    irParaInicio() {
      // this.$router.push("/");
      // this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    },
  },
};
</script>