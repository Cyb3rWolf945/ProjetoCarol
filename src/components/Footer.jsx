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
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Acerca</a>
                </li>
                <li>
                    <a href="product" className="mr-4 hover:underline md:mr-6">Produtos</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Campanhas</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Blog</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Programa de afiliados</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Termos e Condições</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Contactos</a>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center">© 2025 <a href="#" className="hover:underline">Horizon Inclusivee</a>. Direitos reservados.</span>
        </div>
    </footer>
  )
}

export default Footer