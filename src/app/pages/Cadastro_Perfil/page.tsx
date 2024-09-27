'use client';
import './style.css';
import Image from 'next/image';
import ImagemInfortutelado from '../../../img/Frame231.png';
import Link from 'next/link';

export default function CadastroPerfil() {
    const linkToPageInformacoesCadastroPerfil = () => {
        window.location.href = '../pages/Cadastro_InformacoesCadastroPerfil';
    }


    return (
        <div className="container">
            <section className="primeiro">
                <div style={{ height: '100%', backgroundColor: '#002234' }}>
                    <Image src={ImagemInfortutelado} alt="Descrição da imagem" />
                </div>
            </section>

            <section className="segunda">
                <form className="form">
                    <div className="title">
                        <h6 ><strong className='titleCadastro_perfil'>Perfil</strong></h6>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm" style={{ marginBottom: '10px' }}>
                                <input type="text" className="input" placeholder="Nome Completo" />
                            </div>
                            <div className="inputForm">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Descrição pessoa (bio)"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="space w-full containerEscolhaSeuAvatar">
                            <h6 ><strong className='titleCadastro_perfil'>Escolha seu avatar</strong></h6>
                            <div className="inputForm">
                                <select name="gender" className="input" id="gender">
                                    <option value="">Avatares - Cadeirantes</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Feminino</option>
                                    <option value="other">Outros</option>
                                    <option value="preferNotToSay">Prefiro não dizer</option>
                                </select>
                            </div>

                            <div className="inputForm">
                                <select name="gender" className="input" id="gender">
                                    <option value="">Avatares - Pcd auditivo</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Feminino</option>
                                    <option value="other">Outros</option>
                                    <option value="preferNotToSay">Prefiro não dizer</option>
                                </select>
                            </div>

                            <div className="inputForm">
                                <select name="gender" className="input" id="gender">
                                    <option value="">Avatares - Pcd Visual</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Feminino</option>
                                    <option value="other">Outros</option>
                                    <option value="preferNotToSay">Prefiro não dizer</option>
                                </select>
                            </div>

                            <div className="inputForm">
                                <select name="gender" className="input" id="gender">
                                    <option value="">Avatares - Pessoa não deficiente</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Feminino</option>
                                    <option value="other">Outros</option>
                                    <option value="preferNotToSay">Prefiro não dizer</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <button type="submit" className="button-submit" onClick={linkToPageInformacoesCadastroPerfil}>Continuar</button>
                </form>
            </section>
        </div>
    )
}
