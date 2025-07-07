import Image from "next/image";

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
    text: 'Amei o atendimento e os resultados. Os cílios ficaram perfeitos e a maquiagem durou o dia todo!',
    name: 'Maria Souza',
    role: 'Cliente - Extensão de Cílios',
    img: '/images/eu.jpg',
  },
];

export const Testimonials = () => (
  <section id="depoimentos" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl px-4 font-bold text-pink-600 mb-10">O que dizem sobre mim</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 justify-center">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white text-base p-6 rounded-lg shadow-md max-w-xs mx-auto">
            <p className="text-gray-600 italic">&quot;{t.text}&quot;</p>
            <div className="mt-4">
              <Image src={t.img} alt={t.name} width={48} height={48} className="rounded-full mx-auto object-cover" />
              <p className="mt-2 text-lg font-semibold">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);