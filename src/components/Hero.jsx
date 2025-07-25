import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import BG from "../assets/hero.png";





export function Hero() {
    const [scrolled, setScrolled] = useState(false);

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
            <header className={` h-full px-4 py-5 transition-colors duration-300 flex justify-center ${scrolled ? "bg-white shadow" : "bg-black/89 text-white"}`}>
                <div className="flex items-center justify-center gap-30 w-full max-w-7xl">
                    <div className='flex items-center space-x-2'>
                        <div className={`w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center`}>
                            <span className={`font-bold text-lg ml-1 ${scrolled ? "text-black" : "text-white"}`}>F&L</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className={`font-playfair text-xl font-bold ${scrolled ? "text-black" : "text-white"}`}>Ferraz & Lima</h1>
                            <p className={`text-sm ${scrolled ? "text-gray-700" : "text-gray-500"}`}>Advogados Associados</p>
                        </div>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-8 cursor-pointer">

                        <a className={`font-medium transition-colors duration-300 hover:text-blue-900 ${scrolled ? "text-black" : ""}`}>Sobre</a>
                        <a className={`font-medium transition-colors duration-300 hover:text-blue-900 ${scrolled ? "text-black" : ""}`}>Áreas de Atuação</a>
                        <a className={`font-medium transition-colors duration-300 hover:text-blue-900 ${scrolled ? "text-black" : ""}`}>Advogados</a>
                        <a className={`font-medium transition-colors duration-300 hover:text-blue-900 ${scrolled ? "text-black" : ""}`}>Depoimentos</a>
                        <a className={`font-medium transition-colors duration-300 hover:text-blue-900 ${scrolled ? "text-black" : ""}`}>Contato</a>
                        <button className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-2.5 rounded-lg cursor-pointer font-medium transform duration-300 hover:scale-105">Agende uma Consultoria</button>
                    </nav>
                </div>
            </header>

            <main
                className="w-full h-full mx-auto px-4 py-39 flex flex-col items-center justify-center"
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
                        <a className=" text-white cursor-pointer border bg-gray-300/30 border-gray-700 px-4 py-4 rounded-lg transform duration-300 hover:scale-105 text-center">Agende um Consultoria</a>
                        <a className="text-white cursor-pointer border bg-gray-300/30 border-gray-700 px-4 py-4 rounded-lg transform duration-300 hover:scale-105 text-center">Conheça Nossos Serviços</a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8 mt-10 text-white justify-center items-center"
                    
                        
                    >
                        <div className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="800"
                            duration="1500"
                        >

                            <p className="text-3xl font-bold text-blue-300">15+</p>
                            <p className="text-blue-100">Anos de Experiência</p>
                        </div>

                        <div className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="900"
                            duration="1600"
                        >
                            <p className="text-3xl font-bold text-blue-300">500+</p>
                            <p className="text-blue-100">Casos Resolvidos</p>
                        </div>

                        <div className="flex flex-col items-center"
                            data-aos="fade-up"
                            data-aos-delay="1000"
                            duration="1700">

                            <p className="text-3xl font-bold text-blue-300">98%</p>
                            <p className="text-blue-100">Taxa Sucesso</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}