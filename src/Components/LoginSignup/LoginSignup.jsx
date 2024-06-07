import React, { useState } from 'react'
import './LoginSignup.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


const LoginSignup = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction("");
    };

    return (
        <div className={`wrapper${action}`}>
            
            <div className='form-box login'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="logo"  />
                <form action=''>
                    <h1>Hi, Welcome Back!</h1>
                    <h2>Sign in to your account to continue</h2>
                    <div className='input-box'>
                        <input type='text'
                            placeholder='Enter your email address' required />
                        <FaUser className='icon' />

                    </div>
                    <div className='input-box'>
                        <input type='password'
                            placeholder=' Enter your Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <a href='#'>Forgot password?</a>

                    </div>

                    <button type="submit">Sign in</button>

                    <div className='register-link'>
                        <p>Don't have an acount? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>






            <div className='form-box register'>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="logo"  />
                <form action=''>
                    <h1>Create an account</h1>
                    <h2>Fill in the form today to create an account</h2>
                    <div className='input-box'>
                        <input type='text'
                            placeholder='Enter your email address' required />
                        <FaEnvelope className='icon' />


                    </div>
                   
                    <div className='input-box'>
                        <input type='text'
                            placeholder='Enter your Full Name' required />
                        <FaUser className='icon' />


                    </div>
                    <div className='input-box'>
                        <input type='text'
                            placeholder='create password' required />
                        <FaLock className='icon' />


                    </div>
                    <div className='input-box'>
                        <input type='password'
                            placeholder=' Confirm Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='remember-forgot'>
                        <a href='#'>Forgot password?</a>

                    </div>

                    <button type="submit">Register</button>

                    <div className='register-link'>
                        <p>Already have an account? <a href="#" onClick={loginLink}>Sign in</a></p>

                        
                        <p>Copyright 2024 GTEXT. All Rights Reserved</p>
                    </div>
                </form>
            </div>

        </div>



    );

};

export default LoginSignup;