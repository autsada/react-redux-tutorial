import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {fetchAuthAsync} from '../actions/authActions'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const {loading, error} = useSelector(state => state.status)

  return (
    <div className='form'>
      <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => dispatch(fetchAuthAsync(email, password))}>
        {loading ? "Loading..." : 'Submit'}
      </button>
      {error && <p style={{color: 'red', fontSize: '12px'}}>{error}</p>}
    </div>
  )
}
