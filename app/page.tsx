import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { Stack } from '@/components/Stack';
import Cursor from "@/components/Cursor";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Portfolio } from "@/components/Portfolio";
import { KeyMetrics } from "@/components/KeyMetrics";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <>
    {/* <Cursor/> */}
    {/* <Navbar/> */}
    <Hero/>
    <Stack/>
    <LogoAnimation/>
    <Portfolio/>
    <KeyMetrics/>
    <Contact/>
    <Footer/>
   </>
    
  );
}
