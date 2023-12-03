import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-rose-800 text-white body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="mb-20">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="mx-auto lg:w-2/3 leading-relaxed text-base">
Since starting to code, I've found that challenging myself to build something has been both incredibly satisfying and an excellent way to hone my skills. So far, I've developed a varity of apps over the course of the School of Code bootcamp as well as in my free time, ranging from a revision app specifically designed to help fellow bootcampers find useful resources, to a React app designed to help with classroom management. I am currently working on developing a book app to be used to find book recommendations and track your reading habits.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="w-full sm:w-1/2 p-4"
            >
              <div className="relative flex">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full  object-cover object-center"
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
