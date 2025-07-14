import Image from "next/image"

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 h-screen ">
      <div className="max-w-7xl mx-auto text-center mt-20">
        <h2 className="text-5xl font-bold text-black">Quem Sou Eu</h2>
        <div className="flex justify-center mt-8">
          <Image src="/images/eu.jpeg" width={100} height={100} alt="Sua Foto" className="rounded-full w-60 h-60 object-cover" />
        </div>
        <p className="mt-4 text-2xl text-gray-700 max-w-3xl mx-auto">
          Sou Melissa Gomes, lash designer e maquiadora com formação especializada e dedicação a realçar a beleza de cada mulher com naturalidade, precisão e sofisticação. Meu atendimento é feito com carinho e atenção aos detalhes, priorizando bem-estar, conforto e qualidade.
        </p>
      </div>
    </section>
  )
}