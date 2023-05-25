import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path='/' element={<Homepage />}  />
            <Route path='/products/:productId' element={<ProductDetails />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  )
}

export default App
