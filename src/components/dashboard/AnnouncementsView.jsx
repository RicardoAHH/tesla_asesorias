// src/pages/dashboard/AnnouncementsView.jsx
import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function AnnouncementsView() {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAnnouncements = async () => {
            setLoading(true);
            setError('');

            try {
                const { data, error } = await supabase
                    .from('announcements')
                    .select('id, title, content, published_at, expires_at, image_url') // ¡Añadimos image_url aquí!
                    .order('published_at', { ascending: false });

                if (error) throw error;

                const now = new Date();
                const activeAnnouncements = data.filter(announcement => {
                    if (announcement.expires_at) {
                        return new Date(announcement.expires_at) > now;
                    }
                    return true;
                });

                setAnnouncements(activeAnnouncements);
            } catch (err) {
                console.error('Error al cargar los anuncios:', err.message);
                setError('Hubo un error al cargar los anuncios. Intenta de nuevo más tarde.');
            } finally {
                setLoading(false);
            }
        };

        fetchAnnouncements();
    }, []);

    if (loading) {
        return <div className="p-6">Cargando anuncios...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-600">{error}</div>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-[#1d3660]">Anuncios Generales</h3>
            {announcements.length === 0 ? (
                <p>No hay anuncios disponibles en este momento.</p>
            ) : (
                <div className="space-y-6">
                    {announcements.map((announcement) => (
                        <div key={announcement.id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                            <h4 className="font-semibold text-xl text-[#1d3660] mb-2">{announcement.title}</h4>

                            {/* ¡Aquí añadimos la imagen si existe! */}
                            {announcement.image_url && (
                                <div className="mb-4">
                                    <img
                                        src={announcement.image_url}
                                        alt={announcement.title}
                                        className="w-full h-48 object-cover rounded-md shadow-sm" // Ajusta el tamaño y estilo
                                    />
                                </div>
                            )}

                            <p className="text-sm text-gray-500 mb-3">
                                Publicado el:{' '}
                                {new Date(announcement.published_at).toLocaleDateString('es-MX', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                                {announcement.expires_at && (
                                    <span>
                                        {' '} / Expira el:{' '}
                                        {new Date(announcement.expires_at).toLocaleDateString('es-MX', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                )}
                            </p>
                            <div className="text-gray-700 leading-relaxed">
                                {announcement.content}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}