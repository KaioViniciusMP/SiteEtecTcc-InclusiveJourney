'use client';
import './style.css';
import Image from 'next/image';

interface CardLugaresProp{
    imageSrc: any;
    iconSrc: any;
    text: string;
}

export default function CardLugares({imageSrc,iconSrc, text}: CardLugaresProp) {
    return (
        <div className="card">
            <Image src={imageSrc} width={70} height={40} alt={imageSrc} />
            <Image src={iconSrc} className="icon" alt={iconSrc} />
            <div className="text">{text}</div>
        </div>
    )
}