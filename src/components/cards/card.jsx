"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CardComponent = ({ data }) => {
  const pathname = usePathname();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((product, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={product.banner}
            alt={product.category}
            width={400}
            height={300}
            className="w-full"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.category}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
          </div>
        </div>
      ))}

      {/* ✅ Show "VIEW ALL PRODUCTS" as the 4th item in the grid */}
      {pathname === "/" && (
        <div className="flex justify-center items-center ">
          <Link
            href="/products"
            className="flex items-center text-green-600 text-xl px-3 py-4 group hover:text-green-700 transition duration-300"
          >
            VIEW ALL PRODUCTS
            <span className="ml-1 transition-transform group-hover:translate-x-1 transition-duration-300">
              <ArrowForwardIosIcon fontSize="small" />
            </span>
          </Link>
        </div>

      )}
    </div>
  );
};
