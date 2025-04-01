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

function App() {
  const [authData, setAuthData] = useState({});

  const loginHandler = (data) => {
    setAuthData(data);
  }

  return (
    <UserContext.Provider value={{...authData,loginHandler}}>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/collection/:category' element={<Category />} />
          <Route path='/users/login' element={<Login onLogin={loginHandler} />} />
          <Route path='/users/register' element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
