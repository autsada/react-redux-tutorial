import { useMutation } from 'react-query'

import { signin } from '../data/users'
import { useAppDispatch } from '../store/store'
import { setUser } from '../store/slices/authSlice'
import { User } from '../types'

export function useSignIn() {
    const dispatch = useAppDispatch()

    return useMutation<User, string, Omit<User, 'id' | 'username'>>(
        'signin',
        ({ email, password }) => signin(email, password),
        {
            onSuccess: (data) => {
                dispatch(setUser(data))
            },
        }
    )
}
