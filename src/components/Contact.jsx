import { MapPin, Phone, EnvelopeSimple, Clock } from "phosphor-react";

export function Contact() {
    return (
        <section className="bg-[#0C0F1F] py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Agende uma consultoria gratuita e descubra como podemos ajudar você ou sua empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-blue-300">Informações de Contato</h3>

                        <div className="flex items-start gap-4">
                           <MapPin size={30} className="text-blue-300" />
                            <div>
                                <h4 className="text-white font-semibold">Endereço</h4>
                                <p className="text-slate-300">
                                    Rua das Flores, 123 - Sala 456<br />
                                    Centro, São Paulo - SP<br />
                                    CEP: 01234-567
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <Phone size={30} className="text-blue-300" />
                            <div>
                                <h4 className="text-white font-semibold">Telefones</h4>
                                <p className="text-slate-300">
                                    (11) 3456-7890<br />
                                    (11) 98765-4321
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <EnvelopeSimple size={30} className="text-blue-300" />
                            <div>
                                <h4 className="text-white font-semibold">E-mail</h4>
                                <p className="text-slate-300">contato@ferrazlima.com.br</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                        <Clock size={30} className="text-blue-300" />
                            <div>
                                <h4 className="text-white font-semibold">Horário de Funcionamento</h4>
                                <p className="text-slate-300">
                                    Segunda à Sexta: 8h às 18h<br />
                                    Sábados: 8h às 12h
                                </p>
                            </div>
                        </div>

                   
                        <div className="bg-blue-500 rounded-xl flex items-center justify-between px-6 py-4 mt-10">
                            <div>
                                <p className="text-white font-semibold text-lg">Atendimento via WhatsApp</p>
                                <p className="text-white text-sm">Resposta rápida e personalizada</p>
                            </div>
                            <a
                                href="https://wa.me/5511987654321"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition"
                            >
                                Conversar
                            </a>
                        </div>
                    </div>

                
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-300">Envie sua Mensagem</h3>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm">Nome completo</label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full h-10 px-3 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm">Telefone</label>
                                    <input
                                        type="text"
                                        placeholder="(11) 99999-9999"
                                        className="w-full h-10 px-3 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm">E-mail</label>
                                <input
                                    type="email"
                                    placeholder="seu@email.com"
                                    className="w-full h-10 px-3 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <label className="text-white text-sm">Mensagem</label>
                                <textarea
                                    rows="4"
                                    placeholder="Descreva brevemente sua necessidade jurídica..."
                                    className="w-full px-3 py-2 rounded-md border border-white/30 bg-transparent text-white placeholder:text-gray-400 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
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
