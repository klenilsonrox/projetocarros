'use client'
import React from 'react'
import axios from "axios"

import Car from '@/components/Car'



const page = () => {
  const [carros,setCarros]=React.useState([])
  const [erro,setErro]=React.useState(null)
  const [loading,setLoading]=React.useState(false)

  const app = axios.create({
    baseURL:"https://api-cars-three.vercel.app"
  })

  async function buscarCarros(){
   try{
    setLoading(true)
    const dados = await app.get("/lists")
    setCarros(dados.data)
   }catch(error){
    setErro(error.message)
   }finally{
    setErro(null)
    setLoading(null)
   }
  }

  React.useEffect(()=>{
    buscarCarros()
  },[])

  


  return (
    <div>
    <h1 className='text-center my-10 text-2xl font-semibold'>Veículos Dísponíveis</h1>
      {loading && <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex flex-col gap-2 items-center justify-center w-screen max-2-[300px]'>
      <div class="border-t-4 border-r-4 border-[#FF5000] border-solid rounded-full h-12 w-12 animate-spin"></div>
      <p>Carregando...</p>
      </div>
      </div> }

{!loading && <section className='container'>
    {carros && carros.map((carro)=> (
      
      <Car item={carro}/>

    ) )}
</section> }

    </div>
  )
}

export default page
