import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const foundItem = state.find(
                (item) => item.id === action.payload.id
            )

            if (!foundItem) {
                state.push(action.payload)
            } else {
                return state.map((item) => ({
                    ...item,
                    quantity:
                        item.id === foundItem.id
                            ? item.quantity + 1
                            : item.quantity,
                }))
            }
        },
        deleteCart: (state, action) =>
            state.filter((item) => item.id !== action.payload),
    },
})

// Action creators
export const { addToCart, deleteCart } = cartSlice.actions

// Reducer
export default cartSlice.reducer
