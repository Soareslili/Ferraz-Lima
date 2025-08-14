
import Advogado1 from '../assets/Advogado1.png';
import Advogado2 from '../assets/Advogada2.png';
import Advogado3 from '../assets/Advogado3.png';

import CountUp from 'react-countup';



export function Lawyers() {
    return (
        <section id='advogados' className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        duration="1000"
                    
                    >Nossa Equipe</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 max-auto ml-[45%]"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        duration="1000"
                    ></div>
                    <p className="text-lg sm:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed text-center mb-16"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        duration="1200"
                    >Profissionais altamente qualificados, com vasta experiência e comprometimento em oferecer as melhores soluções jurídicas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div
                        className="rounded-lg shadow-lg overflow-hidden flex flex-col"
                        data-aos="zoom-in-right"
                        data-aos-delay="400"
                        duration="1400"
                    >
                        <img
                            src={Advogado1}
                            alt="Advogado 1"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-white p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                                Dr. Ricardo Ferraz
                            </h3>
                            <span className="text-blue-600 font-medium mb-1">
                                OAB/SP 123.456
                            </span>
                            <p className="text-slate-600 mb-2">Direito Civil e Empresarial</p>
                            <p className="text-sm text-slate-500 mb-4">15 anos de experiência</p>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Especialista em direito empresarial com vasta experiência em fusões, aquisições e contratos comerciais complexos.
                            </p>
                            <div className="bg-blue-300 p-3 rounded-lg mt-auto">
                                <span className="text-xs text-blue-900 font-medium animate-pulse">
                                    Pós-graduado em Direito Empresarial - FGV
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="rounded-lg shadow-lg overflow-hidden flex flex-col"
                        data-aos="zoom-in-right"
                        data-aos-delay="600"
                        duration="1600"
                    >
                        <img
                            src={Advogado2}
                            alt="Advogado 2"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-white p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                                Dra. Mariana Lima
                            </h3>
                            <span className="text-blue-600 font-medium mb-1">
                                OAB/SP 234.567
                            </span>
                            <p className="text-slate-600 mb-2">Direito Trabalhista e Civil</p>
                            <p className="text-sm text-slate-500 mb-4">12 anos de experiência</p>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Reconhecida pela excelência no direito trabalhista, com histórico de vitórias em casos complexos.
                            </p>
                            <div className="bg-blue-300 p-3 rounded-lg mt-auto">
                                <span className="text-xs text-blue-900 font-medium animate-pulse">
                                    Mestrado em Direito do Trabalho - USP
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="rounded-lg shadow-lg overflow-hidden flex flex-col"
                        data-aos="zoom-in-right"
                        data-aos-delay="600"
                        duration="1600"
                    >
                        <img
                            src={Advogado3}
                            alt="Advogado 3"
                            className="w-full h-64 object-cover"
                        />
                        <div className="bg-white p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                                Dr. Carlos Santos
                            </h3>
                            <span className="text-blue-600 font-medium mb-1">
                                OAB/SP 345.678
                            </span>
                            <p className="text-slate-600 mb-2">Direito Civil e Família</p>
                            <p className="text-sm text-slate-500 mb-4">10 anos de experiência</p>
                            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                Especialista em direito de família e sucessões, conhecido pela abordagem humanizada e eficaz.
                            </p>
                            <div className="bg-blue-300 p-3 rounded-lg mt-auto">
                                <span className="text-xs text-blue-900 font-medium animate-pulse">
                                    Especialização em Direito de Família - PUC-SP
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloco de estatísticas */}
                <div
                    className="max-w-4xl w-full mx-auto bg-white text-black rounded-2xl shadow-lg flex flex-col items-center justify-center mt-20 p-6 sm:p-10"
                    data-aos="zoom-in-up"
                    data-aos-delay="800"
                    duration="1800"
                >
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-center">
                        Precisa de Orientação Jurídica?
                    </h3>
                    <p className="text-sm sm:text-base text-center text-gray-700 mb-6 max-w-2xl">
                        Nossa equipe combina conhecimento técnico profundo com uma abordagem personalizada, garantindo que cada cliente receba a atenção e expertise que seu caso merece.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                        {[
                            { end: 15, suffix: "+", label: "Anos de Experiência" },
                            { end: 500, suffix: "+", label: "Casos Resolvidos" },
                            { end: 98, suffix: "%", label: "Taxa de Sucesso" },
                            { end: 24, suffix: "h", label: "Resposta Média" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                                    <CountUp
                                        end={item.end}
                                        duration={2}
                                        suffix={item.suffix}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>




            </div>

        </section >
    )
}