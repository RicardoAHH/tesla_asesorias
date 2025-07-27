// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Acceder a las variables de entorno de Vite
// import.meta.env es la forma estándar de Vite para acceder a ellas
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Asegúrate de que las variables están cargadas
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('ERROR: Las variables de entorno de Supabase no están cargadas.');
    console.error('VITE_SUPABASE_URL:', supabaseUrl);
    console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey);
    // Puedes lanzar un error o tomar alguna acción si no están definidas
}

// Inicializa el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('Supabase client initialized with URL:', supabaseUrl);