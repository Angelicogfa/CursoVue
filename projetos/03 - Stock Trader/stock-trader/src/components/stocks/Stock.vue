<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green dark-3 white--text">
      <v-card-title class="headline">
        <strong
          >{{ stock.name }} <small>{Preço: {{ stock.price | currency }}}</small></strong
        >
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          v-model.number="quantity"
          label="Quantidade"
          :error="this.insufficientsFunds || !Number.isInteger(this.quantity)"
          type="number"
        />
        <v-btn
          class="green darken-3 white--text"
          :disabled="this.insufficientsFunds || this.quantity <= 0 || !Number.isInteger(this.quantity)"
          @click.prevent="buyStock"
          >{{ this.insufficientsFunds ? 'Insulficiente' : 'Comprar' }}</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "app-stock",
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientsFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    },
    teste() {
      alert('teste')
    }
  },
};
</script>