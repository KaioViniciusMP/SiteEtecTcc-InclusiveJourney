import { useState } from 'react'; 
import './style.css';
import Image from 'next/image';
import imagePrincipal from '../../img/nomeQualquer.jpg'; // caminho da imagem enviada

export default function DisplayLugaresRecomendados() {
    return (
        <>
            <div style={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px'}}>
                <div>
                    <Image src={imagePrincipal} alt='Lugares recomendados' width={500} height={300} />
                </div>
                <div style={{maxWidth: '500px'}}>
                    <h2 style={{color: '#FF3333', display: 'flex', alignItems: 'center'}}>
                        <span role="img" aria-label="acessibilidade" style={{fontSize: '2rem', marginRight: '10px'}}>♿</span>
                        Lugares <span style={{color: '#000'}}> recomendados</span>
                    </h2>
                    <p>
                        Nesta página você pode encontrar lugares mais acessíveis de São Paulo para a sua necessidade recomendados pelo nosso site!
                    </p>
                </div>
            </div>
        </>
    );
}
