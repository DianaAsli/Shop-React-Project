import { Routes, Route } from 'react-router';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />Д
      </Routes>
    </>
  )
}

export default App
