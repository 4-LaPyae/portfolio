import { Link } from "react-scroll";

const MobileButton = ({ open, setOpen, links }) => {
  const removeNavbar = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <div
      className={`w-full h-auto bg-white py-3 absolute left-0 transition-all duration-500 ease-in ${
        open ? "top-16" : "top-[-360px]"
      }`}
    >
      {links.map((link) => (
        <div
          key={link.id}
          className="w-full cursor-pointer flex justify-center text-cu py-3 font-bebas  font-bold leading-tight tracking-tight hover:text-primary items-center ease-in duration-300"
        >
          <Link
            activeClass="active"
            to={link.link}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            onClick={(e) => removeNavbar(e)}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MobileButton;
