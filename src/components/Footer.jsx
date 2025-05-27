import React from 'react'
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="p-4 bg-background-3 md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center ">
            <Link to="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900">
                <img className="h-24 mr-3" src="/logo_icon.jpeg" alt="Horizon Inclusivee"/>  
            </Link>
            <p className="my-6 text-black">🏳‍🌈 A loja mais inclusiva de todo o país.</p>
            <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6 ">Acerca</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Produtos</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6 ">Campanhas</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Blog</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Programa de afiliados</Link>
                </li>
                <li>
                    <Link to="/" className="mr-4 hover:underline md:mr-6">Termos e Condições</Link>
                </li>
                <li>
                    <Link to="/contact" className="mr-4 hover:underline md:mr-6">Contactos</Link>
                </li>
            </ul>
            <br/>
            <span className="text-sm text-gray-500 sm:text-center">Este website usa o tipo de letra <a href="https://opendyslexic.org/">OpenDyslexic</a>. Este é um tipo de letra que facilita a compreensão para aqueles que podem ter dificuldades a ler.</span>
            <br/>
            <span className="text-sm text-gray-500 sm:text-center">© 2025 <Link to="/" className="hover:underline">Horizon Inclusivee</Link>. Direitos reservados.</span>
            <br/>
            <span className="text-sm text-gray-500 sm:text-center">Este website foi desenvolvido por <a href="https://www.linkedin.com/in/antoniog01/" className="hover:underline font-bold">António Gonçalves</a> e <a href="https://www.linkedin.com/in/rui-sim%C3%B5es-aa2763222/" className="hover:underline font-bold">Rui Simões</a>.</span>
        </div>
    </footer>
  )
}

export default Footer