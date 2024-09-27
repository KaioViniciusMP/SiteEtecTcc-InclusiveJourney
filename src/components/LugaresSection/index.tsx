'use client';
import './style.css';
import Image from 'next/image';

import logo2 from '../../img/2_2-removebg-preview.png'; // Imagem 2
import logo3 from '../../img/zona-oeste.jpg'; // Imagem 3
import logo4 from '../../img/zona-leste-de-sao-paulo-bairros-610x406 1.svg'; // Imagem 4
import logo5 from '../../img/zona-sul-de-sao-paulo-1.jpg'; // Imagem 5
import logo6 from '../../img/zonaCentral.jpg'; // Imagem 6
import CardBox from '../CardBox';
import FooterHome from '../FooterHome';
import { NavBar } from '../NavBar';
import CardLugares from '../CardLugares';

export function LugaresSection() {
    return (
        <div>
            <h3 style={{ fontSize: 40, textAlign: 'center', margin: 0, marginTop: 40, color: 'red' }}>
                Navegue pelos nossos links com recomendações
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <CardBox imageSrc={logo2} title='Parques' />
                <CardBox imageSrc={logo3} title='Escolas' />
                <CardBox imageSrc={logo4} title='Pontos turísticos' />
                <CardBox imageSrc={logo5} title='Hospedagem' />
                <CardBox imageSrc={logo6} title='Restaurantes' />
                <CardBox imageSrc={logo6} title='Saúde e bem-estar' />
            </div>

            <div>
                <h3 style={{ fontSize: 40, textAlign: 'center', margin: 0, marginTop: 40, color: 'red' }}>
                    Você também pode gostar de navegar por cada zona de São Paulo
                </h3>
                
                <div className="container">
                    <CardLugares iconSrc={logo6} imageSrc={logo6} text="zona Oeste"/>
                    <CardLugares iconSrc={logo3} imageSrc={logo5} text="Zona Sul"/>
                    <CardLugares iconSrc={logo4} imageSrc={logo4} text="zona central"/>
                    <CardLugares iconSrc={logo6} imageSrc={logo6} text="Zona Norte"/>
                    <CardLugares iconSrc={logo6} imageSrc={logo6} text="zona Leste"/>
                </div>
            </div>
        </div>
    );
}
