export const Gallery = () => {
    return(
        <section id="galeria" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-pink-600">Galeria de Projetos</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* <img src="/images/projeto1.jpg" alt="Projeto 1" className="w-full h-64 object-cover" /> */}
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* <img src="/images/projeto2.jpg" alt="Projeto 2" className="w-full h-64 object-cover" /> */}
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* {/* <img src="/images/projeto3.jpg" alt="Projeto 3" className="w-full h-64 object-cover" /> */}
            </div>
          </div>
        </div>
      </section>
    )
}