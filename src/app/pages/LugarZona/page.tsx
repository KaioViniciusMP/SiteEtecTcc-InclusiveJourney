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
import 'react-toastify/dist/ReactToastify.css'

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

export default function LugarZona({ searchParams }: { searchParams: { [key: string]: string } }) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [local, setLocal] = useState<Local[]>([])
  const [noData, setNoData] = useState(false)
  const codigo = searchParams.codigo

  const zonas = [
    { codigo: 1, nome: 'Zona Sul' },
    { codigo: 2, nome: 'Zona Oeste' },
    { codigo: 3, nome: 'Zona Norte' },
    { codigo: 4, nome: 'Zona Central' },
    { codigo: 5, nome: 'Zona Leste' }
  ]

  useEffect(() => {
    if (codigo) {
      const fetchComentarios = async () => {
        try {
          const response = await api.get(`place/placesForZones/${codigo}`)

          if (response.status === 204) {
            setNoData(true)
          } else {
            setLocal(response.data)
            setNoData(false)
          }

        } catch (error) {
          toast.error('Erro ao buscar lugar.')
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
        <h1>{zonas.find(zona => zona.codigo === Number(codigo))?.nome}</h1>
        <p>
          {zonas.map((zona, index) => (
            <React.Fragment key={zona.codigo}>
              <span style={{ color: zona.codigo === Number(codigo) ? 'red' : '#ffffff' }} onClick={() => window.location.href = `../pages/LugarZona?codigo=${zona.codigo}`}>
                {zona.nome}
              </span>
              {index < zonas.length - 1 && <span> / </span>}
            </React.Fragment>
          ))}
        </p>
      </section>

      <section className='section1'>
        <div className='cards'>
          {noData ? (
            <p>Não há lugares disponíveis para esta zona.</p>
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

      <button type='button' className='button-add'>Adicionar lugar</button>

      <ModalAdicionarLugar isOpen={isOpenModal} closeModal={handleCloseModal} id={1} />

      <ToastContainer autoClose={3000} />

      <Footer />
    </ div>
  )
}