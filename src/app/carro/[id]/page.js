'use client'
import React from 'react'
import axios from 'axios'
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const page = ({params}) => {
  const [carro,setCarro]=React.useState("")
  const [erro,setErro]=React.useState(null)
  const [loading,setLoading]=React.useState(false)

  const {id}= params

  const app = axios.create({
    baseURL:"https://api-cars-three.vercel.app"
  })

  async function buscarCarro(){
    try{
     setLoading(true)
     const dado = await app.get(`https://api-cars-three.vercel.app/list?id=${id}`)
     setCarro(dado.data)
     setLoading(false)
    }catch(error){
     setErro(error.message)
    }finally{
     setErro(null)
    
    }
   }
 
   React.useEffect(()=>{
     buscarCarro()
   },[])

   function chamarNoZap(){
    let msg = `ola, tenho interesse no *${carro.name}*`
    let link;
    link=`https://wa.me/55${carro.Whatsapp}?text=${encodeURIComponent(msg)}`
    window.open(link)
   }

  

  return (
    <>

{loading && <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex flex-col gap-2 items-center justify-center w-screen max-2-[300px]'>
      <div class="border-t-4 border-r-4 border-[#FF5000] border-solid rounded-full h-12 w-12 animate-spin"></div>
      <p>Carregando...</p>
      </div>
      </div> }
  
  <div className='w-screen h-screen flex items-center justify-center'>

  {!loading && <div className='w-screen mx-auto max-w-5xl border flex flex-col lg:flex-row bg-white rounded-[40px] lg:rounded-[10px] shadow-xl'>

      <div className='border-b lg:border-r-2 flex items-center justify-center'>
      <img src={carro.LinkImg} alt="" className='w-screen max-w-[500px] image' />
      </div>

      <div className='auto p-4 flex flex-col gap-2'>
        <div className='mt-4'><span className='font-semibold'>Veículo:</span> <span>{carro.name}</span></div>
        <div><span className='font-semibold'>Preço:</span> <span>R$ {carro.Preco}</span></div>
        <div><span className='font-semibold'>Ano/Modelo: </span><span>{carro.AnoModelo}</span></div>
        <div><span className='font-semibold'>Categoria: </span><span>{carro.category}</span></div>
        <div><span className='font-semibold'>Descrição:</span> <span>{carro.description}</span></div>
        <div><span className='font-semibold'>Km Rodados:</span> <span>{carro.kmRodados}</span></div>
        <div className='flex mt-2 gap-4 mb-4'>
        <button onClick={()=>chamarNoZap()} className='flex items-center gap-2 bg-[#FF5000] rounded-md shadow-md px-6 py-2 text-white font-bold'>Contato <FaWhatsapp className='text-green-600 font-bold text-3xl'/></button>
    <button><a href='/carros' className='flex items-center gap-2 shadow-lg border px-6 py-4 rounded-lg'>Voltar <FaArrowLeft /></a></button>
      </div>
      </div>

      

      </div>}

  </div> 
    
    </>
  )
}

export default page
