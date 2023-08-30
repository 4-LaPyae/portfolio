import htmlLogo from "../../assets/images/Pictures/html.png";
import cssLogo from "../../assets/images/Pictures/css.png";
import jsLogo from "../../assets/images/Pictures/js.png";
import bootsrapLogo from "../../assets/images/Pictures/bootstrap.png";
import reactLogo from "../../assets/images/Pictures/react.png";
import muiLogo from "../../assets/images/Pictures/mui.png";
import phpLogo from "../../assets/images/Pictures/php.png";
import laravelLogo from "../../assets/images/Pictures/laravel.png";
import jqueryLogo from "../../assets/images/Pictures/jquery.png";
import nodejsLogo from "../../assets/images/Pictures/nodejs.png";
import tailwindLogo from "../../assets/images/Pictures/tailwind.png";
import gitLogo from "../../assets/images/Pictures/git.png";
import mysqlLogo from "../../assets/images/Pictures/mysql.png";
import mongodbLogo from "../../assets/images/Pictures/mongodb.png";
import apacheLogo from "../../assets/images/Pictures/apache.png";
import nginxLogo from "../../assets/images/Pictures/nginx.png";
import ubuntuLogo from "../../assets/images/Pictures/ubuntu.png";
import macosLogo from "../../assets/images/Pictures/macos.png";
import { useState } from "react";

const skills = [
  {
    link: htmlLogo,
    text: "Html",
    percent: "80",
  },
  {
    link: cssLogo,
    text: "Css",
    percent: "50",
  },
  {
    link: jsLogo,
    text: "Js",
    percent: "65",
  },
  {
    link: bootsrapLogo,
    text: "Bootstrap",
    percent: "65",
  },
  {
    link: reactLogo,
    text: "React",
    percent: "60",
  },
  // {
  //   link: "",
  //   text: "REDUX",
  // },
  // {
  //   link: "",
  //   text: "TOOLKIT",
  // },
  {
    link: muiLogo,
    text: "Mui",
    percent: "50",
  },
  {
    link: phpLogo,
    text: "Php",
    percent: "50",
  },
  {
    link: laravelLogo,
    text: "Laravel",
    percent: "60",
  },
  {
    link: jqueryLogo,
    text: "Jquery",
    percent: "60",
  },
  // {
  //   link: "",
  //   text: "AJAX",
  // },
  {
    link: nodejsLogo,
    text: "Node Js",
    percent: "50",
  },
  // {
  //   link: "",
  //   text: "EXPRESS JS",
  // },
  {
    link: tailwindLogo,
    text: "Tailwind",
    percent: "70",
  },
  // {
  //   link: "",
  //   text: "REST API",
  // },
  {
    link: gitLogo,
    text: "Git",
    percent: "80",
  },
  {
    link: mysqlLogo,
    text: "Mysql",
    percent: "55",
  },
  {
    link: mongodbLogo,
    text: "Mongodb",
    percent: "50",
  },
  {
    link: apacheLogo,
    text: "Apache",
    percent: "50",
  },
  {
    link: nginxLogo,
    text: "Nginx",
    percent: "50",
  },
  {
    link: ubuntuLogo,
    text: "Ubuntu",
    percent: "53",
  },
  {
    link: macosLogo,
    text: "macOs",
    percent: "55",
  },
];
const Skill = () => {
  const [currentSkill, setCurrentSkill] = useState(80);
  const [imgInCircle, setImgInCircle] = useState(htmlLogo);
  const skillDisplay = {
    circumference: 2 * (22 / 7) * 120,
  };
  const handleSkillClick = (skill, patch) => {
    console.log(skill);
    setCurrentSkill(skill);
    setImgInCircle(patch);
    //skillDisplay.currentSkill = skill;
  };
  return (
    <div
      class="mx-auto h:screen px-6 md:px-12 mt-20 bg-cprimary py-10"
      id="skill"
    >
      <section>
        <h2 class="mb-6 md:mb-12 text-center text-3xl font-bebas font-bold">
          SKILLS:
        </h2>
        <div className="w-full flex flex-col  md:flex-row items-center pb-10 md:pb-20">
          <div className="w-full  grid gap-6 grid-cols-3 ">
            {skills.map((s) => (
              <button
                className={`flex w-full justify-center  md:justify-start items-center ${
                  s.link == imgInCircle ? "opacity-30" : ""
                }    py-3 px-2 md:px-4 text-md font-bold hover:opacity-50`}
                href="#"
                data-te-dropdown-item-ref
                onClick={() => handleSkillClick(s.percent, s.link)}
              >
                <img src={s.link} alt="" className="mr-1 md:mr-3 w-5 md:w-6" />
                <span>{s.text}</span>
              </button>
            ))}
          </div>
          <div className="w-full ">
            <div className="flex items-center justify-center">
              <svg className="transform -rotate-90 w-72 h-72">
                <circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="30"
                  fill="transparent"
                  className="text-dark"
                />
                <circle
                  cx="145"
                  cy="145"
                  r="120"
                  stroke="currentColor"
                  strokeWidth="30"
                  fill="transparent"
                  strokeDasharray={skillDisplay.circumference}
                  strokeDashoffset={
                    skillDisplay.circumference -
                    (currentSkill / 100) * skillDisplay.circumference
                  }
                  className="text-cu transition-all duration-500"
                />
              </svg>
              <img
                src={imgInCircle}
                className="absolute h-28 w-28 opacity-50"
                x="100"
                y="100"
              />

              <span className="absolute text-4xl text-dark">{`${currentSkill}%`}</span>
            </div>
            {/* <div className="flex">
              <div className="mb-5 ml-5 flex flex-col items-center ">
                <div className="h-24 w-10 bg-warning overflow-hidden rounded-full bg-gray-300">
                  <div
                    className="h-full bg-info"
                    style={{ height: "25%" }}
                  ></div>
                </div>
                <span className="mt-2 text-xs text-gray-600 ">75%</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skill;
