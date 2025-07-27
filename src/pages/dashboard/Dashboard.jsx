// src/pages/dashboard/DashboardLayout.jsx (o donde decidas ubicarlo)
import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation, useParams } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../utils/supabaseClient';

// Importa tus componentes de vista específicos
import ProfileView from '../../components/dashboard/ProfileView';
// import GradesView from './GradesView';
import CalendarView from '../../components/dashboard/CalendarView';
import ScheduleView from '../../components/dashboard/ScheduleView';
import RecordedClassesView from '../../components/dashboard/RecordedClassesView'; // Este será dinámico
import ResourcesView from '../../components/dashboard/ResourcesView';// Este será dinámico
import AnnouncementsView from '../../components/dashboard/AnnouncementsView';

export default function DashboardLayout() {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // Para saber la ruta actual y resaltar el botón
    const [userProfile, setUserProfile] = useState(null);
    const [profileLoading, setProfileLoading] = useState(true);
    const [error, setError] = useState('');
    const { groupName } = useParams();

    useEffect(() => {
        console.log("DashboardLayout useEffect: authLoading", authLoading, "user", user);
        // Redirige si el usuario no está autenticado después de que authLoading termina
        if (!authLoading && !user) {
            navigate('/login');
            return;
        }

        // Carga el perfil del usuario una vez que sabemos que está autenticado
        const fetchUserProfile = async () => {
            if (user) {
                setProfileLoading(true);
                setError('');
                console.log("DashboardLayout: Iniciando fetchUserProfile para user.id:", user.id);
                try {
                    const { data, error } = await supabase
                        .from('users')
                        .select('name, phone, school, group, lastname') // Selecciona los campos que necesitas
                        .eq('id', user.id)
                        .single();

                    if (error) {
                        console.error('Error fetching user profile from Supabase:', error.message);
                        throw error;
                    }

                    if (!data) {
                        console.warn("DashboardLayout: No se encontraron datos de perfil para el usuario:", user.id);
                        setError('No se encontró información de perfil para tu cuenta.');
                        setUserProfile(null); // Asegúrate de que userProfile sea null si no hay datos
                        return; // Salir de la función si no hay datos
                    }

                    console.log("DashboardLayout: Perfil de usuario cargado:", data);
                    setUserProfile(data);

                } catch (err) {
                    console.error('DashboardLayout: Error al cargar el perfil:', err.message);
                    console.error('Error fetching user profile:', err.message);
                    setError('No se pudo cargar tu perfil. Intenta de nuevo.');
                } finally {
                    setProfileLoading(false);
                    console.log("DashboardLayout: profileLoading fijado a false.");
                }
            } else {
                console.log("DashboardLayout: user es null en fetchUserProfile, no se hace la llamada a Supabase.");
            }
        };

        if (!authLoading && user) {
            fetchUserProfile();
        }
    }, [user, authLoading, navigate, groupName]);

    console.log("DashboardLayout Render: authLoading", authLoading, "profileLoading", profileLoading, "userProfile", userProfile);

    if (authLoading || profileLoading) {
        return <div className="min-h-screen flex items-center justify-center">Cargando dashboard...</div>;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
    }

    if (!userProfile) {
        return <div className="min-h-screen flex items-center justify-center">No se encontró información de perfil.</div>;
    }

    // Determina el grupo del usuario para la navegación dinámica
    const userGroup = userProfile.group; // Asumiendo que esta es la columna para el grupo

    // Función para manejar la navegación entre secciones del dashboard
    const handleNavigation = (path) => {
        navigate(`/dashboard/${userGroup.toLowerCase().replace(/\s/g, '')}/${path}`); // Ejemplo: /dashboard/grupoa/perfil
    };

    return (
        <div className="pt-28 flex min-h-screen bg-gray-100">
            {/* Barra Lateral de Navegación */}
            <aside className="w-64 bg-[#1d3660] text-white flex flex-col p-4">
                <h1 className="text-2xl font-bold mb-8 text-center">Dashboard</h1>
                <nav className="flex-grow">
                    <ul>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('perfil')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('perfil') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Ver mi Perfil
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('calificaciones')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('calificaciones') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Mis Calificaciones
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('calendario')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('calendario') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Calendario
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('horario')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('horario') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Mi Horario
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('clases-grabadas')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('clases-grabadas') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Mis Clases Grabadas
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('recursos')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('recursos') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Recursos
                            </button>
                        </li>
                        <li className="mb-2">
                            <button
                                onClick={() => handleNavigation('anuncios')}
                                className={`w-full text-left p-2 rounded-md ${location.pathname.includes('anuncios') ? 'bg-[#a0965c]' : 'hover:bg-[#152a4e]'}`}
                            >
                                Anuncios
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="mt-auto">
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            navigate('/login');
                        }}
                        className="w-full text-left p-2 rounded-md bg-red-600 hover:bg-red-700"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Contenido Principal del Dashboard */}
            <main className="flex-grow p-8">
                <header className="mb-8">
                    <h2 className="text-3xl font-semibold text-[#1d3660]">
                        Bienvenido, {userProfile.name}! ({userProfile.group})
                    </h2>
                </header>
                <div className="bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-180px)]">
                    {/* Aquí se renderizará el componente de la ruta anidada */}
                    <Outlet context={{ userProfile }} /> {/* Pasa el userProfile al Outlet */}
                </div>
            </main>
        </div>
    );
}