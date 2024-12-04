"use client"
import './style.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'
import CardBoxLugar from '@/src/components/CardBoxLugar'
import ModalDetalhesLugar from '@/src/components/ModalDetalhesLugar/page'
import { api } from '@/src/services/api'

import logout from '../../../img/logout.png'
import iconEdit from '../../../img/edit.png'
import iconClose from '../../../img/close.png'
import user from '../../../img/user.png'
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import load from '../../../img/loading.png'
import support from '../../../img/customer-service.png'

// feminino cadeirantes
import IMG_3247 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3247.png'
import IMG_3257 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3257.png'
import IMG_3259 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3259.png'
import IMG_3457 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3457.png'
import IMG_3395 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3395.png'
import IMG_3397 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3397.png'
import IMG_3420 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3420.png'
import IMG_3428 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3428.png'
import IMG_3471 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3471.png'
import IMG_3473 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3473.png'
import IMG_3293 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3293.png'
import IMG_3285 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3285.png'
import IMG_3281 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3281.png'
import IMG_3277 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3277.png'
import IMG_3273 from '../../../img/Avatares/Feminino-cadeirantes/IMG_3273.png'
// masculino cadeirantes
import IMG_3517 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3517.png'
import IMG_3524 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3524.png'
import IMG_3532 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3532.png'
import IMG_3600 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3600.png'
import IMG_3552 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3552.png'
import IMG_3561 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3561.png'
import IMG_3567 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3567.png'
import IMG_3632 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3632.png'
import IMG_3648 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3648.png'
import IMG_3575 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3575.png'
import IMG_3640 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3640.png'
import IMG_3634 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3634.png'
import IMG_3745 from '../../../img/Avatares/Masculinos-cadeirantes/IMG_3745.png'
// feminino pcd auditivos
import IMG_3265 from '../../../img/Avatares/Feminino-auditivos/IMG_3265.png'
import IMG_3266 from '../../../img/Avatares/Feminino-auditivos/IMG_3266.png'
import IMG_3270 from '../../../img/Avatares/Feminino-auditivos/IMG_3270.png'
import IMG_3392 from '../../../img/Avatares/Feminino-auditivos/IMG_3392.png'
import IMG_3399 from '../../../img/Avatares/Feminino-auditivos/IMG_3399.png'
import IMG_3466 from '../../../img/Avatares/Feminino-auditivos/IMG_3466.png'
import IMG_3469 from '../../../img/Avatares/Feminino-auditivos/IMG_3469.png'
import IMG_3474 from '../../../img/Avatares/Feminino-auditivos/IMG_3474.png'
import IMG_3477 from '../../../img/Avatares/Feminino-auditivos/IMG_3477.png'
import IMG_3246 from '../../../img/Avatares/Feminino-auditivos/IMG_3246.png'
import IMG_3255 from '../../../img/Avatares/Feminino-auditivos/IMG_3255.png'
import IMG_3260 from '../../../img/Avatares/Feminino-auditivos/IMG_3260.png'
// masculino pcd auditivos
import IMG_3519 from '../../../img/Avatares/Masculinos-auditivos/IMG_3519.png'
import IMG_3522 from '../../../img/Avatares/Masculinos-auditivos/IMG_3522.png'
import IMG_3527 from '../../../img/Avatares/Masculinos-auditivos/IMG_3527.png'
import IMG_3705 from '../../../img/Avatares/Masculinos-auditivos/IMG_3705.png'
import IMG_3710 from '../../../img/Avatares/Masculinos-auditivos/IMG_3710.png'
import IMG_3553 from '../../../img/Avatares/Masculinos-auditivos/IMG_3553.png'
import IMG_3562 from '../../../img/Avatares/Masculinos-auditivos/IMG_3562.png'
import IMG_3565 from '../../../img/Avatares/Masculinos-auditivos/IMG_3565.png'
import IMG_3622 from '../../../img/Avatares/Masculinos-auditivos/IMG_3622.png'
import IMG_3630 from '../../../img/Avatares/Masculinos-auditivos/IMG_3630.png'
import IMG_3638 from '../../../img/Avatares/Masculinos-auditivos/IMG_3638.png'
import IMG_3635 from '../../../img/Avatares/Masculinos-auditivos/IMG_3635.png'
import IMG_3746 from '../../../img/Avatares/Masculinos-auditivos/IMG_3746.png'
// feminino pcd visual
import IMG_3242 from '../../../img/Avatares/Feminino-cegas/IMG_3242.png'
import IMG_3253 from '../../../img/Avatares/Feminino-cegas/IMG_3253.png'
import IMG_3254 from '../../../img/Avatares/Feminino-cegas/IMG_3254.png'
import IMG_3261 from '../../../img/Avatares/Feminino-cegas/IMG_3261.png'
import IMG_3369 from '../../../img/Avatares/Feminino-cegas/IMG_3369.png'
import IMG_3294 from '../../../img/Avatares/Feminino-cegas/IMG_3294.png'
import IMG_3295 from '../../../img/Avatares/Feminino-cegas/IMG_3295.png'
import IMG_3274 from '../../../img/Avatares/Feminino-cegas/IMG_3274.png'
import IMG_3278 from '../../../img/Avatares/Feminino-cegas/IMG_3278.png'
import IMG_3279 from '../../../img/Avatares/Feminino-cegas/IMG_3279.png'
import IMG_3286 from '../../../img/Avatares/Feminino-cegas/IMG_3286.png'
import IMG_3398 from '../../../img/Avatares/Feminino-cegas/IMG_3398.png'
import IMG_3393 from '../../../img/Avatares/Feminino-cegas/IMG_3393.png'
// masculino pcd visual
import IMG_3748 from '../../../img/Avatares/Masculinos-cegos/IMG_3748.png'
import IMG_3520 from '../../../img/Avatares/Masculinos-cegos/IMG_3520.png'
import IMG_3521 from '../../../img/Avatares/Masculinos-cegos/IMG_3521.png'
import IMG_3528 from '../../../img/Avatares/Masculinos-cegos/IMG_3528.png'
import IMG_3563 from '../../../img/Avatares/Masculinos-cegos/IMG_3563.png'
import IMG_3628 from '../../../img/Avatares/Masculinos-cegos/IMG_3628.png'
import IMG_3629 from '../../../img/Avatares/Masculinos-cegos/IMG_3629.png'
import IMG_3571 from '../../../img/Avatares/Masculinos-cegos/IMG_3571.png'
import IMG_3579 from '../../../img/Avatares/Masculinos-cegos/IMG_3579.png'
import IMG_3637 from '../../../img/Avatares/Masculinos-cegos/IMG_3637.png'
import IMG_3636 from '../../../img/Avatares/Masculinos-cegos/IMG_3636.png'
// feminino não deficiente
import IMG_3249 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3249.png'
import IMG_3256 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3256.png'
import IMG_3258 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3258.png'
import IMG_3370 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3370.png'
import IMG_3470 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3470.png'
import IMG_3292 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3292.png'
import IMG_3284 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3284.png'
import IMG_3280 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3280.png'
import IMG_3272 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3272.png'
import IMG_3396 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3396.png'
import IMG_3394 from '../../../img/Avatares/Feminino-naodeficiente/IMG_3394.png'
// masculino não deficiente
import IMG_3516 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3516.png'
import IMG_3523 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3523.png'
import IMG_3525 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3525.png'
import IMG_3531 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3531.png'
import IMG_3601 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3601.png'
import IMG_3609 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3609.png'
import IMG_3551 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3551.png'
import IMG_3560 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3560.png'
import IMG_3631 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3631.png'
import IMG_3760 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3760.png'
import IMG_3633 from '../../../img/Avatares/Masculino-nãodeficiente/IMG_3633.png'

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

export default function Perfil() {
  const router = useRouter()
  const [lugaresFavoritados, setLugaresFavoritados] = useState<Local[]>([])
  const [noData, setNoData] = useState(false)
  const [selectedLocal, setSelectedLocal] = useState<Local | null>(null)
  const [isOpenModalDetalhes, setIsOpenModalDetalhes] = useState(false)

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
  const [relacaoTutelado, setRelacaoTutelado] = useState('')
  const [avatar, setAvatar] = useState('')

  const [editable, setEditable] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)
  const [loading, setLoading] = useState(true)

  const avatarImages = {
    // feminino cadeirantes
    "IMG_3247": IMG_3247,
    "IMG_3257": IMG_3257,
    "IMG_3259": IMG_3259,
    "IMG_3457": IMG_3457,
    "IMG_3395": IMG_3395,
    "IMG_3397": IMG_3397,
    "IMG_3420": IMG_3420,
    "IMG_3428": IMG_3428,
    "IMG_3471": IMG_3471,
    "IMG_3473": IMG_3473,
    "IMG_3293": IMG_3293,
    "IMG_3285": IMG_3285,
    "IMG_3281": IMG_3281,
    "IMG_3277": IMG_3277,
    "IMG_3273": IMG_3273,
    
    // masculino cadeirantes
    "IMG_3517": IMG_3517,
    "IMG_3524": IMG_3524,
    "IMG_3532": IMG_3532,
    "IMG_3600": IMG_3600,
    "IMG_3552": IMG_3552,
    "IMG_3561": IMG_3561,
    "IMG_3567": IMG_3567,
    "IMG_3632": IMG_3632,
    "IMG_3648": IMG_3648,
    "IMG_3575": IMG_3575,
    "IMG_3640": IMG_3640,
    "IMG_3634": IMG_3634,
    "IMG_3745": IMG_3745,
    
    // feminino auditivos
    "IMG_3265": IMG_3265,
    "IMG_3266": IMG_3266,
    "IMG_3270": IMG_3270,
    "IMG_3392": IMG_3392,
    "IMG_3399": IMG_3399,
    "IMG_3466": IMG_3466,
    "IMG_3469": IMG_3469,
    "IMG_3474": IMG_3474,
    "IMG_3477": IMG_3477,
    "IMG_3246": IMG_3246,
    "IMG_3255": IMG_3255,
    "IMG_3260": IMG_3260,
    
    // masculino auditivos
    "IMG_3519": IMG_3519,
    "IMG_3522": IMG_3522,
    "IMG_3527": IMG_3527,
    "IMG_3705": IMG_3705,
    "IMG_3710": IMG_3710,
    "IMG_3553": IMG_3553,
    "IMG_3562": IMG_3562,
    "IMG_3565": IMG_3565,
    "IMG_3622": IMG_3622,
    "IMG_3630": IMG_3630,
    "IMG_3638": IMG_3638,
    "IMG_3635": IMG_3635,
    "IMG_3746": IMG_3746,
    
    // feminino visual
    "IMG_3242": IMG_3242,
    "IMG_3253": IMG_3253,
    "IMG_3254": IMG_3254,
    "IMG_3261": IMG_3261,
    "IMG_3369": IMG_3369,
    "IMG_3294": IMG_3294,
    "IMG_3295": IMG_3295,
    "IMG_3274": IMG_3274,
    "IMG_3278": IMG_3278,
    "IMG_3279": IMG_3279,
    "IMG_3286": IMG_3286,
    "IMG_3398": IMG_3398,
    "IMG_3393": IMG_3393,
    
    // masculino visual
    "IMG_3748": IMG_3748,
    "IMG_3520": IMG_3520,
    "IMG_3521": IMG_3521,
    "IMG_3528": IMG_3528,
    "IMG_3563": IMG_3563,
    "IMG_3628": IMG_3628,
    "IMG_3629": IMG_3629,
    "IMG_3571": IMG_3571,
    "IMG_3579": IMG_3579,
    "IMG_3637": IMG_3637,
    "IMG_3636": IMG_3636,
    
    // feminino não deficiente
    "IMG_3249": IMG_3249,
    "IMG_3256": IMG_3256,
    "IMG_3258": IMG_3258,
    "IMG_3370": IMG_3370,
    "IMG_3470": IMG_3470,
    "IMG_3292": IMG_3292,
    "IMG_3284": IMG_3284,
    "IMG_3280": IMG_3280,
    "IMG_3272": IMG_3272,
    "IMG_3396": IMG_3396,
    "IMG_3394": IMG_3394,
    
    // masculino não deficiente
    "IMG_3516": IMG_3516,
    "IMG_3523": IMG_3523,
    "IMG_3525": IMG_3525,
    "IMG_3531": IMG_3531,
    "IMG_3601": IMG_3601,
    "IMG_3609": IMG_3609,
    "IMG_3551": IMG_3551,
    "IMG_3560": IMG_3560,
    "IMG_3631": IMG_3631,
    "IMG_3760": IMG_3760,
    "IMG_3633": IMG_3633,
    
    // default
    "default": user,
  }  

  useEffect(() => {
    const userJourney = localStorage.getItem('u-inclusive-journey')

    async function fetchUserData() {
      if (userJourney && !isNaN(Number(userJourney))) {
        try {
          const response = await api.get(`person/${userJourney}`)

          const data = response.data
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
          setRelacaoTutelado(data.relacaoTutelado || '')
          setAvatar(data.avatar || '')

        } catch (error) {
          toast.error('Erro ao carregar dados do perfil.')

        } finally {
          setLoading(false)
        }
      }
    }

    async function fetchFavoritados() {
      if (userJourney && !isNaN(Number(userJourney))) {
        try {
          const responseFavoritados = await api.post('place/GetFavoritePlaceOfUser', {
            personCode: userJourney
          })

          const lugaresFavoritados = responseFavoritados.data.filter(
            (lugar: any) => lugar.isFavorite === true
          )

          if (lugaresFavoritados.length === 0) {
            setNoData(true)
          } else {
            setLugaresFavoritados(lugaresFavoritados)
          }

        } catch (error) {
          setNoData(true)

        } finally {
          setLoading(false)
        }
      }
    }

    fetchUserData()
    fetchFavoritados()
  }, [])

  useEffect(() => {
    document.title = 'Sua Conta | Inclusive Journey'
  }, [])

  async function handleUpdateProfile() {
    setLoadingButton(true)
    const userJourney = localStorage.getItem('u-inclusive-journey')
    const pJourney = localStorage.getItem('p-inclusive-journey')

    try {
      const response = await api.put(`person/updateperson/${userJourney}`, {
        name: nomeCompleto,
        email: email,
        password: pJourney,
        role: pessoaTipo,
        fullName: nomeCompleto,
        dateOfBirth: dataNascimento,
        gender: genero,
        disabilityType: tipoDeficiencia,
        postalCode: cep,
        street: rua,
        additionalInfo: complemento,
        neighborhood: bairro,
        city: cidade,
        number: numero,
        state: uf,
        username: userName,
        userDescription: bio,
        avatar: avatar,
        relacaoTutelado: relacaoTutelado
      })

      if (response.status === 200) {
        toast.success("Perfil atualizado com sucesso!")
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }

    } catch (error) {
      toast.error("Erro ao atualizar o perfil. Tente novamente.")

    } finally {
      setLoadingButton(false)
    }
  }

  const handleCloseModalDetalhes = () => {
    setIsOpenModalDetalhes(false)
  }

  return (
    <div className='perfil' style={{ overflowY: 'auto', height: '100vh' }}>
      <NavBar />

      <section className='container'>
        <div className='left'>
          <Image className='avatar' src={avatarImages[avatar as keyof typeof avatarImages] || avatarImages.default} alt='Imagem' />
          <button className='btn-suporte' type='button' onClick={() => { router.push('../pages/Suporte') }}><Image className='support' src={support} alt='Imagem' /> Ajuda e suporte</button>
          <button className='btn-logout' type='button' onClick={() => { router.push('../') }}>Sair <Image className='logout' src={logout} alt='Imagem' /></button>
        </div>

        <div className='content'>
          <div className='header'>
            <div>
              <h3>Informações pessoais</h3>
              {!loading && (
                <>
                  {editable ? <Image className='close' src={iconClose} onClick={() => { setEditable(false) }} alt='Icon' /> : <Image className='edit' src={iconEdit} onClick={() => { setEditable(true) }} alt='Icon' />}
                </>
              )}
            </div>
            {!loading && (<p>{relacaoTutelado ? `Relação tutelado: ${relacaoTutelado}` : pessoaTipo}</p>)}
          </div>

          {loading ? (
            <div className='container-loading'>
              <Image className='loading' src={load} alt='Imagem' />
            </div>
          ) : (
            <>
              <div className="inputForm">
                <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input disabled={!editable} style={{ width: '64%' }} type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>

              <h4>Dados Pessoais</h4>
              <div className="inputForm">
                <input disabled={!editable} style={{ width: '47%' }} type="text" placeholder="Nome Completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
                <input disabled style={{ width: '47%' }} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input disabled style={{ width: '29%' }} type="text" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                <input disabled={!editable} style={{ width: '30%' }} type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} />
                {tipoDeficiencia && (<input disabled={!editable} style={{ width: '32%' }} type="text" placeholder="Tipo de Deficiência" value={tipoDeficiencia} onChange={(e) => setTipoDeficiencia(e.target.value)} />)}
              </div>

              <h4>Endereço</h4>
              <div className="inputForm">
                <input disabled={!editable} style={{ width: '23%' }} type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                <input disabled={!editable} style={{ width: '27%' }} type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                <input disabled={!editable} style={{ width: '41%' }} type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                <input disabled={!editable} style={{ width: '10%' }} type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                <input disabled={!editable} style={{ width: '31%' }} type="text" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                <input disabled={!editable} style={{ width: '33%' }} type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                <input disabled={!editable} style={{ width: '13%' }} type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
              </div>
              {editable && (
                <button type="button" className="updateButton" onClick={handleUpdateProfile} disabled={loadingButton}>
                  {loadingButton ? "Carregando..." : "Atualizar Perfil"}
                </button>
              )}
            </>
          )}
        </div>
      </section>

      <section className='favoritos'>
        <div className='container-card'>
          <h1>Lugares favoritados</h1>

          {loading ? (
            <div className='container-loading'>
              <Image className='loading' src={load} alt='Imagem' />
            </div>
          ) : (
            <div className='cards'>
              {noData ? (
                <p>Não há lugares favoritados.</p>
              ) : (
                lugaresFavoritados.map((l) => (
                  <CardBoxLugar
                    key={l.codigo}
                    imageSrc={l.imageUrl}
                    title={l.nameLocal}
                    subtitle={l.localAssessment}
                    endereco={`${l.street}, ${l.numberHome} - ${l.neighborhood}, ${l.city} - ${l.state}`}
                    onButtonClick={() => { setSelectedLocal(l); setIsOpenModalDetalhes(true) }}
                    isfavorite={l.isFavorite}
                    codigo={l.codigo}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </section>

      <ModalDetalhesLugar isOpen={isOpenModalDetalhes} closeModal={handleCloseModalDetalhes}
        nameLocal={selectedLocal?.nameLocal}
        imageUrl={selectedLocal?.imageUrl}
        isFavorite={selectedLocal?.isFavorite}
        description={selectedLocal?.description}
        street={selectedLocal?.street}
        numberHome={selectedLocal?.numberHome}
        neighborhood={selectedLocal?.neighborhood}
        city={selectedLocal?.city}
        state={selectedLocal?.state}
        cep={selectedLocal?.cep}
        localAssessment={selectedLocal?.localAssessment}
        typeAcessibility={selectedLocal?.typeAcessibility}
        openingHours={selectedLocal?.openingHours}
        codigo={selectedLocal?.codigo}
      />

      <ToastContainer autoClose={3000} />

      <Footer />
    </div>
  )
}
