import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import ShoppingCartContextProvider from "./Context/Context.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <ShoppingCartContextProvider>
            <Header />

            <Routes>
                <Route path='/' element={<Homepage />}  />
                <Route path='/shoppingCart' element={<Checkout />}  />
                <Route path='/products/:productId' element={<ProductDetails />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>

            <Footer />
        </ShoppingCartContextProvider>
    </BrowserRouter>
  )
}

export default App
