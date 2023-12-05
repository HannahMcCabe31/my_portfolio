import React from "react";

export default function Navbar() {
  return (
    <header className="bg-rose-800 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-5">
        <h1 className="title-font font-sans font-medium text-white hover:text-rose-400 items-center">
          <a href="#about" className=" text-xl">
            Hannah McCabe
          </a>
        </h1>
        <nav className="mr-auto ml-4 py-1 pl-4 border-l border-rose-300 flex items-center text-base">
          <a href="#projects" className="mr-5 text-white hover:text-rose-400">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-white hover:text-rose-400">
            Skills
          </a>
          {/* <a href="#CV" className="mr-5 text-white hover:text-rose-400">
            {/* CV */}
          {/* </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-rose-300 border-0 py-1 px-3 focus:outline-none hover:bg-rose-400 hover:text-white rounded text-base text-rose-800 md:ml-4"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
