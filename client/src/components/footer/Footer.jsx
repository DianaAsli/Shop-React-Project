import logo from '../../assets/logo.png'
import {NavLink} from 'react-router'

export default function Footer() {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={logo} className='mmb-5 w-32' alt="" srcset="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos adipisci, voluptatem repellendus possimus iste nesciunt nisi neque laboriosam eum impedit voluptatibus dolore ad blanditiis tempora beatae! Ab autem voluptate cumque.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About us</NavLink>
                        <NavLink to='/contact'>Delivery</NavLink>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+359 999 999 999</li>
                        <li>contact@nomeya.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className='w-full border-gray-300' />
                <p className='py-5 text-sm text-center'>Copyright 2025@ nomeya.com - All rights reserved.</p>
            </div>
        </div>
    )
}
