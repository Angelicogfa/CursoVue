<template>
  <v-layout row wrat>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </v-layout>
</template>

<script>
import { mapGetters } from "vuex";
import appStock from "./Stock";

export default {
  components: {
    appStock,
  },
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio",
    }),
  },
};
</script>