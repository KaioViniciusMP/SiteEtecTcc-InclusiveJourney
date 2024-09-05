'use client'; // Indica que o componente é renderizado no lado do cliente
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import imageCadastro from '../../../img/imgInclusiveJourneyCadastro.png';

export default function CadastroInformacoesPessoais() {
    return (
        <div className="container">
            <section className="primeiro">
                <div style={{ height: '100%', backgroundColor: '#002234' }}>
                    <Image
                        src={imageCadastro}
                        alt="Imagem ilustrativa"
                    />
                </div>
            </section>
            <section className="segunda">
                <form className="form">
                    <div className="title">
                        <h1><strong>Informações pessoais</strong></h1>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Nome Completo" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <input
                                    type="text"
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => e.target.type = 'text'}
                                    id="date"
                                    className="input"
                                    placeholder="Data de nascimento"
                                />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <select name="gender" className="input" id="gender">
                                    <option value="">Gênero</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Feminino</option>
                                    <option value="other">Outros</option>
                                    <option value="preferNotToSay">Prefiro não dizer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Tipo de deficiência (caso tenha)" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <input type="number" className="input" placeholder="CEP" />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Rua" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Complemento" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Bairro" />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <input type="text" className="input" placeholder="Cidade" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <input type="number" className="input" placeholder="Número" />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <select name="state" className="input" id="state">
                                    <option value="">UF</option>
                                    <option value="RO">RO</option>
                                    <option value="AC">AC</option>
                                    <option value="AM">AM</option>
                                    <option value="RR">RR</option>
                                    <option value="PA">PA</option>
                                    <option value="AP">AP</option>
                                    <option value="TO">TO</option>
                                    <option value="MA">MA</option>
                                    <option value="PI">PI</option>
                                    <option value="CE">CE</option>
                                    <option value="RN">RN</option>
                                    <option value="PB">PB</option>
                                    <option value="PE">PE</option>
                                    <option value="AL">AL</option>
                                    <option value="SE">SE</option>
                                    <option value="BA">BA</option>
                                    <option value="MG">MG</option>
                                    <option value="ES">ES</option>
                                    <option value="RJ">RJ</option>
                                    <option value="SP">SP</option>
                                    <option value="PR">PR</option>
                                    <option value="SC">SC</option>
                                    <option value="RS">RS</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="GO">GO</option>
                                    <option value="DF">DF</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Link href={'/pages/Cadastro-Perfil'}>
                        <button type="button" className="button-submit">Continuar</button>
                    </Link>
                    <p>Já possui uma conta? Faça <Link href={'/pages/Login'}>login</Link></p>
                    <p>Ao continuar, você declara que leu e concorda com os <Link href={'/pages/Login'}>Termos e Condições</Link></p>
                </form>
            </section>
        </div>
    );
}
