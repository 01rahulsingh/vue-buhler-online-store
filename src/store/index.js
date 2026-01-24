import Vue from 'vue'
import Vuex from 'vuex'
import rawProducts from '@/assets/data/products.json'
import { formatCategoryLabel } from './formatter.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rawProducts,
    cart: []
  },

  getters: {
    // Normalized products for UI
    products(state) {
      return state.rawProducts.map(product => ({
        id: product.id,
        name: product.name,
        category: product.category,
        categoryLabel: formatCategoryLabel(product.category), // UI label
        price: product.price,
        image: product.imageUrl
      }))
    },

    // Grouped for Product List
    productsByCategory(state, getters) {
      return getters.products.reduce((groupedProduct, product) => {
        const key = product.categoryLabel

        if (!groupedProduct[key]) groupedProduct[key] = []
        groupedProduct[key].push(product)

        return groupedProduct
      }, {})
    },

    // Flat list for lookup by ID
    productById: (state, getters) => id => {
      return getters.products.find(product => product.id === id) || null
    },

    cartCount: state => state.cart.length,

    cartTotal: state =>
      state.cart.reduce((sum, product) => sum + product.price, 0)
  },

  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },

    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1)
    }
  }
})
