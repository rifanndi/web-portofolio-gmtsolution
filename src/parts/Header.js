/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { Fade } from "react-awesome-reveal";
import { Transition } from "@headlessui/react";
import { useLocation } from "react-router-dom";

import Button from "../elements/Button";
import BrandIcon from "./BrandIcon";

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button
          className="block text-black lg:hidden focus:outline-none" // Set color to black
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className={`${isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={`${!isCollapse ? "hidden" : "block"}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul className="hidden text-black tracking-widest items-center lg:flex flex-row mt-0">
        {" "}
        {/* Set text to black */}
        <li>
          <Button
            className={`${
              path === "/" ? "active-link" : ""
            } font-medium text-lg px-5 no-underline hover:underline text-[#F1A40E]`}
            type="link"
            href="/"
          >
            Home
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${
              path === "/project" ? "active-link" : ""
            } font-medium text-lg px-5 no-underline hover:underline text-[#F1A40E]`}
            type="link"
            href="/project"
          >
            Project
          </Button>
        </li>
        <li>
          <Button
            href="https://wa.me/6289519403079"
            type="link"
            className="flex text-white bg-[#F1A40E] text-xl lg:text-xl xl:text-lg tracking-wide items-center justify-center w-40 h-10 lg:w-32 lg:h-10 rounded-full shadow-lg border-2 border-[#F1A40E] transition duration-300 hover:bg-yellow-600 hover:shadow-xl transform hover:scale-105"
          >
            contact me
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">
          <ul className="z-50 flex flex-col text-black tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            {" "}
            {/* Set text to black */}
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/" ? "active-link" : ""
                } font-medium px-10 no-underline hover:underline text-[#F1A40E]`}
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/project" ? "active-link" : ""
                } font-medium px-10 no-underline hover:underline text-[#F1A40E]`}
                type="link"
                href="/project"
              >
                Project
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Button
                href="https://wa.me/6289519403079"
                type="link"
                className="flex text-white bg-[#F1A40E] text-xl lg:text-xl xl:text-lg tracking-wide items-center justify-center w-40 h-10 lg:w-32 lg:h-10 rounded-full shadow-lg border-2 border-[#F1A40E] transition duration-300 hover:bg-yellow-600 hover:shadow-xl transform hover:scale-105"
              >
                contact me
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
