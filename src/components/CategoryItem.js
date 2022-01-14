import React from 'react'
import './CategoryItem.css'


const CategoryItem = ({item}) => {
    return (
        <div className='container'>
            <img src={item.imgs} alt="" className="cate-img" />
            <div className="cate-info">
                <h1 className="cate-title">{item.title}</h1>
                <button className="cate-button">SHOP NOW</button>
            </div>
        </div>
    )
}

export default CategoryItem
