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
    <footer className="w-full bg-[#131313] py-3 px-6 flex items-center justify-between relative">
      {/* Left-aligned name */}
      <p className="text-sm text-gray-400 z-10">© 2025 Pratham Ranka</p>

      {/* Centered icons using absolute positioning */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-6 text-white text-xl">
        <a href="https://discordapp.com/users/712576574091952129" target="_blank" className="hover:text-purple-400 transition-colors">
          <FaDiscord />
        </a>
        <a href="https://x.com/pratham_ranka" target="_blank" className="hover:text-blue-400 transition-colors">
          <FaTwitter />
        </a>
        <a href="https://github.com/PrathamRanka/ayanokojikiyotaka6" target="_blank" className="hover:text-gray-300 transition-colors">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/prathamranka06/" target="_blank" className="hover:text-blue-500 transition-colors">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/pr7ham.r/" target="_blank" className="hover:text-pink-400 transition-colors">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
