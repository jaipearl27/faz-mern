"use client";

import * as React from "react";

const Items = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "about" },
  { label: "SERVICES", href: "services" },
  { label: "PRODUCTS", href: "products" },
  { label: "OUR CLIENTS", href: "clients" },
  { label: "TESTIMONIALS", href: "testimonials" },
  {
    label: "COMPANY", 
    dropdown: [
      { label: "TERMS & CONDITION", href: "terms-and-condition" },
      { label: "PRIVACY POLICY", href: "privacy-policy" },
      { label: "REFUND POLICY", href: "refund-policy" },
    ]
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-4">
          {/* Legal Links (Left side) */}
        

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
       <img src="/VPRO_LOGO_WIDE.jpeg" alt="" className="w-[350px]" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
          {/* Left Side: Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {Items.slice(0, 6).map((item) => (
              <a href={item.href} className="hover:underline" key={item.label}>
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: Company Dropdown */}
          <div className="flex flex-col md:flex-row gap-10 mt-4 md:mt-0 text-sm font-medium">
            <div className="flex flex-row gap-10">
            
              {Items[6]?.dropdown?.map((dropdownItem) => (
                <a
                  key={dropdownItem.label}
                  href={dropdownItem.href}
                  className="hover:underline text-gray-600"
                >
                  {dropdownItem.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-sm">
          <p>© Copyright VPRO 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
