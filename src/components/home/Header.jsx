import { useState } from 'react';
import { Link } from 'react-router'; // Asumiendo que usas React Router para la navegación

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú en móviles
    // Función para cerrar el menú
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header className="bg-white text-[#1d3660] p-4 shadow-xl fixed w-full z-50">
            {/* bg-[#1d3660] */}
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo a la izquierda */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center lg:gap-10 space-x-2">
                        {/* Aquí puedes reemplazar con tu logo real */}
                        <img src="/Tesla2.png" alt="Logo de la Escuela" className="h-15 md:h-20 w-auto transition-transform duration-300 ase-in-out hover:scale-120" />
                        <span className="text-md md:text-xl lg:text-2xl font-bold"><h1 className='hover:text-[#a0965c]'>Asesorias académicas</h1></span>
                    </Link>
                </div>

                {/* Botón de menú para móviles */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1d3660] focus:outline-none">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navegación principal (oculta en móviles por defecto, se muestra con el menú) */}
                <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out`}>
                    <ul className="flex flex-col items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
                        <li>
                            <Link to="/" className="block md:inline-block hover:text-[#a0965c] text-lg font-semibold transition-transform duration-300 ase-in-out hover:scale-120" onClick={closeMenu}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/servicios" className="block md:inline-block hover:text-[#a0965c] text-lg font-semibold transition-transform duration-300 ase-in-out hover:scale-120" onClick={closeMenu}>Servicios</Link>
                        </li>
                        <li>
                            <Link to="/nosotros" className="block md:inline-block hover:text-[#a0965c] text-lg font-semibold transition-transform duration-300 ase-in-out hover:scale-120" onClick={closeMenu}>Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="block md:inline-block hover:text-[#a0965c] text-lg font-semibold transition-transform duration-300 ase-in-out hover:scale-120" onClick={closeMenu}>Contacto</Link>
                        </li>
                        {/* Puedes añadir un botón de "Registrarse" o "Acceso a Alumnos" */}
                        <li>
                            <Link
                                to="/login"
                                className="block md:inline-block bg-[#1d3660] text-white px-4 py-2 rounded-md hover:text-white hover:bg-[#a0965c] transition-colors duration-200 font-semibold text-lg"
                            >
                                Acceso Alumnos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}