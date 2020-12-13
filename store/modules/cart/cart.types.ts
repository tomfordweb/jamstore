export interface Cart {
  cart: CartItem[]
}

export interface CartItem extends Product {
  quantity: number
}

export interface Product {
  key: number
  name: string
  price: number
}
