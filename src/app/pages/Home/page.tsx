'use client'
import './style.css'
import { NavBar } from '@/src/components/NavBar'
import SectionFounders from '@/src/components/SectionFounders'
import CardBox from '@/src/components/CardBox'
import Footer from '@/src/components/Footer'
import CarrosselComentarios from '@/src/components/CarrosselComentarios'
import CarrosselPrincipal from '@/src/components/CarrosselPrincipal'
import Image from 'next/image'

import logo2 from '../../../img/Zona norte 2.svg'
import logo3 from '../../../img/zona-oeste.jpg'
import logo4 from '../../../img/zona-leste-de-sao-paulo-bairros-610x406 1.svg'
import logo5 from '../../../img/zona-sul-de-sao-paulo-1.jpg'
import logo6 from '../../../img/zonaCentral.jpg'
import section2imagem from '../../../img/smartmockups_lyxmqeaa.jpg'
import mascote from '../../../img/Macote - Cabeça.jpg'

export default function Home() {
    return (
        <div className='home' style={{ overflowY: 'auto', height: '100vh', }}>
            <NavBar />

            <CarrosselPrincipal/>

            <section className='section1'>
                <h1>Melhores lugares de cada região</h1>
                <p>Explore os melhores lugares acessíveis em cada região de São Paulo</p>

                <div className='cards'>
                    <CardBox imageSrc={logo2} title='Zona Central' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Zona Sul' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo4} title='Zona Norte' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo5} title='Zona Leste' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo6} title='Zona Oeste' onButtonClick={() => {}}/>
                </div>
            </section>

            <section className='section2'>
                <Image className='section2-img' src={section2imagem} alt='Imagem' />
                <div>
                    <h2>Nós somos o melhor site para encontrar lugares acessiveis</h2>
                    <p>Lutar pelos direitos das pessoas com deficiência fortalece nossa sociedade. Ao promover acessibilidade e igualdade, criamos um mundo onde todos podem participar plenamente.</p>
                    <a href="https://www.instagram.com/inclusive.journey/" target="_blank" rel="noopener noreferrer">
                        <button type='button' className='button-submit'>Acesse mais</button>
                    </a>
                </div>
            </section>

            <section className='section3'>
                <div className='left'>
                    <h2>Conheça nosso mascote</h2>
                    <p>Joe, nosso amigável cachorro-guia, é o coração do Inclusive Journey.Ele combina seriedade e simpatia, sempre pronto para ajudar. Joe não só enfeita nossa identidade visual e site, mas também simboliza nosso compromisso de guiar e apoiar as pessoas com deficiência na busca por lugares acessíveis. Ele é um verdadeiro amigo, refletindo a missão de nossa marca de promover a inclusão e a acessibilidade para todos.</p>
                </div>
                <div className='right'>
                    <Image className='section3-img' src={mascote} alt='Imagem' />
                </div>
            </section>

            <SectionFounders />

            <section className='section4'>
                <h1>O que dizem nossos usuários</h1>
                
                <CarrosselComentarios/>
            </section>

            <Footer />
        </div>
    )
}
