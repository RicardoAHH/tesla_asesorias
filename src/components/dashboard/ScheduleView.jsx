import React from 'react';
import { useOutletContext } from 'react-router'; // Asegúrate que sea 'react-router-dom'

// Importa tus imágenes de horario aquí
// Asegúrate de que las rutas sean correctas y las imágenes existan
import scheduleGrupoA from '../../../public/horario1.jpg'; // Ruta a tu imagen para Horario Grupo A
import scheduleGrupoB from '../../../public/horario1.jpg'; // Ruta a tu imagen para Horario Grupo B
import scheduleGrupoC from '../../../public/horario1.jpg'; // Ruta a tu imagen para Horario Grupo C
import scheduleGrupoD from '../../../public/horario1.jpg'; // Ruta a tu imagen para Horario Grupo D
// Opcional: una imagen por defecto si el grupo no tiene un horario específico
import scheduleDefault from '../../../public/horarioVacio.jpg';

// Objeto que mapea nombres de grupo (en minúsculas) a sus rutas de imagen de horario
const scheduleImages = {
    'grupo a': scheduleGrupoA,
    'grupo b': scheduleGrupoB,
    'grupo c': scheduleGrupoC,
    'grupo d': scheduleGrupoD,
    // Puedes añadir más grupos aquí si los tienes
};

export default function ScheduleView() {
    const { userProfile } = useOutletContext(); // Obtenemos el perfil del usuario

    // Si el perfil o el grupo no están disponibles, manejamos el estado
    if (!userProfile || !userProfile.group) {
        return (
            <div className="p-6 text-red-600">
                No se pudo determinar el grupo para mostrar tu horario.
            </div>
        );
    }

    const groupName = userProfile.group.toLowerCase(); // Convertir a minúsculas para comparaciones consistentes
    // Obtiene la imagen del objeto, si no la encuentra, usa la imagen por defecto
    const scheduleImageSrc = scheduleImages[groupName] || scheduleDefault;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Mi Horario para {userProfile.group}</h3>
            {scheduleImageSrc ? (
                <div className="flex justify-center items-center">
                    <img
                        src={scheduleImageSrc}
                        alt={`Horario para ${userProfile.group}`}
                        className="max-w-full h-auto rounded-lg shadow-md"
                    // Puedes añadir estilos para controlar el tamaño de la imagen si es necesario
                    // style={{ maxWidth: '800px', maxHeight: '600px' }}
                    />
                </div>
            ) : (
                <p>No se encontró un horario visual para tu grupo.</p>
            )}
        </div>
    );
}