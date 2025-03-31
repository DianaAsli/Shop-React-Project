import { Link, NavLink } from 'react-router'
import { useState } from 'react';
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/searchIcon.jpg'
import user from '../../assets/user.png'
import cart from '../../assets/cart.jpeg'
import burgerMenu from '../../assets/burgerMenu.png'
import back from '../../assets/back.png'

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <Link to='/'>
                <img src={logo} className='w-36 h-20 object-cover' alt="Logo Nomeya" />
            </Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTIONS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={searchIcon} alt="" className="w-10 cursor-pointer" />

                <div className='group relative'>
                    <img src={user} alt="" className="w-8 cursor-pointer icon-thin" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='w-5 h-5 relative'>
                    <img src={cart} alt="" className='relative' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-white text-black border aspect-square rounded-full text-[8px]'>
                        10
                    </p>

                    {/* <p className='absolute right-[-5px] bottom-[-5px] w-3 text-center leading-3 bg-white text-black border aspect-square rounded-full text-[8px]'>10</p> */}
                </Link>
                <img onClick={() => setVisible(true)} src={burgerMenu} alt="" className='w-5 cursor-pointer sm:hidden' />
            </div>

            {/* Side Bar Menu */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-ston-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={back} className='h-4' />
                        <p>Back</p>
                    </div>
                    <Link onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</Link>
                    <Link onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</Link>
                    <Link onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</Link>
                    <Link onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}