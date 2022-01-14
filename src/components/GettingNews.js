import React from 'react'
import './GettingNews.css'
import { UilMessage } from '@iconscout/react-unicons'

const GettingNews = () => {
    return (
        <div className='getNew-container'>
            <h1 className="getNew-title">GettingNews</h1>
            <div className="getNew-desc">Don't miss any newest product !</div>
            <div className="getNew-input-container">
                <input type="text" className="getNew-input" placeholder='Your email' />
                <button className='getNew-button'>
                    <UilMessage/>
                </button>
            </div>
        </div>
    )
}

export default GettingNews
