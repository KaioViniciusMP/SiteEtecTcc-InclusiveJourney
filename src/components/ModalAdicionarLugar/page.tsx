import React, { useState } from "react"
import './style.css'
import Modal from 'react-modal'
import Image from 'next/image'

import start from '../../img/star.png'
import startgray from '../../img/star-gray.png'
import camera from '../../img/camera.png'
import close from '../../img/close.png'

export default function ModalAdicionarLugar({ isOpen, closeModal, id }: any) {
  const [nomeLocal, setNomeLocal] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState('')
  const [uf, setUf] = useState('')
  const [horarioFuncionamento, setHorarioFuncionamento] = useState('')
  const [descricao, setDescricao] = useState('')
  const [acessibilidade, setAcessibilidade] = useState<any>({})

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '0',
      backgroundColor: 'transparent',
      transform: 'translate(-50%, -50%)'
    }
  }

  const accessibilityOptions = [
    "Rampa de Acesso",
    "Banheiro Acessível",
    "Estacionamento Acessível",
    "Acessibilidade para Cegos",
    "Elevador ou Plataforma Elevatória",
    "Sinalização de Acessibilidade",
    "Acessibilidade para Surdos"
  ]

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setAcessibilidade((prevState: Record<string, boolean>) => ({
      ...prevState,
      [name]: checked
    }))
  }

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-adicionar-lugar">
        <Image className='close' src={close} alt='Imagem' onClick={closeModal}/>

        <h1>Adicionar um parque acessível</h1>
        <div className="form">
          <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d328683.16568752046!2d-47.25699180520779!3d-23.64546584917338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1727104814981!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="content">
            <div className="inputs">
              <input style={{ width: '60%' }} type="text" placeholder="Nome do local" value={nomeLocal} onChange={(e) => setNomeLocal(e.target.value)} />
              <input style={{ width: '35%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
              <input style={{ width: '50%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
              <input style={{ width: '45%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
              <input style={{ width: '50%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
              <input style={{ width: '45%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
              <input style={{ width: '25%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
              <input style={{ width: '25%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
              <input style={{ width: '43%' }} type="text" placeholder="Horario de funcionamento" value={horarioFuncionamento} onChange={(e) => setHorarioFuncionamento(e.target.value)} />
              <input style={{ width: '43%' }} type="text" placeholder="Descrição do local" value={descricao} onChange={(e) => setHorarioFuncionamento(e.target.value)} />
            </div>
            <h4>Acessibilidade do local</h4>
            <div className="checkboxs">
              {accessibilityOptions.map((option, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name={option}
                    checked={acessibilidade[option] || false}
                    onChange={handleCheckboxChange}
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className="stars">
              <h4>Avaliação do local</h4>
              <Image className='star' src={startgray} alt='Imagem' />
              <Image className='star' src={startgray} alt='Imagem' />
              <Image className='star' src={startgray} alt='Imagem' />
              <Image className='star' src={startgray} alt='Imagem' />
              <Image className='star' src={startgray} alt='Imagem' />
            </div>
            <div className="buttons">
              <button type="button" className="button-foto"><Image className='camera' src={camera} alt='Imagem' /> Adicionar foto</button>
              <button type="button" className="button-submit">Adicionar lugar</button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}