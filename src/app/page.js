'use client'
import React, { useEffect } from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";
import axios from "axios"
import { FaArrowLeft } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Page = () => {
  const [modal, setModal] = React.useState(false);
  const [modalInput,setModalInput]=React.useState(false)

  const [category,setCategory]=React.useState("")
  const [LinkImg,setLinkImg]=React.useState("")
  const [name,setName]=React.useState("")
  const [description,setDescription]=React.useState("")
  const [AnoModelo,setAnoModelo]=React.useState("")
  const [kmRodados,setKmRodados]=React.useState("")
  const [Preco,setPreco]=React.useState("")
  const [Whatsapp,setWhatsapp]=React.useState("")
  const [error,setError]=React.useState(null)
  const [help,setHelp]=React.useState(false)
  const [cadastrando,setCadastrando]=React.useState(false)

  const app = axios.create({
   baseURL:"https://api-cars-three.vercel.app"
  })



  async function cadastreCarro(){
    if(LinkImg===""){
      alert("coloque o Link da Imagem")
      return
    }

    try{
      setCadastrando(true)
        await app.post("/create", {
          LinkImg,
          name,
          description,
          AnoModelo,
          kmRodados,
          Preco,
          Whatsapp,
          category
        })

        setCadastrando(false)
      
    } catch(error){
      setError(error.message)
    }finally{
      setError(null)
    }
  }

  useEffect(() => {
    // Verificar se o modal já foi exibido anteriormente
    const modalAlreadyShown = localStorage.getItem('modalAlreadyShown');
    
    // Se o modal não foi exibido, aguarde 3 segundos e então exiba-o
    if (!modalAlreadyShown) {
      const timeoutId = setTimeout(() => {
        setModal(true);
        // Salvar no localStorage que o modal foi exibido
        localStorage.setItem('modalAlreadyShown', 'true');
      }, 3000);

      // Limpar o timeout se o componente for desmontado antes de 3 segundos
      return () => clearTimeout(timeoutId);
    }
  }, []); // O array vazio assegura que o efeito só é executado uma vez, semelhante ao componentDidMount

  return (
    <>
      <section className='mx-auto max-w-7xl w-screen h-screen mt-6 rounded-md flex items-center p-4  flex-col justify-center lg:flex-row'>
        <div className='flex flex-col gap-4 lg:max-w-[600px]'>
          <p className='text-[#004784] text-[30px] lg:text-[55px]'>Venda seu carro com <br /><strong> agilidade, segurança e transparência</strong> </p>
          <p className='mt-4'>Aqui no <strong>Point Do Carro</strong> é <strong>você</strong> mesmo que  <strong>vende seu carro</strong> pra pessoa interessada!  <strong>toda a negociação</strong> é <strong>feita  por você mesmo.</strong> </p>
          <div className='py-4 flex gap-2 flex-wrap'>
            <a href="/carros" className='border-2 rounded-md px-6 py-2 border-[#FF5000] text-[#FF5000] font-bold hover:bg-[#FF5000] hover:text-white transition-all'>Comprar um veículo</a>
            <button className='bg-[#FF5000] hover:border-2 hover:text-[#FF5000] transition-all text-white font-bold rounded-md px-6 py-2 hover:bg-white hover:border-[#FF5000] ' onClick={()=>setModalInput(true)}>Vender meu veículo</button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/GnpDx95/car.png" alt="" />
        </div>
      </section>

      <div className='fixed bottom-6 right-6'>
        <div className='bg-blue-600 text-white px-6 py-2 rounded-md cursor-pointer' onClick={()=>setHelp(true)}>
        contate-nos
        </div>

        {help && <div className='w-screen max-w-[400px] fixed bottom-6 right-0 bg-slate-400 text-white h-[280px] rounded-md p-2 animaHelp'>
      
      <div className='flex justify-between'>
      <p className='text-center text-xl py-4'>Precisa de Ajuda?</p>
      <button className=' font-bold  text-red-600' onClick={()=>setHelp(false)}>X</button>
      </div>
        <hr />

<div className='mt-4'>
<p>se você tem alguma dúvida chama a gente no whatsapp, basta clicar no ìcone <strong>abaixo</strong></p>
<div className='mx-auto flex items-center justify-center mt-6'>
<a href="" className='text-center gap-2 border px-6 py-2 rounded-md flex items-center justify-center'><FaWhatsapp className='text-4xl font-bold text-green-600'/>Contatar</a>
</div>
</div>

</div>}

        
      </div>

      {modal && (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center'>
          <div className='w-screen max-w-lg rounded-sm p-2 text-center animarModal'>
            <div className='w-screen max-w-lg relative flex justify-end px-4'>
              <button className='text-white font-bold text-xl' onClick={() => setModal(false)}>X</button>
            </div>
            <div className='bg-white p-2 rounded-md'>
              <p className='text-center font-semibold text-xl border-b-2 pb-2'>Atenção</p>
              <p>Se Você já vendeu o veículo, avise a gente no whatsapp para que possamos remover o seu veículo da plataforma.
                desde já agradecemos a colaboração.</p>
              <p className='font-bold py-2'>Já vendeu o seu carro?</p>
              <div className='flex items-center justify-center mb-2'>
                <FaLongArrowAltDown />
                <FaLongArrowAltDown />
                <FaLongArrowAltDown />
                <FaLongArrowAltDown />
              </div>
              <a href="https://wa.me/5531992311170?text=ol%C3%A1%2C+j%C3%A1+vendi+o+meu+carro...." className='bg-[#FF5000] rounded-md text-white font-bold py-2 block max-w-[100px] mx-auto'>Avise-nos</a>
            </div>
          </div>
        </div>
      )}

{modalInput && <div className='fixed inset-0 flex rounded-lg justify-center bg-black backdrop-blur-sm bg-opacity-20 p-2'>
 <div className='w-screen max-w-lg bg-white rounded-md animarModal'>
  <h1 className='text-xl font-semibold text-center py-2' onClick={()=>setModalInput(true)}>Cadastrando veículo</h1>
  <hr />
  <div className='w-screen max-w-sm lg:max-w-lg flex flex-col mx-auto'>

  <div className='p-2 flex flex-col'>
  <label htmlFor="name" className='mb-1'>Veículo</label>
  <input type="text" id='name' className='border py-2 mb-2   rounded-md bg-slate-200 outline-none px-4' placeholder='Digite o nome do veículo' value={name} onChange={(({target})=>setName(target.value))}/>
  </div>

  <div className='p-2 flex flex-col'>
  <label htmlFor="LinkImg" className='mb-1'>Link da imagem</label>
  <input type="text" id='LinkImg' className='border py-2 mb-2 rounded-md bg-slate-200 outline-none px-4' placeholder='Digite o Link da imagem' value={LinkImg} onChange={({target})=>setLinkImg(target.value)}/>
  </div>

  <div className='p-2 flex flex-col'>
<label htmlFor="description" className='mb-1'>Descrição</label>
  <textarea name="description" id="description" cols="10" rows="5" value={description} onChange={({target})=>setDescription(target.value)} className='border  bg-slate-200 px-4 rounded-md outline-none' placeholder='Descrição do veículo'></textarea>
  </div>

  <div className='p-2 flex flex-col'>
  <label htmlFor="AnoModelo" className=' mb-1'>Ano de Fabricação</label>
  <input type="text" id='AnoModelo' value={AnoModelo} onChange={({target})=>setAnoModelo(target.value)} className='border py-2 mb-2   rounded-md bg-slate-200 outline-none px-4' placeholder='Ano de Fabricação do veículo'/>
</div>

  <div className='p-2 flex flex-col'>
  <div className="relative flex flex-col max-w-[128px] text-left">
  <label htmlFor="category" className='mb-1'>Categoria</label>
  <select
    id="category"
    value={category}
    onChange={({ target }) => setCategory(target.value)}
    className="appearance-none py-2 pl-3 pr-8 border border-gray-300 rounded-md flex shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
  >
  <option value="" disabled>Selecionar</option>
    <option value="SUV">SUV</option>
    <option value="SEDAN">SEDAN</option>
    <option value="HATCH ">HATCH </option>
    <option value="ELÉTRICO ">ELÉTRICO </option>
    <option value="HIBRIDO">HIBRIDO</option>
    <option value="OFF-ROAD">OFF-ROAD</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
    <svg
      className="w-5 h-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM8 16a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>
</div>

  <div className='p-2 flex flex-col'>
  <label htmlFor="KmRodados" className='mt-2 mb-1'>Kilômetros rodados</label>
  <input type="text" id='KmRodados' value={kmRodados} onChange={({target})=>setKmRodados(target.value)} className='border py-2 mb-2   rounded-md bg-slate-200 outline-none px-4' placeholder='Ano de Fabricação do veículo'/>
  </div>
  <div className='p-2 flex flex-col'>
  <label htmlFor="Preco" className='mt-2 mb-1'>Preço</label>
  <input type="text" id='Preco' className='border py-2 mb-2   rounded-md bg-slate-200 outline-none px-4' placeholder='Preço do veículo' value={Preco} onChange={({target})=>setPreco(target.value)}/>
  </div>
  <div className='p-2 flex flex-col'>
  <label htmlFor="Whatsapp" className='mt-2 mb-1'>Whatsapp</label>
  <input type="text" id='Whatsapp' className='border py-2 mb-2   rounded-md bg-slate-200 outline-none px-4' placeholder='Whatsapp para contato' value={Whatsapp} onChange={({target})=>setWhatsapp(target.value)}/>
</div>
  
  <div className='flex gap-4 px-2 items-center justify-center'>
    {!cadastrando && <button onClick={cadastreCarro} className='bg-[#FF5000] text-white rounded-md px-6 py-2 mb-6'>Cadastrar</button>}
    {cadastrando && <button className='bg-[#FF5000] text-white rounded-md px-6 py-2 mb-6'>Cadastrando...</button>}
    <button className='rounded-md px-6 py-2 mb-6 border shadow-md flex items-end gap-2 justify-center' onClick={()=>setModalInput(false)}>cancelar <FaArrowLeft /></button>
  </div>

  </div>
 </div>
</div> }

    </>
  );
};

export default Page;
