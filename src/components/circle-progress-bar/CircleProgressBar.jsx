// import React, { useEffect, useState } from "react";
// import { Link, Element, scroller } from "react-scroll";

// const CircleProgressBar = () => {
//   const [percent, setPercent] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       const winScroll =
//         document.body.scrollTop || document.documentElement.scrollTop;
//       const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight;
//       const scrollPercent = Math.round((winScroll / height) * 100);
//       setPercent(scrollPercent);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const circumference = 30 * 2 * Math.PI;
//   console.log(percent);

//   return (
//     <div className=" bottom-0 left-0 flex  items-center justify-between sticky">
//       <svg className="transform -rotate-90 w-20 h-20">
//         <circle
//           cx="40"
//           cy="40"
//           r="30"
//           stroke="currentColor"
//           strokeWidth="8"
//           fill="transparent"
//           className="text-dark"
//         />
//         <circle
//           cx="40"
//           cy="40"
//           r="30"
//           stroke="currentColor"
//           strokeWidth="8"
//           fill="transparent"
//           strokeDasharray={circumference}
//           strokeDashoffset={circumference - (percent / 100) * circumference}
//           className="text-white"
//         />
//       </svg>
//       <span className="absolute text-xl text-dark">{`${percent}%`}</span>

//       <div className=""></div>
//     </div>
//   );
// };

// export default CircleProgressBar;
import React, { useState, useEffect } from "react";
import { Link, Element, scroller } from "react-scroll";

const CircleProgressBar = () => {
  const [percent, setPercent] = useState(0);
  const circumference = 30 * 2 * Math.PI;

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = Math.round((winScroll / height) * 100);
      setPercent(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [percent]);
  //   console.log(percent);

  return (
    <div
      className={`${
        (percent <= 0 || percent > 100) && "hidden"
      } fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-3`}
    >
      <svg className="w-20 h-20">
        <circle
          className="text-dark"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-xl text-gold">{`${percent}%`}</span>
    </div>
  );
};

export default CircleProgressBar;
