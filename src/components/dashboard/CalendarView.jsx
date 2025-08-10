// src/pages/dashboard/CalendarView.jsx
import React from 'react';
import { useOutletContext } from 'react-router';

// Importa todas tus imágenes
import calendarGrupoA from '/Calendario1.jpg';
import calendarGrupoB from '/Calendario1.jpg';
import calendarGrupoC from '/Calendario1.jpg';
import calendarGrupoD from '/Calendario1.jpg';
import calendarDefault from '/Calendario1.jpg';

// Objeto que mapea nombres de grupo (en minúsculas) a sus rutas de imagen
const calendarImages = {
    'grupo a': calendarGrupoA,
    'grupo b': calendarGrupoB,
    'grupo c': calendarGrupoC,
    'grupo d': calendarGrupoD,
};

export default function CalendarView() {
    const { userProfile } = useOutletContext();

    if (!userProfile || !userProfile.group) {
        return (
            <div className="p-6 text-red-600">
                No se pudo determinar el grupo para mostrar el calendario.
            </div>
        );
    }

    const groupName = userProfile.group.toLowerCase();
    // Obtiene la imagen del objeto, si no la encuentra, usa la imagen por defecto
    const calendarImageSrc = calendarImages[groupName] || calendarDefault;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Calendario para {userProfile.group}</h3>
            {calendarImageSrc ? (
                <div className="flex justify-center items-center">
                    <img
                        src={calendarImageSrc}
                        alt={`Calendario para ${userProfile.group}`}
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            ) : (
                <p>No se encontró un calendario visual para tu grupo.</p>
            )}
        </div>
    );
}