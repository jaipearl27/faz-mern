"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const CardComponent = ({ data }) => {
  const pathname = usePathname();
console.log("the data is", data)
  return (
    <>
    <div className="flex flex-col">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
  
      {
      data?.length >0 &&
      data?.map((product, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={product?.banner?.[0]?.secure_url} // just taking the first image
            alt={product?.title}
            width={400}
            height={300}
            className="w-full min-h-56 max-h-56 rounded-md"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product?.title}</h2>
            <p className="text-gray-600 mt-2">{product?.shortDescription}</p>
          </div>
        </div>
      ))}

 

    </div>

    {pathname === "/" && (
      <div className="flex justify-between">
              <div></div>
        <div className="flex  justify-center items-center py-8 ">
  
          <Link
            href="/products"
            className="flex items-center text-green-600 text-xl px-3 py-4 group hover:text-green-700 transition duration-300"
          >
            VIEW ALL PRODUCTS
            <span className="ml-1 transition-transform group-hover:translate-x-1 transition-duration-300">
              <ArrowForwardIosIcon fontSize="small" />
            </span>
          </Link>
        </div></div>

      )}
    </div>

    </>
  );
};
