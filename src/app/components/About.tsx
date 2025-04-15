import Image from "next/image"

export const About = () => {
    return(
        <section id="sobre" className="py-24 bg-gray-50 h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-pink-600">Quem Sou Eu</h2>
          <div className="flex justify-center mt-8">
            <Image src="/images/eu.jpg" width={100} height={100} alt="Sua Foto" className="rounded-full w-40 h-40"  />
          </div>
          <p className="mt-4 text-3xl text-gray-700 max-w-3xl mx-auto">
            Sou Melissa Gomes, uma profissional apaixonada por realçar a beleza das pessoas com serviços de maquiagem e extensão de cílios. Com 5 anos de experiência, meu objetivo é proporcionar a melhor experiência para cada cliente, deixando-a ainda mais confiante e radiante.
          </p>
        </div>
      </section>
    )
}