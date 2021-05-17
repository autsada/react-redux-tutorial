import { ADD_TO_CART, DELETE_CART } from '../actions/cartActions'

// {
//   id: '',
//   title: '',
//   price: 2,
//   quantity: 1
// }

const initialState = {
  cart: [],
}

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let updatedCart
      const foundItem = state.cart.find((item) => item.id === action.payload.id)

      if (!foundItem) {
        updatedCart = [...state.cart, action.payload]
      } else {
        updatedCart = state.cart.map((item) => ({
          ...item,
          quantity:
            item.id === foundItem.id ? item.quantity + 1 : item.quantity,
        }))
      }

      return {
        ...state,
        cart: updatedCart,
      }

    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }

    default:
      return state
  }
}
