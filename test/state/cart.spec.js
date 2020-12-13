import { cartGetters, cartMutations } from '../../store/modules/cart/cart'
import { MockCartState, MockCartItem } from './cart.mocks'

describe('cartMutations', () => {
  let state
  beforeEach(() => {
    state = MockCartState()
  })
  test('it can remove an item', () => {
    const product1 = MockCartItem()
    const product2 = MockCartItem({ key: 456 })
    const product2Key = product2.key
    cartMutations.add(state, product1)
    cartMutations.add(state, product2)
    expect(state.cart.length).toEqual(2)
    cartMutations.remove(state, product2Key)
    expect(state.cart.length).toEqual(1)
    expect(state.cart[0].key).toEqual(product1.key)
  })
  test('it can add an item', () => {
    const product = MockCartItem()
    cartMutations.add(state, product)
    expect(state.cart.length).toEqual(1)
    expect(state.cart[0].key).toEqual(product.key)
  })
})

describe('cartGetters', () => {
  test('it can return a total count of the items in the car', () => {
    const product = MockCartItem({ quantity: 2 })
    const state = MockCartState()
    cartMutations.add(state, product)
    expect(cartGetters.itemCount(state)).toEqual(2)
  })
  test('it can return the subtotal of the cart items', () => {
    const product = MockCartItem({ quantity: 2, price: 5 })

    const state = MockCartState()
    cartMutations.add(state, product)
    expect(cartGetters.subTotal(state)).toEqual(10)
  })
  test('it can return the subtotal from multiple products correcly', () => {
    const state = MockCartState()
    const product1 = MockCartItem({ key: 456, quantity: 5, price: 1 })
    const product2 = MockCartItem({ key: 788, price: 5 })
    cartMutations.add(state, product1)
    cartMutations.add(state, product2)
    expect(cartGetters.subTotal(state)).toEqual(10)
  })
})
