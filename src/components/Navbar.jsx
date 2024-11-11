import logo from "../assets/raviKumarLogo.webp";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 bg-green-400 ">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-6 bg-orange-500 text-2xl">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
};
