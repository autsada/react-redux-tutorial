import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className='head'>
      <div>
        <ul className='nav'>
          <li className='nav-list'>
            <Link to='/'>Products</Link>
          </li>
          <li className='nav-list'>
            <Link to='/cart'>Cart <span className='cart-num'>2</span></Link>
          </li>
          <li className='nav-list'>
            <Link to='/signin'>Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
