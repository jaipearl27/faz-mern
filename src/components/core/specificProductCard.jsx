"use client";
import Link from "next/link";
import Image from "next/image";

export default function SpecificProductCard({ data }) {
  // Destructure the data (including slug)
  const { title, banner, description, slug } = data;

  return (
    <Link href={`/products/${slug}`} className="block">
      <div className="group relative w-80 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
        {/* Image with overlay */}
        <div className="relative h-96">
          <Image
            src={banner}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Content positioned over the image */}
        <div className="absolute bottom-0 p-6 w-full text-white">
          {/* Description */}
          <span className="block text-xs font-medium text-neutral-300 mb-1">
            {description}
          </span>

          {/* Title */}
          <h3 className="text-xl font-semibold transition-opacity duration-300 group-hover:opacity-80 ">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
