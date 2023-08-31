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
    link: "https://admin.telemed.sabahna.com",
  },
  {
    title: "Calculator",
    path: calculatorImage,
    link: "#",
  },
  {
    title: "Traffic Light",
    path: trafficelightImage,
    link: "#",
  },
  {
    title: "Coin Toss",
    path: cointossImage,
    link: "#",
  },
];

const Project = () => {
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
          <div className="block bg-white rounded-xl hover:shadow-cu hover:shadow-md">
            <div className="p-3">
              <img src={p.path} className="w-full h-96 rounded-2xl" />
            </div>
            <div className="p-2">
              <h5 className="text-lg font-bold text-center">{p.title}</h5>
              <ProjectDetail item={p} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
