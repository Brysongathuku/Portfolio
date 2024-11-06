import logo from "../assets/sd_logo.webp";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#1e1d1e] mb-10 flex items-center justify-between py-4 shadow-lg">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="mx-2 w-24 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl" // Increased from w-20 to w-24
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaInstagram className="text-white cursor-pointer transition-transform hover:scale-110" />
        <FaLinkedin className="text-white cursor-pointer transition-transform hover:scale-110" />
        <FaGithub className="text-white cursor-pointer transition-transform hover:scale-110" />
      </div>
    </div>
  );
};

export default Navbar;
