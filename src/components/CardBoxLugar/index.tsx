'use client'
import './style.css'
import Image from 'next/image'

import star from '../../img/star.png'

interface CardBoxProps {
  title: string
  subtitle: string
  endereco: string
  imageSrc: string
  onButtonClick: () => void
}

export default function CardBoxLugar({ title, subtitle, endereco, imageSrc, onButtonClick }: CardBoxProps) {
  return (
    <div className="cardBoxLugar">
      <Image className='cardBoxImg' src={imageSrc} alt='Imagem' width={500} height={300} />
      {/* <p>icon coração</p> */}
      <h3>{title}</h3>
      <h6>{subtitle} <Image className='star' src={star} alt='Imagem' /></h6>
      <h5>{endereco}</h5>
      {/* <p>estrelas</p> */}
      {/* <span onClick={onButtonClick}>Ver mais</span> */}
    </div>
  )
}