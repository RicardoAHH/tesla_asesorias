import React from 'react';
import { useOutletContext } from 'react-router';

export default function GradesView() {
    // Obtenemos el perfil del usuario del contexto del Outlet
    const { userProfile } = useOutletContext();
    const userGradesLink = userProfile?.grades_sheet_link;

    // Si el enlace no existe en el perfil, mostramos un mensaje de error
    if (!userGradesLink) {
        return (
            <div className="p-6">
                Aún no se ha asignado un archivo de calificaciones para tu cuenta.
            </div>
        );
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Mis Calificaciones</h3>
            <p className="text-gray-700 mb-6">
                Haz clic en el siguiente botón para acceder a tu archivo de calificaciones personal.
            </p>
            <div className="mt-4">
                <a
                    href={userGradesLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#a0965c] hover:bg-[#8d8253] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a0965c] transition-colors"
                >
                    Ver mis Calificaciones
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </div>
    );
}