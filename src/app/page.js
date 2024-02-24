'use client'
import React, { useEffect } from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";

const Page = () => {
  const [modal, setModal] = React.useState(false);

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
      <section className='mx-auto max-w-7xl w-screen h-screen max-h-[800px] mt-6 rounded-md flex items-center p-4  flex-col justify-center lg:flex-row'>
        <div className='flex flex-col gap-4 lg:max-w-[600px]'>
          <p className='text-[#004784] text-[30px] lg:text-[55px] leading'>Venda seu carro com <br /><strong> agilidade, segurança e transparência</strong> </p>
          <p className='mt-4'>Aqui no <strong>Point Do Carro</strong> é <strong>você</strong> mesmo que  <strong>vende seu carro</strong> pra pessoa interessada!  <strong>toda a negociação</strong> é <strong>feita  por você mesmo.</strong> </p>
        </div>
        <div>
          <img src="https://i.ibb.co/GnpDx95/car.png" alt="" />
        </div>
      </section>

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
    </>
  );
};

export default Page;
