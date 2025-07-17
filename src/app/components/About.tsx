import Image from "next/image"

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 md:h-screen ">
      <div className="max-w-7xl mx-auto text-center md:mt-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Quem Sou Eu</h2>
        <div className="flex justify-center mt-8">
          <Image src="/images/eu.jpeg" width={100} height={100} alt="Sua Foto"  className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover"  />
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-4">
          Sou <b>Melissa Gomes</b>, lash designer e maquiadora com formação especializada e dedicação a realçar a beleza de cada mulher com naturalidade, precisão e sofisticação. Meu atendimento é feito com carinho e atenção aos detalhes, priorizando bem-estar, conforto e qualidade.
        </p>
      </div>
    </section>
  )
}