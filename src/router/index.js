import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/views/ProductList.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Checkout from '@/views/Checkout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: ProductList },
    { path: '/products/:id', component: ProductDetail },
    { path: '/checkout', component: Checkout }
  ]
})
