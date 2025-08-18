import React from 'react'
import VenEstudia from '../../components/home/VenEstudia'
import BackgroundBlob from '../../components/home/Background'
import blobImage from '/blob-blueP.png'
import SuccessCasesCarousel from '../../components/home/Carousel'
// import Excel from '../../components/home/Excel'

export default function Home() {
    return (
        <>
            <div className='relative  overflow-hidden'>
                {/* El componente de la mancha de fondo */}
                <BackgroundBlob imageUrl={blobImage} />

                {/* Tu contenido principal */}
                {/* Agrega `relative` y `z-10` a este div para asegurar que el contenido
                esté por encima de la mancha de fondo */}
                <div className='pt-20 relative z-10'>
                    <VenEstudia />
                </div>
                <div>
                    {/* <Excel /> */}
                </div>
                <div className='relative z-10'>
                    <SuccessCasesCarousel />
                </div>
            </div>

        </>
    )
}
