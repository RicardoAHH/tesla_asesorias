import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient'; // Asegúrate de que esta ruta sea correcta

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Para saber si ya se verificó el estado inicial

    useEffect(() => {
        // Escucha cambios en el estado de autenticación de Supabase
        const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user || null);
            setLoading(false); // Una vez que Supabase responde, ya no estamos cargando
        });

        // Obtener la sesión inicial al cargar la aplicación
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user || null);
            setLoading(false);
        });

        // Limpiar el listener cuando el componente se desmonte
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const value = {
        user,
        loading,
        signIn: (email, password) => supabase.auth.signInWithPassword({ email, password }),
        signOut: () => supabase.auth.signOut(),
        // Aquí puedes añadir más funciones de auth si las necesitas globalmente (signUp, etc.)
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};