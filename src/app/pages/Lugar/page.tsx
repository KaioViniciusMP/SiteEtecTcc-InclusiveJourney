'use client'
import './style.css'
import React, { useState } from "react"
import Footer from "@/src/components/Footer"
import { NavBar } from "@/src/components/NavBar"
import CardBoxLugar from "@/src/components/CardBoxLugar"
import ModalAdicionarLugar from '@/src/components/ModalAdicionarLugar/page'

import logo3 from '../../../img/zona-oeste.jpg'

export default function Lugar() {
  const [isOpenModal, setIsOpenModal] = useState(true)

  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div className="lugar" style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='highlight'>
        <h1>Parques</h1>
        <p>nome dos lugares / nome dos lugares / nome dos lugares / nome dos lugares</p>
      </section>

      <section className='section1'>
        <div className='cards'>
          <CardBoxLugar imageSrc={logo3} title='Hotel Ibirapuera' subtitle='Hospedagem acessível' endereco='Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001' onButtonClick={() => { }} />
          <CardBoxLugar imageSrc={logo3} title='Hotel Ibirapuera' subtitle='Hospedagem acessível' endereco='Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001' onButtonClick={() => { }} />
          <CardBoxLugar imageSrc={logo3} title='Hotel Ibirapuera' subtitle='Hospedagem acessível' endereco='Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001' onButtonClick={() => { }} />
          <CardBoxLugar imageSrc={logo3} title='Hotel Ibirapuera' subtitle='Hospedagem acessível' endereco='Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001' onButtonClick={() => { }} />
          <CardBoxLugar imageSrc={logo3} title='Hotel Ibirapuera' subtitle='Hospedagem acessível' endereco='Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001' onButtonClick={() => { }} />
          <CardBoxLugar imageSrc={logo3} title='Hotel Ibirapuera' subtitle='Hospedagem acessível' endereco='Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001' onButtonClick={() => { }} />
        </div>
      </section>

      <button type='button' onClick={() => {setIsOpenModal(true)}}>adicionar lugar!</button>
      <ModalAdicionarLugar isOpen={isOpenModal} closeModal={handleCloseModal} id={1}/>

      <Footer />
    </ div>
  )
}