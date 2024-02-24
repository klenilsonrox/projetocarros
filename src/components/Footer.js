import React from 'react'

const Footer = () => {

    const ano = new Date().getFullYear()

  return (
    <footer className='flex items-center justify-center py-6 bg-[#FF5000] text-white mt-6'>
      <p>Point do carro {ano} todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer
