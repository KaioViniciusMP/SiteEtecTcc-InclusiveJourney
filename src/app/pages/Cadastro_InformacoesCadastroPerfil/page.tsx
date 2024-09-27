'use client';
import './style.css';
import Image from 'next/image';
import ImagemInfortutelado from '../../../img/Frame231.png';
import Link from 'next/link';

export default function Cadastro_InformacoesCadastroPerfil() {
const navigationRegras = () => {
    window.location.href = '../pages/Regras';
}


    return (
        <div className="container">
            <section className="primeiro">
                <div style={{ height: '100%', backgroundColor: '#002234' }}>
                    <Image src={ImagemInfortutelado} alt="Descrição da imagem" />
                </div>
            </section>

            <section className="segunda">
                <div className="form">
                    <div className="title" style={{ marginBottom: '20px' }}>
                        <h6 ><strong className='titleCadastro_perfil' >Perfil</strong></h6>
                    </div>
                    <div className="row">
                        <div className="space col-md-12" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="inputForm" style={{ marginBottom: '10px' }}>
                                <h6 ><strong className='textCadastro_perfil'>Nome do perfil</strong></h6>
                            </div>
                            <div className="inputForm" style={{ height: '70px' }}>
                                <h6 ><strong className='textCadastro_perfil'>bio</strong></h6>
                            </div>
                            <div className="inputForm" style={{ height: '200px' }}>
                                <h6 ><strong className='textCadastro_perfil'>foto do avatar escolhido</strong></h6>
                            </div>
                        </div>
                    </div>

                    <button className="button-submit" onClick={navigationRegras}>
                        Continuar
                    </button>
                </div>
            </section>
        </div>
    )
}
