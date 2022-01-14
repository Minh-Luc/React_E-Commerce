import React from 'react'
import './Products.css'
import { productItem } from '../data'
import Product from './Product'

const Products = () => {
    return (
        <div className='pro-container'>
            {productItem.map(item=>(
                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Products
