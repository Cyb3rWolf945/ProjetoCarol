import './App.css'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import { useLocation } from 'react-router'
import ProductDetailPage from './pages/ProductDetailPage'
import { CartContext } from './DataContext'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  //const location = useLocation();
  /*O tony é muita fixe*/
  return (
    <>
      <CartContext.Provider value={{cart, setCart}}> 
        <div className="container-md max-w-7xl mx-auto bg-background">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/product/:id" element={<ProductDetailPage/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
            <Footer/>
        </div>
      </CartContext.Provider> 
    </>
  )
}

export default App
