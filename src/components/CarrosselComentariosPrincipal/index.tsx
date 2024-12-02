import React, { useState, useEffect } from "react"
import './style.css'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { api } from "@/src/services/api"
import Image from 'next/image'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import user from '../../img/user.png'

interface Comentario {
  codigo: number
  namePerson: string
  description: string
}

export default function CarrosselComentariosPrincipal() {
  const [comentarios, setComentarios] = useState<Comentario[]>([])
  const [slidesPerView, setSlidesPerView] = useState(2)

  useEffect(() => {
    const fetchComentarios = async () => {
      try {
        const response = await api.get("comments")
        setComentarios(response.data)

      } catch (error) {
        toast.error('Erro ao carregar os comentários.')
      }
    }

    fetchComentarios()

    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setSlidesPerView(1)
      } else {
        setSlidesPerView(2)
      }
    };

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="container-comentarios-principal">
      <Swiper className="comentarios" modules={[Pagination]} slidesPerView={slidesPerView} pagination={{ clickable: true }} grabCursor spaceBetween={35}>
        {comentarios.map((item) => (
          <SwiperSlide className="item" key={item.codigo}>
            <div>
              <h1>{item.namePerson}</h1>
              <p>{item.description}</p>
            </div>
            <Image className='user' src={user} alt='Imagem' />
          </SwiperSlide>
        ))}
      </Swiper>

      <ToastContainer autoClose={3000} />
    </div>
  )
}
