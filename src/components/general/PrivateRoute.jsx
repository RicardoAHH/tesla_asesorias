import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../contexts/AuthContext'; // Importa tu hook de autenticación

export default function PrivateRoute() {
    const { user, loading } = useAuth(); // Obtén el usuario y el estado de carga del contexto

    if (loading) {
        // Puedes mostrar un spinner o un mensaje de "Cargando..."
        // mientras Supabase verifica la sesión inicial.
        return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
    }

    // Si hay un usuario, renderiza la ruta anidada (Outlet)
    // Si no hay usuario, redirige al login
    return user ? <Outlet /> : <Navigate to="/login" replace />;
}