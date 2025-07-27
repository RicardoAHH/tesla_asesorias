// src/pages/dashboard/GroupDashboard.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../utils/supabaseClient';

// Importa tus componentes específicos por grupo y por sección
import ProfileView from './ProfileView';
import GradesView from './GradesView';

// Importa los componentes de contenido específicos por grupo
// Cada uno de estos podría tener un CalendarGrupoA.jsx, ScheduleGrupoB.jsx, etc.
// O un CalendarView genérico que reciba el grupo y filtre sus datos.
// Para este ejemplo, asumiremos un componente único que filtre por grupo.
import CalendarView from './CalendarView';
import ScheduleView from './ScheduleView';
import RecordedClassesView from './RecordedClassesView';
import ResourcesView from './ResourcesView';
import AnnouncementsView from './AnnouncementsView';

// Si prefieres componentes totalmente separados por grupo y sección:
// import CalendarGrupoA from './CalendarGrupoA';
// import ScheduleGrupoA from './ScheduleGrupoA';
// import CalendarGrupoB from './CalendarGrupoB';
// import ScheduleGrupoB from './ScheduleGrupoB';
// ... etc.

export default function GroupDashboard() {
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = React.useState(null); // Estado para el perfil
    const [profileLoading, setProfileLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    // Carga el perfil del usuario para determinar el grupo
    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                setProfileLoading(true);
                setError('');
                try {
                    const { data, error } = await supabase
                        .from('users')
                        .select('group') // Solo necesitamos el grupo aquí
                        .eq('id', user.id)
                        .single();

                    if (error) throw error;
                    setUserProfile(data);
                } catch (err) {
                    console.error('Error fetching group profile:', err.message);
                    setError('No se pudo determinar tu grupo.');
                } finally {
                    setProfileLoading(false);
                }
            }
        };

        if (!authLoading && user) {
            fetchProfile();
        }
    }, [user, authLoading]);

    if (authLoading || profileLoading) {
        return <div className="p-4">Cargando contenido del grupo...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-600">{error}</div>;
    }

    if (!userProfile?.group) {
        return <div className="p-4">No se encontró información de grupo para este usuario.</div>;
    }

    // Aquí, `userProfile.group` te dice a qué grupo pertenece.
    // Puedes usar este valor para renderizar un componente diferente
    // o pasarle el grupo a un componente genérico.
    const userGroup = userProfile.group;

    return (
        <div>
            {/* Puedes renderizar componentes específicos basados en el grupo aquí */}
            {/* O simplemente usar Outlet y dejar que las rutas anidadas hagan el trabajo */}
            {/* Para el alcance, usaremos un componente genérico que reciba el grupo */}
            <Outlet context={{ userProfile }} /> {/* Pasa el userProfile a las rutas anidadas */}
        </div>
    );
}