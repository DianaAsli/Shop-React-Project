import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Collection from './components/collections/Collection';
import Category from './components/collections/Category';
import Login from './components/login/Login';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/collection/:category' element={<Category/>}/>
        <Route path='/users/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
