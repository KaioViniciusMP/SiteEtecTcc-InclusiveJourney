'use client'
import { useState } from 'react';
import './style.css';
import Image from 'next/image';
import logo1 from '../../img/zona-leste-de-sao-paulo-bairros-610x406 1.svg'; // Imagem 1
import logo2 from '../../img/Zona norte 2.svg'; // Imagem 2
import logo3 from '../../img/zona-leste-de-sao-paulo-bairros-610x406 1.svg'; // Imagem 3
import logo4 from '../../img/zona-oeste.jpg'; 

export function Carrousel() {
    const images = [logo1, logo2, logo3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carrousel" style={{marginTop: 20}}>
            <button className="carrousel-button left" onClick={prevImage}>❮--</button>
            <Image src={images[currentIndex]} alt={`Carrousel Image ${currentIndex + 1}`} />
            <button className="carrousel-button right" onClick={nextImage}>--❯</button>
        </div>
    );
}