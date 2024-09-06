'use client'
import { useState } from 'react';
import './style.css';
import Image from 'next/image';
import { NavBar } from '@/src/components/NavBar';
import { Carrousel } from '@/src/components/Carrousel';
import { HomeSectionTwo } from '@/src/components/HomeSectionTwo';

export default function Home() {
    return (
        <div style={{overflow: 'auto', height: '100%'}}>
            {/* <NavBar />
            <Carrousel/> */}
            <HomeSectionTwo/>
        </div>
    )
}