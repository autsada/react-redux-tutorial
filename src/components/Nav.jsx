import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import {signout} from '../store/slices/authSlice'

export default function Nav() {
  const cart = useSelector(state => state.cart)
  const {user} = useSelector(state => state.auth)

  const dispatch = useDispatch()

  return (
    <header className='head'>
      <div>
        <ul className='nav'>
          <li className='nav-list'>
            <Link to='/'>Products</Link>
          </li>
          {user && <li className='nav-list'>
            <Link to='/cart'>Cart <span className='cart-num'>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span></Link>
          </li>}
          {user ? <button onClick={() => dispatch(signout())}>Signout</button> : <li className='nav-list'>
            <Link to='/signin'>Sign in</Link>
          </li>}
        </ul>
      </div>
    </header>
  )
}
