'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";

const projects = [
  {
    id: 1,
    year: 2025,
    title: 'Veri-Doc',
    description:
      'I led the development of a responsive, light-themed frontend for a decentralized document verification platform that enables secure, tamper-proof verification without storing data centrally. By optimizing the UX, users could verify documents in just 3 clicks, reducing average time by 47%. The platform achieved a 100% Lighthouse mobile responsiveness score and completed over 200 successful verifications during testing. Collaborating with the blockchain team, we ensured a privacy-first design that empowers users with full document ownership and seamless cross-device access.',
    image: '/proj5.png',
    href: 'https://veri-doc.vercel.app/',
  },
  {
    id: 2,
    year: 2025,
    title: 'AI-Powered Crop Disease Detection Platform',
    description:
      'A web application that uses machine learning to identify crop diseases from images. Provided tailored treatment recommendations of wheat by linking predictions to a database of 15 wheat crop diseases. Automated image upload and processing via a web interface for seamless AI predictions using backend services. Designed a user-friendly frontend enabling farmers to get diagnosis results in just 3 clicks, boosting adoption and ease of use.',
    image: '/proj5.png',
    href: 'https://github.com/PrathamRanka/Wheat-Detector-'
  },
  {
    id: 3,
    year: 2024,
    title: '3D Periodic Table Visualization',
    description:
      'Developed an interactive 3D periodic table using Three.js and CSS3DRenderer, featuring 118+ chemical elements with dynamic positioning across multiple layouts (table, sphere, helix, grid). Implemented real-time filtering by element properties, hover tooltips displaying atomic data, and color-coded classification system. Built responsive design with smooth TWEEN.js animations, TrackballControls for 3D navigation, and advanced visual effects including neon glows and focus/blur interactions. Designed as an educational tool to enhance understanding of chemical elements and their relationships through immersive 3D visualization.',
    image: '/proj5.png',
    href: 'https://github.com/PrathamRanka/3-d-Periodic-table'
  },
];

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    let index = 0;
    const loopColors = () => {
      const nextColor = COLORS_TOP[(index + 1) % COLORS_TOP.length];
      animate(color, nextColor, {
        ease: 'easeInOut',
        duration: 4,
        onComplete: () => {
          index = (index + 1) % COLORS_TOP.length;
          loopColors();
        },
      });
    };
    loopColors();
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  const handleProjectClick = (project) => {
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-10 sm:py-14 md:py-16 text-white"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
          My <span className="text-purple-500">Projects</span>
        </h2>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="cursor-pointer mb-8 group"
          >
            <p className="text-gray-400 text-base sm:text-lg mb-1">{project.year}</p>
            <h3
              className={`flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-extrabold uppercase group-hover:text-gray-400 transition-colors duration-300 ${
                selectedProject && selectedProject.id === project.id ? 'text-gray-200' : ''
              } cursor-pointer`}
              style={{
                textShadow: selectedProject && selectedProject.id === project.id ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '',
              }}
            >
              {project.title}
              <span
                className={`transition-transform duration-300 ${selectedProject && selectedProject.id === project.id ? 'rotate-180' : ''}`}
              >
                <FaChevronDown />
              </span>
              {selectedProject && selectedProject.id === project.id && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 sm:ml-4 inline-block px-3 sm:px-4 py-1 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition-colors duration-200 text-sm sm:text-base font-semibold"
                  onClick={e => e.stopPropagation()}
                >
                  Visit
                </a>
              )}
            </h3>
            {selectedProject && selectedProject.id === project.id && (
              <motion.div
                className="mt-4 flex flex-col md:flex-row items-start gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ ease: 'easeInOut', duration: 0.75 }}
              >
                <ul
                  className="text-gray-100 w-full md:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed bg-gradient-to-br from-purple-900/40 to-gray-800/60 rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-purple-700/30 list-disc list-inside space-y-2 sm:space-y-3"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    letterSpacing: '0.01em',
                    lineHeight: 1.7,
                    wordBreak: 'break-word',
                  }}
                >
                  {project.description.split('. ').map((point, idx, arr) => {
                    const cleanPoint = point.trim().replace(/\.$/, '');
                    if (!cleanPoint) return null;
                    return (
                      <li key={idx}>
                        {cleanPoint}
                        {(idx === arr.length - 1 && !cleanPoint.endsWith('.')) ? '.' : ''}
                      </li>
                    );
                  })}
                </ul>
                <div className="w-full md:w-1/2 md:order-2 flex justify-center items-center mt-4 md:mt-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out object-cover"
                    width={400}
                    height={250}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
                    style={{ width: '100%', height: 'auto', maxWidth: 400 }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  );
};
