"use client";

import './style.css';
import Image from 'next/image';
import imgCadeirante from '../../../img/imgCadeirante.png';
import imgOlhinhos from '../../../img/imgOlhinhos.png';
import imgCoracaozin from '../../../img/imgCoracaozin.png';
import imgEscritaLousa from '../../../img/imgEscritaLousa.png';
import Frame231 from '../../../img/Frame231.png';
import { useEffect, useState } from 'react';
import { api } from '@/src/services/api';
import ButtonContinuar from '@/src/components/ButtonContinuar';

interface TipoDeficiencia {
  codigo: number;
  deficiencia: string;
}

export default function QuemEVoce() {
  const [quemEvoce, setQuemEvoce] = useState<TipoDeficiencia[]>([]);
  const [selectedCode, setSelectedCode] = useState<number | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposta = await api.get<TipoDeficiencia[]>('/BuscarDeficiencia');
        setQuemEvoce(resposta.data); 
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  const getImageByCode = (code: number) => {
    switch (code) {
      case 1:
        return imgCoracaozin;
      case 2:
        return imgCadeirante;
      case 3:
        return imgOlhinhos;
      case 4:
        return imgEscritaLousa;
      default:
        return imgCoracaozin; 
    }
  };

  const handleSelect = (codigo: number) => {
    setSelectedCode(codigo);
  };

  const handleContinuar = () => {
    if (selectedCode !== null) {
      localStorage.setItem('selectedDeficienciaCodigo', selectedCode.toString());
      window.location.href = '../pages/Cadastro_informacoesPessoais';
    } else {
      alert('Por favor, selecione uma opção.');
    }
  };

  return (
    <main>
      <div className="container">
        <section className="primeiro">
          <Image src={Frame231} alt="Imagem do Frame" height={726} />
        </section>
        <section className="segunda">
          <div className="form">
            <div className="title">
              <h1>Quem é você?</h1>
            </div>

            {quemEvoce.map((item) => (
              <div
                key={item.codigo}
                className={`botao-personalizado ${selectedCode === item.codigo ? 'selected' : ''}`} // Adiciona a classe "selected" se o item estiver selecionado
                onClick={() => handleSelect(item.codigo)}
                style={{ cursor: 'pointer' }}
              >
                <div className="icones">
                  <Image
                    src={getImageByCode(item.codigo)}
                    alt={`Ícone de ${item.deficiencia}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="texto">
                  <h3>{item.deficiencia}</h3>
                  <p>{item.deficiencia}</p>
                </div>
              </div>
            ))}

            <ButtonContinuar onClick={handleContinuar} />
          </div>
        </section>
      </div>
    </main>
  );
}
