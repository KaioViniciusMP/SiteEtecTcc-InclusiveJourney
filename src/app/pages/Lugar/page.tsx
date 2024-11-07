'use client'
import './style.css'
import React, { useState, useEffect } from "react"
import Footer from "@/src/components/Footer"
import { NavBar } from "@/src/components/NavBar"
import CardBoxLugar from "@/src/components/CardBoxLugar"
import ModalAdicionarLugar from '@/src/components/ModalAdicionarLugar/page'
import { api } from '@/src/services/api'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"

import logo3 from '../../../img/zona-oeste.jpg'

interface Local {
  codigo: number
  nameLocal: string
  cep: string
  street: string
  complement: string
  neighborhood: string
  city: string
  numberHome: string
  state: string
  openingHours: string
  localAssessment: string
  description: string
  typeAcessibility: string
  zoneCode: number
  zoneCategorie: number
  isFavorite: boolean
  imageUrl: string
}

export default function Lugar({ searchParams }: { searchParams: { [key: string]: string } }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [local, setLocal] = useState<Local[]>([])
  const [noData, setNoData] = useState(false)
  const codigo = searchParams.codigo

  const lugaresPrincipais = [
    { codigo: 1, nome: 'Parques' },
    { codigo: 2, nome: 'Escolas' },
    { codigo: 3, nome: 'Pontos turísticos' },
    { codigo: 4, nome: 'Hospedagem' },
    { codigo: 5, nome: 'Restaurantes' },
    { codigo: 6, nome: 'Saúde e bem-estar' }
  ]

  useEffect(() => {
    if (codigo) {
      const fetchComentarios = async () => {
        try {
          const response = await api.get(`place/placesForCategories/${codigo}`)

          if (response.status === 204) {
            setNoData(true)
          } else {
            setLocal(response.data)
            setNoData(false)
          }

        } catch (error) {
          toast.error('Erro ao buscar lugar')
          setNoData(true)
        }
      }

      fetchComentarios()
    }
  }, [codigo])

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="lugar" style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='highlight'>
        <h1>{lugaresPrincipais.find(item => item.codigo === Number(codigo))?.nome}</h1>
        <p>
          {lugaresPrincipais.map((item, index) => (
            <React.Fragment key={item.codigo}>
              <span style={{ color: item.codigo === Number(codigo) ? 'red' : '#ffffff' }} onClick={() => window.location.href = `../pages/Lugar?codigo=${item.codigo}`}>
                {item.nome}
              </span>
              {index < lugaresPrincipais.length - 1 && <span> / </span>}
            </React.Fragment>
          ))}
        </p>
      </section>

      <section className='section1'>
        <div className='cards'>
          {noData ? (
            <p>Não há lugares disponíveis.</p>
          ) : (
            local.map((l) => (
              <CardBoxLugar
                key={l.codigo}
                imageSrc={l.imageUrl}
                title={l.nameLocal}
                subtitle={l.localAssessment}
                endereco={`${l.street}, ${l.numberHome} - ${l.neighborhood}, ${l.city} - ${l.state}, ${l.cep}`}
                onButtonClick={() => { }}
              />
            ))
          )}
        </div>
      </section>

      <button type='button' className='button-add' onClick={() => { setIsOpenModal(true) }}>Adicionar lugar</button>
      
      <ModalAdicionarLugar isOpen={isOpenModal} closeModal={handleCloseModal} id={1} />

      <Footer />
    </ div>
  )
}