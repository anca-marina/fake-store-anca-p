import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import FavoritesContextProvider from "./Context/Context.jsx";




function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <FavoritesContextProvider>
            <Header />

            <Routes>
                <Route path='/' element={<Homepage />}  />
                <Route path='/products/:productId' element={<ProductDetails />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>

            <Footer />
        </FavoritesContextProvider>
    </BrowserRouter>
  )
}

export default App
