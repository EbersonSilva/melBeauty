import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Image from 'next/image';

export const Gallery = () => {
  const images = [
    { src: '/images/projeto1.jpg', alt: 'Maquiagem para evento' },
    { src: '/images/projeto2.jpg', alt: 'Extensão de cílios' },
    { src: '/images/projeto3.jpg', alt: 'Maquiagem artística' },
    { src: '/images/projeto4.jpg', alt: 'Maquiagem casual' },
    { src: '/images/projeto5.jpg', alt: 'Cílios volumosos' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-10">Galeria de Projetos</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};