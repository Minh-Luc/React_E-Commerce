import React from 'react'
import Footer from '../components/Footer'
import GettingNews from '../components/GettingNews'
import Navbar from '../components/Navbar'
import './Product.css'
import { UilMinusCircle,UilPlusCircle} from '@iconscout/react-unicons'
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        
        <div className='prod-container'>
            <Link to="/productdetail" className='prod-container-link'>
            <div className="prod-wrapper">
                <div className="prod-img-container">
                    <img src="/images/pro-img-8.png" alt="" />
                </div>
                <div className="prod-info-container">
                    <h1 className="prod-info-title">Cap</h1>
                    <p className="prod-info-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas, dolore, debitis nulla eveniet officia nihil impedit similique quam nemo quos veritatis ut? 
                        Ea facilis vero totam consectetur temporibus voluptate. Ex.
                    </p>
                    <span className="prod-info-price">20 $</span>
                    <div className="prod-filter-container">
                        <div className="prod-filter">
                            <span className="prod-filter-title">Color</span>
                            <div className="prod-filter-color" id='black'></div>
                            <div className="prod-filter-color" id='white'></div>
                            <div className="prod-filter-color" id='grey'></div>
                        </div>
                        <div className="prod-filter">
                            <span className="prod-filter-title">Size</span>
                            <select name="" id="" className="prod-filter-size">
                                <option value="" className="prod-filter-option">S</option>
                                <option value="" className="prod-filter-option">M</option>
                                <option value="" className="prod-filter-option">L</option>
                                <option value="" className="prod-filter-option">XL</option>
                                <option value="" className="prod-filter-option">XXL</option>
                            </select>
                        </div>
                    </div>
                    <div className="prod-add-container">
                        <div className="prod-amount-container">
                            <UilMinusCircle/>
                            <span className="prod-amount">1</span>
                            <UilPlusCircle/>
                        </div>
                        <button className="prod-add-button">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <GettingNews/>
            <Footer/>
            </Link>
        </div>
        
    )
}

export default Product
