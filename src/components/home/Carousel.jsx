import { useState } from "react";

export default function SuccessCasesCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const successStories = [
        {
            src: "/Sol.png",
            alt: "Sol",
            name: "Sol",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "Recomiendo Tesla porque la enseñanza es espectacular, más allá de los conocimientos brindados, hay un gran esmero por ambos maestros donde buscan que tengas seguridad en ti mismo. La convivencia entre todos es primordial ya que siempre se busca un ambiente sano y muy amigable. En todas las clases te muestran los temas a detalle, son muy atentos por si hay alguna duda y sobre todo las dinámicas que hacen son muy buenas, te motivan a seguirle echando ganas!",
        },
        {
            src: "/Renee.png",
            alt: "Renee",
            name: "Renee",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "Muchas gracias por todo su apoyo, el mejor curso, los mejores profesores. Sin duda fueron muy importantes para haber podido obtener este resultado y quedar en mi 1ra opción, los recomiendo muchísimo.",
        },
        {
            src: "/Bryana.png",
            alt: "Bryana",
            name: "Bryana",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "",
        },
        {
            src: "/Sofi.png",
            alt: "Sofi",
            name: "Sofi",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Brenda.png",
            alt: "Brenda",
            name: "Brenda",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Diego.png",
            alt: "Diego",
            name: "Diego",
            achievement: "Admisión a CECyT 2 del IPN",
            comment: "",
        },
        {
            src: "Farid.png",
            alt: "Farid",
            name: "Farid",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "",
        },
        {
            src: "Angel.png",
            alt: "Angel",
            name: "Ángel",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Irvin.png",
            alt: "Irvin",
            name: "Irvin",
            achievement: "Admisión a CECyT 2 del IPN",
            comment: "",
        },
        {
            src: "Jesus.png",
            alt: "Jesus",
            name: "Jesús",
            achievement: "Admisión a CECyT 6 del IPN",
            comment: "",
        },
        {
            src: "Jimena.png",
            alt: "Jimena",
            name: "Jimena",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Joshua.png",
            alt: "Joshua",
            name: "Joshua",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "El curso de Tesla para entrar a la media superior a mi parecer fue excelente, los maestros son muy buenos y profesionales también te explican los temas que necesitas saber y que vendrán en el examen, en lo personal cuando a mí me explicaban un tema, lo entendia con mucha claridad y si no entendía me lo repetían hasta lo  entendiera, de verdad muy buen curso gracias a ellos logré sacar 103 aciertos en mi examen ecoems y quedarme en mi primera opción.",
        },
        {
            src: "JuanAntonio.png",
            alt: "Juan Antonio",
            name: "Juan Antonio",
            achievement: "Admisión a CECYT 4 del IPN",
            comment: "",
        },
        {
            src: "JuanManuel.png",
            alt: "Juan Manuel",
            name: "Juan Manuel",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Lysandro.png",
            alt: "Lysandro",
            name: "Lysandro",
            achievement: "Admisión a CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Mallory.png",
            alt: "Mallory",
            name: "Mallory",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "",
        },
        {
            src: "Viri.png",
            alt: "Viri",
            name: "Viri",
            achievement: "Admisión a CECyT 4 del IPN",
            comment: "",
        },
        {
            src: "Pao.png",
            alt: "Paola",
            name: "Paola",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "",
        },
        {
            src: "Emiliano.png",
            alt: "Emiliano",
            name: "Emiliano",
            achievement: "Admisión a CECYT 4 del IPN",
            comment: "",
        },
        {
            src: "Gabriel.png",
            alt: "Gabriel",
            name: "Gabriel",
            achievement: "Admisión a CECYT 4 del IPN",
            comment: "",
        },
        {
            src: "Gustavo.png",
            alt: "Gustavo",
            name: "Gustavo",
            achievement: "Admisión a CECYT 11 del IPN",
            comment: "",
        },
        {
            src: "Hector.png",
            alt: "Héctor",
            name: "Héctor",
            achievement: "Admisión CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Iker.png",
            alt: "Iker",
            name: "Iker",
            achievement: "Admisión CCH Naucalpan de la UNAM",
            comment: "",
        },
        {
            src: "Santiago.png",
            alt: "Santiago",
            name: "Santiago",
            achievement: "Admisión a prepa 4 de la UNAM",
            comment: "",
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
                <h2 className="text-xl lg:text-4xl font-bold text-[#1d3660] lg:mb-8 pt-3">
                    Conoce algunos de nuestros alumnos que han logrado su objetivo:
                </h2>

                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className={`
                                ${index === currentSlide ? "relative" : "absolute inset-0"}
                                ${index === currentSlide ? "translate-x-0 opacity-100" :
                                    index < currentSlide ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"
                                }
                                transition-all duration-700 ease-in-out
                            `}
                        >
                            <div className="flex flex-col justify-start items-center">
                                <div className="relative flex items-center justify-center p-4">
                                    <img src={story.src || "/placeholder.svg"} alt={story.alt} className="w-full max-w-sm md:max-w-lg h-auto object-contain" />
                                </div>

                                <div className="relative p-4 pb-8 md:p-6 md:pb-10 text-center w-full  text-white md:text-black md:text-shadow-gray-50 md:text-shadow-sm bg-[#1d3660] bg-opacity-80 md:bg-transparent md:bg-gradient-to-t md:from-[#1d3660]/90 md:to-transparent">
                                    <h3 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-md">
                                        {story.name}
                                    </h3>
                                    <p className="text-lg md:text-2xl font-medium mb-2 drop-shadow-md">
                                        {story.achievement}
                                    </p>
                                    {story.comment && (
                                        <p className="text-sm md:text-lg font-normal md:font-bold italic drop-shadow-md">
                                            "{story.comment}"
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-300 z-20"
                        aria-label="Diapositiva anterior"
                    >
                        <svg className="h-7 w-7 text-[#1d3660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 transition-all duration-300 z-20"
                        aria-label="Diapositiva siguiente"
                    >
                        <svg className="h-7 w-7 text-[#1d3660]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {successStories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`
                                    w-3 h-3 rounded-full transition-all duration-300 
                                    ${index === currentSlide ? "bg-[#1d3660] scale-125" : "bg-gray-400 hover:bg-gray-200"}
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