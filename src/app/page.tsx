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
              src="/images/logo-b.png"
              alt="Logo"
              width={900}
              height={250}
            />
            
            
          </div>
      </section>
    </main>

  )
}
