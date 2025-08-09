import CountUp from 'react-countup';



export function About() {
    return (
        <section className="py-20 bg-[#C9DCF3] flex justify-center">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4  text-center">
                        Sobre o Escritório
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 max-auto ml-[45%] mb-10"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center">
                        Fundado em 2008, o Ferraz & Lima Advogados Associados é reconhecido pela
                        excelência no atendimento e pela eficiência na resolução de questões jurídicas
                        complexas.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="text-start">
                            <div className="mb-8"
                            data-aos="fade-right"
                             data-aos-delay="0"
                             duration="1000"
                            >
                                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">Nossa Missão</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Oferecer soluções jurídicas inovadoras e eficazes, sempre priorizando os interesses dos nossos clientes e construindo relacionamentos duradouros baseados na confiança e no sucesso mútuo.
                                </p>
                            </div>
                            <div
                             data-aos="fade-right"
                             data-aos-delay="200"
                             duration="1200"
                            >
                                <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">Nossa Visão</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Ser reconhecido como o escritório de advocacia de referência, destacando-se pela qualidade técnica, inovação e comprometimento com a justiça e os direitos dos nossos clientes.
                                </p>
                            </div>

                            <div>
                                <span className="flex mt-6"
                                 data-aos="fade-right"
                             data-aos-delay="400"
                             duration="1400"
                                >
                                    ✅ <p className="text-slate-700 font-medium ml-2">AOB regularizada desde 2008</p>
                                </span>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-6 text-center">

                                <div className="flex flex-col items-center">
                                    <p className="text-4xl font-bold mb-2">
                                        <CountUp end={15} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
                                    </p>
                                    <p className="text-gray-200">Anos de Experiência</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <p className="text-4xl font-bold mb-2">
                                        <CountUp end={500} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
                                    </p>
                                    <p className="text-gray-200">Casos Resolvidos</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <p className="text-4xl font-bold mb-2">
                                        <CountUp end={98} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
                                    </p>
                                    <p className="text-gray-200">Taxa de Sucesso</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <p className="text-4xl font-bold mb-2">
                                        <CountUp end={24} duration={2} suffix="h" enableScrollSpy scrollSpyOnce />
                                    </p>
                                    <p className="text-gray-200">Resposta Média</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-shadow hover:scale-105 flex flex-col"
                        
                            data-aos="zoom-in-up"
                             data-aos-delay="0"
                             duration="1000"
                        >
                            <span className="text-5xl text-blue-600 mb-2 ">
                                <img src="https://img.icons8.com/ios/50/scales.png" alt="Balanca" />
                            </span>
                            <p className="text-xl font-semibold text-slate-800 mb-4 ">Ética e Transparência</p>
                            <p className="text-slate-500 leading-relaxed ">
                                Atuamos com total transparência e integridade em todos os nossos processos.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-shadow hover:scale-105 flex flex-col "
                        data-aos="zoom-in-up"
                             data-aos-delay="200"
                             duration="1200"
                        >
                            <span className="text-5xl text-blue-600 mb-2">
                                <img src="https://img.icons8.com/parakeet-line/48/group.png" alt="Equipe" />
                            </span>
                            <p className="text-xl font-semibold text-slate-800 mb-4 ">Atendimento Personalizado</p>
                            <p className="text-slate-500 leading-relaxed ">
                                Cada cliente recebe atenção exclusiva e soluções jurídicas sob medida.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-shadow hover:scale-105 flex flex-col "
                        data-aos="zoom-in-up"
                             data-aos-delay="400"
                             duration="1400"
                        >
                            <span className="text-5xl text-blue-600 mb-2">
                                <img src="https://img.icons8.com/dotty/80/prize.png" alt="Excelencia" />
                            </span>
                            <p className="text-xl font-semibold text-slate-800 mb-4 ">Atendimento Personalizado</p>
                            <p className="text-slate-500 leading-relaxed ">
                                Cada cliente recebe atenção exclusiva e soluções jurídicas sob medida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}