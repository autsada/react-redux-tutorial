import { Product } from '../types'

export const products: Product[] = [
    {
        id: '1',
        title: 'Shirt',
        price: 890,
    },
    {
        id: '2',
        title: 'Pants',
        price: 1400,
    },
    {
        id: '3',
        title: 'Bag',
        price: 1000,
    },
    {
        id: '4',
        title: 'Watch',
        price: 12000,
    },
]

export function getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    })
}
