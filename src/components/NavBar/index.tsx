import './style.css';
import Image from 'next/image'
import Link from 'next/link'

import logo from '../../img/logoHome.svg'

export function NavBar() {
  const zonas = [
    { codigo: 1, nome: 'Zona Sul' },
    { codigo: 2, nome: 'Zona Oeste' },
    { codigo: 3, nome: 'Zona Norte' },
    { codigo: 4, nome: 'Zona Central' },
    { codigo: 5, nome: 'Zona Leste' }
  ]

  return (
    <div className='navbar'>
      <Image src={logo} className='navbar-logo' alt="Imagem" />
      <div>
        <Link href={'../pages/Home'}>Home</Link>
        <Link href={'../pages/Sobre'}>Sobre</Link>
        <Link href={'../pages/Lugares'}>Lugares</Link>

        <select className='navbar-select'>
          <option value="">Zonas</option>
          {zonas.map((zona) => (
            <option key={zona.codigo} value={zona.codigo}>
              {zona.nome}
            </option>
          ))}
        </select>

        <Link href={'../pages/Perfil'}>Perfil</Link>
      </div>
    </div>
  )
}