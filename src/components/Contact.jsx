import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative bg-rose-800">
      <div className="container px-5 py-40 mx-auto flex flex-col md:flex-row  ">
        <div className="flex flex-col mx-auto md:mb-0 md:items-start  leading-relaxed">
          <h2 className="relative mb-4 text-white sm:text-4xl text-3xl font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 md:mr-20 text-white">
            If you have any questions please get in touch, I would love to hear
            from you!
          </p>
        </div>
        <div className="relative  bg-gray-900 rounded-lg p-40 flex items-end justify-start mx-auto w-full h-full">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Oxford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="absolute bottom-2 left-2 bg-rose-300 p-6 rounded shadow-md">
            <div className="px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 inline">Oxford, UK</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white text-xs ">
                EMAIL
              </h2>
              <a
                href="mailto:hmccabe.hm@gmail.com"
                className="max-w-100 text-rose-700 leading-relaxed hover:text-rose-500"
              >
                hmccabe.hm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

//   return (
//     <section id="contact" className="relative bg-rose-800">
//       <div className="container px-5 py-40 mx-auto flex flex-col md:flex-row  ">
//         <div className="flex flex-col mx-auto mb-0 md:items-start  leading-relaxed">
//           <h2 className="relative mb-4 text-white sm:text-4xl text-3xl font-medium title-font">
//             Contact Me
//           </h2>
//           <p className="leading-relaxed mb-5 mr-20 text-white">
//             If you have any questions please get in touch, I would love to hear
//             from you!
//           </p>
//         </div>
//         <div className="w-2/3 h-2/3 bg-gray-900 rounded-lg   p-40 flex items-end justify-start relative mx-auto">
//           <iframe
//             width="100%"
//             height="100%"
//             title="map"
//             className="absolute inset-0"
//             style={{ filter: "opacity(0.7)" }}
//             src="https://www.google.com/maps/embed/v1/place?q=Oxford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
//           />
//           <div className="bg-rose-300 relative flex flex-col py-6 rounded shadow-md">
//             <div className=" px-6">
//               <h2 className="title-font font-semibold text-white tracking-widest text-xs">
//                 ADDRESS
//               </h2>
//               <p className="mt-1 inline">
//                 Oxford, UK <br />
//               </p>
//             </div>
//             <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//               <h2 className="title-font font-semibold text-white text-xs ">
//                 EMAIL
//               </h2>
//               <a
//                 href="mailto:hmccabe.hm@gmail.com"
//                 className="max-w-100 text-rose-700 leading-relaxed hover:text-rose-500"
//               >
//                 hmccabe.hm@gmail.com
//               </a>
//               {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
//                 PHONE
//               </h2>
//               <p className="leading-relaxed">+447551647612</p> */}
//             </div>
//           </div>
//         </div>
//         {/* {/* <form
//           name="contact"
//           method="post"
//           data-netlify="true"
//           data-netlify-honeypot="bot-field"
//           onSubmit={handleSubmit}
//           className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
//         > */}

//         {/* <div className="relative mb-4">
//             <label htmlFor="name" className="leading-7 text-sm text-white">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full bg-rose-200 rounded focus:ring-2 focus:ring-white text-base outline-none text-rose-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-white">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full bg-rose-200 rounded focus:ring-2 focus:ring-white text-base outline-none text-rose-800 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="message" className="leading-7 text-sm text-white">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               className="w-full bg-rose-200 rounded focus:ring-2 focus:ring-white text-base outline-none text-rose-800 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-rose-800 bg-rose-200 border-0 py-2 px-6 focus:outline-none hover:bg-rose-400 hover:text-white rounded text-lg"
//           >
//             Submit
//           </button>
//         </form> */}
//       </div>
//     </section>
//   );
// }
