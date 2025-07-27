import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { supabase } from '../../utils/supabaseClient'; // Tu cliente de Supabase

export default function StudentLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar errores previos
        setLoading(true); // Indicar que la carga ha comenzado

        try {
            const { data, error: supabaseError } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (supabaseError) {
                setError(supabaseError.message);
            } else if (data.user) {
                console.log('Login exitoso con Supabase!', data.user);
                // Opcional: Si necesitas los datos del perfil (nombre, teléfono, etc.)
                // después del login, puedes hacer una petición a tu tabla 'public.users' aquí
                // usando data.user.id
                // Ejemplo:
                const { data: profile, error: profileError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', data.user.id)
                    .single();

                if (profileError) console.error("Error al obtener perfil:", profileError.message);
                else console.log("Perfil del usuario:", profile);

                // Redirigir al dashboard del estudiante
                navigate(`/dashboard/${profile.group}`); // Ajusta esta ruta según tu aplicación
            } else {
                // Esto podría ocurrir si Supabase no devuelve un error pero tampoco un usuario/sesión
                setError('Credenciales incorrectas o usuario no activo.');
            }
        } catch (err) {
            setError('Ocurrió un error al intentar iniciar sesión. Intenta de nuevo.');
            console.error('Error de login inesperado:', err);
        } finally {
            setLoading(false); // Indicar que la carga ha terminado
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl z-10">
                <div className="text-center">
                    <img
                        className="mx-auto h-24 w-auto mb-4 transition-transform duration-300 hover:scale-105"
                        src="/Tesla2.png" // Tu logo aquí
                        alt="Logo Asesorías Académicas"
                    />
                    <h2 className="mt-6 text-3xl font-extrabold text-[#1d3660]">
                        Acceso para Estudiantes
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Ingresa tus credenciales proporcionadas por la administración.
                    </p>
                </div>

                {/* Mensaje de Error */}
                {error && (
                    <div className="text-red-600 text-sm text-center">
                        {error}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#a0965c] focus:border-[#a0965c] focus:z-10 sm:text-sm"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#a0965c] focus:border-[#a0965c] focus:z-10 sm:text-sm"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Botón de Iniciar Sesión */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1d3660] hover:bg-[#152a4e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a0965c] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>
                    </div>
                </form>

                {/* Opcional: Enlace para volver a la página principal */}
                <div className="text-center text-sm mt-4">
                    <a href="/" className="font-medium text-[#1d3660] hover:text-[#a0965c]">
                        Volver a la página principal
                    </a>
                </div>
            </div>
        </div>
    );
}