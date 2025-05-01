'use client'
import React, { useState, useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'
import Image from 'next/image'

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
      'A web application that uses machine learning to identify crop diseases from images. Provided tailored treatment recommendations of wheat by linking predictions to a database of 15 wheat crop diseases.',
    image: '/proj5.png',
  },
  {
    id: 3,
    year: 2024,
    title: 'Text-2-Speech Web App',
    description:
      'Developed a dynamic web application with text-to-speech capabilities, enabling users to convert written text into natural-sounding speech. The app supports multiple languages and allows users to adjust the speed and tone of the speech. Designed to be accessible and user-friendly, this app is aimed at people with visual impairments and those who prefer auditory learning. The app features a sleek, modern UI with real-time text-to-speech conversion and multiple voice options.',
    image: '/proj5.png',
  },
]

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    let index = 0
    const loopColors = () => {
      const nextColor = COLORS_TOP[(index + 1) % COLORS_TOP.length]
      animate(color, nextColor, {
        ease: 'easeInOut',
        duration: 4,
        onComplete: () => {
          index = (index + 1) % COLORS_TOP.length
          loopColors()
        },
      })
    }
    loopColors()
  }, [color])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-16 text-white" // Reduced padding
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-6xl font-bold mb-8"> {/* Reduced margin-bottom */}
          My <span className="text-purple-500">Projects</span>
        </h2>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => {
              if (project.id === 1) {
                window.open(project.href, '_blank');
              } else {
                setSelectedProject(project);
              }
            }}
            className="cursor-pointer mb-8 group" // Reduced margin-bottom
          >
            <p className="text-gray-400 text-lg mb-1">{project.year}</p> {/* Reduced margin */}
            <h3
              className={`text-3xl font-extrabold uppercase group-hover:text-gray-400 transition-colors duration-300 ${
                selectedProject.id === project.id ? 'text-gray-200' : ''
              }`}
              style={{
                textShadow: selectedProject.id === project.id ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '',
              }}
            >
              {project.title}
            </h3>
            {selectedProject.id === project.id && (
              <div className="mt-4 flex flex-col md:flex-row items-start gap-6"> {/* Reduced gap */}
                <p className="text-gray-400 transition-all duration-500 ease-in-out md:w-1/2">
                  {project.description}
                </p>
                <div className="md:w-1/2 md:order-2">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={400}
                    height={250}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}
