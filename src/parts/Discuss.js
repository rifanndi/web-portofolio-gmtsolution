/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

export default function Discuss() {
  return (
    <Fade direction="up" triggerOnce>
      <section className="flex container mx-auto justify-center">
        <div className="flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl bg-yellow-100 text-gray-900 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss">
          <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:p-0 sm:items-center">
            <h1 className="w-2/3 text-5xl sm:text-6xl leading-tight font-semibold">
              Have an awesome project in mind?
            </h1>
            <Fade direction="up" triggerOnce delay={500}>
              <div className="mt-4 sm:mt-0 sm:ml-8">
                {" "}
                {/* Add margin to adjust button position */}
                <Button
                  href="https://wa.me/6289519403079"
                  type="link"
                  className="flex text-white bg-[#F1A40E] text-xl lg:text-xl xl:text-lg tracking-wide items-center justify-center w-40 h-10 lg:w-32 lg:h-10 rounded-full shadow-lg border-2 border-[#F1A40E] transition duration-300 hover:bg-yellow-600 hover:shadow-xl transform hover:scale-105"
                >
                  contact me
                </Button>
              </div>
            </Fade>
          </div>
          <Fade delay={300} triggerOnce>
            <p className="font-light p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl mb-1">
              Lets discuss it and make your dream software come true!
            </p>
          </Fade>
        </div>
      </section>
    </Fade>
  );
}
