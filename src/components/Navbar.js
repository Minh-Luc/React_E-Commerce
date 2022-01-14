import React from 'react'
import './Navbar.css'
import { UilSearch, UilShoppingCartAlt } from '@iconscout/react-unicons'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-container">
                <div className="nav-left">
                    <span className="nav-logo"><a href='/'>ECom</a></span>
                </div>
                <div className="nav-center">
                    <div className="nav-search-container">
                        <input type="text" className='nav-search-input' />
                        <div className="nav-search-icon"><UilSearch/></div>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="menu-item">
                        <a href="/signup">SIGN UP</a>
                        <a href="/signin">SIGN IN</a>
                        <a href="/cart">
                            <UilShoppingCartAlt/>
                        </a>
                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar
