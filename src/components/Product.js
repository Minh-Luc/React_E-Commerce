import React from 'react'
import './Product.css'
import { UilShoppingCartAlt, UilSearch, UilHeart} from '@iconscout/react-unicons'

const Product = ({item}) => {
    return (
        <a href="/product">
        <div className='container'>
            <div className="circle"></div>
            <img src={item.img} alt="" className="pro-img" />
            <div className="pro-info">
                <div className="pro-cart">
                    <UilShoppingCartAlt/>
                </div>
                <div className="pro-search"><UilSearch/></div>
                <div className="pro-heart"><UilHeart/></div>
            </div>
        </div>
        </a>
    )
}

export default Product
