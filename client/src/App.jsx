import { Routes, Route } from 'react-router';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Collection from './components/collections/Collection';
import Category from './components/collections/Category';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import Logout from './components/auth/Logout';
import ProductDetails from './components/details/ProductDetails';

function App() {
  const [authData, setAuthData] = useState({});

  const loginHandler = (data) => {
    setAuthData(data);
  }

  const logoutHandler = () => {
    setAuthData({});
  }

  return (
    <UserContext.Provider value={{ ...authData, loginHandler, logoutHandler }}>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/collection/:category' element={<Category />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/users/register' element={<Register />} />
          <Route path='/users/logout' element={<Logout />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
