import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Nav() {
  const cart = useSelector((state) => state.cart)

  return (
    <header className='head'>
      <div>
        <ul className='nav'>
          <li className='nav-list'>
            <Link to='/'>Products</Link>
          </li>
          <li className='nav-list'>
            <Link to='/cart'>Cart <span className='cart-num'>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span></Link>
          </li>
          <li className='nav-list'>
            <Link to='/signin'>Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
