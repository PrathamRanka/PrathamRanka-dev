'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <section id="contact" className="py-32 text-white px-4 bg-[#131313] justify-center">
      {/* Centered Container */}
      <div className="w-full max-w-7xl mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left Column: Text Content */}
          <div className="space-y-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-7xl font-bold text-gray-300"
            >
              Get in <span className="text-purple-500">Touch</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-2xl space-y-8"
            >
              {/* <div className="space-y-2">
                <p className="text-3xl text-gray-300">Phone</p>
                <a
                  href="tel:+917023206003"
                  className="text-2xl font-semibold hover:text-purple-500 transition duration-300 flex items-center gap-2"
                >
                  +91 7023206003
                  <span className="text-gray-500 font-bold">↗</span>
                </a>
              </div> */}

              <div className="space-y-2">
                <p className="text-3xl text-gray-300">Email</p>
                <a
                  href="mailto:pranka0789@gmail.com"
                  className="text-lg font-semibold hover:text-purple-500 transition duration-300 flex items-center gap-2"
                >
                  pranka0789@gmail.com
                  <span className="text-gray-500 font-bold text-3xl">↗</span>
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-3xl text-gray-300">Workspace</p>
                <address className="text-lg not-italic leading-relaxed">
                Thapar Institute of Engineering and Technology<br />
                  Patiala, 
                  Punjab 147004
                </address>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13662.54321275064!2d76.3862399!3d30.3397809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39102830d658d7cd%3A0x4fcf4824e2dc6b16!2sAdarsh%20Nagar%2C%20Prem%20Nagar%2C%20Patiala%2C%20Punjab%20147004!5e0!3m2!1sen!2sin!4v1714371000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.section>
      </div>
    </section>
  )
}
