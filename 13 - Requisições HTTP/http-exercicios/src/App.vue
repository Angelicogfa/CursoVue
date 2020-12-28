<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
      >{{ mensagem.texto }}</b-alert
    >
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
        <b-button variant="warning" size="lg" @click="carregar(id)"
          >Carregar</b-button
        >
        <b-button variant="danger" size="lg" @click="excluir(id)"
          >Excluir</b-button
        >
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
      mensagens: [],
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
      usuarios: [],
    };
  },
  methods: {
    async salvar() {
      const method = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      const result = await this.$http[method](
        `/usuarios${finalUrl}`,
        this.usuario
      );

      if (result.status === 200) {
        this.limpar();
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        });
        await this.obterUsuarios();
      } else {
        this.mensagens.push({
          texto: "Erro ao persistir informação!",
          tipo: "danger",
        });
      }
    },
    async obterUsuarios() {
      const results = await this.$http.get("usuarios.json");
      this.usuarios = results.data;
    },
    async excluir(id) {
      const result = await this.$http.delete(`/usuarios/${id}.json`);
      if (result.status === 200) {
        this.limpar();
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        });
        await this.obterUsuarios();
      } else {
        this.mensagens.push({
          texto: "Erro ao persistir informação!",
          tipo: "danger",
        });
      }
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
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
