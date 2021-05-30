import React from 'react'

export default function Cart() {
  return <div className='cart'>
    <div className='cart-body'>
      <h4>Title</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Amount</h4>
      <h4>Delete</h4>
    </div>
    <div className='cart-body'>
      <p>Shirt</p>
      <p>890</p>
      <p>2</p>
      <p>1980</p>
      <p style={{cursor: 'pointer'}}>X</p>
    </div>
  </div>
}
