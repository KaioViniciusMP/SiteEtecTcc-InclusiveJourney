import './style.css';
import Image from 'next/image'
import logo from '../../../img/logoHome.svg'
import Link from 'next/link';
import { NavBar } from '@/src/components/NavBar';

export default function Home() {
    return (
        <>
            <NavBar />
            <h4>teste</h4>
        </>
    )
}