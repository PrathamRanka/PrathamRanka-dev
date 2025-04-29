'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiJavascript
} from "react-icons/si";

const stackItems = [
  { id: 1, name: 'React', icon: SiReact, color: '#61DAFB' },
  { id: 2, name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { id: 4, name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { id: 5, name: 'TypeScript', icon: SiTypescript, color: '#007ACC' },
  { id: 6, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { id: 8, name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
];

// Changed to default export which is more common in Next.js components
const Stack = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#131313' }}>
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">My Tech Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center justify-center flex-col rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:bg-opacity-20 group"
            >
              <div className="mb-4 p-6 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-125 group-hover:shadow-lg">
                {item.icon && <item.icon className="w-20 h-20" style={{ color: item.color }} />}
              </div>
              <p className="text-gray-300 font-semibold text-lg transition-all duration-300 transform group-hover:text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

// Also export as named export for compatibility
export { Stack };