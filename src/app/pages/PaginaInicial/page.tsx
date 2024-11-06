'use client'
import './style.css'
import Image from 'next/image'

import logo from '../../../img/2_2-removebg-preview.png'
import cachorroAcenando from '../../../img/Acenando.png'
import instagram from '../../../img/instagram.png'
import siganos from '../../../img/sina-nos.png'
import email from '../../../img/email.png'
import location from '../../../img/maps-and-flags.png'

export default function PaginaInicial() {
  return (
    <main className='main-pagina-principal' style={{ overflowY: 'auto', height: '100vh', overflowX: 'hidden' }}>
      <header>
        <Image className='logo' src={logo} alt="Imagem" />
        <div className='buttons'>
          <button onClick={() => {window.location.href = '../pages/Login'}}>Login</button>
          <button onClick={() => {window.location.href = '../pages/Cadastro'}}>Cadastrar</button>
        </div>
      </header>
      <section className='section-1'>
        <div className='carrossel'>

        </div>
      </section>
      <section className='section-2'>
        <Image className='cachorroAcenando' src={cachorroAcenando} alt="Imagem" />
        <div>
          <h2>Conheça o Inclusive Journey!</h2>
          <p>Explore o Inclusive Journey e descubra como estamos empenhados em criar um mundo mais acessível e inclusivo para todos. Nossa plataforma é dedicada para facilitar a vida das pessoas com deficiência, ajudando-as a encontrar lugares acessíveis e promovendo a inclusão em todos os aspectos da sociedade. Explore o Inclusive Journey e descubra um universo de acessibilidade e inclusão.</p>
          <button onClick={() => {window.location.href = '../pages/Cadastro'}}>Cadastrar</button>
        </div>
      </section>
      <section className='section-3'>
        <div className='div-background'>
          <div>
            <h2>Acompanhe o Inclusive Journey!</h2>
            <p>Faça parte dessa jornada inclusiva!</p>
            <a href='https://www.instagram.com/inclusive.journey/'><button>Siga-nos <Image className='instagram' src={instagram} alt="Imagem" /></button>
            </a>
          </div>
          <Image className='siganos' src={siganos} alt="Imagem" />
        </div>
      </section>
      <section className='section-4'>
        <h2>O que dizem nossos usuários</h2>
        <div>

        </div>
      </section>
      <footer>
        <section>
          <div className='div-1'>
            <h3>Entre em contato</h3>
            <p><Image className='icon' src={location} alt="Imagem" /> Barueri - SP</p>
            <p><Image className='icon' src={email} alt="Imagem" /> Inclusivejourney@gmail.com</p>
            <p><Image className='icon' src={instagram} alt="Imagem" /><a href='https://www.instagram.com/inclusive.journey/'>Siga-nos no Instagram</a></p>
          </div>
          <div className='div-2'>
            <Image className='logo' src={logo} alt="Imagem" />
            <p>A Jornada Inclusiva é para todos. Mesmo sem deficiência, você pode colaborar compartilhando informações sobre locais acessíveis que você conhece. Juntos, construímos um ambiente mais inclusivo.</p>
          </div>
          <div className='div-3'>
            <h3>Conteúdos</h3>
            <p>Informações acessíveis</p>
            <p>Ajuda acessível</p>
          </div>
        </section>
        <div className='div-footer'>
          <p onClick={() => {window.location.href = '../pages/PoliticaDePrivacidade'}}>Política de privacidade</p>
          <p onClick={() => {window.location.href = '../pages/TermosDeUso'}}>Termos de uso</p>
          <p>2024</p>
        </div>
      </footer>
    </main>
  )
}
