// src/pages/dashboard/ResourcesView.jsx
import React, { useState, useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom'; // No necesitamos userProfile para recursos generales
import { supabase } from '../../utils/supabaseClient'; // Tu cliente de Supabase

export default function ResourcesView() {
    // Si bien useOutletContext está disponible, no lo necesitamos para recursos generales
    // const { userProfile } = useOutletContext(); 

    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchResources = async () => {
            setLoading(true);
            setError(''); // Limpiar errores previos

            try {
                // No hay filtro por grupo, se traen todos los recursos
                const { data, error } = await supabase
                    .from('resources')
                    .select('id, title, description, type, url') // Selecciona las columnas
                    .order('created_at', { ascending: false }); // O por título, o por tipo, según prefieras

                if (error) throw error;

                setResources(data);
            } catch (err) {
                console.error('Error al cargar los recursos:', err.message);
                setError('Hubo un error al cargar los recursos. Intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []); // El array de dependencias vacío [] significa que se ejecuta una sola vez al montar

    if (loading) {
        return <div className="p-6">Cargando recursos...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Recursos Generales</h3>
            {resources.length === 0 ? (
                <p>No hay recursos disponibles en este momento.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map((resource) => (
                        <div key={resource.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <h4 className="font-semibold text-lg text-[#1d3660] mb-2">{resource.title}</h4>
                            {resource.description && (
                                <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                            )}
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                <span className="mr-1">Tipo:</span>
                                <span className="capitalize px-2 py-0.5 rounded-full bg-[#e0e0e0] text-[#1d3660] text-xs">
                                    {resource.type}
                                </span>
                            </div>
                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-[#a0965c] hover:underline"
                            >
                                Ver Recurso
                                {/* Puedes añadir un icono aquí según el tipo de recurso */}
                                {resource.type === 'pdf' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                )}
                                {resource.type === 'web' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                )}
                                {resource.type === 'video' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                )}
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}