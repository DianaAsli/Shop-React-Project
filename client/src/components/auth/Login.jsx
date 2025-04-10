import React, { useActionState, useContext, useState } from 'react'
import Title from '../UI/Title'
import { Link, useNavigate } from 'react-router'
import './common.css'
import { useLogin } from '../../hooks/authServices'
import { UserContext } from '../../context/UserContext'

export default function Login() {
    const { login } = useLogin();
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext)
    
    const[email,setEmail] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        try {
            const data = await login(email, password);

            if (!data.accessToken) {
                setError('Invalid email or password');
                return;
            }

            loginHandler(data);
            navigate('/');
        } catch (error) {
            console.log('Error');

        }
    }

    return (
        <div className='auth-container'>
            <Title className='auth-title' text2={'LOGIN'}></Title>
           
            {error && (
                <p className="text-red-700 bg-red-100 border border-red-300 rounded p-2 mb-4 text-center">
                    {error}
                </p>
            )}
            <form action={handleLogin} className='auth-form'>
                <input type="email" placeholder='Your email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required className='auth-input' />
                <input type="password" placeholder='Your password' name='password' required className='auth-input' />
                <button type='submit' className='auth-button'>Login</button>
            </form>
            <p className='auth-text'>Don't have an account?
                <Link to='/users/register' className='auth-link'>Sign up.</Link>
            </p>
        </div>
    )
}
