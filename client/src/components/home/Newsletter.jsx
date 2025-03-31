import React from 'react'

export default function Newsletter() {
  
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    //
  }
    return (
        <div className="text-center px-6 py-10 bg-gray-100">
        <h2 className="text-2xl font-medium text-gray-800">
            Subscribe & Get 20% Off
        </h2>
        <form 
            onSubmit={onSubmitHandler} 
            className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
            <input 
                type="email" 
                placeholder="Your email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 outline-none focus:ring-2 focus:ring-gray-600"
            />
            <button 
                type="submit" 
                className="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
                Subscribe
            </button>
        </form>
    </div>
    
    
  )
}
