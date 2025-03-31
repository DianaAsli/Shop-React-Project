import React from 'react'

export default function Newsletter() {
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    //
  }
    return (
    <div className="text-center px-4 py-10 bg-gray-100 rounded-lg">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Stay Updated & Get 20% Off
    </h2>
    <p className="text-gray-500 mt-2 max-w-md mx-auto">
        Subscribe to our newsletter for exclusive deals, updates, and special offers.
    </p>

    <form onSubmit={handleSubmit} className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
        <input 
            type="email" 
            placeholder="Enter your email" 
            required 
            className="w-full sm:flex-1 px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button 
            type="submit" 
            className="bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-900 transition-all"
        >
            Subscribe
        </button>
    </form>
</div>
  )
}
