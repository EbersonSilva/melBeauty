"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';
import Image from 'next/image';
import { CTA } from './CTA';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id='header' className="bg-black text-white p-6 fixed z-20 w-full">
      <div className="flex justify-between items-center max-w-full">
       <Image src={"/images/logo.png"} alt="Logo MelBeauty" width={200} height={200}  />
        {/* <div className="text-2xl font-bold">MelBeauty</div> */}

        {/* Botão do Menu (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
        >
          {isOpen 
            ? <X size={30} weight="bold" /> 
            : <List size={30} weight="bold" />
          }
        </button>

        {/* Menu Navegação */}
        <nav className={`absolute md:static top-20 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 text-xl transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}>
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="#about" className="hover:text-gray-400">Sobre</Link>
          <Link href="#services" className="hover:text-gray-400">Serviços</Link>
          <Link href="#testimonials" className="hover:text-gray-400">Depoimentos</Link>
          <Link href="#gallery" className="hover:text-gray-400">Galeria</Link>
          <Link href="#contact" className="hover:text-gray-400 pb-0 md:pb-0 last:pb-4 md:last:pb-0">Contato</Link>
        </nav>
      </div>
    </header>
  );
};
