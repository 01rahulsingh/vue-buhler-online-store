<template>
  <div class="product-tile" @click="viewProductDetails">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
    </div>

    <div class="product-description">
      <div class="product-name">{{ product.name }}</div>

      <div class="product-bottom-section">
        <div class="price">x{{ product.price }}</div>
        <button class="cart" @click.stop="addToCart">
          <img src="/cart.svg" alt="Cart" class="cart-icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: { type: Object, required: true },
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        id: this.product.id,
        name: this.product.name,
        type: this.product.categoryLabel,
        price: this.product.price,
        image: this.product.image,
        quantity: 1,
      });
    },
    viewProductDetails() {
      this.$router.push("/products/" + this.product.id);
    }
  },
};
</script>

<style scoped lang="scss">
.product-tile {
  border: 1px solid #e0e0e0;
  background: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-image {
  padding: 12px;
  background: #fff;
  text-align: center;
}

.product-image img {
  max-width: 100%;
  height: 140px;
  object-fit: contain;
}

.product-description {
  background: #e6e6e6;
  padding: 8px 10px;
}

.product-name {
  color: #008c7e;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}

.product-bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #008c7e;
  font-size: 13px;
}

.cart {
  background: none;
  border: none;
  color: #008c7e;
  font-size: 16px;
  cursor: pointer;
}
</style>
