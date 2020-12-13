import Vue from 'vue'
import Vuex from 'vuex'
import CartStore from './modules/cart/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart: CartStore,
  },
})
export default store
