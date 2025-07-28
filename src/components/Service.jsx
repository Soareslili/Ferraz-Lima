import { InteractiveHoverButton } from './ui/InteractiveHoverButtonProps';

import BG from '../assets/Advocacia.png';

export function Service() {
    return (
        <section
            className="py-40 flex justify-center relative"
            style={{
                backgroundColor: '#C9DCF3',
                color: '#1E293B',
            }}
        >
            {/* Imagem de fundo com transparência */}
            <div
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.5, // Mais transparente
                }}
                className="absolute inset-0 w-full h-full z-0"
                aria-hidden="true"
            />
            <div className='container mx-auto px-4 relative z-10'>
                <div className='mb-20'>
                    <h2 className="text-4xl font-bold mb-4  text-center">
                        Area de Atuação
                    </h2>
                    <p className="text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed text-center mb-20">
                        Oferecemos serviços jurídicos especializados com foco em resultados efetivos e
                        atendimento personalizado para cada área do direito.
                    </p>

                    <div className='grid lg:grid-cols-3 gap-12 items-stretch mb-16'>

                        <div className="h-full min-h-[500px] bg-blue-200 opacity-70 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-shadow hover:scale-105 flex flex-col ">
                            <span className="text-5xl text-blue-600 mb-2">
                                <img src='https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-home-contact-flatart-icons-outline-flatarticons-1.png' alt='Departamento Civil' />
                            </span>

                            <p className="text-xl font-semibold text-black mb-4 ">Direito Civil</p>

                            <p className="text-slate-500 leading-relaxed mb-4">
                                Contratos, responsabilidade civil, direito de família, sucessões, usucapião e questões patrimoniais
                            </p>

                            <p className='font-bold text-black mb-2'>Serviços Inclusos:</p>

                            <ul className='space-y-2'>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Contratos
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Direito de Família
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Sucessões
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Responsabilidade Civil
                                </li>
                            </ul>

                            <div className="mt-6">
                                <InteractiveHoverButton
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Saiba mais
                                </InteractiveHoverButton>
                            </div>

                        </div>

                        <div className="h-full min-h-[500px] bg-blue-200 opacity-70 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-shadow hover:scale-105 flex flex-col">
                            <span className="text-5xl text-blue-600 mb-2">
                                <img src='https://img.icons8.com/parakeet-line/48/group.png' alt='Departamento Trabalhista' />
                            </span>

                            <p className="text-xl font-semibold text-black mb-4 ">Direito Trabalhista</p>

                            <p className="text-slate-500 leading-relaxed mb-4">
                                Defesa em processos trabalhistas, rescisões, acordos coletivos e consultoria preventiva.
                            </p>

                            <p className='font-bold text-black mb-2'>Serviços Inclusos:</p>

                            <ul className='space-y-2'>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Constituição de Empresas
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Rescisões
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Acordos Coletivos
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Consultoria Preventiva
                                </li>
                            </ul>
                             <div className="mt-17">
                                <InteractiveHoverButton
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Saiba mais
                                </InteractiveHoverButton>
                            </div>
                        </div>

                        <div className="h-full min-h-[500px] bg-blue-200 opacity-70 rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition-shadow hover:scale-105 flex flex-col">
                            <span className="text-5xl text-blue-600 mb-2">
                                <img src='https://img.icons8.com/dotty/80/department.png' alt='Departamento Civil' />
                            </span>

                            <p className="text-xl font-semibold text-black mb-4 ">Direito Empresarial</p>

                            <p className="text-slate-500 leading-relaxed mb-4">
                                Constituição de empresas, contratos
                                comerciais, recuperação judicial e
                                assessoria societária
                            </p>

                            <p className='font-bold text-black mb-2'>Serviços Inclusos:</p>

                            <ul className='space-y-2'>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Constituição de Empresas
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Contratos Comerciais
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Recuperação Judicial
                                </li>
                                <li className='flex items-center gap-2 text-black'>
                                    <span className='w-3 h-3 bg-blue-900 rounded-full'></span>
                                    Assessoria Societária
                                </li>
                            </ul>
                             <div className="mt-6">
                                <InteractiveHoverButton
                                    borderRadius="1.75rem"
                                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                                >
                                    Saiba mais
                                </InteractiveHoverButton>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </section>
    );
}
