import React, {useState} from 'react'

export default function Signin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='form'>
      <input type="text" name='username' value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
      <button>Submit</button>
    </div>
  )
}
