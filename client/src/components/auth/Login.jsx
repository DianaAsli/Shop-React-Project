import React from 'react'
import Title from '../UI/Title'
import { Link } from 'react-router'
import './common.css'

export default function Login() {
    return (
        <div className='auth-container'>
            <Title className='auth-title' text2={'LOGIN'}></Title>
            <form action="" className='auth-form'>
                <input type="email" placeholder='Your email' name='email' required className='auth-input' />
                <input type="password" placeholder='Your password' name='password' required className='auth-input' />
                <button type='submit' className='auth-button'>Login</button>
            </form>
            <p className='auth-text'>Don't have an account?
                <Link to='/users/register' className='auth-link'>Sign up.</Link>
            </p>
        </div>
    )
}
