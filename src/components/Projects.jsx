import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-rose-800 text-white body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="mb-20">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="mx-auto lg:w-2/3 leading-relaxed text-base">
            Over the course of my coding journey so far, I've found that
            challenging myself to put newly-developed skills to the test and
            build something has been both incredibly satisfying and an excellent
            way to hone these skills. Please find below a catalogue of my
            projects so far. Hover and click on each one to find out more
            information!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 lg:flex-row lg:justify-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="w-full p-4 lg:w-1/2 mx-auto flex items-center"
            >
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute mx-auto inset-0 h-full object-cover object-center"
                  src={project.image}
                />
                <div className="relative z-10 w-full p-8 bg-rose-300 border-4 border-rose-300 opacity-0 hover:opacity-100">
                  <h2 className="mb-1 text-sm tracking-widest text-white font-medium">
                    {project.subtitle}
                  </h2>
                  <h2 className="mb-3 text-lg font-medium text-rose-700">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
