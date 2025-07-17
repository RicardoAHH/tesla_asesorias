import { Route, Routes } from "react-router"
import Home from "./pages/home/home"
import Nosotros from "./pages/About/Nosotros"
import Servicios from "./pages/Services/Servicios"
import Header from "./components/home/Header"
import Contacto from "./pages/Contact/Contacto"
import WPbutton from "./components/general/WPbutton"
import Footer from "./components/general/Footer"
import Login from "./pages/Login/Login"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <div className="fixed right-2 lg:right-10 bottom-1 lg:bottom-10 z-50">
        <WPbutton />
      </div>
      <Footer />
    </>
  )
}

export default App
