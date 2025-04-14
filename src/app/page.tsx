import React from 'react'
export default function Home() {
  return (
    <main>
      <section id="home">
        <div
          className="bg-cover bg-center bg-no-repeat bg-fixed h-screen flex items-center justify-center relative" style={{ backgroundImage: "url('/images/home.jpg')" }}>
          <div className="absolute inset-0 bg-black/50 "></div>
          <div className="absolute text-white text-center px-4 z-10 ">
            <h1 className="text-5xl font-bold mb-4">
              Realce sua beleza com Profissionalismo
            </h1>
            <p className="text-2xl">
              Maquiagem para todas as ocasiões
            </p>
          </div>
        </div>
      </section>  
    </main>

  )
}
