<template>
  <div class="product-detail">
    <a class="back-link" @click="$router.back()">Back</a>

    <div v-if="product" class="product-detail-layout">
      <!-- Left: Image -->
      <div class="product-image-section">
        <img :src="product.image" :alt="product.name" />
      </div>

      <!-- Right: Info -->
      <div class="product-info-section">
        <div class="product-info-top">
          <h1 class="product-name">{{ product.name }}</h1>
          <div class="product-category">{{ product.categoryLabel }}</div>
          <div class="product-price">x{{ product.price }}</div>
        </div>

        <button class="product-add-button" @click="addToCart">
          <img src="/cart.svg" class="cart-icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",

  computed: {
    product() {
      const id = this.$route.params.id;
      return this.$store.getters.productById(id);
    },
  },

  methods: {
    addToCart() {
      if (!this.product) return;

      this.$store.commit("ADD_TO_CART", {
        id: this.product.id,
        name: this.product.name,
        type: this.product.categoryLabel,
        price: this.product.price,
        image: this.product.image,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.product-detail {
  padding: 24px 32px;
}

.back-link {
  color: #009b91;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;
  display: inline-block;
}

.product-detail-layout {
  display: flex;
  gap: 48px;
  align-items: flex-start;
}

.product-image-section {
  background: #f7f7f7;
  padding: 24px;
  border: 1px solid #eee;
  width: 360px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.product-info-section {
  flex: 1;
  min-height: 260px;   // match image box height
  display: flex;
  flex-direction: column;
}

.product-info-top {
  flex: 1;   // 👈 pushes button to bottom
}

.product-name {
  font-size: 20px;
  color: #009b91;
  margin: 0 0 8px;
}

.product-category {
  font-size: 14px;
  color: #7aa7a3;
  font-style: italic;
  margin-bottom: 12px;
}

.product-price {
  font-size: 16px;
  color: #009b91;
  margin-bottom: 24px;
}

.product-add-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #009b91;
  font-size: 14px;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
}
</style>
