import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-5">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-medium title-font text-rose-800 mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="mx-auto lg:w-2/4 leading-relaxed text-base lg:w-3/4 text-rose-800">
            Over the course of the School of Code bootcamp, I have developed the following web development skills through lectures, workshops, independent study and challenging myself to put these skills to the test by developing a variety of different projects. 
          </p>
        </div>
        <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2 lg:w-4/5">
          {skills.map((skill) => (
            <div key={skill} className="w-full sm:w-1/2 p-2">
              <div className="h-full bg-rose-800 rounded flex items-center p-4">
                <span className="text-white font-medium title-font">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
