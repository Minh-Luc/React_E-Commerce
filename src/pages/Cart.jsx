import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Cart.css'
import { UilMinusCircle,UilPlusCircle} from '@iconscout/react-unicons'


const Cart = () => {
    return (
        <div className='cart-container'>
            
            <div className="cart-wrapper">
                <h1 className="cart-title">YOUR CART</h1>
                <div className="cart-top">
                    <button className="cart-top-button">CONTINUE SHOPPING</button>
                    <div className="cart-top-texts">
                        <span className="cart-top-text">Your Shopping (2)</span>
                        <span className="cart-top-text">Your Wishlist (1)</span>
                    </div>
                    <button className="cart-top-button" id='checkout'>CHECKOUT</button>
                </div>
                <div className="cart-bottom">
                    <div className="cart-bottom-info">
                        <div className="cart-bottom-product">
                            <div className="cart-bottom-product-detail">
                                <img src="/images/pro-img-3.png" alt="" className="cart-bottom-product-img" />
                                <div className="cart-bottom-detail">
                                    <span className="cart-bottom-prodname"> <b>Product:</b> SHIRT</span>
                                    <span className="cart-bottom-prodid"> <b>ID:</b> SHI001</span>
                                    <div className="cart-bottom-prodcolor"></div>
                                    <span className="cart-bottom-prodsize"> <b>Size:</b> L </span>
                                </div>
                            </div>
                            <div className="cart-bottom-price-detail">
                                <div className="product-amount-container">
                                    <UilMinusCircle/>
                                    <div className="product-amount">1</div>
                                    <UilPlusCircle/>
                                </div>
                                <span className="product-price">$ 10</span>
                            </div>
                        </div>
                        <hr className="cart-hr" />
                        <div className="cart-bottom-product">
                            <div className="cart-bottom-product-detail">
                                <img src="/images/pro-img-5.png" alt="" className="cart-bottom-product-img" />
                                <div className="cart-bottom-detail">
                                    <span className="cart-bottom-prodname"> <b>Product:</b> CAP</span>
                                    <span className="cart-bottom-prodid"> <b>ID:</b> CAP001</span>
                                    <div className="cart-bottom-prodcolor" id='prodcolor-1'></div>
                                    <span className="cart-bottom-prodsize"> <b>Size:</b> S </span>
                                </div>
                            </div>
                            <div className="cart-bottom-price-detail">
                                <div className="product-amount-container">
                                    <UilMinusCircle/>
                                    <div className="product-amount">2</div>
                                    <UilPlusCircle/>
                                </div>
                                <span className="product-price">$ 15</span>
                            </div>
                        </div>
                    </div>
                    <div className="cart-bottom-summary">
                        <h2 className="cart-bottom-summary-title">SUMMARY</h2>
                        <div className="cart-bottom-summary-item">
                            <div className="cart-summary-item-text">Subtotal</div>
                            <div className="cart-summary-item-price">$ 40</div>
                        </div>
                        <div className="cart-bottom-summary-item">
                            <span className="cart-summary-item-text">Shipping</span>
                            <span className="cart-summary-item-price">$ 2</span>
                        </div>
                        <div className="cart-bottom-summary-item">
                            <span className="cart-summary-item-text">Discount</span>
                            <span className="cart-summary-item-price">$ -5</span>
                        </div>
                        <hr />
                        <div className="cart-bottom-summary-item">
                            <span className="cart-summary-item-text" id='total'>Total</span>
                            <span className="cart-summary-item-price" id='total'>$ 37</span>
                        </div>
                        <button className="cart-summary-button">CHECKOUT</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
