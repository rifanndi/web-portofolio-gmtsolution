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
          className="block text-[#2E3F3C] lg:hidden focus:outline-none"
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

      <ul className="hidden text-[#2E3F3C] tracking-widest items-center lg:flex flex-row mt-0">
        <li>
          <Button
            className={`${
              path === "/" ? "active-link" : ""
            } font-medium text-lg px-5 no-underline hover:underline  text-green-900  `}
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
            } font-medium text-lg px-5 no-underline hover:underline  text-green-900`}
            type="link"
            href="/project"
          >
            Project
          </Button>
        </li>
        <li>
          <Button
            href="https://wa.me/6289519403079" // Ganti dengan nomor WhatsApp kamu
            type="link"
            className="flex bg-yellow-300 text-blue-800 text-xl lg:text-2xl xl:text-xl tracking-wider items-center justify-center w-56 lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2 border-dark-theme-purple shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105"
          >
            Lets Discuss!
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
          {/* <Fade> */}
          <ul className="z-50 flex flex-col text-[#2E3F3C] tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/" ? "active-link" : ""
                } font-medium px-10 no-underline hover:underline   text-black-900`}
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/team" ? "active-link" : ""
                } font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/team"
              >
                Team
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${
                  path === "/project" ? "active-link" : ""
                } font-medium px-10 no-underline hover:underline   text-black-900`}
                type="link"
                href="/project"
              >
                Project
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-[#EAAE37] text-white rounded-full border-2 border-[#EAAE37] hover:bg-[#DAA037] transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Discuss Project
              </Button>
            </li>
          </ul>
          {/* </Fade> */}
        </div>
      </Transition>
    </header>
  );
}
