"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";

const data = [
    {
        title: "Office Furniture",
        slug: "office-furniture",
        banner: "/products/officeFurniture.jpg",
        products: [
            {
                title: "L-Shape desks with mobile pedestal",
                slug: "l-shape-desk",
                banner: "/products/officeFurniture.jpg",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/L-Shaped desk workstation with glass panels.png",
            }, {
                title: "L-Shaped desk workstation with glass panels",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/L-shap.png",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/Conference Table.png",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/Straight desk with modesty panels & Fabric Partition.png",
            }
        ]
    },
    {
        title: "networking",
        slug: "networking",
        banner: "/products/networking-1.png",
        products: [
            {
                title: "Routers ",
                banner: "/products/networking.png",
            },
            {
                title: "L-Shaped desk workstation with glass panels",
                banner: "/products/networking/switch.png",
            },
            {
                title: "Electric height adjustable standing desk",
                banner: "/products/networking/VPN-gateway.png",
            },
            {
                title: "Straight desk with modesty panels & Fabric Partition",
                banner: "/products/networking/mobile.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
            {
                title: "Wardrobe with / without glass doors",
                banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            },
        
        ]
    },
];

export default function Page() {
    const { slug } = useParams();

    // Find the category based on slug
    const category = data.find((cat) => cat.slug === slug);

    if (!category) {
        return <div className="text-center text-red-500 mt-10 text-2xl">Category not found!</div>;
    }

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                <Image src={category.banner} layout="fill" objectFit="cover" alt={category.title} />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{category.title}</h1>
                </div>
            </div>

            <p className="mt-8 text-lg text-gray-700 text-center">
                Explore our <span className="font-semibold">{category.title}</span> collection!
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                {category.products.map((product, index) => (
                    <div 
                        key={index} 
                        className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
                    >
                        <Image 
                            src={product?.banner} 
                            width={300} 
                            height={200} 
                            alt={product.title} 
                            className="rounded-lg object-cover w-full h-48"
                        />
                        <h2 className="text-xl font-semibold mt-4 text-center">{product.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
