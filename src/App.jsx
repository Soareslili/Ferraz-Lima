import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Service } from "./components/Service"
import { Lawyers } from "./components/lawyers"
import Testimonials from "./components/testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

import { FaWhatsapp } from "react-icons/fa";


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




function App() {

   useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 100,   
      once: true,    
    });
  }, []);


  return (
    <>

      <Hero />
      <About />
      <Service/>
      <Lawyers />
      <Testimonials/>
      <Contact/>
      <Footer/>

       <a
                href="https://api.whatsapp.com/send/?phone=556899998899&text=Olá%20gostaria%20de%20saber%20mais%20sobre%20os%20trabalho&type=phone_number&app_absent=0"
                className="fixed bottom-4 right-4 z-[99] group"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="w-[50px] h-[50px] text-green-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute right-14 top-1 w-[140px] px-3 py-2 rounded-lg text-center text-sm font-medium bg-white text-blue-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Conheça nossos Trabalho
                </span>
            </a>
    </>
  )
}

export default App
