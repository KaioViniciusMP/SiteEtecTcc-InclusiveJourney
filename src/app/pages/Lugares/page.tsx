'use client'
import './style.css'
import Footer from "@/src/components/Footer"
import { NavBar } from "@/src/components/NavBar"
import CardBox from "@/src/components/CardBox"

import logo3 from '../../../img/zona-oeste.jpg'

export default function Lugares() {
    return (
        <div className="lugares" style={{ overflowY: 'auto', height: '100vh' }}>
            <NavBar />

            <section className='highlight'>
                <h1>Lugares recomendados</h1>
                <p>Nesta página você pode encontrar lugares mais acessíveis de São Paulo para a sua necessidade recomendados pelo nosso site!</p>
            </section>

            <section className='section1'>
                <h1>Navegue pelo nossos links com recomendações</h1>
                <p>Explore os melhores lugares acessíveis separados por categorias</p>

                <div className='cards'>
                    <CardBox imageSrc={logo3} title='Parques' onButtonClick={() => { window.location.href = '../pages/Lugar' }}/>
                    <CardBox imageSrc={logo3} title='Escolas' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Pontos turísticos' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Hospedagem' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Restaurantes' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Saúde e bem-estar' onButtonClick={() => {}}/>
                </div>
            </section>

            <section className='section1' style={{paddingBottom: '8vh'}}>
                <h1>Melhores lugares de cada região</h1>
                <p>Explore os melhores lugares acessíveis em cada região de São Paulo</p>

                <div className='cards'>
                    <CardBox imageSrc={logo3} title='Zona central' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Zona sul' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Zona norte' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Zona leste' onButtonClick={() => {}}/>
                    <CardBox imageSrc={logo3} title='Zona oeste' onButtonClick={() => {}}/>
                </div>
            </section>

            <Footer />
        </ div>
    )
}