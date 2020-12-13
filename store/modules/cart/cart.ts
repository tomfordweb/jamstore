import Vue from 'vue'
import Vuex from 'vuex'
import { Cart, CartItem } from './cart.types'

export const cartMutations = {
  add: (state: Cart, product: CartItem) => {
    state.cart.push(product)
  },
  remove: (state: Cart, key: number) => {
    state.cart = state.cart.filter((product: CartItem) => product.key !== key)
  },
}

export const cartActions = {
  addItem: (context: any, productModel: CartItem) => {
    context.commit('add', productModel)
  },
  removeItem: (context: any, key: number) => {
    context.commit('remove', key)
  },
}

export const cartGetters = {
  itemCount: (state: Cart) => {
    return state.cart.reduce(
      (accumulator, cartItem: CartItem) => accumulator + cartItem.quantity || 0,
      0
    )
  },
  subTotal: (state: Cart): number => {
    return state.cart.reduce(
      (accumulator, cartItem: CartItem) =>
        accumulator + cartItem.quantity * cartItem.price || 0,
      0
    )
  },
}

const CartStore = {
  state: {
    cart: [],
  },
  mutations: cartMutations,
  actions: cartActions,
}
export default CartStore
