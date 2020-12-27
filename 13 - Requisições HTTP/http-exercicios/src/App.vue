<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>

    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o nome"
        />
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o email"
        />
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" class="m-2" variant="success"
        >Obter usuários</b-button
      >
    </b-card>

    <hr />
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) of usuarios" :key="id">
        <p><strong>Nome:</strong> {{ usuario.nome }}</p>
        <p><strong>Email: </strong>{{ usuario.email }}</p>
        <p><strong>ID: </strong>{{ id }}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  //   async created() {
  //     const result = await this.$http.post("usuarios.json", {
  //       nome: "Guilherme",
  //       email: "guilherme@teste.com",
  //     });
  //     console.log(result);
  //   },
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
      },
      usuarios: [],
    };
  },
  methods: {
    async salvar() {
      await this.$http.post("usuarios.json", this.usuario);
      this.usuario.nome = "";
      this.usuario.email = "";
    },
    async obterUsuarios() {
      const results = await this.$http.get("usuarios.json");
      this.usuarios = results.data;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
