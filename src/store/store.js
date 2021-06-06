import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
})

// { cart: [], auth: { user: null, loading: false, error: '' } }
