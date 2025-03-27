import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />Д
      </Routes>

    </div>
  )
}

export default App
