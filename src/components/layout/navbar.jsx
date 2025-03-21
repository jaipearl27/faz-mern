"use client";

import * as React from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services",
    dropdown:[
      { label: "Alluminium Tents", href: "#" },
      { label: "Box Trucks / Buses Transportation", href: "#" },
      { label: "Construction Vehicles", href: "#" },
      { label: "Construction Vehicles 23", href: "#" },

    ] 

  },
  {
    label: "PRODUCTS", href: "/products",
    dropdown: [
      { label: "Office Furniture", href: "/products/office-furniture" },
      { label: "Networking", href: "/products/networking" },
      { label: "Electronic", href: "/products/Electronic" },
    ]
  },
  { label: "OUR CLIENTS", href: "/clients" },
  { label: "TESTIMONIALS", href: "/testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isProductsOpen, setIsProductsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/">
            <img src="/VPRO_LOGO.png" alt="logo small" className="w-[80px] p-2" />
          </Link>
          <div className="flex-1" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div className="relative group" key={item.label}>
                    <Link key={item.label} href={item.href} className="block px-4 md:flex flex-row py-2  hover:bg-gray-100 text-sm font-medium hover:text-black">
                        {item.label} <ChevronDown className="ml-1 w-4 h-4" />
                      </Link>
                  {/* <button className="text-sm font-medium flex items-center hover:text-black">
                    {item.label}
                  </button> */}
                  <div className="absolute left-0 hidden group-hover:block  bg-white shadow-md mt-2 w-48">
                    {item.dropdown.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="text-sm font-medium hover:text-black">
                  {item.label}
                </Link>
              )
            ))}
            <a href="/contact" className="inline-flex items-center rounded-full text-white bg-green-600 px-6 py-2 text-sm font-medium hover:bg-green-700">
              LETS CONNECT <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="block w-full text-left px-3 py-2 font-medium">
                        {item.label}
                      </button>
                      {isProductsOpen && (
                        <div className="ml-4 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.label} href={subItem.href} className="block px-3 py-2 text-sm">
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="block px-3 py-2 text-base font-medium">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <a href="/contact" className="inline-flex items-center rounded-full bg-purple-600 px-6 py-2 text-sm font-medium hover:bg-purple-700">
                LETS CONNECT <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
