// src/pages/dashboard/RecordedClassesView.jsx
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router'; // Asegúrate que sea 'react-router' o 'react-router-dom'
import { supabase } from '../../utils/supabaseClient'; // Tu cliente de Supabase

export default function RecordedClassesView() {
    const { userProfile } = useOutletContext();
    const [recordedClasses, setRecordedClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // 1. Estado para la asignatura seleccionada (inicialmente 'Todas')
    const [selectedSubject, setSelectedSubject] = useState('Todas');

    // 2. Lista de todas las asignaturas posibles (para el menú desplegable)
    const subjects = [
        'Todas',
        'Matemáticas',
        'Español',
        'Habilidad Matemática',
        'Habilidad Verbal',
        'Física',
        'Química',
        'Biología',
        'Historia de México',
        'Historia Universal',
        'Formación',
        'Geografía',
    ];

    useEffect(() => {
        const fetchRecordedClasses = async () => {
            if (!userProfile || !userProfile.group) {
                setError('No se pudo determinar tu grupo para cargar las clases grabadas.');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(''); // Limpiar errores previos

            // --- INICIO DE LA CONSULTA CON FILTRADO ---
            let query = supabase
                .from('recorded_classes')
                // 3. Incluimos la nueva columna 'subject' en la selección
                .select('id, class_date, class_title, video_url, subject')
                .eq('group_name', userProfile.group); // Filtramos siempre por el grupo

            // 4. Aplicamos el filtro de asignatura si no se seleccionó 'Todas'
            if (selectedSubject !== 'Todas') {
                query = query.eq('subject', selectedSubject);
            }
            // --- FIN DE LA CONSULTA CON FILTRADO ---

            try {
                const { data, error } = await query.order('class_date', { ascending: false });

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
        // 5. El useEffect se ejecuta cuando cambian el perfil del usuario o la asignatura seleccionada
    }, [userProfile, selectedSubject]);

    if (loading) {
        return <div className="p-6">Cargando tus clases grabadas...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Mis Clases Grabadas ({userProfile.group})</h3>

            {/* MENÚ DESPLEGABLE DE FILTRADO */}
            <div className="mb-6">
                <label htmlFor="subject-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Filtrar por Asignatura:
                </label>
                <select
                    id="subject-select"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#1d3660] focus:border-[#1d3660] sm:text-sm rounded-md shadow-sm"
                >
                    {subjects.map(subject => (
                        <option key={subject} value={subject}>
                            {subject}
                        </option>
                    ))}
                </select>
            </div>
            {/* FIN MENÚ DESPLEGABLE */}

            {recordedClasses.length === 0 ? (
                <p>No hay clases grabadas disponibles para **{selectedSubject}** en tu grupo en este momento.</p>
            ) : (
                <ul className="space-y-4">
                    {recordedClasses.map((classItem) => (
                        // Asegúrate de usar un 'key' único, usamos 'id'
                        <li key={classItem.id} className="border-b pb-4">
                            {/* Muestra la asignatura de la clase */}
                            <p className="text-xs font-semibold text-[#a0965c] uppercase">{classItem.subject}</p>
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