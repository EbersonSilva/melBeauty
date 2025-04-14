"use client";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export const WhatsappButton: React.FC = () => {
  return (
    <Link
      href="https://wa.me/5511961505256"
      target="_blank"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300 border-2 border-white"
    >
      <WhatsappLogo size={40} weight="fill" />
    </Link>
  );
};
