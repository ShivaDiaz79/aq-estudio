import React, { useState } from "react";
import Link from "next/link";
import CuadritoMovil from "../svg/cuadritoMovil";
import Flechita from "../svg/Flechita";
import LogoNavegacion from "./LogoNavegacion";
import MenuFlotante from "./MenuFlotante";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-8 sm:border-orange-600 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
        <LogoNavegacion />
        <button
          onClick={toggleDropdown}
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded={isDropdownOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <CuadritoMovil />
        </button>
        <div
          id="mega-menu-full"
          className={`items-center justify-between font-medium ${
            isDropdownOpen ? "block" : "hidden"
          } md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href=" /"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Servicios <Flechita />
              </button>
            </li>
            <li>
              <Link
                href="/quienesSomos"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Quienes Somos
              </Link>
            </li>
            <li>
              <Link
                href="./trabajos"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Trabajos
              </Link>
            </li>
            <li>
              <Link
                href=" ./contacto"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="mega-menu-full-dropdown"
        className={`mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        <div>
          <MenuFlotante />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
