import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getProducts } from '../../data/products'
import { Product } from '../../types'

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'

type ProductsState = {
    products: Product[]
    status: Status
    error: string
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
    error: '',
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const products = await getProducts()

            return products
        } catch (error) {
            throw error
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch products
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
            state.error = ''
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = 'succeeded'
            state.error = ''
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.products = []
            state.status = 'failed'
            state.error = action.error.message || ''
        })
    },
})

export default productsSlice.reducer
