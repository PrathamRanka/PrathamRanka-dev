"use client";
import { Hero } from "@/components/Hero";
import { Stack } from '@/components/Stack';
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";


export default function Home() {

  return (
    <>
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="stack">
        <Stack />
      </section>
      <LogoAnimation />
      <section id="portfolio">
        <Portfolio />
      </section>
      <KeyMetrics />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
