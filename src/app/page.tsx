import React from 'react'
import Image from 'next/image'
// import { CTA } from './components/CTA'
export default function Home() {
  return (
    <main>
      <section id="home">
        <div
          className="bg-cover bg-center bg-no-repeat bg-fixed h-screen flex items-center justify-center relative" style={{ backgroundImage: "url('/images/fundo.png')" }}>
          {/* <div className="absolute inset-0 bg-black/50 "></div> */}
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={900}
              height={250}
            />
            {/* <h1 className="text-5xl font-bold mb-4">
              Realce sua beleza com Profissionalismo
            </h1>
            <p className="text-2xl">
              Maquiagem para todas as ocasiões
            </p> */}
            
          </div>
      </section>
    </main>

  )
}
