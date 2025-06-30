"use client";
import { Hero } from "@/components/Hero";
import { Stack } from '@/components/Stack';
import { Portfolio } from "@/components/Portfolio";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {

  return (
    <>
      <Analytics />
      <Navbar />
      <section id="about">
        <Hero />
      </section>
      <section id="stack">
        <Stack />
      </section>
      
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
