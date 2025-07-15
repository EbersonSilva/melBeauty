// Testimonials.tsx
'use client'; // se estiver usando Next.js App Router

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: 'O trabalho da Melissa Gomes foi maravilhoso! Me senti incrível com a maquiagem e os cílios! Super recomendo!',
    name: 'Joana Silva',
    role: 'Cliente - Maquiagem e Cílios',
    img: '/images/eu.jpg',
  },
  {
    text: 'Amei o atendimento e os resultados. Os cílios ficaram perfeitos e a maquiagem durou o dia todo!',
    name: 'Maria Souza',
    role: 'Cliente - Extensão de Cílios',
    img: '/images/eu.jpg',
  },
  {
    text: 'Melhor experiência que já tive! Profissional maravilhosa, recomendo de olhos fechados.',
    name: 'Fernanda Lima',
    role: 'Cliente - Make para eventos',
    img: '/images/eu.jpg',
  },
  {
    text: 'Melhor experiência que já tive! Profissional maravilhosa, recomendo de olhos fechados.',
    name: 'Fernanda Lima',
    role: 'Cliente - Make para eventos',
    img: '/images/eu.jpg',
  },
  {
    text: 'Melhor experiência que já tive! Profissional maravilhosa, recomendo de olhos fechados.',
    name: 'Fernanda Lima',
    role: 'Cliente - Make para eventos',
    img: '/images/eu.jpg',
  },
  {
    text: 'Melhor experiência que já tive! Profissional maravilhosa, recomendo de olhos fechados.',
    name: 'Fernanda Lima',
    role: 'Cliente - Make para eventos',
    img: '/images/eu.jpg',
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-100 ">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-5xl px-4 font-bold mt-20 mb-16">O que dizem sobre mim</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="bg-gray-300 text-base p-12 rounded-lg shadow-md max-w-xs mx-auto">
            <p className="text-gray-600 italic text-lg mb-4">&quot;{t.text}&quot;</p>
            <Image
              src={t.img}
              alt={t.name}
              width={100}
              height={100}
              className="rounded-full mx-auto object-cover"
            />
            <p className="mt-2 text-2xl font-semibold">{t.name}</p>
            <p className="text-lg text-gray-500">{t.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
