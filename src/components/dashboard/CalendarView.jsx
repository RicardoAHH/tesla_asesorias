// src/pages/dashboard/CalendarView.jsx
import React from 'react';
import { useOutletContext } from 'react-router';

// Importa todas tus imágenes
import calendarGrupo1 from '/grupos1y3.jpg';
import calendarGrupo2 from '/Calendario1.jpg';
import calendarGrupo3 from '/grupos1y3.jpg';
import calendarGrupo4 from '/Calendario1.jpg';
import calendarGrupo5 from '/Calendario1.jpg';
import calendarDefault from '/Calendario1.jpg';

// Objeto que mapea nombres de grupo (en minúsculas) a sus rutas de imagen
const calendarImages = {
    'grupo 1': calendarGrupo1,
    'grupo 2': calendarGrupo2,
    'grupo 3': calendarGrupo3,
    'grupo 4': calendarGrupo4,
    'grupo 5': calendarGrupo5,
};

export default function CalendarView() {
    const { userProfile } = useOutletContext();

    // Muestra un estado de carga mientras los datos se recuperan
    if (!userProfile) {
        return <div className="p-6 text-gray-500">Cargando calendario...</div>;
    }

    // Si userProfile existe pero no tiene el grupo, muestra un mensaje de error específico
    if (!userProfile.group) {
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