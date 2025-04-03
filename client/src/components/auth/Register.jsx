import { Link, useNavigate } from "react-router";
import Title from "../UI/Title";
import { useRegister } from "../../api/authServices";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { loginHandler } = useContext(UserContext);

    const registerHandler = async (formData) => {
        const { email, username, password, rePassword } = Object.fromEntries(formData);
        if (password !== rePassword) {
            console.log('Passwords dont match');
            return;
        }
        const data = await register(email, username, password);
        
        loginHandler(data);
        navigate('/');
    }

    return (
        <div className='auth-container'>
            <Title className='auth-title' text2={'REGISTER'}></Title>
            <form action={registerHandler} className='auth-form'>
                <input type="email" placeholder='Your email' name='email' required className='auth-input' />
                <input type="text" placeholder='Your username' name='username' required className='auth-input' />
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
