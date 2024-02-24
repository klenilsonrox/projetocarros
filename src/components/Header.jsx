'use client'
import Link from 'next/link'
import React from 'react'
import { AllContext } from './AllContext'

const Header = () => {
  
  const {setMenuOpen,menuOpen}=React.useContext(AllContext)




  return (
    <div className='w-screen bg-[#FF5000] py-2'>
      <nav className='mx-auto max-w-7xl px-4 py-4 flex items-center justify-between text-white'>
      <button className={`lg:hidden absolute right-6 btnmenu flex items-center gap-2  ${menuOpen ? "ativo":""}`} onClick={()=>setMenuOpen(!menuOpen)}><span className={`hamb `} id='hamb'></span></button>
        <div>
            <a href="/"><img src="https://i.ibb.co/Kjr1tps/logo.png" alt="" className='max-w-[90px]'/></a>
        </div>
        <ul className={`flex gap-6 font-bold flex-col lg:flex-row absolute overflow-y-hidden text-[#FF5000] bg-white top-20 right-0 left-0 items-center transition-all mt-1 ${menuOpen ? "h-screen":"h-0"} lg:h-auto lg:sticky lg:bg-[#FF5000] lg:text-white`}>
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
