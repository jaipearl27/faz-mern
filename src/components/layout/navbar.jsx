"use client";

import * as React from "react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getServicesData } from "@/lib/redux/actions/serviceAction";
import { getAllCategories } from "@/lib/redux/actions/productCategoriesAction";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR CLIENTS", href: "/clients" },
  { label: "TESTIMONIALS", href: "/testimonials" },
];

export function Navbar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { serviceData } = useSelector((state) => state.services);
  const { categoriesData } = useSelector((state) => state.productCategories);

  useEffect(() => {
    dispatch(getServicesData({ page: 1, limit: 10 }));
    dispatch(getAllCategories({ page: 1, limit: 10 }));
  }, [dispatch]);

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);

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
            <img src="/VPRO_LOGO.png" alt="logo" className="w-[80px] p-2" />
          </Link>

          <div className="flex-1" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.href} className="text-sm font-medium hover:text-black">
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium flex items-center hover:text-black">
                SERVICES <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md w-56 z-50">
                { Array.isArray(serviceData) && serviceData?.map((service, i) => (
                  <Link
                    key={i}
                    // href={`/services/${s.slug || s.id}`}
              
                 href={`/services/${service._id}`}>{service.title}
                
                    {service.title}
                  </Link>
                  
                ))}
              </div>
            </div>

            {/* Products Dropdown (Categories) */}
            <div className="relative group">
              <button className="text-sm font-medium flex items-center hover:text-black">
                PRODUCTS <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-md w-56 z-50">
                {Array.isArray(categoriesData) && categoriesData?.map((cat, i) => (
                  <Link
                    key={i}
                    // href={`/products/${cat.slug || cat._id}`}
                    href={`/products/${cat.slug }?categoryId=${cat._id}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect Button */}
            <a
              href="/contact"
              className="inline-flex items-center rounded-full text-white bg-green-600 px-6 py-2 text-sm font-medium hover:bg-green-700"
            >
              LETS CONNECT <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item, idx) => (
                <Link key={idx} href={item.href} className="block px-3 py-2 text-base font-medium">
                  {item.label}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
                  className="block w-full text-left px-3 py-2 font-medium"
                >
                  SERVICES
                </button>
                {openDropdown === "services" && (
                  <div className="ml-4 space-y-1">
                    {serviceData?.map((sub, i) => (
                      <Link
                        key={i}
                        href={`/services/${sub.slug || sub.id}`}
                        className="block px-3 py-2 text-sm"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}
                  className="block w-full text-left px-3 py-2 font-medium"
                >
                  PRODUCTS
                </button>
                {openDropdown === "products" && (
                  <div className="ml-4 space-y-1">
                    {categoriesData?.map((sub, i) => (
                      <Link
                        key={i}
                        href={`/products/${sub.slug || sub._id}`}
                        className="block px-3 py-2 text-sm"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-purple-600 px-6 py-2 text-sm font-medium hover:bg-purple-700"
              >
                LETS CONNECT <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
