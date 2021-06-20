// import { useEffect } from 'react'

import Item from '../components/Item'
import { useProducts } from '../hooks/useProducts'
// import { useAppSelector, useAppDispatch } from '../store/store'
// import { fetchProducts } from '../store/slices/productsSlice'
// import { products } from '../data/products'

export default function Products() {
    const { data: products, isLoading, error } = useProducts()
    // const { products, status, error } = useAppSelector(
    //     (state) => state.products
    // )
    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (status === 'idle') dispatch(fetchProducts())
    // }, [status, dispatch])

    if (isLoading) return <h3>Loading...</h3>

    if (error) return <p>{error}</p>

    return (
        <div className='products'>
            {!products || products.length === 0 ? (
                <p>No products</p>
            ) : (
                products.map((prod) => <Item key={prod.id} product={prod} />)
            )}
        </div>
    )
}
