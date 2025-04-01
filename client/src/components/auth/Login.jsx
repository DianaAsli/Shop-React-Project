import React, { useActionState } from 'react'
import Title from '../UI/Title'
import { Link, useNavigate } from 'react-router'
import './common.css'
import { useLogin } from '../../api/authServices'

export default function Login({ onLogin }) {
    const { login } = useLogin();
    const navigate = useNavigate();

    const handleLogin = async (previousState, formData) => {
        const values = Object.fromEntries(formData);
        const data = await login(values.email, values.password);
       onLogin(data);
        navigate('/');
        //console.log('Login result', result);
    }

    const [state, formAction] = useActionState(handleLogin, { email: '', password: '' })

    return (
        <div className='auth-container'>
            <Title className='auth-title' text2={'LOGIN'}></Title>
            <form action={formAction} className='auth-form'>
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
