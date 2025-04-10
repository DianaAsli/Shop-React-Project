import React, { useContext, useState } from 'react'
import Title from '../components/UI/Title'
import { UserContext } from '../context/UserContext'

export default function Profile() {
    const { username, email } = useContext(UserContext)

    const [emailForm, setEmail] = useState(email);
    const [usernameForm, setUsername] = useState(username);
    const [password, setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);

    const [error, setError] = useState(null);

    const handleEditProfileSubmit = () => {
        if (password !== rePassword) {
            setError('Passwords dont match');
            return;
        }

    }
    return (
        <div className="bg-gray-100 pt-5 p-15 max-w-3xl mx-auto mt-5 shadow-md rounded-md text-center">

            <Title text1={' Edit'} text2={'Profile'} />
            <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, ipsam.</p>
            <div className="m-auto w-3/4 mt-5 p-5 border border-gray-300 rounded-lg shadow-lg">

                {error && (
                    <p className="text-red-700 bg-red-100 border border-red-300 rounded p-2 mb-4 text-center">
                        {error}
                    </p>
                )}

                <p className="text-xl font-semibold mb-4">Edit Profile details</p>

                <input type="email" placeholder='Your new email' name='email' required value={emailForm} onChange={(e) => { setEmail(e.target.value) }} className='auth-input mb-2' />
                <input type="text" placeholder='Your username' name='username' required value={usernameForm} onChange={(e) => setUsername(e.target.value)} className='auth-input mb-2' />
                <input type="password" placeholder='Your new password' name='password' required onChange={(e) => { setPassword(e.target.value) }} className='auth-input mb-2' />
                <input type="password" placeholder='Repeat your new password' name='rePassword' onChange={(e) => { setRePassword(e.target.value) }} required className='auth-input mb-2' />

                <div className="flex justify-between items-center">

                    <button
                        onClick={handleEditProfileSubmit}
                        className="px-6  py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition cursor-pointer">
                        Edit details
                    </button>
                </div>
            </div>
        </div>
    )
}
