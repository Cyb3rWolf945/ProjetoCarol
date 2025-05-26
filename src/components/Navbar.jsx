import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router'

function NavItem (props) {
    const location = useLocation();
    console.log(location.pathname)
    return (<>
        {location.pathname === props.path &&
        <Link to={props.path} className="rounded-md bg-background border-2 border-solid border-background px-3 py-2 text-sm font-medium text-textColor" aria-current="page">{props.name}</Link>
        }
        {location.pathname !== props.path &&
        <Link to={props.path} className="rounded-md px-3 py-2 text-sm font-medium text-textColor border-2 bg-background-2 border-solid border-background hover:bg-background-4 hover:text-white" aria-current="page">{props.name}</Link>
        }
    </>)
}

function Navbar() {
  return (
  <nav className="bg-background-3">
  <div className="mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
       
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-textColor hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
 
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center">
        <Link to="/">
            <img className="h-10" src="/logo_icon.jpeg" alt="Horizon inclusivee"/>
        </Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <NavItem name="Produtos" path="/product"/>
            <NavItem name="Contactos" path="/contact"/>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
        <Link to="/cart">
          <button type="button" className="relative rounded-full bg-background-2 p-1 border-white border-2 text-black hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">Comprar</span>
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar