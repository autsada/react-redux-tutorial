import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { signin } from '../../data/users'
import { User } from '../../types'

type AuthState = {
    user: User | null
    // loading: boolean
    // error: string
}

const initialState: AuthState = {
    user: null,
    // loading: false,
    // error: '',
}

// export const signinAsync = createAsyncThunk(
//     'signin',
//     async ({ email, password }: { email: string; password: string }, store) => {
//         try {
//             const user = await signin(email, password)

//             return user
//         } catch (error) {
//             throw error
//         }
//     }
// )

// signinAsync.pending, signinAsync.fulfilled, signinAsync.rejected

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        signout: (state) => {
            state.user = null
            // state.loading = false
            // state.error = ''
        },
    },
    // extraReducers: {
    //     [signinAsync.pending]: (state, action) => {
    //         state.loading = true
    //         state.error = ''
    //     },
    //     [signinAsync.fulfilled]: (state, action) => {
    //         state.user = action.payload
    //         state.loading = false
    //         state.error = ''
    //     },
    //     [signinAsync.rejected]: (state, action) => {
    //         state.user = null
    //         state.loading = false
    //         state.error = action.error.message
    //     },
    // },
    // extraReducers: (builder) => {
    //     builder.addCase(signinAsync.pending, (state) => {
    //         state.loading = true
    //         state.error = ''
    //     })
    //     builder.addCase(signinAsync.fulfilled, (state, action) => {
    //         state.user = action.payload
    //         state.loading = false
    //         state.error = ''
    //     })
    //     builder.addCase(signinAsync.rejected, (state, action) => {
    //         state.user = null
    //         state.loading = false
    //         state.error = action.error.message || ''
    //     })
    // },
})

export const { signout, setUser } = authSlice.actions

export default authSlice.reducer
