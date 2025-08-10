import { InteractiveHoverButton } from './ui/InteractiveHoverButtonProps';
import BG from '../assets/Advocacia.png';

export function Service() {
    return (
        <section
         id='servicos'
            className="py-20 flex justify-center relative"
            style={{
                backgroundColor: '#C9DCF3',
                color: '#1E293B',
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.5,
                }}
                className="absolute inset-0 w-full h-full z-0"
                aria-hidden="true"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
                <div className="mb-10">
                    <h2
                        className="text-3xl sm:text-4xl font-bold mb-4 text-center"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        duration="1000"
                       
                    >
                    Nossos Serviços
                    </h2>
                    <div
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        duration="1100"
                    ></div>

                    <p
                        className="text-lg sm:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed text-center mb-16"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        duration="1200"
                    >
                        Oferecemos serviços jurídicos especializados com foco em resultados efetivos e atendimento personalizado para cada área do direito.
                    </p>

              
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
                    
                        <div
                            className="h-full bg-blue-200 bg-opacity-70 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition hover:scale-105 flex flex-col"
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            duration="1400"
                        >
                            <span className="mb-4">
                                <img
                                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-home-contact-flatart-icons-outline-flatarticons-1.png"
                                    alt="Departamento Civil"
                                    className="w-12 h-12"
                                />
                            </span>
                            <p className="text-xl font-bold text-black mb-4">Direito Civil</p>
                            <p className="text-blue-900 font-semibold leading-relaxed mb-4">
                                Contratos, responsabilidade civil, direito de família, sucessões, usucapião e questões patrimoniais
                            </p>
                            <p className="font-bold text-black mb-2">Serviços Inclusos:</p>
                            <ul className="space-y-2">
                                {['Contratos', 'Direito de Família', 'Sucessões', 'Responsabilidade Civil'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-black">
                                        <span className="w-3 h-3 bg-blue-900 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <InteractiveHoverButton
                                    borderRadius="1.75rem"
                                    className="bg-white text-black border-neutral-200"
                                >
                                    Saiba mais
                                </InteractiveHoverButton>
                            </div>
                        </div>

                      
                        <div
                            className="h-full bg-blue-200 bg-opacity-70 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition hover:scale-105 flex flex-col"
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            duration="1600"
                        >
                            <span className="mb-4">
                                <img
                                    src="https://img.icons8.com/parakeet-line/48/group.png"
                                    alt="Departamento Trabalhista"
                                    className="w-12 h-12"
                                />
                            </span>
                            <p className="text-xl font-bold text-black mb-4">Direito Trabalhista</p>
                            <p className="text-blue-900 font-semibold leading-relaxed mb-4">
                                Defesa em processos trabalhistas, rescisões, acordos coletivos e consultoria preventiva.
                            </p>
                            <p className="font-bold text-black mb-2">Serviços Inclusos:</p>
                            <ul className="space-y-2">
                                {['Constituição de Empresas', 'Rescisões', 'Acordos Coletivos', 'Consultoria Preventiva'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-black">
                                        <span className="w-3 h-3 bg-blue-900 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <InteractiveHoverButton
                                    borderRadius="1.75rem"
                                    className="bg-white text-black border-neutral-200"
                                >
                                    Saiba mais
                                </InteractiveHoverButton>
                            </div>
                        </div>

                       
                        <div
                            className="h-full bg-blue-200 bg-opacity-70 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition hover:scale-105 flex flex-col"
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            duration="1800"
                        >
                            <span className="mb-4">
                                <img
                                    src="https://img.icons8.com/dotty/80/department.png"
                                    alt="Departamento Empresarial"
                                    className="w-12 h-12"
                                />
                            </span>
                            <p className="text-xl font-bold text-black mb-4">Direito Empresarial</p>
                            <p className="text-blue-900 font-semibold leading-relaxed mb-4">
                                Constituição de empresas, contratos comerciais, recuperação judicial e assessoria societária.
                            </p>
                            <p className="font-bold text-black mb-2">Serviços Inclusos:</p>
                            <ul className="space-y-2">
                                {['Constituição de Empresas', 'Contratos Comerciais', 'Recuperação Judicial', 'Assessoria Societária'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 text-black">
                                        <span className="w-3 h-3 bg-blue-900 rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <InteractiveHoverButton
                                    borderRadius="1.75rem"
                                    className="bg-white text-black border-neutral-200"
                                >
                                    Saiba mais
                                </InteractiveHoverButton>
                            </div>
                        </div>
                    </div>

                    <div
                        className="max-w-3xl w-full mx-auto px-4 py-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl shadow-lg hover:shadow-xl transform transition hover:scale-105 flex flex-col items-center justify-center text-center"
                        data-aos="zoom-in"
                        data-aos-delay="900"
                        duration="1900"
                    >
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Precisa de Orientação Jurídica?</h3>
                        <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-2xl">
                            Nossa equipe está pronta para analisar seu caso e oferecer a melhor solução jurídica.
                        </p>
                        <InteractiveHoverButton className="bg-white text-black rounded-lg font-semibold text-lg hover:bg-blue-900 hover:text-white">
                            Consulta Gratuita
                        </InteractiveHoverButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
