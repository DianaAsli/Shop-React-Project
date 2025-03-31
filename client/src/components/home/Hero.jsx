export default function Hero() {
  return (
      <section className=" flex items-center justify-center h-[70vh] bg-gray-100"
      // style={{backgroundImage: `url(${})`}}
      >
        <div className="text-center px-6">
          <h1 className="text-3xl sm:text-5xl font-semibold text-gray-800">Timeless Elegance</h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-lg">Discover handcrafted jewelry designed for every moment.</p>
          <button className="mt-5 px-6 py-2 bg-black text-white text-sm sm:text-base rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>
      </section>
  )
}
