"use client"
import { useState, useEffect } from 'react'
import './style.css'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'
import { api } from '@/src/services/api'

import avatar from '../../../img/avatar.svg'
import logout from '../../../img/logout.png'
import iconEdit from '../../../img/edit.png'
import user from '../../../img/user.png'

export default function Perfil() {
  const [userName, setUserName] = useState('')
  const [bio, setBio] = useState('')
  const [email, setEmail] = useState('')
  const [pessoaTipo, setPessoaTipo] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [genero, setGenero] = useState('')
  const [tipoDeficiencia, setTipoDeficiencia] = useState('')
  const [cep, setCep] = useState('')
  const [cidade, setCidade] = useState('')
  const [rua, setRua] = useState('')
  const [complemento, setComplemento] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [uf, setUf] = useState('')

  const [editable, setEditable] = useState(false)

  useEffect(() => {
    const userJourney = localStorage.getItem('u-inclusive-journey')

    if (userJourney && !isNaN(Number(userJourney))) {
      api.get(`person/${userJourney}`)
        .then(response => {
          const { data } = response
          setUserName(data.username || '')
          setEmail(data.email || '')
          setNomeCompleto(data.fullName || '')
          setDataNascimento(data.dateOfBirth || '')
          setGenero(data.gender || '')
          setTipoDeficiencia(data.disabilityType || '')
          setCep(data.postalCode || '')
          setCidade(data.city || '')
          setRua(data.street || '')
          setComplemento(data.additionalInfo || '')
          setNumero(data.number || '')
          setBairro(data.neighborhood || '')
          setUf(data.state || '')
          setBio(data.userDescription || '')
          setPessoaTipo(data.role || '')
        })
        .catch(error => {
          alert('Erro ao carregar dados')
        })
    }
  }, [])

  const formatDate = (dateString: any) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  useEffect(() => {
    if (dataNascimento) {
      setDataNascimento(formatDate(dataNascimento))
    }
  }, [dataNascimento])

  const handleUpdateProfile = () => {
    console.log("Perfil atualizado!")
  }

  return (
    <div className='perfil' style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='container'>
        <div className='left'>
          <Image className='avatar' src={user} alt='Imagem' />

          <button type='button' onClick={() => { window.location.href = '../' }}>Sair <Image className='logout' src={logout} alt='Imagem' /></button>
        </div>
        <div className='content'>
          <div className='header'>
            <div>
              <h3>Informações pessoais</h3>
              <Image className='edit' src={iconEdit} onClick={() => { setEditable(false) }} alt='Icon' />
            </div>
            <p>{pessoaTipo || ''}</p>
          </div>

          <div className="inputForm">
            <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input disabled={!editable} style={{ width: '68%' }} type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>

          <h4>Dados Pessoais</h4>
          <div className="inputForm">
            <input disabled={!editable} style={{ width: '49%' }} type="text" placeholder="Nome Completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
            <input disabled style={{ width: '49%' }} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            <input disabled={!editable} style={{ width: '31%' }} type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
            <input disabled={!editable} style={{ width: '35%' }} type="text" placeholder="Tipo de Deficiência" value={tipoDeficiencia} onChange={(e) => setTipoDeficiencia(e.target.value)} />
          </div>

          <h4>Endereço</h4>
          <div className="inputForm">
            <input disabled={!editable} style={{ width: '26%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
            <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
            <input disabled={!editable} style={{ width: '40%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
            <input disabled={!editable} style={{ width: '15%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <input disabled={!editable} style={{ width: '32%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
            <input disabled={!editable} style={{ width: '32%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
            <input disabled={!editable} style={{ width: '15%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
          </div>
          {editable && (
            <button
              type="button"
              className="updateButton"
              onClick={handleUpdateProfile}
            >
              Atualizar Perfil
            </button>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
