// src/components/LandingPage/VenEstudia.jsx
import { Link } from "react-router";

export default function VenEstudia() {
    return (
        <section className="py-16 bg-white/0">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4">

                {/* Imagen izquierda (ambiente agradable) */}
                <div className="w-full  rounded-lg shadow-md overflow-hidden">
                    <img
                        src="/niñaestudiante.png" // ¡Recuerda cambiar esta URL por la de tu imagen!
                        alt="Ambiente de estudio relajado"
                        className="w-full h-auto object-cover rounded-4xl"
                    />
                </div>

                {/* Texto central */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl text-center font-bold text-[#1d3660] mb-4">
                        ¡Ven, estudia con nosotros!
                    </h2>
                    <br></br>
                    <p className="text-2xl text-black font-semibold leading-relaxed mb-6">
                        Aprende lo que necesitas para tus exámenes y regularizaciones en un ambiente agradable y de apoyo.
                        Nuestros métodos y profesores te guiarán hacia el éxito.
                    </p>
                    <br></br>
                    <div className='flex items-center justify-center'>
                        <Link to='/servicios'>
                            <button className="bg-[#1d3660] hover:bg-[#a0965c] hover:text-white text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-transform duration-300 ase-in-out hover:scale-110">
                                ¡Descubre nuestros cursos!
                            </button>
                        </Link>

                    </div>
                </div>

                {/* Imagen derecha (aprendizaje efectivo) */}
                <div className="w-full rounded-lg shadow-md overflow-hidden">
                    <img
                        src="/estudiante explicando.png" // ¡Recuerda cambiar esta URL por la de tu imagen!
                        alt="Estudiante concentrado aprendiendo"
                        className="w-full h-auto object-cover rounded-4xl"
                    />
                </div>

            </div>
        </section>
    );
}