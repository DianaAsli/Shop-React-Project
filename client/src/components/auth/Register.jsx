import { Link } from "react-router";
import Title from "../UI/Title";

export default function Register() {
    return (
        <div className='auth-container'>
            <Title className='auth-title' text2={'REGISTER'}></Title>
            <form action="" className='auth-form'>
                <input type="email" placeholder='Your email' name='email' required className='auth-input' />
                <input type="password" placeholder='Your password' name='password' required className='auth-input' />
                <input type="password" placeholder='Repeat your password' name='rePassword' required className='auth-input' />
                <button type='submit' className='auth-button'>Register</button>
            </form>
            <p className='auth-text'>Already have an account?
                <Link to='/users/login' className='auth-link'>Login here.</Link>
            </p>
        </div>
    )
}
