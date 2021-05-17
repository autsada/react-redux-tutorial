import React from 'react'

import Item from '../components/Item'
import {products} from '../data/products'

export default function Products() {
  return (
    <div className='products'>
      {products.map(prod => <Item key={prod.id} product={prod} />)}
    </div>
  )
}
