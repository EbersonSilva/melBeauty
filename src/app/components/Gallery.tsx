"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Image from "next/image";

import "yet-another-react-lightbox/styles.css";
// import 'yet-another-react-lightbox/plugins/zoom.css';

export const Gallery = () => {
  const images = [
    {
      src: "/images/trabalhos/make (1).jpeg",
      alt: "Make 1",
      description: "Volume brasileiro.",
    },
    {
      src: "/images/trabalhos/make (2).jpeg",
      alt: "Make 2",
      description: "Maquiagem noiva.",
    },
    {
      src: "/images/trabalhos/make (3).jpeg",
      alt: "Make 3",
      description: "Design com Henna.",
    },
    {
      src: "/images/trabalhos/make (4).jpeg",
      alt: "Make 4",
      description: "Volume fox eyes.",
    },
    {
      src: "/images/trabalhos/make (5).jpeg",
      alt: "Make 5",
      description: "Maquiagem para debutante.",
    },
    {
      src: "/images/trabalhos/make (6).jpeg",
      alt: "Make 6",
      description: "Maquigem social.",
    },
  ];

  const [index, setIndex] = useState(-1);

  return (
    <section className="py-20 bg-gray-300" id="gallery">
      <div className="max-w-6xl mx-auto px-4 text-center mt-0 md:mt-20">
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
              <p className="text-md text-black mt-1">{img.description}</p>
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
            scrollToZoom: true, // ativa zoom com scroll no desktop
            doubleTapDelay: 300, // ativa zoom por clique rápido duplo
            zoomInMultiplier: 2, // controle de zoom nos botões
          }}
        />
        <div className="mt-6">
  <a
    href="https://www.instagram.com/meel_makeeup/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-gray-600 hover:text-gray-800 font-bold text-lg md:text-2xl transition"
  >
    Continue vendo pelo Instagram →
  </a>
</div>
      </div>
    </section>
  );
};
