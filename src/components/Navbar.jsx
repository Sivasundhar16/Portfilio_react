import logo from "../assets/vs file.png";

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6  ">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2 h-16 w-auto"
            width={50}
            height={33}
            alt="Logo"
          />
        </a>
      </div>

      <div className="m-8   flex items-center justify-center gap-8  text-4xl">
        <a
          href="https://www.linkedin.com/in/siva02"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sivasundhar16"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/9629279196"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="What's App"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://x.com/SivaSundhar17"
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
