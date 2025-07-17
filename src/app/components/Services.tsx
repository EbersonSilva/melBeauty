import { CTA } from "./CTA"

export const Services = () => {
    return (<section id="services" className="py-20 bg-gray-300">
        <div className="max-w-7xl mx-auto text-center mt-10 md:mt-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Meus Serviços</h2>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-10">
                <div className="bg-gray-100 mx-4 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Maquiagem para Eventos</h3>
                    <p className="text-lg md:text-xl text-gray-700">Transforme-se para eventos especiais como casamentos, festas e muito mais, com maquiagens personalizadas.</p>
                </div>
                <div className="bg-gray-100 mx-4 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Extensão de Cílios</h3>
                    <p className="text-lg md:text-xl text-gray-700">Cílios longos e volumosos com técnicas como volume russo, alongamento e manutenção.</p>
                </div>
                <div className="bg-gray-100 mx-4 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Maquiagem para Noivas</h3>
                    <p className="text-lg md:text-xl text-gray-700">Maquiagem especial para o grande dia, com todo o cuidado e perfeição que sua celebração merece.</p>
                </div>
                <div className="bg-gray-100 mx-4 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Design Simples e Henna de Sobrancelha</h3>
                    <p className="text-lg md:text-xl text-gray-700">Realce o formato natural das sobrancelhas com um design delicado e simétrico. A henna é ideal para preencher e colorir os fios, proporcionando um olhar marcante com efeito natural e duradouro.</p>
                </div>
            </div>
        <CTA />     
        </div>
    </section>)
}