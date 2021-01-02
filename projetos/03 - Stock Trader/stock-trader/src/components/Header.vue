<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weigth-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Inicio</v-btn>
      <v-btn flat to="/portfolio">Portifólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click.prevent="endDay">Finalizar dia</v-btn>
      <v-menu offset-y>
        <v-btn flat="" slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click.prevent="saveData">
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click.prevent="loadDataLocal">
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text--uppercase gray--text text--darken-2">
          Saldo: {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put("data.json", { funds, stockPortfolio, stocks });
    },
    loadDataLocal() {
      this.loadData();
    },
  },
};
</script>