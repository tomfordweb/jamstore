import { Cart, CartItem } from '~/store/modules/cart/cart.types'

export function MockCartItem(props: Partial<CartItem>): CartItem {
  return { key: 123, name: 'Test Product', price: 12.99, quantity: 1, ...props }
}

export const MockCartState = (): Cart => ({
  cart: [],
})
