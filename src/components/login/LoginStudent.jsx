
import React, { useState } from 'react';
// Si estás usando 'react-router-dom', importa Link así:
// import { Link } from 'react-router-dom'; 
// Si estás usando Next.js, importa Link así:
// import Link from 'next/link';

export default function StudentLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Limpiar errores previos
        setLoading(true); // Indicar que la carga ha comenzado

        // *** Lógica de Autenticación (simulada por ahora) ***
        // Aquí es donde integrarías tu llamada a la API o base de datos.
        // Este es un ejemplo simplificado.
        try {
            // Simula una llamada a la API
            const response = await new Promise(resolve => setTimeout(() => {
                if (username === 'alumno' && password === 'pass123') { // Ejemplo de credenciales
                    resolve({ success: true });
                } else {
                    resolve({ success: false, message: 'Usuario o contraseña incorrectos.' });
                }
            }, 1500)); // Simula un retraso de 1.5 segundos para la red

            if (response.success) {
                // Redirigir al dashboard del estudiante o a la página principal
                console.log('Login exitoso!');
                // Ejemplo de redirección (descomenta según tu router):
                // router.push('/dashboard-estudiante'); // Si usas Next.js router
                // history.push('/dashboard-estudiante'); // Si usas react-router-dom useHistory
                alert('¡Bienvenido, ' + username + '!'); // Alerta simple por ahora
            } else {
                setError(response.message);
            }
        } catch (err) {
            setError('Ocurrió un error al intentar iniciar sesión. Intenta de nuevo.');
            console.error('Error de login:', err);
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
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* Campo de Usuario */}
                    <div>
                        <label htmlFor="username" className="sr-only">Usuario</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="username"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#a0965c] focus:border-[#a0965c] focus:z-10 sm:text-sm"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    {/* Campo de Contraseña */}
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

                    {/* Mensaje de Error */}
                    {error && (
                        <div className="text-red-600 text-sm text-center">
                            {error}
                        </div>
                    )}

                    {/* Botón de Iniciar Sesión */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1d3660] hover:bg-[#152a4e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a0965c] transition-all duration-300"
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
                <div className="text-center text-sm">
                    {/* Si usas react-router-dom: */}
                    {/* <Link to="/" className="font-medium text-[#1d3660] hover:text-[#a0965c]">
            Volver a la página principal
          </Link> */}
                    {/* Si usas Next.js: */}
                    {/* <Link href="/" className="font-medium text-[#1d3660] hover:text-[#a0965c]">
            Volver a la página principal
          </Link> */}
                    {/* O un simple enlace HTML si no usas un router específico: */}
                    <a href="/" className="font-medium text-[#1d3660] hover:text-[#a0965c]">
                        Volver a la página principal
                    </a>
                </div>
            </div>
        </div>
    );
}