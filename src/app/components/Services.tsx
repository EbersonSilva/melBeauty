export const Services = () => {
    return (<section id="servicos" className="py-20 h-screen bg-pink-100">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-pink-600">Meus Serviços</h2>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">💄</div>
                    <h3 className="text-3xl font-semibold text-pink-600">Maquiagem para Eventos</h3>
                    <p className="text-xl text-gray-700">Transforme-se para eventos especiais como casamentos, festas e muito mais, com maquiagens personalizadas.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-3xl font-semibold text-pink-600">Extensão de Cílios</h3>
                    <p className="text-xl text-gray-700">Cílios longos e volumosos com técnicas como volume russo, alongamento e manutenção.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="text-4xl mb-4">💋</div>
                    <h3 className="text-3xl font-semibold text-pink-600">Maquiagem para Noivas</h3>
                    <p className="text-xl text-gray-700">Maquiagem especial para o grande dia, com todo o cuidado e perfeição que sua celebração merece.</p>
                </div>
            </div>
        </div>
    </section>)
}