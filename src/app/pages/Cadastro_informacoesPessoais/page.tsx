'use client';
import './style.css';
import Image from 'next/image';
import imageCadastro from '../../../img/imgInclusiveJourneyCadastro.png';
import { useState, useEffect } from 'react';
import { api } from '@/src/services/api';
import Link from 'next/link';

interface Genero {
    codigo: number;
    genero: string;
}
interface TipoDeficiencia {
    codigo: number;
    deficiencia: string;
}

export default function CadastroInformacoesPessoais() {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState<Genero[]>([]);
    const [tipoDeficiencia, setTipoDeficiencia] = useState<TipoDeficiencia[]>([]);
    const [deficiencia, setDeficiencia] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');

    useEffect(() => {
        const fetchGeneros = async () => {
            try {
                const resposta = await api.get('/BuscarGeneros');
                setGeneros(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar gêneros:', error);
            }
        };

        const fetchTipoDeficiencia = async () => {
            try {
                const resposta = await api.get('/BuscarDeficiencia');
                setTipoDeficiencia(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar tipo de deficiência:', error);
            }
        };

        fetchTipoDeficiencia();
        fetchGeneros();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dadosCadastro = {
            nome,
            dataNascimento,
            genero,
            deficiencia,
            cep,
            rua,
            complemento,
            bairro,
            cidade,
            numero,
            estado
        };

        localStorage.setItem('dadosCadastro', JSON.stringify(dadosCadastro));

        console.log({ nome, dataNascimento, genero, deficiencia, cep, rua, complemento, bairro, cidade, numero, estado });

        window.location.href = '../pages/Cadastro_Perfil';
    };

    return (
        <div className="container">
            <section className="primeiro">
                <div style={{ height: '100%', backgroundColor: '#002234' }}>
                    <Image src={imageCadastro} alt="Imagem ilustrativa" />
                </div>
            </section>
            <section className="segunda">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="title">
                        <h1><strong>Informações pessoais</strong></h1>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm">
                                <label htmlFor="nome">Nome Completo</label>
                                <input type="text" id="nome" className="input" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="date">Data de nascimento</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="input"
                                    placeholder="Data de nascimento"
                                    value={dataNascimento}
                                    onChange={(e) => setDataNascimento(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="gender">Gênero</label>
                                <select name="gender" id="gender" className="input" value={genero} onChange={(e) => setGenero(e.target.value)}>
                                    <option value="">Selecione um gênero</option>
                                    {generos.map((item) => (
                                        <option key={item.codigo} value={item.codigo}>{item.genero}</option> // Supondo que cada item tem `id` e `nome`
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm">
                                <label htmlFor="deficiencia">Tipo de deficiência (caso tenha)</label>
                                <select id="deficiencia" className="input" value={deficiencia} onChange={(e) => setDeficiencia(e.target.value)}>
                                    <option value="">Selecione o tipo de deficiência</option>
                                    {tipoDeficiencia.map((item) => (
                                        <option key={item.codigo} value={item.codigo}>{item.deficiencia}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="cep">CEP</label>
                                <input type="number" id="cep" className="input" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="rua">Rua</label>
                                <input type="text" id="rua" className="input" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-12">
                            <div className="inputForm">
                                <label htmlFor="complemento">Complemento</label>
                                <input type="text" id="complemento" className="input" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="bairro">Bairro</label>
                                <input type="text" id="bairro" className="input" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="cidade">Cidade</label>
                                <input type="text" id="cidade" className="input" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="numero">Número</label>
                                <input type="number" id="numero" className="input" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} />
                            </div>
                        </div>
                        <div className="space col-md-6">
                            <div className="inputForm">
                                <label htmlFor="state">UF</label>
                                <select name="state" id="state" className="input" value={estado} onChange={(e) => setEstado(e.target.value)}>
                                    <option value="">UF</option>
                                    {/* Listagem de estados */}
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
                    <button type="submit" className="button-submit">Continuar</button>

                    <p>Já possui uma conta? Faça <Link href={'/pages/Login'}>login</Link></p>
                    <p>Ao continuar, você declara que leu e concorda com os <Link href={'/pages/Login'}>Termos e Condições</Link></p>
                </form>
            </section>
        </div>
    );
}
