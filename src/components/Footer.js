import React from 'react'
import './Footer.css'
import { UilFacebook, UilGithub, UilInstagramAlt, UilYoutube ,UilLocationPoint,UilMobileAndroid,UilEnvelopeAlt} from '@iconscout/react-unicons'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-left">
                <h1 className="footer-logo">ECom</h1>
                <p className="footer-desc">
                    You want to be beauty, to be noticed, expess yourself, let just come visit our store,
                    The place you can find "accessories" for you to touch your goal!
                </p>
                <div className="footer-social">
                    <div className="footer-social-fb"><UilFacebook/></div>
                    <div className="footer-social-git"><UilGithub/></div>
                    <div className="footer-social-ins"><UilInstagramAlt/></div>
                    <div className="footer-social-yt"><UilYoutube/></div>
                </div>
            </div>
            <div className="footer-center">
                <h3 className="footer-center-title">Navigation</h3>
                <ul className="footer-center-list">
                    <div className="li footer-center-listItem">Home</div>
                    <div className="li footer-center-listItem">Clothes</div>
                    <div className="li footer-center-listItem">Accessories</div>
                    <div className="li footer-center-listItem">Order</div>
                    <div className="li footer-center-listItem">Cart</div>
                    <div className="li footer-center-listItem">Account</div>
                    <div className="li footer-center-listItem">Whishlist</div>
                    <div className="li footer-center-listItem">Terms</div>
                </ul>
            </div>
            <div className="footer-right">
                <h3 className="footer-right-title">Contact</h3>
                <div className="footer-right-location"><UilLocationPoint/>Phu Ngai Tri, Chau Thanh, Long An</div>
                <div className="footer-right-phone"><UilMobileAndroid/>+84 769693527</div>
                <div className="footer-right-mail"><UilEnvelopeAlt/>minhluc0510@gmail.com</div>
            </div>
        </div>
    )
}

export default Footer
