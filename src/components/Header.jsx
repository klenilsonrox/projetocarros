import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-screen bg-[#FF5000] py-2'>
      <nav className='mx-auto max-w-7xl px-4 py-4 flex items-center justify-between text-white'>
        <div>
            <a href="/"><img src="https://i.ibb.co/Kjr1tps/logo.png" alt="" className='max-w-[90px]'/></a>
        </div>
        <ul className='flex gap-6 font-bold flex-col lg:flex-row'>
            <li><Link href="/">Início</Link></li>
            <li><Link href="carros">Veículos</Link></li>
            <li><Link href="sobre">sobre Nós</Link></li>
            <li><Link href="contato">Contato</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
