import React from "react";

export default function Navbar() {
  return (
    <header className="bg-rose-800 sticky top-0 z-10 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="title-font font-sans font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Hannah McCabe
          </a>
        </h1>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-rose-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-white hover:text-rose-400">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-rose-400">
            Skills
          </a>
          <a href="#CV" className="mr-5 text-white hover:text-rose-400">
            CV
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-400 hover:text-white rounded text-base text-rose-800 mt-4 md:mt-0"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
