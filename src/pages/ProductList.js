import React from 'react'
import './ProductList.css'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import GettingNews from '../components/GettingNews'
import Footer from '../components/Footer'

const ProductList = () => {
    return (
        <div className='proli-container'>
            
            <h1 className="proli-title">DRESSES</h1>
            <div className="proli-filter-container">
                <div className="proli-filter">
                    <span className="proli-filter-text">Filter Product:</span>
                    <select name="" id="" className="proli-filter-select">
                        <option value="" className="proli-filter-option" disabled selected>Color</option>
                        <option value="" className="proli-filter-option">White</option>
                        <option value="" className="proli-filter-option">Black</option>
                        <option value="" className="proli-filter-option">Red</option>
                        <option value="" className="proli-filter-option">Blue</option>
                        <option value="" className="proli-filter-option">Green</option>
                    </select>
                    <select name="" id="" className="proli-filter-select">
                        <option value="" className="proli-filter-option" disabled selected>Size</option>
                        <option value="" className="proli-filter-option">S</option>
                        <option value="" className="proli-filter-option">M</option>
                        <option value="" className="proli-filter-option">L</option>
                        <option value="" className="proli-filter-option">XL</option>
                        <option value="" className="proli-filter-option">XXL</option>
                    </select>
                </div>
                <div className="proli-filter">
                    <span className="proli-filter-text">Sort Product:</span>
                    <select name="" id="" className="proli-filter-select">
                        <option value="" className="proli-filter-option" selected>Newest</option>
                        <option value="" className="proli-filter-option">Popular</option>
                        <option value="" className="proli-filter-option">Price (asc)</option>
                        <option value="" className="proli-filter-option">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <GettingNews />
            <Footer />
        </div>
    )
}

export default ProductList
