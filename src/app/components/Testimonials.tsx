export const Testimonials = () => {
return(
    <section id="depoimentos" className="py-20 h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl px-4 font-bold text-pink-600">O que dizem sobre mim</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-center">
            <div className="bg-white text-2xl p-6 rounded-lg shadow-md max-w-xs">
              <p className="text-gray-600 italic">&quot;O trabalho da Melissa Gomes foi maravilhoso! Me senti incrível com a maquiagem e os cílios! Super recomendo!"</p>
              <div className="mt-4">
                <img src="/images/eu.jpg" alt="Cliente 1" className="rounded-full w-12 h-12 mx-auto" />
                <p className="mt-2 text-lg font-semibold">Joana Silva</p>
                <p className="text-sm text-gray-500">Cliente - Maquiagem e Cílios</p>
              </div>
            </div>
            <div className="bg-white text-2xl p-6 rounded-lg shadow-md max-w-xs">
              <p className="text-gray-600 italic">&quot;Amei o atendimento e os resultados. Os cílios ficaram perfeitos e a maquiagem durou o dia todo!"</p>
              <div className="mt-4">
                <img src="/images/eu.jpg" alt="Cliente 2" className="rounded-full w-12 h-12 mx-auto" />
                <p className="mt-2 text-lg font-semibold">Maria Souza</p>
                <p className="text-sm text-gray-500">Cliente - Extensão de Cílios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
)
}