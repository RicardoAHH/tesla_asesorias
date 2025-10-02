// src/pages/dashboard/ProfileView.jsx
import React from 'react';
import { useOutletContext } from 'react-router';

export default function ProfileView() {
    // Recibe el userProfile del Outlet del DashboardLayout
    const { userProfile } = useOutletContext();
    if (!userProfile) {
        console.log("ProfileView: userProfile es null/undefined, mostrando 'Cargando perfil...'");
        return <div>Cargando perfil...</div>; // O un mensaje de error si el perfil no se cargó
    }

    // Si userProfile es un objeto vacío o no tiene las propiedades esperadas
    if (Object.keys(userProfile).length === 0) {
        console.log("ProfileView: userProfile es un objeto vacío o sin propiedades relevantes.");
        return <div>No se encontraron datos detallados para el perfil.</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Mi Perfil</h3>
            <div className="space-y-3">
                <p><strong>Nombre:</strong> {userProfile.name}</p>
                <p><strong>Apellidos:</strong> {userProfile.lastname}</p>
                <p><strong>Teléfono:</strong> {userProfile.phone || 'No especificado'}</p>
                <p><strong>Escuela:</strong> {userProfile.school || 'No especificado'}</p>
                <p><strong>Grupo:</strong> {userProfile.group}</p>
                {/* Puedes añadir más detalles del perfil aquí */}
            </div>
        </div>
    );
}