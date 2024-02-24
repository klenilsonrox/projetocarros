import React from 'react'
import Link from 'next/link'

const Car = ({item}) => {
  return (
    <div className='bg-white rounded-lg shadow-md '>
        <h1 className='font-semibold text-xl text-center mt-4'>{item.name}</h1>
        <img src={item.LinkImg} alt="" className='anima transition-all mx-auto max-w-[270px]'/>
        <div className='p-4 border-t flex flex-col gap-2 mt-4'>
          <p>R$ {Number(item.Preco).toFixed(2)}</p>
          <Link href={`/carro/${item.id}`} className='text-[#FF5000] transition-all border-2 px-6 py-2 mx-auto font-bold text-center border-[#FF5000] w-full rounded-md hover:bg-[#FF5000] hover:text-white'>Saiba mais...</Link>        </div>
      </div>
  )
}

export default Car
