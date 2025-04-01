import React from 'react'
import Title from '../UI/Title'
import { Link } from 'react-router'
import './Login.css'

export default function Login() {
    return (
        <div className='login-container'>
            <Title className='login-title' text2={'LOGIN'}></Title>
            <form action="" className='login-form'>
                <input type="email" placeholder='Your email' name='email' required className='login-input' />
                <input type="password" placeholder='Your password' name='password' required className='login-input' />
                <button type='submit' className='login-button'>Login</button>
            </form>
            <p className='login-text'>Don't have an account?
                <Link to='/users/register' className='login-link'>Sign up.</Link>
            </p>
        </div>
    )
}
