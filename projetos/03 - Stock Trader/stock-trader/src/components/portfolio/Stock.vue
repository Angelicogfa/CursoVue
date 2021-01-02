<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue dark-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>
            (Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity  }})
          </small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          v-model.number="quantity"
          label="Quantidade"
          :error="this.insufficienteQuantity || this.quantity < 0 || !Number.isInteger(this.quantity)"
          type="number"
        />
        <v-btn
          class="blue darken-3 white--text"
          :disabled="this.insufficienteQuantity || this.quantity <= 0 || !Number.isInteger(this.quantity)"
          @click.prevent="sellStock"
          >Venda</v-btn
        >
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions } from "vuex";

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
    insufficienteQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      sellStockAction: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };

      // this.$store.dispatch('sellStock', order);
      this.sellStockAction(order);
      this.quantity = 0;
    },
  },
};
</script>