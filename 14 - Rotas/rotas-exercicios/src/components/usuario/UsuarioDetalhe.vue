<template>
  <div class="usuario-detalhe">
    <h3>Usuário detalhe</h3>
    <hr />
    <p><strong>Código: </strong>{{ id }}</p>
    <!-- :to="`/usuario/${id}/editar`" -->
    <router-link
      tag="button"
      primario
      :to="{ name: 'editarUsuario', params: { id: id }, query: { completo: true, lingua: 'pt' }, hash: '#rodape' }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  beforeRouteEnter(to, from, next) {
    console.log('Dentro do componente -> usuário detalhe');
    next();
  }
};
</script>