// src/components/common/BackgroundBlob.jsx
const BackgroundBlob = ({ imageUrl }) => {
    return (<>
        <img
            src={imageUrl}
            alt="Fondo decorativo de mancha azul"
            // Clases de Tailwind CSS
            className="
            rotate-120 
            absolute         
                top-[10%]
                md:top-[50%]       
                left-[10%]        
                -translate-x-1/2 
                -translate-y-1/2 
                w-[250%]         
                h-[250%]
                object-center         
                md:object-contain    
                -z-10           
                opacity-50      
                pointer-events-none 
            "
        />
        <img
            src={imageUrl}
            alt="Fondo decorativo de mancha azul"
            // Clases de Tailwind CSS
            className="
            rotate-190 
            absolute         
                top-[67%]       
                left-[86%]        
                -translate-x-1/2 
                -translate-y-1/2 
                w-[200%]         
                h-[200%]         
                md:object-contain  
                object-cover  
                -z-10           
                opacity-50      
                pointer-events-none 
            "
        />
    </>
    );
};

export default BackgroundBlob;