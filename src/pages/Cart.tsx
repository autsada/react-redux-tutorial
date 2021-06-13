import React from 'react'

import { deleteCart } from '../store/slices/cartSlice'
import { useAppSelector, useAppDispatch } from '../store/store'

export default function Cart() {
    const cart = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()

    return (
        <div className='cart'>
            <div className='cart-body'>
                <h4>Title</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Amount</h4>
                <h4>Delete</h4>
            </div>

            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className='cart-body'>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <p>{item.price * item.quantity}</p>
                        <p
                            style={{ cursor: 'pointer' }}
                            onClick={() => dispatch(deleteCart(item.id))}
                        >
                            X
                        </p>
                    </div>
                ))
            )}
        </div>
    )
}
