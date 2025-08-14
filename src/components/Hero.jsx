import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X } from 'lucide-react';

import CountUp from 'react-countup';


import BG from "../assets/hero.png";





export function Hero() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        AOS.init({
            duration: 1000,
            once: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-black/90"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

                    <a
                        href="#inicio"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                            <span className={`font-bold text-lg ${scrolled ? "text-black" : "text-white"}`}>F&L</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`font-playfair text-xl font-bold ${scrolled ? "text-black" : "text-white"}`}>Ferraz & Lima</h1>
                            <p className={`text-sm ${scrolled ? "text-gray-700" : "text-gray-300"}`}>Advogados Associados</p>
                        </div>
                    </a>


                    <nav className="hidden lg:flex items-center space-x-8">
                        {["Sobre", "Áreas de Atuação", "Advogados", "Depoimentos", "Contato"].map(
                            (item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item
                                        .normalize("NFD")
                                        .replace(/[\u0300-\u036f]/g, "")
                                        .toLowerCase()}`}
                                    className={`font-medium transition-colors duration-300 hover:text-blue-900 ${scrolled ? "text-black" : "text-white"
                                        }`}
                                >
                                    {item}
                                </a>
                            )
                        )}
                        <a
                            href="#contato"
                            className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transform duration-300 hover:scale-105"
                        >
                            Agende uma Consultoria
                        </a>
                    </nav>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`focus:outline-none ${scrolled ? "text-blue-900 cursor-pointer" : "text-white cursor-pointer"
                                }`}
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>


                {menuOpen && (
                    <div className="lg:hidden bg-white shadow-md px-6 py-4 space-y-4 z-50 relative">
                        {["Sobre", "Serviços", "Advogados", "Depoimentos", "Contato"].map(
                            (item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item
                                        .normalize("NFD")
                                        .replace(/[\u0300-\u036f]/g, "")
                                        .toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="block text-gray-700 font-medium"
                                >
                                    {item}
                                </a>
                            )
                        )}
                        <a
                            href=" https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
                            className="inline-block w-full text-center text-white font-medium bg-blue-900 px-4 py-2 rounded-md"
                        >
                            Agende uma Consultoria
                        </a>
                    </div>
                )}
            </header>


            <main
            id="inicio"
                className="w-full h-full mx-auto px-4 py-45 flex flex-col items-center justify-center"
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#000",
                }}
            >
                <div className="flex flex-col items-center space-y-4 lg:w-1/2 mt-20">
                    <h1 className="text-3xl md:text-6xl text-[#1555B4] font-playfair font-bold mb-6 leading-tight text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        duration="1000"
                    >
                        Justiça e Excelência
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-6 text-center"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        duration="1100"
                    >
                        Há mais de 15 anos defendendo seus direito
                        com competência, ética e dedicação. Especialistas em
                        Direito Civil, Trabalhista e Empresarial.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        duration="1200"
                    >
                        <a href=" https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0" className=" text-white cursor-pointer border bg-gray-300/30 border-gray-700 px-4 py-4 rounded-lg transform duration-300 hover:scale-105 text-center">Entre em Contato Conosco</a>
                        <a href="#servicos" className="text-white cursor-pointer border bg-gray-300/30 border-gray-700 px-4 py-4 rounded-lg transform duration-300 hover:scale-105 text-center">Conheça Nossos Serviços</a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 mt-10 text-white justify-center items-center">


                        <div
                            className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="800"
                            duration="1600"
                        >
                            <p className="text-3xl font-bold text-blue-300">
                                <CountUp end={15} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
                            </p>
                            <p className="text-blue-100">Anos de Experiência</p>
                        </div>


                        <div
                            className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="900"
                            duration="1800"
                        >
                            <p className="text-3xl font-bold text-blue-300">
                                <CountUp end={500} duration={2} suffix="+" enableScrollSpy scrollSpyOnce />
                            </p>
                            <p className="text-blue-100">Casos Resolvidos</p>
                        </div>


                        <div
                            className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            duration="1900"
                        >
                            <p className="text-3xl font-bold text-blue-300">
                                <CountUp end={98} duration={2} suffix="%" enableScrollSpy scrollSpyOnce />
                            </p>
                            <p className="text-blue-100">Taxa Sucesso</p>
                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}