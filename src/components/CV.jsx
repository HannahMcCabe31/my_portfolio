import React from "react";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-10 px-5 mx-auto text-center bg-rose-800">
      <h1 className="text-3xl sm:text-4xl font-medium title-font text-white mb-12">
        CV
      </h1>
      <div className="flex flex-wrap m-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full md:w-1/2 p-4">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <p className="mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="inline-flex items-center">
                <img
                  alt={`testimonial-${testimonial.id}`}
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="text-white font-medium title-font">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-gray-500 uppercase">
                    {testimonial.company}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
