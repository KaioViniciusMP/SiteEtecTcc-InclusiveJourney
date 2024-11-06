import React, { useState } from "react"
import './style.css'
import Modal from 'react-modal'

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

  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal-adicionar-lugar">
        {/* <IoClose onClick={closeModal} className="close"/> */}

        <h1>Adicionar um parque acessível</h1>
        <div className="content">
          <div className="inputs">
            <input style={{ width: '30%' }} type="text" placeholder="Nome do local" value={nomeLocal} onChange={(e) => setNomeLocal(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Horario de funcionamento" value={horarioFuncionamento} onChange={(e) => setHorarioFuncionamento(e.target.value)} />
          </div>
          <h4>Acessibilidade do local</h4>
          <div className="inputs">
            <input style={{ width: '30%' }} type="text" placeholder="Nome do local" value={nomeLocal} onChange={(e) => setNomeLocal(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
            <input style={{ width: '30%' }} type="text" placeholder="Horario de funcionamento" value={horarioFuncionamento} onChange={(e) => setHorarioFuncionamento(e.target.value)} />
          </div>
          <div className="mapa">
            <p>mapa</p>
          </div>
        </div>
      </div>
    </Modal>
  )
}