"use client"
import './style.css'
import Image from 'next/image'
import Footer from '@/src/components/Footer'
import { NavBar } from '@/src/components/NavBar'

import section1imagem from '../../../img/image16.svg'

export default function Sobre() {
    return (
        <div className='sobre' style={{ overflowY: 'auto', height: '100vh', }}>
            <NavBar />

            <section className='section1'>
                <Image className='section1-img' src={section1imagem} alt='Imagem' />
                <div>
                    <h2>Juntos, construindo um mundo mais acessível para todos.</h2>
                    <p>O Inclusive Journey nasceu com a missão de tornar o mundo mais inclusivo e acessível para pessoas com deficiência. Nosso objetivo é ajudar todos a encontrar lugares adaptados às suas necessidades, promovendo a inclusão e a igualdade. Acreditamos que, ao compartilhar informações e recursos, podemos superar barreiras e criar uma comunidade mais solidária e acolhedora para todos. Junte-se a nós nessa jornada de transformação!</p>
                </div>
            </section>

            <Footer />
        </div>
    )
}
