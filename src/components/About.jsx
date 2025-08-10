import CountUp from 'react-countup';

export function About() {
  return (
    <section  id='sobre' className="py-16 bg-[#C9DCF3] flex justify-center">
      <div className="container mx-auto px-4">
        <div className="mb-12">
   
          <h2
         
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center"
            data-aos="fade-up"
          >
            Sobre o Escritório
          </h2>

       
          <div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"
            data-aos="fade-up"
          ></div>

         
          <p
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-center px-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Fundado em 2008, o Ferraz & Lima Advogados Associados é reconhecido
            pela excelência no atendimento e pela eficiência na resolução de
            questões jurídicas complexas.
          </p>

      
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-12">
       
            <div className="space-y-8">
              <div data-aos="fade-right">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mb-3">
                  Nossa Missão
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Oferecer soluções jurídicas inovadoras e eficazes, sempre
                  priorizando os interesses dos nossos clientes e construindo
                  relacionamentos duradouros baseados na confiança e no sucesso
                  mútuo.
                </p>
              </div>

              <div data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mb-3">
                  Nossa Visão
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
                  Ser reconhecido como o escritório de advocacia de referência,
                  destacando-se pela qualidade técnica, inovação e
                  comprometimento com a justiça e os direitos dos nossos
                  clientes.
                </p>
              </div>

              <div className="flex items-center mt-4" data-aos="fade-right" data-aos-delay="400">
                ✅
                <p className="text-slate-700 font-medium ml-2 text-sm sm:text-base">
                  AOB regularizada desde 2008
                </p>
              </div>
            </div>

         
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-6 sm:p-8 text-white flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { end: 15, suffix: '+', label: 'Anos de Experiência' },
                  { end: 500, suffix: '+', label: 'Casos Resolvidos' },
                  { end: 98, suffix: '%', label: 'Taxa de Sucesso' },
                  { end: 24, suffix: 'h', label: 'Resposta Média' }
                ].map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                      <CountUp
                        end={stat.end}
                        duration={2}
                        suffix={stat.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </p>
                    <p className="text-gray-200 text-xs sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

    
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: 'https://img.icons8.com/ios/50/scales.png',
                title: 'Ética e Transparência',
                desc: 'Atuamos com total transparência e integridade em todos os nossos processos.'
              },
              {
                icon: 'https://img.icons8.com/parakeet-line/48/group.png',
                title: 'Atendimento Personalizado',
                desc: 'Cada cliente recebe atenção exclusiva e soluções jurídicas sob medida.'
              },
              {
                icon: 'https://img.icons8.com/dotty/80/prize.png',
                title: 'Excelência',
                desc: 'Nosso compromisso é entregar resultados de alta qualidade e confiabilidade.'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 flex flex-col items-center text-center"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 200}
              >
                <img src={card.icon} alt={card.title} className="w-12 h-12 mb-3" />
                <p className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">{card.title}</p>
                <p className="text-slate-500 text-sm sm:text-base">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
