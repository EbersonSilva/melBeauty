'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';

export const Gallery = () => {
  const images = [
    { src: '/images/eu.jpg', alt: 'Maquiagem para evento', description: 'Transformação para um casamento especial.' },
    { src: '/images/eu.jpg', alt: 'Extensão de cílios', description: 'Cílios volumosos com técnica de volume russo.' },
    { src: '/images/eu.jpg', alt: 'Maquiagem artística', description: 'Maquiagem criativa para sessão de fotos.' },
    { src: '/images/eu.jpg', alt: 'Maquiagem casual', description: 'Look casual para o dia a dia.' },
    { src: '/images/eu.jpg', alt: 'Cílios volumosos', description: 'Alongamento de cílios com acabamento natural.' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">Galeria de Projetos</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
              <p className="mt-4 text-lg text-gray-700">{image.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};