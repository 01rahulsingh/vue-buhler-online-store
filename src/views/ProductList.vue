<template>
  <div class="products-container">
    <div
      v-for="(productList, category) in groupedProducts"
      :key="category"
      class="product-category"
    >
      <h2>{{ category }}</h2>
      <div class="product-list">
        <ProductCard
          v-for="product in productList"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductList',
  components: { ProductCard },
  computed: {
  groupedProducts() {
    return this.$store.getters.productsByCategory
  }
 }
}
</script>

<style scoped lang="scss">
.product-category {
  margin-bottom: 24px;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}
.product-category h2 {
  color: #008c7e;
  font-size: 16px;
  margin: 16px 0 12px;
}
.products-container {
  padding: 0 24px;
}
.products-container {
  width: 100%;
  box-sizing: border-box;
}
</style>
