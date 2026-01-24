<template>
  <div class="checkout-details">
    <h2 class="checkout-title">Checkout</h2>

    <div
      v-for="(product, index) in cartProducts"
      :key="index"
      class="checkout-product-section"
    >
      <img :src="product.image" class="product-image" :alt="product.name"/>

      <div class="product-info">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-type">{{ product.type }}</div>
      </div>

      <div class="product-price">x{{ product.price }}</div>

      <button class="product-remove" @click="removeProduct(index)">
        ✕
      </button>
    </div>

    <div class="product-total">
      Total: x{{ total }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Checkout',

  computed: {
    cartProducts() {
      return this.$store.state.cart
    },
    total() {
      return this.$store.getters.cartTotal
    }
  },

  methods: {
    removeProduct(index) {
      this.$store.commit('REMOVE_FROM_CART', index)
    }
  }
}
</script>

<style scoped lang="scss">
.checkout-details {
  padding: 24px;
}

.checkout-title {
  color: #008c7e;
  margin-bottom: 16px;
}

.checkout-product-section {
  display: grid;
  grid-template-columns: 80px 1fr auto 40px;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.product-image {
  width: 70px;
  height: 70px;
  object-fit: contain;
  background: #f5f5f5;
  padding: 6px;
}

.product-info .product-name {
  color: #008c7e;
  font-weight: 600;
}

.product-info .product-type {
  font-size: 12px;
  color: #777;
  font-style: italic;
}

.product-price {
  color: #008c7e;
  font-weight: 600;
}

.product-remove {
  background: none;
  border: none;
  color: #008c7e;
  font-size: 18px;
  cursor: pointer;
}

.product-total {
  text-align: right;
  margin-top: 24px;
  font-size: 16px;
  color: #008c7e;
  font-weight: 600;
}
</style>
