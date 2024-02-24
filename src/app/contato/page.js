'use client'
import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const page = () => {
  return (
    <section className='p-6 mx-auto max-w-7xl w-screen h-screen flex justify-center'>
      <div className='mt-10'>
      <h1 className='text-center text-3xl font-bold'>Contato</h1>
      <div className=' flex gap-2 mt-4'>
      <a href=""><CiInstagram className='text-red-500 text-4xl'/></a>
      <a href=""><FaFacebook className='text-blue-600 text-4xl'/></a>
      <a href=""><FaWhatsapp className='text-green-600 text-4xl'/></a>
      </div>
      </div>
    </section>
  )
}

export default page
