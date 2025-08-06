import {
    WhatsappLogo,
    InstagramLogo,
    FacebookLogo,
} from "phosphor-react";

import { MapPin, Phone, EnvelopeSimple } from "phosphor-react";





export function Footer() {
    return (
        <div className="bg-[#0C0F1F] container w-full px-4 py-12 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                     
                        <span className="text-white font-bold text-lg bg-blue-900 px-2 py-2 rounded-2xl">
                            F&L
                        </span>

                      
                        <div>
                            <div className="flex flex-col items-baseline space-x-2">
                                <h3 className="text-xl font-bold text-white">Ferraz & Lima</h3>
                                <p className="text-sm text-slate-400">Advogados Associados</p>
                            </div>

                            <p className="text-slate-300 max-w-md mt-4">
                                Há mais de 15 anos oferecendo soluções jurídicas personalizadas com excelência, ética e dedicação total aos nossos clientes.
                            </p>
                        </div>
                    </div>


                    <div className="flex space-x-4">
                        <a href="https://wa.me/5511987654321" target="_blank">
                            <WhatsappLogo size={32} className="text-green-500 hover:text-green-300 transition" />
                        </a>
                        <a href="https://instagram.com/seuPerfil" target="_blank">
                            <InstagramLogo size={32} className="text-pink-500 hover:text-pink-300 transition" />
                        </a>
                        <a href="https://facebook.com/seuPerfil" target="_blank">
                            <FacebookLogo size={32} className="text-blue-600 hover:text-blue-400 transition" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Contato</h4>

                    <div className="space-y-3">
                        <div className="flex items-start gap-4">
                            <MapPin size={30} className="text-blue-300" />
                            <div>
                                <p className="text-slate-300">
                                    Rua das Flores, 123 - Sala 456<br />
                                    Centro, São Paulo - SP<br />
                                    CEP: 01234-567
                                </p>
                            </div>
                        </div>

                        <div className=" flex items-center space-x-2">
                            <Phone size={30} className="text-blue-300 gap-4" />
                            <p className="text-slate-300"> (11) 3456-7890 </p>
                        </div>

                        <div className="flex text-slate-300 text-sm gap-4">
                            <EnvelopeSimple size={30} className="text-blue-300" />
                            <p> contato@ferrazlima.com.br </p>
                        </div>

                    </div>

                </div>

                <div>
                    <h4 className="font-semibold text-white mb-4">Áreas de Atuação</h4>

                    <ul className="space-y-2 cursor-pointer">
                        <li><a className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Direito Civil</a></li>
                        <li><a className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Direito Trabalhista</a></li>
                        <li><a className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Direito Empresarial</a></li>
                        <li><a className="text-slate-300 hover:text-blue-400 transition-colors text-sm">Direito Jurídica</a></li>
                    </ul>

                </div>
            </div>

            <div className=" border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-slate-600">© 2024 Ferraz & Lima Advogados Associados. Todos os direitos reservados.</p>
                    <p className="mt-1 text-slate-600">CNPJ: 12.345.678/0001-90 | OAB/SP: 123.456 e 654.321</p>
                </div>
                <div>
                    <p className="text-slate-600 mr-10">Desenvolvido por Lidiane Santos Soares</p>
                </div>
            </div>

        </div>
    )
}