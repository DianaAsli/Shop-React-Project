import React from 'react'
import Title from '../UI/Title'
import Map from './Map'

export default function Contact() {

    return (
        <div className="bg-gray-100 pt-5 p-15 max-w-3xl mx-auto mt-5 shadow-md rounded-md text-center">
           
            <Title text1={'Contact'} text2={'Us'} />
           <p className="text-gray-600 mb-6">Find us here:</p>
            <div className='mt-8'>
                <Map />
            </div>
            <p className="text-gray-600 mt-3 mb-6">We'd love to hear from you!</p>

            <form className="flex flex-col gap-4 max-w-xs mx-auto">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 bg-white"
                />
                <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="p-3 bg-white resize-none"
                />
                <button
                    type="submit"
                    className="bg-black text-white py-2 px-6 rounded-full w-1/2 mx-auto hover:bg-gray-800 transition"
                >
                    Send
                </button>
            </form>

        </div>
    )
}

