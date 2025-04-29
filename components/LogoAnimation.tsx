'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
  { src: '/Owasp.png', alt: 'OWASP' },
  { src: '/tiet.png', alt: 'TIET' },
]

export const LogoAnimation = () => {
  return (
    <div
      className="py-8"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.85))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={100}
                height={30}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
