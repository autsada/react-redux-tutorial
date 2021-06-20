import React, { useState } from 'react'

import { useSignIn } from '../hooks/useSignin'
// import { signinAsync } from '../store/slices/authSlice'
// import { useAppDispatch, useAppSelector } from '../store/store'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { mutate: signin, isLoading, error } = useSignIn()
    // const dispatch = useAppDispatch()
    // const { loading, error } = useAppSelector((state) => state.auth)

    return (
        <div className='form'>
            <input
                type='text'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => signin({ email, password })}>
                {isLoading ? 'Loading...' : 'Submit'}
            </button>

            {error && <p style={{ color: 'red', fontSize: '12px' }}>{error}</p>}
        </div>
    )
}
