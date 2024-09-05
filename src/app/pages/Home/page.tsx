'use client'
import { useState } from 'react';
import './style.css';
import Image from 'next/image';
import { NavBar } from '@/src/components/NavBar';
import { Carrousel } from '@/src/components/Carrousel';


export default function Home() {
    return (
        <>
            <NavBar />
            <Carrousel/>
        </>
    )
}