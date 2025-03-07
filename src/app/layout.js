import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FooterWrapper } from "@/components/LayoutWrappers/FooterWrapper";
import { NavbarWrapper } from "@/components/LayoutWrappers/NavbarWrapper";
// import { Navbar } from "@/components/layout/navbar";
// import { Footer } from "@/components/layout/Footer";
 
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VPRO",
  description: "VPRO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarWrapper />
        <main>
          {children}
        </main>
        <FooterWrapper />
      </body>
    </html>
  );
}
