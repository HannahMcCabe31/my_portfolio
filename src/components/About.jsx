import React from "react";
import avatar from "./final avatar-no background.png";

export default function About() {
  return (
    <section id="about" className="lg:py-10 py-20 px-10">
      {/* Container for flex layout */}
      <div className="container mx-auto flex flex-col md:flex-row md:items-center text-center">
        {/* Left column for text content */}
        <div className="md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24 flex flex-col items-center md:items-start md:text-left mb-16 md:mb-0">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-rose-800">
            Hi, I'm Hannah.
            <br className="hidden lg:inline-block" />
          </h1>
          {/* Paragraph of text */}
          <p className="mb-8 leading-relaxed text-rose-800">
            Language enthusiast turned full stack web developer with a
            particular passion for Javascript and creating visually attractive,
            user-friendly front-end experiences. With a strong background in
            teaching French and German, I've always loved breaking down complex
            concepts. I’m now channeling my passion for communication and
            problem-solving into the world of coding and web development as a
            full-time student at the School of Code Bootcamp and love the
            creative process of turning ideas into interactive web interfaces
            that engage and captivate users.
          </p>
          {/* Button links */}
          <div className="flex justify-center items-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-rose-800 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 rounded text-lg"
            >
              Work with Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-rose-800 bg-rose-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 hover:text-white rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>

        {/* Right column for the image */}
        <div className="md:w-1/4 w-full md:w-2/3 max-w-lg mx-auto md:mx-0">
          {/* Image */}
          <img
            className="object-cover object-center rounded md:float-right "
            alt="avatar"
            src={avatar}
          />
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import avatar from "./final avatar-no background.png";

// export default function About() {
//   return (
//     <section id="about" className="py-20 px-10 flex flex-col items-center">
//       <div className="container mx-auto md:flex-row flex-col md:items-center text-center">
//         <div className="md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24 flex flex-col items-center md:items-start md:text-left mb-16 md:mb-0">
//           <h1 className="text-3xl sm:text-4xl mb-4 font-medium text-rose-800">
//             Hi, I'm Hannah.
//             <br className="hidden lg:inline-block" />
//           </h1>
//           <p className="mb-8 leading-relaxed text-rose-800">
//             Language enthusiast turned full stack web developer with a
//             particular passion for Javascript and creating visually attractive,
//             user-friendly front-end experiences. With a strong background in
//             teaching French and German, I've always loved breaking down complex
//             concepts. I’m now channeling my passion for communication and
//             problem-solving into the world of coding and web development as a
//             full-time student at the School of Code Bootcamp and love the
//             creative process of turning ideas into interactive web interfaces
//             that engage and captivate users.
//           </p>
//           <div className="flex justify-center">
//             <a
//               href="#contact"
//               className="inline-flex text-white bg-rose-800 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 rounded text-lg"
//             >
//               Work with Me
//             </a>
//             <a
//               href="#projects"
//               className="ml-4 inline-flex text-rose-800 bg-rose-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 hover:text-white rounded text-lg"
//             >
//               See My Projects
//             </a>
//           </div>
//         </div>
//         <div className="md:w-1/4 w-1/2 lg:max-w-lg lg:w-full">
//           <img
//             className="object-cover object-center rounded"
//             alt="avatar"
//             src={avatar}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }
