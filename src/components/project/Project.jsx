import React from "react";

import telemedicineImage from "../../assets/images/telemedicine.jpeg";
import telemedicineMobileImage from "../../assets/images/telemedicine3.jpeg";
import calculatorImage from "../../assets/images/calculator.jpeg";
import trafficelightImage from "../../assets/images/trafficlight.jpeg";
import cointossImage from "../../assets/images/cointoss.jpeg";
import feiap2023Image from "../../assets/images/feiap2023.jpeg";
import feiap2023MobileImage from "../../assets/images/FavLogo.png";

import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    title: "Telemedicine",
    path: telemedicineMobileImage,
    link: "https://admin.telemed.sabahna.com",
  },
  {
    title: "FEIAP Myanmar 2023 Event",
    path: feiap2023MobileImage,
    link: "https://feiap2023.com/",
  },
  // {
  //   title: "Calculator",
  //   path: calculatorImage,
  //   link: "#",
  // },
  // {
  //   title: "Traffic Light",
  //   path: trafficelightImage,
  //   link: "#",
  // },
  // {
  //   title: "Coin Toss",
  //   path: cointossImage,
  //   link: "#",
  // },
];

const Project = () => {
  const projectHandler = () => console.log("hello world");
  return (
    <div
      className="mx-auto px-6 md:px-12 mt-20 bg-cprimary py-10"
      id="projects"
    >
      <h2 className="mb-6 md:mb-12 text-center text-3xl font-bebas font-bold">
        PPRJECTS:
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div className="block py-2 bg-white rounded-xl hover:shadow-cu hover:shadow-md">
            <div className="p-3">
              <img src={p.path} className="w-full h-60  md:h-96 rounded-2xl" />
            </div>
            <div className="px-2">
              <h5 className="text-lg font-bold text-center">{p.title}</h5>
              <ProjectDetail item={p} />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center">
          <button
            onClick={projectHandler}
            class="flex justify-center items-center text-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-cushadow border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-cu hover:text-white"
          >
            See All
            <svg
              class="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
