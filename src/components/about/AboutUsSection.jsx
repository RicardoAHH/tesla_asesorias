import React from 'react';

export default function AboutUsSection() {
    const aboutPoints = [
        {
            id: 1,
            image: 'ejemplo2.png', // Reemplaza con tu imagen
            alt: 'Grupo de egresados de la UNAM',
            title: 'Somos egresados de la UNAM',
            description: 'Somos profesionales egresados de la UNAM, con más de 10 años de experiencia en docencia y preparación para ingreso a nivel medio superior. Nuestra base académica sólida es tu garantía.',
        },
        {
            id: 2,
            image: '/acepted2.png', // Reemplaza con tu imagen
            alt: 'Estudiantes celebrando su ingreso a la universidad',
            title: 'Resultados que nos validan',
            description: 'Muchos estudiantes han logrado sus objetivos aprobando las materias que les resultaban muy dificiles o ingresando a la institucion que deseaban. Sus logros nos impulsan a seguir mejorando.',
        },
        {
            id: 3,
            image: 'ambiente.png', // Reemplaza con tu imagen
            alt: 'Estudiantes interactuando en un ambiente de aprendizaje amigable',
            title: 'Un ambiente donde disfrutas aprender',
            description: 'Fomentamos un entorno de trabajo positivo y motivador, donde cada estudiante se siente cómodo, animado y disfruta el proceso de aprendizaje al máximo.',
        },
        {
            id: 4,
            image: '/atencion.png', // Reemplaza con tu imagen
            alt: 'Profesor interactuando de cerca con un estudiante',
            title: 'Atención personalizada en grupos reducidos',
            description: 'Nuestros grupos limitados garantizan que cada alumno reciba el apoyo individualizado que necesita, permitiéndonos verificar su progreso y asegurar un aprendizaje profundo.',
        },
        {
            id: 5,
            image: 'instalaciones.png', // Reemplaza con tu imagen
            alt: 'Interior de un salón de clases moderno y equipado',
            title: 'Instalaciones adecuadas para el aprendizaje',
            description: 'Contamos con salones adecuados con internet de alta velocidad, televisores para clases interactivas y videovigilancia para un entorno seguro y óptimo de estudio.',
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-[#1d3660] mb-12">Sobre Nosotros</h2>

                <div className="max-w-6xl mx-auto">
                    {aboutPoints.map((point, index) => (
                        <div
                            key={point.id}
                            className={`
                flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 last:mb-0
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} /* Alterna el orden de imagen y texto */
              `}
                        >
                            {/* Contenedor de la Imagen */}
                            <div className="w-full md:w-1/2 flex-shrink-0">
                                <img
                                    src={point.image}
                                    alt={point.alt}
                                    className="rounded-lg shadow-xl w-full h-auto object-cover 
                             transform transition-transform duration-300 hover:scale-[1.03]"
                                />
                            </div>

                            {/* Contenido de Texto */}
                            <div className="w-full md:w-1/2 text-left md:p-4">
                                <h3 className="text-3xl font-semibold text-[#1d3660] mb-4">
                                    {point.title}
                                </h3>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}