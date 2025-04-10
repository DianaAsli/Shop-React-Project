import { Link, useNavigate } from "react-router";
import Title from "../UI/Title";
import { useRegister } from "../../hooks/authServices";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { loginHandler } = useContext(UserContext);

    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);

    const [error, setError] = useState(null);

    const registerHandler = async (formData) => {
        const { email, username, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            setError("Passwords don't match")
            return;
        }

        const data = await register(email, username, password);

        loginHandler(data);
        navigate('/');
    }

    return (
        <div className='auth-container'>
            <Title className='auth-title' text2={'REGISTER'}></Title>

            {error && (
                <p className="text-red-700 bg-red-100 border border-red-300 rounded p-2 mb-4 text-center">
                    {error}
                </p>
            )}

            <form action={registerHandler} className='auth-form'>
                <input type="email" placeholder='Your email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)}  className='auth-input' />
                <input type="text" placeholder='Your username' name='username' required value={username} onChange={(e) => setUsername(e.target.value)}  className='auth-input' />
                <input type="password" placeholder='Your password' name='password' required  className='auth-input' />
                <input type="password" placeholder='Repeat your password' name='rePassword' required className='auth-input' />
                <button type='submit' className='auth-button'>Register</button>
            </form>
            <p className='auth-text'>Already have an account?
                <Link to='/users/login' className='auth-link'>Login here.</Link>
            </p>
        </div>
    )
}
