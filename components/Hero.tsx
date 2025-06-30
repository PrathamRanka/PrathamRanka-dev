"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, animate, useMotionTemplate } from 'framer-motion';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]; // green, blue, pink, red

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        let index = 0;
        const loopColors = () => {
            const nextColor = COLORS_TOP[(index + 1) % COLORS_TOP.length];
            animate(color, nextColor, {
                ease: "easeInOut",
                duration: 4,
                onComplete: () => {
                    index = (index + 1) % COLORS_TOP.length;
                    loopColors(); // loop forever
                },
            });
        };
        loopColors();
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

    return (
        <motion.section
            style={{ backgroundImage, border, boxShadow }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
        >
            <div className="z-10 flex flex-col items-center">
                {/* <span className="mb-3 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for Work
                </span> */}
                <h1 className="text-white/40 text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl">
                    Pratham Ranka
                </h1>
                <Image
                    src="/profilepic.jpg"
                    alt="Profile Pic"
                    width={250}
                    height={250}
                />
                {/* Increase the spacing of the boxes */}
                <div className="flex bg-white/10 shadow-xl p-4 rounded-3xl justify-center items-center space-x-12 mb-6">
                    <Image
                        src="/obj1.jpg"
                        alt="object"
                        width={40}
                        height={40}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src="/obj1.jpg"
                        alt="object"
                        width={40}
                        height={40}
                        className="rounded-2xl mx-auto"
                    />
                    <Image
                        src="/obj1.jpg"
                        alt="object"
                        width={40}
                        height={40}
                        className="rounded-2xl mx-auto"
                    />
                </div>

                <p className="my-6 max-w-xl text-center text-lg text-white font-semibold leading-relaxed">
                    Passionate Full-Stack Developer from Patiala, crafting exceptional digital experiences with attention to detail, design, and usability.
                </p>

                {/* Center the "Download CV" button */}
                <motion.div className="flex justify-center items-center">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1s273o3pVF9d4gg3vMWqlGGaEHx_ypB7k"
                        download="Pratham_Ranka_Resume.pdf"
                    >
                        <motion.button
                            style={{
                                border,
                                boxShadow
                            }}
                            whileHover={{
                                scale: 1.015
                            }}
                            whileTap={{
                                scale: 0.985
                            }}
                            className="flex w-fit items-center gap-2 rounded-full px-6 py-2 text-white bg-black font-bold text-lg"
                        >
                            Download CV
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2"
                            >
                                <path d="M10 17l5-5-5-5"></path>
                            </svg>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};
