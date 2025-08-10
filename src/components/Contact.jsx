import { MapPin, Phone, EnvelopeSimple, Clock } from "phosphor-react";

export function Contact() {
    return (
        <section  id="contato" className="bg-[#0C0F1F] py-16 sm:py-20">
            <div className="container mx-auto px-4">
          
                <div className="text-center mb-12 sm:mb-16">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        duration="1000"
                    >
                        Entre em Contato
                    </h2>
                    <p
                        className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto px-2"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        duration="1200"
                    >
                        Agende uma consultoria gratuita e descubra como podemos ajudar você ou sua empresa.
                    </p>
                </div>

               
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
               
                    <div className="space-y-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-300">
                            Informações de Contato
                        </h3>

                        {[
                            {
                                icon: <MapPin size={30} className="text-blue-300 shrink-0" />,
                                title: "Endereço",
                                text: <>Rua das Flores, 123 - Sala 456<br />Centro, São Paulo - SP<br />CEP: 01234-567</>
                            },
                            {
                                icon: <Phone size={30} className="text-blue-300 shrink-0" />,
                                title: "Telefones",
                                text: <>(11) 3456-7890<br />(11) 98765-4321</>
                            },
                            {
                                icon: <EnvelopeSimple size={30} className="text-blue-300 shrink-0" />,
                                title: "E-mail",
                                text: <>contato@ferrazlima.com.br</>
                            },
                            {
                                icon: <Clock size={30} className="text-blue-300 shrink-0" />,
                                title: "Horário de Funcionamento",
                                text: <>Segunda à Sexta: 8h às 18h<br />Sábados: 8h às 12h</>
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <h4 className="text-white font-semibold">{item.title}</h4>
                                    <p className="text-slate-300">{item.text}</p>
                                </div>
                            </div>
                        ))}

                     
                        <div className="bg-blue-500 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 mt-8 gap-4 sm:gap-0">
                            <div>
                                <p className="text-white font-semibold text-lg">Atendimento via WhatsApp</p>
                                <p className="text-white text-sm">Resposta rápida e personalizada</p>
                            </div>
                            <a
                                href="https://wa.me/5511987654321"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition w-full sm:w-auto text-center"
                            >
                                Conversar
                            </a>
                        </div>
                    </div>

                 
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-blue-300">
                            Envie sua Mensagem
                        </h3>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm">Nome completo</label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full h-10 px-3 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">Telefone</label>
                                    <input
                                        type="text"
                                        placeholder="(11) 99999-9999"
                                        className="w-full h-10 px-3 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm">E-mail</label>
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="w-full h-10 px-3 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="text-white text-sm">Mensagem</label>
                                <textarea
                                    rows="4"
                                    placeholder="Descreva brevemente sua necessidade jurídica..."
                                    className="w-full px-3 py-2 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto cursor-pointer"
                            >
                                ➤ Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
