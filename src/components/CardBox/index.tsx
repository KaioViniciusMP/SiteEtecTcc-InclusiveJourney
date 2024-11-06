'use client'
import './style.css'
import Image, { StaticImageData } from 'next/image'

interface CardBoxProps {
    title: string,
    imageSrc: StaticImageData
    onButtonClick: () => void
}

export default function CardBox({ title, imageSrc, onButtonClick }: CardBoxProps) {
    return (
        <div className="cardBoxHome">
            <Image className='cardBoxImg' src={imageSrc} alt='Imagem' />
            <h3>{title}</h3>
            <button type='button' className='cardBoxButton' onClick={onButtonClick}>Saiba Mais</button>
        </div>
    )
}