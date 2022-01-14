import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import GettingNews from '../components/GettingNews'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Product from './Product'
import Cart from './Cart'
import {Routes,Route} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            
            <Slider/>
            <Categories/>
            <Products/>
            <GettingNews/>
            <Footer/>
        </div>
    )
}

export default Home
