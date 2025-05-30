import React from 'react';
import {
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#131313] py-4 px-4 flex flex-col md:flex-row items-center md:justify-between relative">
      {/* Name at the top on mobile, left on desktop */}
      <p className="text-sm text-gray-400 z-10 mb-2 md:mb-0 md:order-1 md:self-start">
        © 2025 Pratham Ranka
      </p>

      {/* Centered icons, always centered */}
      <div className="flex items-center justify-center space-x-6 text-white text-xl mb-2 md:mb-0 md:order-2 md:mx-auto">
        <a href="https://discordapp.com/users/712576574091952129" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" aria-label="Discord">
          <FaDiscord />
        </a>
        <a href="https://x.com/pr7ham_develops" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://github.com/PrathamRanka" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/prathamranka06/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/pr7ham.r/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
