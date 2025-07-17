"use client";

import React, { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="bg-black text-white p-6 fixed z-20 w-full">
      <div className="flex justify-between items-center max-w-full">
        <Image
          src="/images/logo.png"
          alt="Logo MelBeauty"
          width={200}
          height={200}
          sizes="(max-width: 768px) 100px, 200px"
          style={{ width: "100%", maxWidth: "200px", height: "auto" }}
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </button>

        {/* Menu Navegação */}
        <nav
          className={`
    absolute md:static top-20 left-0 w-full md:w-auto 
    bg-gray-800 md:bg-transparent 
    flex flex-col md:flex-row items-center 
    space-y-6 md:space-y-0 md:space-x-10 
    text-xl 
    transition-all duration-500 ease-in-out
    transform ${
      isOpen
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
    } md:opacity-100 md:translate-y-0 md:scale-100 md:pointer-events-auto md:flex
  `}
        >
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Sobre
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Serviços
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Depoimentos
          </Link>
          <Link
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Galeria
          </Link>
          {/* <Link
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            FAQ
          </Link> */}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400"
          >
            Contato
          </Link>
          <Link
            href="https://www.instagram.com/meel_makeeup/"
            target="_blank"
            rel="noopener noreferrer"
            className="text white hover:text-gray-400 transition-colors"
          >
            <FaInstagram />
          </Link>
        </nav>
      </div>
    </header>
  );
};
