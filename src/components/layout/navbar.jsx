"use client";

import * as React from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PRODUCTS", href: "/products" },
  { label: "OUR CLIENTS", href: "/clients" },
  { label: "TESTIMONIALS", href: "/testimonials" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50  transition-colors duration-300  shadow-sm bg-white",
        // isScrolled ? "fixed " : "relative"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo can be added here */}
          <div>
            <Link href="/"><img src="/VPRO_LOGO.png" alt="logo small" className="w-[80px] p-2" /></Link>
          </div>

          <div className="flex-1" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              item?.dropdown ? (
                item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.label} // Ensure unique key
                    href={subItem?.href}
                    className="text-sm font-medium transition-colors hover:text-black"
                    onClick={(e) => {
                      if (subItem.id) {
                        e.preventDefault(); // Prevent default navigation
                        console.log(subItem.href);
                        const target = document.getElementById(subItem.id);
                        console.log(target);
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {subItem.label}
                  </Link>
                ))
              ) : (
                <Link
                  key={item.label} // Ensure unique key
                  href={item?.href}
                  className="text-sm font-medium transition-colors hover:text-black"
                  onClick={(e) => {
                    if (item.id) {
                      e.preventDefault(); // Prevent default navigation
                      console.log(item.href);
                      const target = document.getElementById(item.id);
                      console.log(target);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.label}
                </Link>
              )
            ))}

            <a
              href="/contact"
              className="inline-flex items-center rounded-full text-white bg-green-600 px-6 py-2 text-sm font-medium  transition-colors hover:bg-green-700"
            >
              LETS CONNECT
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2  hover:bg-white/10 focus:outline-none lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-2 text-sm font-medium  transition-colors hover:bg-purple-700"
              >
                LETS CONNECT
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
