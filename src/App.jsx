import { Route, Routes } from "react-router"
import Home from "./pages/home/Home"
import Nosotros from "./pages/About/Nosotros"
import Servicios from "./pages/Services/Servicios"
import Header from "./components/home/Header"
import Contacto from "./pages/Contact/Contacto"
import WPbutton from "./components/general/WPbutton"
import Footer from "./components/general/Footer"
import Login from "./pages/Login/Login"
import { Analytics } from '@vercel/analytics/react';
import { supabase } from "./utils/supabaseClient"
import Dashboard from "./pages/dashboard/Dashboard"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/general/PrivateRoute"
import ProfileView from "./components/dashboard/ProfileView"
import GradesView from "./components/dashboard/GradesView"
// Importa los componentes de contenido DINÁMICO
import CalendarView from "./components/dashboard/CalendarView"
import ScheduleView from "./components/dashboard/ScheduleView"
import RecordedClassesView from "./components/dashboard/RecordedClassesView"
import ResourcesView from "./components/dashboard/ResourcesView"
import AnnouncementsView from "./components/dashboard/AnnouncementsView"

function App() {


  return (
    <>
      <Header />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard/:groupName/*" element={<Dashboard />}>
              <Route index element={<ProfileView />} /> {/* Ruta por defecto al entrar a /dashboard */}
              <Route path="perfil" element={<ProfileView />} />
              <Route path="calificaciones" element={<GradesView />} />
              <Route path="calendario" element={<CalendarView />} />
              <Route path="horario" element={<ScheduleView />} />
              <Route path="clases-grabadas" element={<RecordedClassesView />} />
              <Route path="recursos" element={<ResourcesView />} />
              <Route path="anuncios" element={<AnnouncementsView />} />
            </Route>
          </Route>
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </AuthProvider>
      <div className="fixed right-2 lg:right-10 bottom-1 lg:bottom-10 z-50">
        <WPbutton />
      </div>
      <Footer />
      <Analytics />
    </>
  )
}

export default App
