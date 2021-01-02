<template>
  <v-layout row wrap>
    <app-stock
      v-for="stock of stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </v-layout>
</template>

<script>
import appStock from "./Stock.vue";

export default {
  components: {
    appStock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>