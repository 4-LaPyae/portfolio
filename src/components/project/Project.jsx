import React from "react";
import telemedicineImage from "../../assets/images/telemedicine.jpeg";
import calculatorImage from "../../assets/images/calculator.jpeg";
import trafficelightImage from "../../assets/images/trafficlight.jpeg";
import cointossImage from "../../assets/images/cointoss.jpeg";

import ProjectDetail from "./ProjectDetail";

const projects = [
  {
    title: "Telemedicine",
    path: telemedicineImage,
  },
  {
    title: "Calculator",
    path: calculatorImage,
  },
  {
    title: "Traffic Light",
    path: trafficelightImage,
  },
  {
    title: "Coin Toss",
    path: cointossImage,
  },
];

const Project = () => {
  return (
    <div
      className="mx-auto px-6 md:px-12 mt-20 bg-cprimary py-10"
      id="projects"
    >
      <h2 class="mb-6 md:mb-12 text-center text-3xl font-bebas font-bold">
        PPRJECTS:
      </h2>
      <div class="grid gap-6 md:grid-cols-2  lg:grid-cols-3">
        {projects.map((p) => (
          <div
            class=" block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <div class="">
              <img src={p.path} className="w-full h-96" />
            </div>
            <div class="p-6">
              <h5 class="text-lg font-bold text-center">{p.title}</h5>
              <ProjectDetail item={p} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
