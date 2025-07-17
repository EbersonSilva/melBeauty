// Testimonials.tsx
'use client'; // se estiver usando Next.js App Router

// import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: 'ela é maravilhosa, me deixou super confortável desde o primeiro dia, conversa comigo sobre tudo e o trabalho sem palavras, perfeito, fiz uma e não consigo trocar, o trabalho da Melissa vicia, adoro❤',
    name: 'Annila Oliveira',
    role: 'Cliente - Extensão de Cílios',
    img: '/images/eu.jpg',
  },
  {
    text: 'Simplesmente um trabalho impecável, uma profissional que realmente se importa com a cliente, só tenho elogios ao trabalho desde a maquiagem até o cílios, acreditem vocês não vão se arrepender!!',
    name: 'Mirelle Santos',
    role: 'Cliente - Extensão de Cílios e Maquiagem',
    img: '/images/eu.jpg',
  },
  {
    text: 'Trabalha muito bem, super profissional, eu amo, sempre conversa com a gente nos deixa bem confortável, parabéns que você cresça cada dia mais',
    name: 'Thamires',
    role: 'Cliente - Extensão de Cílios',
    img: '/images/eu.jpg',
  },
  {
    text: 'Seu trabalho é impecável!! Eu amo o cuidado com as clientes é impressionante, com certeza é a melhor lash',
    name: 'Silvia',
    role: 'Cliente - Extensão de Cílios',
    img: '/images/eu.jpg',
  },
  {
    text: 'Se existe melhor eu desconheço trabalho impecável, tanto na extensão de cílios e como maquiadora, sem comparações ',
    name: 'Eduarda Pereira',
    role: 'Cliente - Extensão de Cílios e Maquiagem',
    img: '/images/eu.jpg',
  },
  {
    text: 'Mel, foi um prezer conhecer você, de verdade! Você é uma maquiadora incrível, eu fiquei muito surpresa com o resultado da minha make e você conseguiu respeitar alguns pontos que tinhamos conversado e em nunhum momento tentou impor nada, eu achei isso maravilhoso, além disso minha mãe e a minha avó adoraram você ksksks. Sucesso.',
    name: 'Daniela',
    role: 'Cliente - Make para eventos',
    img: '/images/eu.jpg',
  },
];

export const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-100 ">
    <div className="max-w-7xl mx-auto text-center mt-0 md:mt-20">
      <h2 className="text-3xl md:text-5xl px-4 font-bold mb-16 text-black">O que dizem sobre mim</h2>
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
            {/* <Image
              src={t.img}
              alt={t.name}
              width={100}
              height={100}
              className="rounded-full mx-auto object-cover"
            /> */}
            <p className="mt-2 text-2xl font-semibold text-black">{t.name}</p>
            <p className="text-lg text-gray-500">{t.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
