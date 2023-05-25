import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Homepage />
        <Footer />
    </>
  )
}

export default App
