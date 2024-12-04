"use client"
import './style.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { api } from '@/src/services/api'

import Image, { StaticImageData } from 'next/image'
import imageCadastro from '../../../img/imgInclusiveJourneyCadastro.png'
import iconPcd from '../../../img/imgCadeirante.png'
import iconOlho from '../../../img/imgOlhinhos.png'
import iconCoracao from '../../../img/imgCoracaozin.png'
import iconTutor from '../../../img/imgEscritaLousa.png'
import iconDone from '../../../img/Done.png'

//#region
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
//#endregion
//#region 
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
//#endregion
//#region 
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
//#endregion
//#region 
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
//#endregion

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

export function Accordion({ title, avatars, index, openIndex, toggleAccordion, avatarSelected, setAvatarSelected }: any) {
  return (
    <div className="accordion-avatar">
      <div className="accordion-header" onClick={() => toggleAccordion(index)}>
        <h3>{title}</h3>
      </div>
      {openIndex === index && (
        <div className="accordion-content">
          {avatars.map((avatar: any) => (
            <Image
              key={avatar.id}
              style={{ borderColor: avatarSelected === avatar.nome ? "#000000" : "#ecedec", backgroundColor: avatarSelected === avatar.nome ? "#FE4045" : "" }}
              className="img-avatar"
              src={avatar.src}
              alt="Avatar"
              onClick={() => setAvatarSelected(avatar.nome)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Cadastro() {
  const router = useRouter()
  //#region 
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
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
  const [bio, setBio] = useState('')
  const [relacaoTutelado, setRelacaoTutelado] = useState('')
  const [avatarSelected, setAvatarSelected] = useState('')

  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false)
  const [isSecondStepComplete, setIsSecondStepComplete] = useState(false)
  const [isThirdStepComplete, setIsThirdStepComplete] = useState(false)
  const [isFourthStepComplete, setIsFourthStepComplete] = useState(false)

  const [lembrar, setLembrar] = useState(true)
  const [loadingButton, setLoadingButton] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  //#endregion

  useEffect(() => {
    document.title = 'Junte-se a Nós | Inclusive Journey'
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const avataresCadeirantes = [
    { id: 1, src: IMG_3247, nome: 'IMG_3247' },
    { id: 2, src: IMG_3257, nome: 'IMG_3257' },
    { id: 3, src: IMG_3259, nome: 'IMG_3259' },
    { id: 4, src: IMG_3457, nome: 'IMG_3457' },
    { id: 5, src: IMG_3395, nome: 'IMG_3395' },
    { id: 6, src: IMG_3397, nome: 'IMG_3397' },
    { id: 7, src: IMG_3420, nome: 'IMG_3420' },
    { id: 8, src: IMG_3428, nome: 'IMG_3428' },
    { id: 9, src: IMG_3471, nome: 'IMG_3471' },
    { id: 10, src: IMG_3473, nome: 'IMG_3473' },
    { id: 11, src: IMG_3293, nome: 'IMG_3293' },
    { id: 12, src: IMG_3285, nome: 'IMG_3285' },
    { id: 13, src: IMG_3281, nome: 'IMG_3281' },
    { id: 14, src: IMG_3277, nome: 'IMG_3277' },
    { id: 15, src: IMG_3273, nome: 'IMG_3273' },
    { id: 16, src: IMG_3517, nome: 'IMG_3517' },
    { id: 17, src: IMG_3524, nome: 'IMG_3524' },
    { id: 18, src: IMG_3532, nome: 'IMG_3532' },
    { id: 19, src: IMG_3600, nome: 'IMG_3600' },
    { id: 20, src: IMG_3552, nome: 'IMG_3552' },
    { id: 21, src: IMG_3561, nome: 'IMG_3561' },
    { id: 22, src: IMG_3567, nome: 'IMG_3567' },
    { id: 23, src: IMG_3632, nome: 'IMG_3632' },
    { id: 24, src: IMG_3648, nome: 'IMG_3648' },
    { id: 25, src: IMG_3575, nome: 'IMG_3575' },
    { id: 26, src: IMG_3640, nome: 'IMG_3640' },
    { id: 27, src: IMG_3634, nome: 'IMG_3634' },
    { id: 28, src: IMG_3745, nome: 'IMG_3745' },
  ]

  const avataresPcdAuditivo = [
    { id: 1, src: IMG_3265, nome: 'IMG_3265' },
    { id: 2, src: IMG_3266, nome: 'IMG_3266' },
    { id: 3, src: IMG_3270, nome: 'IMG_3270' },
    { id: 4, src: IMG_3392, nome: 'IMG_3392' },
    { id: 5, src: IMG_3399, nome: 'IMG_3399' },
    { id: 6, src: IMG_3466, nome: 'IMG_3466' },
    { id: 7, src: IMG_3469, nome: 'IMG_3469' },
    { id: 8, src: IMG_3474, nome: 'IMG_3474' },
    { id: 9, src: IMG_3477, nome: 'IMG_3477' },
    { id: 10, src: IMG_3246, nome: 'IMG_3246' },
    { id: 11, src: IMG_3255, nome: 'IMG_3255' },
    { id: 12, src: IMG_3260, nome: 'IMG_3260' },
    { id: 13, src: IMG_3519, nome: 'IMG_3519' },
    { id: 14, src: IMG_3522, nome: 'IMG_3522' },
    { id: 15, src: IMG_3527, nome: 'IMG_3527' },
    { id: 16, src: IMG_3705, nome: 'IMG_3705' },
    { id: 17, src: IMG_3710, nome: 'IMG_3710' },
    { id: 18, src: IMG_3553, nome: 'IMG_3553' },
    { id: 19, src: IMG_3562, nome: 'IMG_3562' },
    { id: 20, src: IMG_3565, nome: 'IMG_3565' },
    { id: 21, src: IMG_3622, nome: 'IMG_3622' },
    { id: 22, src: IMG_3630, nome: 'IMG_3630' },
    { id: 23, src: IMG_3638, nome: 'IMG_3638' },
    { id: 24, src: IMG_3635, nome: 'IMG_3635' },
    { id: 25, src: IMG_3746, nome: 'IMG_3746' },
  ]

  const avataresPcdVisual = [
    { id: 1, src: IMG_3242, nome: 'IMG_3242' },
    { id: 2, src: IMG_3253, nome: 'IMG_3253' },
    { id: 3, src: IMG_3254, nome: 'IMG_3254' },
    { id: 4, src: IMG_3261, nome: 'IMG_3261' },
    { id: 5, src: IMG_3369, nome: 'IMG_3369' },
    { id: 6, src: IMG_3294, nome: 'IMG_3294' },
    { id: 7, src: IMG_3295, nome: 'IMG_3295' },
    { id: 8, src: IMG_3274, nome: 'IMG_3274' },
    { id: 9, src: IMG_3278, nome: 'IMG_3278' },
    { id: 10, src: IMG_3279, nome: 'IMG_3279' },
    { id: 11, src: IMG_3286, nome: 'IMG_3286' },
    { id: 12, src: IMG_3398, nome: 'IMG_3398' },
    { id: 13, src: IMG_3393, nome: 'IMG_3393' },
    { id: 14, src: IMG_3748, nome: 'IMG_3748' },
    { id: 15, src: IMG_3520, nome: 'IMG_3520' },
    { id: 16, src: IMG_3521, nome: 'IMG_3521' },
    { id: 17, src: IMG_3528, nome: 'IMG_3528' },
    { id: 18, src: IMG_3563, nome: 'IMG_3563' },
    { id: 19, src: IMG_3628, nome: 'IMG_3628' },
    { id: 20, src: IMG_3629, nome: 'IMG_3629' },
    { id: 21, src: IMG_3571, nome: 'IMG_3571' },
    { id: 22, src: IMG_3579, nome: 'IMG_3579' },
    { id: 23, src: IMG_3637, nome: 'IMG_3637' },
    { id: 24, src: IMG_3636, nome: 'IMG_3636' },
  ]

  const avataresNaoDeficiente = [
    { id: 1, src: IMG_3249, nome: 'IMG_3249' },
    { id: 2, src: IMG_3256, nome: 'IMG_3256' },
    { id: 3, src: IMG_3258, nome: 'IMG_3258' },
    { id: 4, src: IMG_3370, nome: 'IMG_3370' },
    { id: 5, src: IMG_3470, nome: 'IMG_3470' },
    { id: 6, src: IMG_3292, nome: 'IMG_3292' },
    { id: 7, src: IMG_3284, nome: 'IMG_3284' },
    { id: 8, src: IMG_3280, nome: 'IMG_3280' },
    { id: 9, src: IMG_3272, nome: 'IMG_3272' },
    { id: 10, src: IMG_3396, nome: 'IMG_3396' },
    { id: 11, src: IMG_3394, nome: 'IMG_3394' },
    { id: 12, src: IMG_3516, nome: 'IMG_3516' },
    { id: 13, src: IMG_3523, nome: 'IMG_3523' },
    { id: 14, src: IMG_3525, nome: 'IMG_3525' },
    { id: 15, src: IMG_3531, nome: 'IMG_3531' },
    { id: 16, src: IMG_3601, nome: 'IMG_3601' },
    { id: 17, src: IMG_3609, nome: 'IMG_3609' },
    { id: 18, src: IMG_3551, nome: 'IMG_3551' },
    { id: 19, src: IMG_3560, nome: 'IMG_3560' },
    { id: 20, src: IMG_3631, nome: 'IMG_3631' },
    { id: 21, src: IMG_3760, nome: 'IMG_3760' },
    { id: 22, src: IMG_3633, nome: 'IMG_3633' },
  ]

  const toggleAccordion = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  async function fetchCep(cep: any) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()
      if (!data.erro) {
        return data
      } else {
        toast.error('CEP não encontrado.')
        return null
      }
    } catch (error) {
      toast.error('Erro ao buscar CEP.')
      return null
    }
  }

  const handleCepChange = async (e: any) => {
    const cepValue = e.target.value
    setCep(cepValue)

    if (cepValue.length === 8) {
      const data = await fetchCep(cepValue)
      if (data) {
        setCidade(data.localidade)
        setRua(data.logradouro)
        setBairro(data.bairro)
        setUf(data.uf)
      }
    }
  }

  const handleFirstStepSubmit = () => {
    if (email === '' && password === '' && passwordConfirmation === '') {
      toast.warning('Por favor, preencha todos os campos.')
      return
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.warning('Por favor, insira um e-mail válido.')
      return
    }

    if (password !== passwordConfirmation) {
      toast.warning("As senhas não coincidem. Verifique e tente novamente.")
      return
    }

    setIsFirstStepComplete(true)
  }

  const handleSecondStepSubmit = (item: string) => {
    setPessoaTipo(item)

    if (item === 'Tutor') {
      setTipoDeficiencia('')
    } else {
      setRelacaoTutelado('')
    }

    setIsSecondStepComplete(true)
  }

  const handleThirdStepSubmit = () => {
    const allFieldsFilled =
      nomeCompleto !== '' &&
      dataNascimento !== '' &&
      genero !== '' &&
      cep !== '' &&
      rua !== '' &&
      numero !== '' &&
      bairro !== '' &&
      cidade !== '' &&
      uf !== '' &&
      (pessoaTipo === 'Tutor' ? relacaoTutelado !== '' : pessoaTipo !== '')

    const calculateAge = (birthDate: any) => {
      const birthDateObj = new Date(birthDate)
      const today = new Date()
      let age = today.getFullYear() - birthDateObj.getFullYear()
      const month = today.getMonth()
      if (month < birthDateObj.getMonth() || (month === birthDateObj.getMonth() && today.getDate() < birthDateObj.getDate())) {
        age--
      }
      return age
    }

    const age = calculateAge(dataNascimento)

    if (allFieldsFilled && age > 13) {
      setIsThirdStepComplete(true)

    } else {
      if (!allFieldsFilled) {
        toast.warning('Por favor, preencha todos os campos obrigatórios.')
      } else {
        toast.warning('Você deve ser maior de 13 anos para continuar.')
      }
    }
  }

  const handleFourthStepSubmit = () => {
    if (userName === '' && bio === '') {
      toast.warning('Por favor, preencha todos os campos.')
      return
    }

    if (avatarSelected === '') {
      toast.warning('Por favor, selecione um avatar.')
      return
    }

    setIsFourthStepComplete(true)
  }

  const quemEvoce = [
    { codigo: 1, tipo: 'Pessoa não deficiente', descricao: 'Seja parte da mudança, promovendo inclusão e acessibilidade para todos.', src: iconCoracao },
    { codigo: 2, tipo: 'PcD', descricao: 'Junte-se a nós e faça sua voz ser ouvida na busca por um mundo mais acessível.', src: iconPcd },
    { codigo: 3, tipo: 'Curioso', descricao: 'Explore e aprenda sobre acessibilidade, expandindo seus horizontes e compreensão.', src: iconOlho },
    { codigo: 4, tipo: 'Tutor', descricao: 'Compartilhe seu conhecimento e experiência, capacitando outros a promoverem a inclusão.', src: iconTutor },
  ]

  const regras = [
    { codigo: 1, tipo: 'Seja você mesmo', descricao: 'Aqui, cada voz importa. Celebre sua autenticidade enquanto contribui para um mundo mais inclusivo.', src: iconDone },
    { codigo: 2, tipo: 'Respeite os usuarios', descricao: 'Valorizamos a diversidade e o respeito mútuo. Juntos, construímos uma comunidade inclusiva e acolhedora.', src: iconDone },
    { codigo: 3, tipo: 'Esteja seguro', descricao: 'Sua segurança é nossa prioridade. Navegue com confiança em nosso ambiente protegido.', src: iconDone },
    { codigo: 4, tipo: 'Seja empático', descricao: 'Reconheça as diferentes experiências e desafios enfrentados por pessoas com deficiência, demonstrando empatia e solidariedade.', src: iconDone },
  ]

  const generos = [
    { codigo: 1, nome: 'Masculino' },
    { codigo: 2, nome: 'Feminino' },
    { codigo: 3, nome: 'Outro' },
    { codigo: 4, nome: 'Prefiro não dizer' },
  ]

  async function handleCadastro() {
    setLoadingButton(true)

    try {
      const response = await api.post('person/register', {
        name: nomeCompleto,
        email: email,
        password: password,
        role: pessoaTipo,
        fullName: nomeCompleto,
        birthDate: `${dataNascimento}T00:00:00`,
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
        avatar: avatarSelected,
        relacaoTutelado: relacaoTutelado
      })

      if (response.status === 200) {
        localStorage.setItem('u-inclusive-journey', JSON.stringify(response.data.codigo))
        localStorage.setItem('p-inclusive-journey', JSON.stringify(password))
        toast.success("Cadastro realizado com sucesso!")
        router.push('../pages/Home')
      }

    } catch (error) {
      toast.error("Ocorreu um erro ao realizar o cadastro. Verifique os dados e tente novamente.")
      setTimeout(() => {
        window.location.reload()
      }, 5000)

    } finally {
      setLoadingButton(false)
    }
  }

  return (
    <main className='main-cadastro'>
      <div className="container">
        <Image className='imagem' src={imageCadastro} alt="Imagem" />

        {!isFirstStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Cadastro</h1>
              <p>Cadastre-se agora e faça parte da nossa comunidade inclusiva</p>
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.144 2.144 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                </g>
              </svg>
              <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H44c-26.453 0-44-21.523-44-44V240c0-26.476 21.547-44 44-44h288c26.453 0 44 21.524 44 44v224c0 26.477-21.547 44-44 44zM44 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" className="input" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="inputForm">
              <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M336 512H44c-26.453 0-44-21.523-44-44V240c0-26.476 21.547-44 44-44h288c26.453 0 44 21.524 44 44v224c0 26.477-21.547 44-44 44zM44 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16zM304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96s-96 43.07-96 96v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80c0-70.594 57.406-128 128-128s128 57.406 128 128v80c0 8.832-7.168 16-16 16z"></path>
              </svg>
              <input type="password" className="input" placeholder="Confirmação de senha" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
            </div>

            <div className='footer'>
              <label><input type="checkbox" size={200} checked={lembrar} onChange={(e) => { setLembrar(e.target.checked) }} /> Lembre-se de mim</label>
            </div>

            <button className="button-submit" onClick={handleFirstStepSubmit}>Avançar</button>
            <a href='../pages/Login'>Já possui uma conta? Faça login</a>

            <p style={{ marginTop: isSmallScreen ? '2vh' : '5vh', textAlign: isSmallScreen ? 'left' : 'center' }}>Ao continuar, você declara que leu e concorda com os <a href='../pages/TermosDeUso'>Termos e Condições</a>.</p>
          </div>
        ) : !isSecondStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Quem é você?</h1>
            </div>

            {quemEvoce.map((item) => (
              <div key={item.codigo} className={`botao-personalizado ${pessoaTipo === item.tipo ? 'selected' : ''}`} onClick={() => handleSecondStepSubmit(item.tipo)}
              >
                <div className="icones">
                  <Image src={item.src} alt={`Ícone de ${item.tipo}`} />
                </div>
                <div className="conteudo-quem">
                  <h4>{item.tipo}</h4>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        ) : !isThirdStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Informações pessoais</h1>
            </div>

            <section className='inputs'>
              <div className="inputForm" style={{ width: '97%' }}>
                <input type="text" className="input" placeholder="Nome Completo" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '42%' : '46%' }}>
                <input type="date" className="input" placeholder="Data de Nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '43%' : '46%' }}>
                <select className="input" value={genero} onChange={(e) => setGenero(e.target.value)}>
                  <option value="" disabled>Selecione um gênero</option>
                  {generos.map((genero) => (
                    <option key={genero.nome} value={genero.nome}>
                      {genero.nome}
                    </option>
                  ))}
                </select>
              </div>
              {pessoaTipo === 'Tutor' && (<div className="inputForm" style={{ width: '100%' }}><input type="text" className="input" placeholder="Relação com o tutelado (ex: pai, mãe)" value={relacaoTutelado} onChange={(e) => setRelacaoTutelado(e.target.value)} /></div>)}
              {pessoaTipo === 'PcD' && (<div className="inputForm" style={{ width: '100%' }}><input type="text" className="input" placeholder="Deficiência" value={tipoDeficiencia} onChange={(e) => setTipoDeficiencia(e.target.value)} /></div>)}
              <div className="inputForm" style={{ width: isSmallScreen ? '36%' : '40%' }}>
                <input type="text" className="input" placeholder="CEP" value={cep} onChange={handleCepChange} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '48%' : '52%' }}>
                <input type="text" className="input" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '28%' : '26%' }}>
                <input type="number" className="input" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '55%' : '66%' }}>
                <input type="text" className="input" placeholder="Complemento (se houver)" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '50%' : '35%' }}>
                <input type="text" className="input" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '33%' : '40%' }}>
                <input type="text" className="input" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
              </div>
              <div className="inputForm" style={{ width: isSmallScreen ? '20%' : '12%' }}>
                <input type="text" className="input" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
              </div>
            </section>

            <button className="button-submit" onClick={handleThirdStepSubmit}>Avançar</button>
          </div>
        ) : !isFourthStepComplete ? (
          <div className="form">
            <div className="header">
              <h1>Perfil</h1>
            </div>

            <div className="inputForm">
              <input type="text" className="input" placeholder="Nome do usuário" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="inputForm">
              <input type="text" className="input" placeholder="Descrição (bio)" value={bio} onChange={(e) => setBio(e.target.value)} />
            </div>

            <section>
              <div className="header">
                <h3 style={{ marginBottom: '1vh' }}>Escolha seu avatar</h3>
              </div>

              <Accordion
                title="Avatares - Cadeirantes"
                avatars={avataresCadeirantes}
                index={0}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
                avatarSelected={avatarSelected}
                setAvatarSelected={setAvatarSelected}
              />
              <Accordion
                title="Avatares - Pcd auditivo"
                avatars={avataresPcdAuditivo}
                index={1}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
                avatarSelected={avatarSelected}
                setAvatarSelected={setAvatarSelected}
              />
              <Accordion
                title="Avatares - Pcd visual"
                avatars={avataresPcdVisual}
                index={2}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
                avatarSelected={avatarSelected}
                setAvatarSelected={setAvatarSelected}
              />
              <Accordion
                title="Avatares - Pessoa não deficiente"
                avatars={avataresNaoDeficiente}
                index={3}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
                avatarSelected={avatarSelected}
                setAvatarSelected={setAvatarSelected}
              />
            </section>

            <button className="button-submit" onClick={handleFourthStepSubmit}>Avançar</button>
          </div>
        ) : (
          <div className="form">
            <div className="header">
              <h1>Siga as regras abaixo</h1>
            </div>

            {regras.map((item) => (
              <div key={item.codigo} style={{ padding: '1.5%' }} className={`botao-personalizado ${pessoaTipo === item.tipo ? 'selected' : ''}`}>
                <div className="icones">
                  <Image src={item.src} alt={`Ícone de ${item.tipo}`} />
                </div>
                <div className="conteudo-quem">
                  <h4>{item.tipo}</h4>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}

            <button className="button-submit" onClick={handleCadastro} disabled={loadingButton}>{loadingButton ? "Carregando..." : "Cadastrar"}</button>
          </div>
        )}
      </div>

      <ToastContainer autoClose={3000} />
    </main>
  )
}
