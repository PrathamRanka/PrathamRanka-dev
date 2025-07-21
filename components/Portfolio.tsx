'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

type Project = {
  id: number;
  year: number;
  title: string;
  description: string;
  image: string;
  href: string;
};

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

const projects: Project[] = [
  {
    id: 1,
    year: 2025,
    title: 'Krypt DeFi',
    description:
      'Krypt DeFi is a decentralized finance web application that enables users to send cryptocurrency seamlessly using smart contracts. The platform offers a modern and responsive frontend built with React and Vite, and smart contracts written in Solidity deployed via Hardhat on Ethereum testnets or mainnet.',
    image: '/proj5.png',
    href: 'https://krypt-defi.vercel.app/',
  },
  {
    id: 2,
    year: 2025,
    title: 'SitWise',
    description:
      'Built a modern web application for managing and visualizing library seat bookings with real-time analytics. Developed full stack using React, Vite, Node, and Supabase, with authentication and dynamic charts (Chartjs, Recharts). Designed a responsive UI with Tailwind CSS and Framer Motion for enhanced user experience.',
    image: '/proj5.png',
    href: 'https://github.com/PrathamRanka/SitWise',
  },
  {
    id: 3,
    year: 2025,
    title: 'Veri-Doc',
    description:
      'I led the development of a responsive, light-themed frontend for a decentralized document verification platform that enables secure, tamper-proof verification without storing data centrally. By optimizing the UX, users could verify documents in just 3 clicks, reducing average time by 47%. The platform achieved a 100% Lighthouse mobile responsiveness score and completed over 200 successful verifications during testing. Collaborating with the blockchain team, we ensured a privacy-first design that empowers users with full document ownership and seamless cross-device access.',
    image: '/proj5.png',
    href: 'https://veri-doc.vercel.app/',
  },
  {
    id: 4,
    year: 2025,
    title: 'AI-Powered Crop Disease Detection Platform',
    description:
      'A web application that uses machine learning to identify crop diseases from images. Provided tailored treatment recommendations of wheat by linking predictions to a database of 15 wheat crop diseases. Automated image upload and processing via a web interface for seamless AI predictions using backend services. Designed a user-friendly frontend enabling farmers to get diagnosis results in just 3 clicks, boosting adoption and ease of use.',
    image: '/proj5.png',
    href: 'https://github.com/PrathamRanka/Wheat-Detector-',
  },
  {
    id: 5,
    year: 2024,
    title: '3D Periodic Table Visualization',
    description:
      'Developed an interactive 3D periodic table using Three.js and CSS3DRenderer, featuring 118+ chemical elements with dynamic positioning across multiple layouts (table, sphere, helix, grid). Implemented real-time filtering by element properties, hover tooltips displaying atomic data, and color-coded classification system. Built responsive design with smooth TWEEN.js animations, TrackballControls for 3D navigation, and advanced visual effects including neon glows and focus/blur interactions. Designed as an educational tool to enhance understanding of chemical elements and their relationships through immersive 3D visualization.',
    image: '/proj5.png',
    href: 'https://prathamranka.github.io/3-d-Periodic-table/',
  },
];

const getHighlightedDescription = (desc: string) => {
  const techPattern = /\b([A-Z][a-zA-Z0-9+.#-]*)\b/g;
  const numberPattern = /\b\d+(\.\d+)?%?\b/g;
  return desc
    .replace(techPattern, '<strong>$1</strong>')
    .replace(numberPattern, '<strong>$&</strong>');
};

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    let index = 0;
    const cycleColors = () => {
      const next = COLORS_TOP[(index + 1) % COLORS_TOP.length];
      animate(color, next, {
        ease: 'easeInOut',
        duration: 4,
        onComplete: () => {
          index = (index + 1) % COLORS_TOP.length;
          cycleColors();
        },
      });
    };
    cycleColors();
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(prev => (prev?.id === project.id ? null : project));
  }, []);

  const projectDescriptions = useMemo(() => {
    return projects.reduce((map, proj) => {
      const points = proj.description
        .split(/[\.\n]\s*/)
        .map(str => str.trim())
        .filter(Boolean);
      map[proj.id] = points;
      return map;
    }, {} as Record<number, string[]>);
  }, []);

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

        {projects.map(project => {
          const isOpen = selectedProject?.id === project.id;
          return (
            <div key={project.id} onClick={() => handleProjectClick(project)} className="cursor-pointer mb-8 group">
              <p className="text-gray-400 text-base sm:text-lg mb-1">{project.year}</p>
              <h3
                className={`flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-extrabold uppercase group-hover:text-gray-400 transition-colors duration-300 ${
                  isOpen ? 'text-gray-200' : ''
                }`}
                style={{
                  textShadow: isOpen ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '',
                }}
              >
                {project.title}
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <FaChevronDown />
                </span>
                {isOpen && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="ml-2 sm:ml-4 px-3 sm:px-4 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm sm:text-base font-semibold shadow transition"
                  >
                    Visit
                  </a>
                )}
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="desc"
                    className="mt-4 flex flex-col md:flex-row items-start gap-4 sm:gap-6"
                    initial={{ opacity: 0, height: 0, y: 20 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <ul
                      className="w-full md:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed bg-gradient-to-br from-purple-900/40 to-gray-800/60 rounded-xl p-3 sm:p-4 md:p-6 shadow-lg border border-purple-700/30 list-disc list-inside space-y-2 sm:space-y-3 text-gray-100"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        letterSpacing: '0.01em',
                        lineHeight: 1.7,
                        wordBreak: 'break-word',
                      }}
                    >
                      {projectDescriptions[project.id].map((point, idx, arr) => (
                        <li key={idx}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: getHighlightedDescription(
                                point + (!point.endsWith('.') && idx === arr.length - 1 ? '.' : '')
                              ),
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl shadow-lg object-cover transition-opacity duration-500"
                        width={400}
                        height={250}
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 400px"
                        style={{ width: '100%', height: 'auto', maxWidth: 400 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};
