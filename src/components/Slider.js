import React, { useState } from 'react'
import './Slider.css'
import { UilArrowLeft, UilArrowRight } from '@iconscout/react-unicons'
import { SliderItems } from '../data'
import {useNavigate} from 'react-router-dom'


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)


    const handleLeftClick = () => {
        setSlideIndex(slideIndex === 0 ? SliderItems.length - 1 : slideIndex - 1)
    }
    const handleRightClick = () => {
        setSlideIndex(slideIndex === SliderItems.length - 1 ? 0 : slideIndex + 1)
    }

    let navigate = useNavigate()

    const shopNow = () =>{
        navigate('/productdetail')
    }


    return (
        <div className='slider-container'>
            <div className="sli-arrow-left" onClick={handleLeftClick}>
                <UilArrowLeft />
            </div>
            <div className="slide-container">
                {SliderItems.map((item, index) => (

                    <div className="slide" key={item.id}>
                        <div className="slide-img">
                            {item.img}
                        </div>
                        <div className="slide-info">
                            <h1 className="slide-info-title">{item.title}</h1>
                            <p className="slide-info-desc">{item.desc}</p>
                            <button className="slide-info-button" onClick={shopNow}>SHOP NOW</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sli-arrow-right" onClick={handleRightClick}>
                <UilArrowRight />
            </div>
        </div>
    )
}

export default Slider
