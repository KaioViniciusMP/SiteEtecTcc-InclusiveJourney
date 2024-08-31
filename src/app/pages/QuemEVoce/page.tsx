import './style.css';
import Image from 'next/image';
import imgCadeirante from '../../../img/imgCadeirante.png'
import imgOlhinhos from '../../../img/imgOlhinhos.png'
import imgCoracaozin from '../../../img/imgCoracaozin.png'
import imgEscritaLousa from '../../../img/imgEscritaLousa.png'
import Frame231 from '../../../img/Frame231.png'
import Link from 'next/link';

export default function QuemEVoce() {
  return (
    <main>
      <div className="container">
        <section className="primeiro">
          <Image src={Frame231} alt="Imagem do Frame" height={726} />
        </section>
        <section className="segunda">
          <form className="form">
            <div className="title">
              <h1>Quem é você?</h1>
            </div>

            <Link href="../Cadastro_InformacoesPessoais">
              <div className="botao-personalizado">
                <div className="icones">
                  <Image
                    src={imgCoracaozin}
                    alt="Ícone de Pessoa Não Deficiente"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="texto">
                  <h3>Pessoa não deficiente</h3>
                  <p>Seja parte da mudança, promovendo inclusão e acessibilidade para todos.</p>
                </div>
              </div>
            </Link>

            <Link href="../Cadastro_InformacoesPessoais">
              <div className="botao-personalizado">
                <div className="icones">
                  <Image
                    src={imgCadeirante}
                    alt="Ícone de PcD"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="texto">
                  <h3>PcD</h3>
                  <p>Junte-se a nós e faça sua voz ser ouvida na busca por um mundo mais acessível.</p>
                </div>
              </div>
            </Link>

            <Link href="../Cadastro_InformacoesPessoais">
              <div className="botao-personalizado">
                <div className="icones">
                  <Image
                    src={imgOlhinhos}
                    alt="Ícone de Curioso"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="texto">
                  <h3>Curioso</h3>
                  <p>Explore e aprenda sobre acessibilidade, expandindo seus horizontes e compreensão.</p>
                </div>
              </div>
            </Link>

            <Link href="../Cadastro_InformacoesTutor">
              <div className="botao-personalizado">
                <div className="icones">
                  <Image
                    src={imgEscritaLousa}
                    alt="Ícone de Tutor"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="texto">
                  <h3>Tutor</h3>
                  <p>Compartilhe seu conhecimento e experiência, capacitando outros a promoverem a inclusão.</p>
                </div>
              </div>
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
}
