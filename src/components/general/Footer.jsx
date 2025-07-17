import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1d3660] text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Sección 1: Logo y Slogan/Descripción */}
                <div className="flex flex-col items-center md:items-start">
                    {/* Si tienes un logo para el footer, puedes ponerlo aquí */}
                    {/* <img src="/tu-logo-footer.png" alt="Logo Asesorías Académicas" className="h-12 mb-4" /> */}
                    <h3 className="text-2xl font-bold mb-2">Tesla Asesorías</h3>
                    <p className="text-sm text-gray-300">
                        Tu aliado en el camino hacia el éxito educativo.
                    </p>
                </div>

                {/* Sección 2: Enlaces Rápidos */}
                <div className='hidden md:block'>
                    <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</a></li>
                        <li><a href="/servicios" className="text-gray-300 hover:text-white transition-colors duration-200">Servicios</a></li>
                        <li><a href="/nosotros" className="text-gray-300 hover:text-white transition-colors duration-200">Nosotros</a></li>
                        <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors duration-200">Contacto</a></li>
                    </ul>
                </div>

                {/* Sección 3: Contacto y Redes Sociales */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <span>+52 55 3205 9945</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span>tesla.asesorias.hxq@gmail.com</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Dos Rios, Huixquilucan, México</span>
                        </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        {/* Íconos de Redes Sociales (ejemplos con SVGs simples o reemplaza con tus íconos de librería) */}
                        <a href="https://www.facebook.com/profile.php?id=61573623360971" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10H17L18 14H14V20H10V14H7V10H10V7C10 4.78 11.22 3 14 3H18V7H14V10Z" /></svg>
                        </a>
                        {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.76.85-2.75 1.04C16.85 4.54 15.7 4 14.5 4c-2.37 0-4.31 1.94-4.31 4.31 0 .34.04.67.11 1-.36.02-.73.06-1.09.13-3.14-.16-5.92-1.66-7.8-4.09-.33.56-.51 1.21-.51 1.88 0 1.49.76 2.81 1.92 3.59-.7-.02-1.35-.21-1.92-.53v.05c0 2.1 1.5 3.84 3.48 4.25-.37.1-.76.16-1.16.16-.28 0-.55-.03-.8-.09.55 1.72 2.15 2.97 4.05 3.01-1.48 1.16-3.34 1.85-5.36 1.85-.35 0-.69-.02-1.02-.06C3.77 20.42 5.86 21 8.08 21c7.29 0 11.25-6.04 11.25-11.25 0-.17-.01-.34-.02-.5.77-.56 1.44-1.25 1.97-2.04z" /></svg>
                        </a> */}
                        <a href="https://www.instagram.com/teslaasesorias/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2h8.4C17.65 2 22 6.35 22 11.8v.4c0 5.45-4.35 9.8-9.8 9.8H7.8C2.35 22 2 17.65 2 12.2v-.4C2 6.35 6.35 2 7.8 2zm-.2 2A4.2 4.2 0 0 0 3.6 8.2V15.8A4.2 4.2 0 0 0 7.8 20H15.8A4.2 4.2 0 0 0 20 15.8V8.2A4.2 4.2 0 0 0 15.8 4H7.6zm9.8 0c1.23 0 2.2 1.01 2.2 2.2s-1.01 2.2-2.2 2.2-2.2-1.01-2.2-2.2 1.01-2.2 2.2-2.2zm-4.6 4.6c2.53 0 4.6 2.07 4.6 4.6S15.53 19 13 19s-4.6-2.07-4.6-4.6 2.07-4.6 4.6-4.6zm0 2.2c-1.38 0-2.4 1.02-2.4 2.4s1.02 2.4 2.4 2.4 2.4-1.02 2.4-2.4-1.02-2.4-2.4-2.4z" /></svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Derechos de autor */}
            <div className="border-t border-gray-700 mt-2 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Tesla Asesorías. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}