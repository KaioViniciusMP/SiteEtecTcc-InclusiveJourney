'use client'
import './style.css'
import Image, { StaticImageData } from 'next/image'

interface CardBoxProps {
  title: string
  subtitle: string
  endereco: string
  imageSrc: StaticImageData
  onButtonClick: () => void
}

export default function CardBoxLugar({ title, subtitle, endereco, imageSrc, onButtonClick }: CardBoxProps) {
  return (
    <div className="cardBoxLugar">
      <Image className='cardBoxImg' src={imageSrc} alt='Imagem' />
      {/* <p>icon coração</p> */}
      <h3>{title}</h3>
      <h6>{subtitle}</h6>
      <h5>{endereco}</h5>
      {/* <p>estrelas</p> */}
      <span onClick={onButtonClick}>Ver mais</span>
    </div>
  )
}