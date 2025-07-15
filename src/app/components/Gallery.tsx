'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Image from 'next/image';

import 'yet-another-react-lightbox/styles.css';
// import 'yet-another-react-lightbox/plugins/zoom.css';


export const Gallery = () => {
  const images = [
    { src: '/images/eu.jpg', alt: 'Make 1' },
    { src: '/images/eu.jpg', alt: 'Make 2' },
    { src: '/images/eu.jpg', alt: 'Make 3' },
    { src: '/images/eu.jpg', alt: 'Make 4' },
    { src: '/images/eu.jpg', alt: 'Make 5' },
    { src: '/images/eu.jpg', alt: 'Make 5' },

  ];

  const [index, setIndex] = useState(-1);

  return (
    <section className="py-20 bg-gray-300" id="gallery">
      <div className="max-w-6xl mx-auto px-4 text-center mt-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-10">Galeria</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="focus:outline-none"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((img) => ({ src: img.src }))}
          plugins={[Zoom]}
           zoom={{
    maxZoomPixelRatio: 3, // aumenta a capacidade de zoom
    scrollToZoom: true,    // ativa zoom com scroll no desktop
    doubleTapDelay: 300,   // ativa zoom por clique rápido duplo
    zoomInMultiplier: 2,   // controle de zoom nos botões
  }}
        />
      </div>
    </section>
  );
};
