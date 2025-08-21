// src/pages/dashboard/DashboardLayout.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation, useParams } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../utils/supabaseClient';

// Icono para el menú hamburguesa (puedes usar un SVG o una librería de iconos)
const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
);

export default function DashboardLayout() {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [userProfile, setUserProfile] = useState(null);
    const [profileLoading, setProfileLoading] = useState(true);
    const [error, setError] = useState('');
    const { groupName } = useParams();

    // Estado para controlar la visibilidad del menú en móviles
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
            return;
        }

        const fetchUserProfile = async () => {
            if (user) {
                setProfileLoading(true);
                setError('');
                try {
                    const { data, error } = await supabase
                        .from('users')
                        .select('name, phone, school, group, lastname, grades_sheet_link')
                        .eq('id', user.id)
                        .single();

                    if (error) throw error;
                    if (!data) {
                        setError('No se encontró información de perfil para tu cuenta.');
                        setUserProfile(null);
                        return;
                    }
                    setUserProfile(data);

                } catch (err) {
                    setError('No se pudo cargar tu perfil. Intenta de nuevo.');
                } finally {
                    setProfileLoading(false);
                }
            }
        };

        if (!authLoading && user) {
            fetchUserProfile();
        }
    }, [user, authLoading, navigate, groupName]);

    if (authLoading || profileLoading) {
        return <div className="min-h-screen flex items-center justify-center">Cargando dashboard...</div>;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
    }

    if (!userProfile) {
        return <div className="min-h-screen flex items-center justify-center">No se encontró información de perfil.</div>;
    }

    const userGroup = userProfile.group;

    const handleNavigation = (path) => {
        navigate(`/dashboard/${userGroup.toLowerCase().replace(/\s/g, '')}/${path}`);
        // Cierra el menú al hacer clic en un enlace en móviles
        if (window.innerWidth < 768) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <div className="pt-28 flex flex-col md:flex-row min-h-screen bg-gray-100 relative">
            {/* Botón de Menú para Móviles */}
            <div className="md:hidden p-4">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                    <MenuIcon />
                </button>
            </div>

            {/* Barra Lateral de Navegación */}
            <aside
                className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out md:w-64 bg-[#1d3660] text-white flex flex-col p-4 z-50`}
            >
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
                    <Outlet context={{ userProfile }} />
                </div>
            </main>
        </div>
    );
}