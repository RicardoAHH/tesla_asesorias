import React from 'react';
import excelCourseImage from '../../../public/CursoExcel3.jpg'; // Asegúrate de la ruta correcta a tu imagen

export default function Excel() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row">
                {/* Sección de la imagen (lado derecho de la imagen original) */}
                <div className="lg:w-1/2 p-6 flex flex-col justify-center items-center">
                    <img
                        src={excelCourseImage}
                        alt="Curso de Excel Tesla Asesorías"
                        className="max-w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Sección de detalles del curso (lado izquierdo de la imagen original) */}
                <div className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                    <h1 className="text-4xl font-extrabold text-[#1d3660] mb-4">
                        Curso de Excel
                    </h1>
                    <p className="text-lg font-semibold text-green-600 mb-6">
                        Curso teórico y práctico
                    </p>

                    <h2 className="text-xl font-bold text-gray-800 mb-3">
                        DIRIGIDO PRINCIPALMENTE A ESTUDIANTES:
                    </h2>

                    <ul className="space-y-3 text-gray-700 mb-8">
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>A construir tablas en diferentes estilos</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1d0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>A usar funciones y fórmulas</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1d0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Regresión lineal y estadística básica</span>
                        </li>
                        <li className="flex items-start">
                            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1d0 00-1.414 1.414l2 2a1 1d0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Construir gráficos de diferente tipo</span>
                        </li>
                    </ul>

                    <div className="mb-6 text-gray-700">
                        <p className="font-bold text-lg mb-2">Detalles del Curso:</p>
                        <p><strong>10 HORAS TOTALES</strong> del Lunes 11 al Viernes 15 de Agosto</p>
                        <p><strong>COSTO TOTAL: $350 ($250 para los primeros 5 inscritos o si eres ex-estudiante Tesla)</strong></p>
                        <p>CURSO PRESENCIAL</p>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2">Más información y Registro:</h3>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeQyu6bdb1GU2rgpKgwzxJn48gp4oXYvsSSOeT-VBjJ7B6SaA/viewform" // Reemplaza esto con el enlace de registro real si es diferente al de información
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-[#a0965c] text-white font-bold rounded-lg shadow-lg hover:bg-[#857d4a] transition duration-300 text-center mb-4"
                    >
                        Registrarse Ahora
                    </a>
                    <p className="text-gray-600 flex items-center">
                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9a1 1 0 000 2h4a1 1 0 100-2H8z" />
                        </svg>
                        Teléfono: 55 3205 9945
                    </p>
                </div>
            </div>
        </div>
    );
}