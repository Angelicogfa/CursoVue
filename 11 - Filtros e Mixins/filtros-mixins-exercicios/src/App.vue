<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <h2>{{ usuarioLogado }}</h2>
    <hr />
    <p>{{ cpf | cpf | inverter }}</p>
    <input type="text" :value="cpf | cpf" />

    <hr />
    <frutas />
    <hr />
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input v-model="fruta" @keydown.enter="add" />
  </div>
</template>

<script>
import Frutas from "./Frutas.vue";
import FrutasMixins from "./FrutasMixins";
import usuarioMixins from "./usuarioMain";

export default {
  components: { frutas: Frutas },
  mixins: [FrutasMixins, usuarioMixins],
  data() {
    return {
      cpf: "12345678900",
    };
  },
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  created() {
    console.log('App create')
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
