import {
  WhatsappLogo,
  InstagramLogo,
  FacebookLogo,
} from "phosphor-react";

import { MapPin, Phone, EnvelopeSimple } from "phosphor-react";

export function Footer() {
  return (
    <footer className="bg-[#0C0F1F] w-full px-4 py-12 border-t border-gray-800">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
     
        <div className="lg:col-span-2">
          <div className="flex items-start space-x-4 mb-6">
            <span className="text-white font-bold text-lg bg-blue-900 px-3 py-2 rounded-2xl">
              F&L
            </span>

            <div>
              <h3 className="text-xl font-bold text-white">Ferraz & Lima</h3>
              <p className="text-sm text-slate-400">Advogados Associados</p>
              <p className="text-slate-300 mt-4 max-w-md">
                Há mais de 15 anos oferecendo soluções jurídicas personalizadas
                com excelência, ética e dedicação total aos nossos clientes.
              </p>
            </div>
          </div>

     
          <div className="flex space-x-4 mt-4">
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo
                size={32}
                className="text-green-500 hover:text-green-300 transition"
              />
            </a>
            <a
              href="https://instagram.com/seuPerfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo
                size={32}
                className="text-pink-500 hover:text-pink-300 transition"
              />
            </a>
            <a
              href="https://facebook.com/seuPerfil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLogo
                size={32}
                className="text-blue-600 hover:text-blue-400 transition"
              />
            </a>
          </div>
        </div>

      
        <div>
          <h4 className="font-semibold text-white mb-4">Contato</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={24} className="text-blue-300" />
              <p className="text-slate-300 text-sm">
                Rua das Flores, 123 - Sala 456 <br />
                Centro, São Paulo - SP <br />
                CEP: 01234-567
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={24} className="text-blue-300" />
              <p className="text-slate-300 text-sm">(11) 3456-7890</p>
            </div>

            <div className="flex items-center gap-3">
              <EnvelopeSimple size={24} className="text-blue-300" />
              <p className="text-slate-300 text-sm">
                contato@ferrazlima.com.br
              </p>
            </div>
          </div>
        </div>

       
        <div>
          <h4 className="font-semibold text-white mb-4">Áreas de Atuação</h4>
          <ul className="space-y-2">
            {[
              "Direito Civil",
              "Direito Trabalhista",
              "Direito Empresarial",
              "Direito Jurídico",
            ].map((area, idx) => (
              <li key={idx}>
                <a className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                  {area}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

  
      <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto text-center md:text-left">
        <div className="text-slate-600 text-xs sm:text-sm space-y-1">
          <p>
            © 2024 Ferraz & Lima Advogados Associados. Todos os direitos
            reservados.
          </p>
          <p>CNPJ: 12.345.678/0001-90 | OAB/SP: 123.456 e 654.321</p>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm">
          Desenvolvido por Lidiane Santos Soares
        </p>
      </div>
    </footer>
  );
}
