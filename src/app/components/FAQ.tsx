// export const FAQ = () => {
//     const faqs = [
//         {
//         question: 'Quais serviços você oferece?',
//         answer: 'Ofereço maquiagem para festas, casamentos, eventos e também aulas de automaquiagem.',
//         },
//         {
//         question: 'Você atende em domicílio?',
//         answer: 'Sim, atendo em domicílio ou em meu estúdio localizado no centro da cidade.',
//         },
//         {
//         question: 'Quais marcas de produtos você utiliza?',
//         answer: 'Utilizo produtos de alta qualidade como MAC, NARS, Urban Decay e outros.',
//         },
//         {
//         question: 'Como posso agendar um horário?',
//         answer: 'Você pode agendar pelo WhatsApp ou pelo meu site na seção de contato.',
//         },
//     ];
    
//     return (
//         <section id="faq" className="py-20 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-4 text-center mt-10 md:mt-20">
//             <h2 className="text-3xl md:text-5xl font-bold mb-10 text-black">Perguntas Frequentes</h2>
//             <div className="space-y-6">
//             {faqs.map((faq, index) => (
//                 <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-black">{faq.question}</h3>
//                 <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//             ))}
//             </div>
//         </div>
//         </section>
//     );
// }