import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
// import productsReducer from './slices/productsSlice'

// { cart: [], auth: { user: null, loading: false, error: '' }, products: { products: [], status: 'idle', error: '' } }
const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        // products: productsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }),
})

// Types of root state and dispatch
type RootState = ReturnType<typeof store.getState>
type AppDispath = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispath>()

export default store
