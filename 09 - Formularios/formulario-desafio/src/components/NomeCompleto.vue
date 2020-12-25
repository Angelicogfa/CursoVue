<template>
  <div>
    <rotulo nome="Nome">
      <input type="text" @input="alterarNome" v-model="value.nome" />
    </rotulo>
    <rotulo nome="Sobrenome">
      <input type="text" @input="alterarSobreNome" v-model="value.sobrenome" />
    </rotulo>
  </div>
</template>

<script>
import rotulo from "./Rotulo.vue";

export default {
  components: { rotulo },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    alterarNome(event) {
      this.$emit("input", {
        nome: event.target.value,
        sobrenome: this.value.sobrenome,
      });
    },
    alterarSobreNome(event) {
      this.$emit("input", {
        nome: this.value.nome,
        sobrenome: event.target.value,
      });
    },
  },
};
</script>