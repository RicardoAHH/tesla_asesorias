import { useState } from "react";


export default function SuccessCasesCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Aquí definimos los datos de nuestros alumnos/casos de éxito
    // ¡Puedes reemplazar estas URLs con tus imágenes reales!
    const successStories = [

        {
            src: "/resultado6.png",
            alt: "Foto del alumno 6",
            name: "Juan",
            achievement: "Admisión a prepa 4 de la UNAM",
        },
        {
            src: "/resultado1.png",
            alt: "Foto del alumno 1",
            name: "Aldo",
            achievement: "Admisión a prepa 4 de la UNAM",
        },
        {
            src: "/resultado9.png",
            alt: "Foto del alumno 9",
            name: "Elioth",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
        },
        {
            src: "/resultado12.png",
            alt: "Foto del alumno 12",
            name: "Samantha",
            achievement: "Admisión a prepa 4 de la UNAM",
        },
        {
            src: "resultado2.png",
            alt: "Foto del alumno 2",
            name: "Diego",
            achievement: "Admisión a prepa 4 de la UNAM",
        },
        {
            src: "resultado3.png",
            alt: "Foto del alumno 3",
            name: "Uziel",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
        },
        {
            src: "resultado13.png",
            alt: "Foto del alumno 13",
            name: "Aranza",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
        },
        {
            src: "resultado7.png",
            alt: "Foto del alumno 7",
            name: "Omar",
            achievement: "Admisión a CECYT 4 del IPN",
        },
        {
            src: "resultado8.png",
            alt: "Foto del alumno 8",
            name: "Camila",
            achievement: "Admisión a prepa 4  de la UNAM",
        },
        {
            src: "resultado11.png",
            alt: "Foto del alumno 11",
            name: "Israel",
            achievement: "Admisión a prepa 4  de la UNAM",
        },
        {
            src: "resultado4.png",
            alt: "Foto del alumno 4",
            name: "Francia",
            achievement: "Admisión a CCH Naucalpan  de la UNAM",
        },
        {
            src: "resultado5.png",
            alt: "Foto del alumno 5",
            name: "Alexander",
            achievement: "Admisión a CECYT 4  del IPN",
        },
        {
            src: "resultado10.png",
            alt: "Foto del alumno 10",
            name: "Dylan",
            achievement: "Admisión a prepa 4  de la UNAM",
        },

    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % successStories.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
    };

    return (
        <section className="py-16 bg-gray-50/0 text-center">
            <div className="container mx-auto bg-gray-100 px-4 lg:w-[80%]">
                {/* Título de la sección */}
                <h2 className="text-xl lg:text-4xl font-bold text-[#1d3660] lg:mb-8 pt-5">
                    Conoce algunos de nuestros alumnos que han logrado su objetivo:
                </h2>

                {/* Contenedor principal del carrusel */}
                <div className="relative h-80 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className={`
                absolute inset-0 
                transition-transform duration-700 ease-in-out 
                ${index === currentSlide ? "translate-x-0" :
                                    index < currentSlide ? "-translate-x-full" : "translate-x-full"
                                }
              `}
                        >
                            <div className="flex items-center h-[70%] justify-center">
                                <img src={story.src || "/placeholder.svg"} alt={story.alt} className="w-full h-[80%] md:h-full  lg:w-[70%]" />
                            </div>
                            <div className=" absolute inset-0 bg-gradient-to-t from-[#1d3660]/50 to-transparent flex items-end justify-start p-8 md:p-12">
                                <div className=" text-center w-full text-black text-shadow-md text-shadow-slate-50">
                                    {/* Nombre del alumno */}
                                    <h3 className="text-3xl md:text-5xl font-bold mb-2">
                                        {story.name}
                                    </h3>
                                    {/* Logro del alumno */}
                                    <p className="text-xl md:text-2xl font-medium">
                                        {story.achievement}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Controles de navegación (flechas) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-300 z-10"
                        aria-label="Diapositiva anterior"
                    >
                        <svg className="h-7 w-7 text-[#1d3660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-300 z-10"
                        aria-label="Diapositiva siguiente"
                    >
                        <svg className="h-7 w-7 text-[#1d3660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicadores de paginación (puntos) */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {successStories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`
                  w-3 h-3 rounded-full transition-all duration-300 
                  ${index === currentSlide ? "bg-[#1d3660] scale-125" : "bg-gray-400 hover:bg-gray-200"
                                    }
                `}
                                aria-label={`Ir a la diapositiva ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}