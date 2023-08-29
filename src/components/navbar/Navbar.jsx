import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import MobileButton from "./MobileButton";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
let Links = [
  { id: 1, name: "HOME", link: "home", offset: -90 },
  { id: 2, name: "ABOUT", link: "about", offset: 0 },
  { id: 3, name: "SKILLS", link: "skill", offset: 0 },
  { id: 4, name: "PROJECTS", link: "projects" },
  { id: 5, name: "CONTACT", link: "contact" },
];
const Navbar = () => {
  let [open, setOpen] = useState(false);
  const btnHandler = () => {
    setOpen((pre) => !pre);
  };
  return (
    <div className="md:w-auto py-5 px-5 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bebas font-bold leading-tight tracking-tight ">
            LA PYAE
          </h2>
        </div>
        <div className="hidden md:flex flex-row justify-around text-md">
          {Links.map((link) => (
            <div
              key={link.id}
              className="py-3 px-5 text-center font-bebas font-bold leading-tight tracking-tight cursor-pointer transition duration-500 hover:text-primary"
            >
              <Link
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={btnHandler}>
            {open ? (
              <FontAwesomeIcon icon={faXmark} size="2xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="xl" />
            )}
          </button>
        </div>
      </div>
      <MobileButton open={open} setOpen={setOpen} links={Links} />
    </div>
  );
};

export default Navbar;
