import React from 'react'
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signup-container'>
            <div className="signup-wrapper">
                <h1 className="signup-title">CREATE AN ACCOUNT</h1>
                <form action="" className="signup-form">
                    <input type="text" className="signup-input" placeholder='First name' />
                    <input type="text" className="signup-input" placeholder='Last name' />
                    <input type="text" className="signup-input" placeholder='User name' />
                    <input type="text" className="signup-input" placeholder='Email' />
                    <input type="text" className="signup-input" placeholder='Password' />
                    <input type="text" className="signup-input" placeholder='Confirm passwork' />
                    <span className="signup-agreement">
                        By create acount, I provide access to personal data in accordance with the <b>PRIVACY POLICY</b>
                    </span>
                    <button className="signup-button">CREATE</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
