import React from 'react'
import {useDispatch} from 'react-redux'

import {addToCart} from '../actions/cartActions'

export default function Item({product}) {
  const dispatch = useDispatch()

  return (
    <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button onClick={() => dispatch(addToCart({...product, quantity: 1}))}>Add To Cart</button>
      </div>
  )
}
