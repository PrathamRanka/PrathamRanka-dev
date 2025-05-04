'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiC
} from "react-icons/si";

const stackItems = [
  { id: 1, name: 'C', icon: SiC, color: '#06B6D4' },
  { id: 2, name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { id: 3, name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { id: 4, name: 'React', icon: SiReact, color: '#61DAFB' },
  { id: 5, name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { id: 6, name: 'TypeScript', icon: SiTypescript, color: '#007ACC' },
  // { id: 7, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
];

const Stack = () => {
  return (
    <section className="py-16" style={{ backgroundColor: '#131313' }}>
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center">My <span className='text-purple-500'>Tech Stack</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
export { Stack };
