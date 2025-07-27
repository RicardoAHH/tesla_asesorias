// src/pages/dashboard/RecordedClassesView.jsx
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router'; // Asegúrate que sea 'react-router-dom'
import { supabase } from '../../utils/supabaseClient'; // Tu cliente de Supabase

export default function RecordedClassesView() {
    const { userProfile } = useOutletContext(); // Obtenemos el perfil del usuario
    const [recordedClasses, setRecordedClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchRecordedClasses = async () => {
            if (!userProfile || !userProfile.group) {
                setError('No se pudo determinar tu grupo para cargar las clases grabadas.');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(''); // Limpiar errores previos

            try {
                const { data, error } = await supabase
                    .from('recorded_classes')
                    .select('class_date, class_title, video_url') // Seleccionamos las columnas que necesitamos
                    .eq('group_name', userProfile.group) // ¡Filtramos por el grupo del usuario!
                    .order('class_date', { ascending: false }); // Ordenamos por fecha, las más recientes primero

                if (error) throw error;

                setRecordedClasses(data);
            } catch (err) {
                console.error('Error al cargar las clases grabadas:', err.message);
                setError('Hubo un error al cargar tus clases grabadas. Intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchRecordedClasses();
    }, [userProfile]); // Se ejecutará cada vez que userProfile cambie (lo cual no debería ser frecuente)

    if (loading) {
        return <div className="p-6">Cargando tus clases grabadas...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Mis Clases Grabadas ({userProfile.group})</h3>
            {recordedClasses.length === 0 ? (
                <p>No hay clases grabadas disponibles para tu grupo en este momento.</p>
            ) : (
                <ul className="space-y-4">
                    {recordedClasses.map((classItem) => (
                        <li key={classItem.id} className="border-b pb-4">
                            <p className="text-sm text-gray-500">
                                Fecha: {new Date(classItem.class_date).toLocaleDateString('es-MX', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                            <p className="font-semibold text-lg text-[#1d3660]">{classItem.class_title}</p>
                            <a
                                href={classItem.video_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#a0965c] hover:underline"
                            >
                                Ver Clase Grabada
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}