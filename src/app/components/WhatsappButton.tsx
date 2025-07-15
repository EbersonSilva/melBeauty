'use client';

import { useEffect, useState } from 'react';
import { WhatsappLogo } from '@phosphor-icons/react';
import Link from 'next/link';

export const WhatsappButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById('about'); // id da segunda seção
      if (!secondSection) return;

      const secondSectionTop = secondSection.getBoundingClientRect().top;

      // Se a segunda seção já estiver visível, mostra o botão
      setShowButton(secondSectionTop <= window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa uma vez para verificar o estado inicial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showButton ? (
    <Link
      href="https://wa.me/5511961505256"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300 border-2 border-white"
    >
      <WhatsappLogo size={40} weight="fill" />
    </Link>
  ) : null;
};
