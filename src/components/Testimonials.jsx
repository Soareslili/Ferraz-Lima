"use client";

import CountUp from 'react-countup';

import CARLOS from '../assets/Testemunha1.avif'
import FERNANDA from '../assets/Testemunha3.avif'
import JOÃO from '../assets/Testemunha2.avif'
import PEDRO from '../assets/Testemunha4.jpeg'






import { AnimatedTestimonials } from "./ui/AnimatedTestimonialsDemo";

const testimonials = [
  {
    quote:
      "A equipe do escritório foi extremamente atenciosa e competente. Consegui resolver um processo complexo com tranquilidade e confiança.",
    name: "Carlos Henrique",
    designation: "Empresário",
    src: CARLOS,
  },
  {
    quote:
      "Profissionais sérios, dedicados e com profundo conhecimento jurídico. Recomendo fortemente!",
    name: "Fernanda Lopes",
    designation: "Administradora",
    src: FERNANDA,
  },
  {
    quote:
      "Fui muito bem orientado em todas as etapas do meu caso. O resultado foi além do esperado.",
    name: "João Almeida",
    designation: "Engenheiro Civil",
    src: JOÃO,
  },
  {
    quote:
      "O atendimento foi rápido, transparente e humano. É raro encontrar esse nível de profissionalismo.",
    name: "Pedro Henrique",
    designation: "Médico",
    src: PEDRO,
  },
];


export default function Testimonials() {
  return (
    <main>
      <section id="depoimentos" className="bg-[#f9f9f9] text-[#1a1a1a] py-20 px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="0"
            duration="1000"
            id='Depoimentos'
          >O que dizem nossos clientes</h2>
          <p className=" text-base md:text-lg max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            duration="1200"
          >
            A confiança dos nossos clientes é nosso maior patrimônio. Veja alguns depoimentos sobre nosso trabalho.
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay />

        <div className="flex flex-col sm:flex-row items-center sm:space-x-8 bg-white rounded-2xl px-12 sm:px-8 py-4 shadow-lg w-fit mx-auto space-y-4 sm:space-y-0">
    
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-900">
              <CountUp end={15} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
            </span>
            <p className="text-sm text-slate-600">Satisfação</p>
          </div>

       
          <div className="hidden sm:block w-px h-8 bg-slate-300"></div>

      
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-900">
              <CountUp end={500} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
            </span>
            <p className="text-sm text-slate-600">Clientes Atendidos</p>
          </div>

         
          <div className="hidden sm:block w-px h-8 bg-slate-300"></div>

        
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-blue-900">
              <CountUp end={98} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
            </span>
            <p className="text-sm text-slate-600">Anos de Experiência</p>
          </div>
        </div>

      </section>
    </main>
  );
}
