'use client'
import './style.css'
import Image from 'next/image'
import { api } from '@/src/services/api'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import star from '../../img/star.png'
import whiteHeart from '../../img/white-heart.png'
import redHeart from '../../img/red-heart.png'

interface CardBoxProps {
  title: string
  subtitle: string
  endereco: string
  imageSrc: string
  onButtonClick: () => void
  isfavorite: boolean
  codigo: number
}

export default function CardBoxLugar({ title, subtitle, endereco, imageSrc, onButtonClick, isfavorite, codigo }: CardBoxProps) {
  async function handleFavorite() {
    const userJourney = localStorage.getItem('u-inclusive-journey')

    try {
      const response = await api.post(`place/FavoriteAndRemovedPlaceFavorited`, {
        PlacesCode: codigo,
        PersonCode: userJourney
      })

      if (response.data === 'insert favorite place successfully!') {
        toast.success("Lugar favoritado com sucesso!")
        setTimeout(() => {
          window.location.reload()
        }, 1000)

      } else if (response.data === 'place favorite successfully removed!') {
        toast.success("Lugar removido dos favoritos!")
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }

    } catch (error) {
      toast.error("Ocorreu um erro. Atualize a página e tente novamente.")
    }
  }

  return (
    <div className="cardBoxLugar">
      <img className='cardBoxImg' src={imageSrc} alt='Foto do lugar' width={500} height={300} />
      <Image className='heart' src={isfavorite ? redHeart : whiteHeart} alt='Imagem' onClick={handleFavorite} />
      <h3>{title}</h3>
      <h6 className="stars">
        {subtitle}
        {subtitle && !isNaN(parseInt(subtitle, 10)) ? (
          [...Array(parseInt(subtitle, 10))].map((_, index) => (
            <Image key={index} className="star" src={star} alt="Imagem" />
          ))
        ) : (
          <h6>Nenhuma avaliação</h6>
        )}
      </h6>
      <h5>{endereco}</h5>
      <span onClick={onButtonClick}>Ver mais informações</span>

      <ToastContainer autoClose={3000} />
    </div>
  )
}