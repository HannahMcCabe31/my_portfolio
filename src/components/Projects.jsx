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
            Throughout my coding journey, I've discovered the incredible
            satisfaction and skill enhancement that comes from challenging
            myself to create a variety of projects using newly acquired skills.
            Explore the catalogue below for more details about each of my
            projects so far!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:h-full md:h-full lg:justify-center md:justify-center mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="relative mb-8 group">
              <a
                href={project.link}
                className="block w-full h-full relative overflow-hidden"
              >
                <img
                  alt="gallery"
                  className="w-full h-auto object-cover object-center transition-transform transform group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute top-0 left-0 w-full h-full p-8 bg-rose-300 border-4 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h2 className="mb-1 text-sm tracking-widest text-white font-medium">
                    {project.subtitle}
                  </h2>
                  <h2 className="mb-3 text-lg font-medium text-rose-700">
                    {project.title}
                  </h2>
                  <p className="flex-grow leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import { projects } from "../data";

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-rose-800 text-white body-font">
//       <div className="container px-5 py-20 mx-auto text-center lg:px-40">
//         <div className="mb-20">
//           <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
//             Apps I've Built
//           </h1>
//           <p className="mx-auto lg:w-2/3 leading-relaxed text-base">
//             Throughout my coding journey, I've discovered the incredible satisfaction and skill enhancement that comes from challenging myself to create a variety of projects using newly acquired skills. Explore the catalogue of below for more details about each of my projects so far!
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-4 lg:h-full md:h-full lg:justify-center md:justify-center mx-auto">
//           {projects.map((project) => (
//             <div key={project.id} className="relative mb-8 group">
//               <a href={project.link} className="block w-full h-full">
//                 <img
//                   alt="gallery"
//                   className="w-full h-auto object-cover object-center transition-transform transform group-hover:scale-105"
//                   src={project.image}
//                 />
//               </a>
//               <div className="absolute top-0 left-0 flex flex-col w-full h-full p-8 bg-rose-300 border-4 border-rose-300 hover:w-full opacity-0 group-hover:opacity-100 transition-opacity">
//                 <h2 className="mb-1 text-sm tracking-widest text-white font-medium">
//                   {project.subtitle}
//                 </h2>
//                 <h2 className="mb-3 text-lg font-medium text-rose-700">
//                   {project.title}
//                 </h2>
//                 <p className="flex-grow leading-relaxed">
//                   {project.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { projects } from "../data";

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-rose-800 text-white body-font">
//       <div className="container px-5 py-20 mx-auto text-center lg:px-40">
//         <div className="mb-20">
//           <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
//             Apps I've Built
//           </h1>
//           <p className="mx-auto lg:w-2/3 leading-relaxed text-base">
//             Throughout my coding journey, I've discovered the incredible satisfaction and skill enhancement that comes from challenging myself to create a variety of projects using newly acquired skills. Explore the catalogue of below for more details about each of my projects so far!
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
//           {projects.map((project) => (
//             <div key={project.id} className="relative mb-8 group">
//               <a href={project.link} className="block w-full h-full">
//                 <img
//                   alt="gallery"
//                   className="w-full h-auto object-cover object-center transition-transform transform group-hover:scale-105"
//                   src={project.image}
//                 />
//               </a>
//               <div className="absolute top-0 left-0 w-full h-full p-8 bg-rose-300 border-4 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity">
//                 <h2 className="mb-1 text-sm tracking-widest text-white font-medium">
//                   {project.subtitle}
//                 </h2>
//                 <h2 className="mb-3 text-lg font-medium text-rose-700">
//                   {project.title}
//                 </h2>
//                 <p className="leading-relaxed">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import { projects } from "../data";

// export default function Projects() {
//   return (
//     <section id="projects" className="bg-rose-800 text-white body-font">
//       <div className="container px-5 py-20 mx-auto text-center lg:px-40">
//         <div className="mb-20">
//           <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4 text-white">
//             Apps I've Built
//           </h1>
//           <p className="mx-auto lg:w-2/3 leading-relaxed text-base">
//             Throughout my coding journey, I've discovered the incredible
//             satisfaction and skill enhancement that comes from challenging
//             myself to create a variety of projects using newly acquired skills. Explore the
//             catalogue of below for more details about each of my projects so far!
//           </p>
//         </div>
//         <div className="flex flex-wrap -m-4 lg:flex-row lg:justify-center">
//           {projects.map((project) => (
//             <a
//               href={project.link}
//               key={project.id}
//               className="w-full p-4 lg:w-1/2 mx-auto flex items-center"
//             >
//               <div className="relative flex">
//                 <img
//                   alt="gallery"
//                   className="absolute mx-auto inset-0 h-full w-full object-cover object-center"
//                   src={project.image}
//                 />
//                 <div className="relative z-10 w-full p-8 bg-rose-300 border-4 border-rose-300 opacity-0 hover:opacity-100">
//                   <h2 className="mb-1 text-sm tracking-widest text-white font-medium">
//                     {project.subtitle}
//                   </h2>
//                   <h2 className="mb-3 text-lg font-medium text-rose-700">
//                     {project.title}
//                   </h2>
//                   <p className="leading-relaxed">{project.description}</p>
//                 </div>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
