import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

const poppins = Poppins({subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] });


export const metadata: Metadata = {
  title: "Pratham's Portfolio",
  description: "Showcasing the work and projects of Pratham Ranka, a passionate Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}