

export default function ServicesSection() {
    const services = [
        {
            title: 'Curso de Ingreso a Nivel Medio Superior UNAM e IPN',
            description: 'Preparamos a los estudiantes para los exámenes de admisión de la UNAM e IPN, cubriendo todas las áreas clave para asegurar su ingreso.',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.14L19.98 8.43L12 12.71L4.02 8.43L12 4.14ZM4 10.15L11 14.4V20.45L4 16.15V10.15ZM20 16.15L13 20.45V14.4L20 10.15V16.15Z" />
                </svg>
            ), // Icono de escuela/graduación
        },
        {
            title: 'Regularización Académica',
            description: 'Apoyo personalizado en diversas materias para fortalecer conocimientos, resolver dudas y mejorar el rendimiento escolar de forma sostenida.',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM12 11H9V13H12V16H15V13H12V11Z" />
                </svg>
            ), // Icono de notas/documento con lápiz
        },
        {
            title: 'Preparación para Exámenes',
            description: 'Estrategias y simulacros para cualquier tipo de examen (finales, admisión, extraordinarios), minimizando el estrés y maximizando resultados.',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6H16V4C16 2.9 15.1 2 14 2H10C8.9 2 8 2.9 8 4V6H4C2.9 6 2 6.9 2 8V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V8C22 6.9 21.1 6 20 6ZM10 4H14V6H10V4ZM20 20H4V8H20V20Z" />
                </svg>
            ), // Icono de examen/lista
        },
        {
            title: 'Curso de Inglés',
            description: 'Clases dinámicas y personalizadas para dominar el inglés enfocándonos en conversación, gramática y comprensión.',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v4h-2zm0 6h2v2h-2z" />
                </svg>
            ), // Icono de globo terráqueo/idiomas
        },
        {
            title: 'Programación Web',
            description: 'Aprende a construir sitios web modernos y funcionales desde cero con HTML, CSS, JavaScript y React.',
            icon: (
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16V8H6V16H18ZM10 12L7 15H17L14 12L12 14L10 12Z" />
                </svg>
            ), // Icono de código/monitor
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-[#1d3660] mb-12 hover:text-[#a0965c] transition-transform duration-300">Nuestros Servicios</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#1d3660] rounded-lg shadow-md p-6 flex flex-col items-center 
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-[#a0965c] text-shadow-md text-shadow-black mb-3">{service.title}</h3>
                            <p className="text-gray-100 text-center">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}