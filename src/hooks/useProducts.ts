import { useQuery } from 'react-query'

import { getProducts } from '../data/products'
import { Product } from '../types'

export function useProducts() {
    return useQuery<Product[], string>('products', () => getProducts())
}
