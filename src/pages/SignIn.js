import React from 'react'
import './SignIn.css'

const SignIn = () => {
    return (
        <div className='signin-container'>
            <div className="signin-wrapper">
                <h1 className="signin-title">SIGN IN</h1>
                <form action="" className="signin-form">
                    <input type="text" className="signin-input" placeholder='User name' />
                    <input type="text" className="signin-input" placeholder='Password' />
                    <button className="signin-button">LOGIN</button>
                    <a href="#" className="signin-link">Forgot password ?</a>
                    <a href="#" className="signin-link">Create new account</a>
                </form>
            </div>
        </div>
    )
}

export default SignIn
