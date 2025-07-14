import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-gray-600 text-white py-20">
            <div className="max-w-7xl mx-auto text-center">
                <div className="mb-6">
                    <h3 className="text-3xl font-semibold">Entre em Contato</h3>
                    <p className="text-lg mt-2">Agende seu horário ou tire suas dúvidas!</p>
                </div>

                {/* Informações de Contato */}
                <div className="mb-6">
                    <p className="text-lg">Telefone: (11) 96150-5256</p>
                    <p className="text-lg">Email: melissagomes721@gmail.com</p>
                </div>

                {/* Redes Sociais */}
                <div className="mb-6">
                    <h3 className="text-3xl font-semibold">Redes Sociais</h3>
                    <div className="flex justify-center space-x-4 mt-4">
                        <Link href="https://www.instagram.com/seuperfil">
                            Instagram
                        </Link>
                        <Link href="https://www.facebook.com/seuperfil">
                            Facebook
                        </Link>
                        <Link href="https://wa.me/5511961505256">
                            WhatsApp
                        </Link>
                    </div>
                </div>

                {/* Direitos Autorais */}
                <div className="mt-6">
                    <p className="text-sm text-gray-200">
                        &copy; {new Date().getFullYear()} Melissa Gomes. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )


}