"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
    import {
        useSearchParams
    } from "next/navigation";
import axios from "axios";

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
                title: "Electric height adjustable standing desk",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/L-Shaped desk workstation with glass panels.png",
            }, {
                title: "L-Shaped desk workstation with glass panels",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/L-shap.png",
            },
            {
                title: "Conference Table",
                slug: "l-shaped-desk-glass",
                banner:"/products/office-furniture/Conference Table.png",
            },
            {
                title: "Straight desk with modesty panels &amp; Fabric Partition",
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
            {
                title: "Electrical Products",
                slug: "electrical",
                banner: "/products/electricalProducts1.png",
                description:"Electrical Cables (Armored &amp; Non-Armored), Bare Conductors, Conduits, Panel boards,Transformers, Generators, Light Towers, Circuit Breakers, Load banks, Cable Connectors, Switches, Lights, Bulbs, Relays, Cable Trays, Contactors, UPS, Flood Lights,  Maxcell, Anixter, Panduit, Cameras / CCTV etc.,",
                products: [
                    {
                        title: "electrical",
                        banner: "/products/electricalProducts2.png",
                    },
                    // {
                    //     title: "L-Shaped desk workstation with glass panels",
                    //     banner: "/networking.png",
                    // },
                    // {
                    //     title: "Electric height adjustable standing desk",
                    //     banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    // },
                    // {
                    //     title: "Straight desk with modesty panels & Fabric Partition",
                    //     banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    // },
                    {
                        title: "Wardrobe with / without glass doors",
                        banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    },
                    {
                        title: "Wardrobe with / without glass doors",
                        banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    },
                    {
                        title: "L-Shape desks with mobile pedestal",
                        banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    },
                    {
                        title: "L-Shape desks with mobile pedestal",
                        banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    },
                    {
                        title: "L-Shape desks with mobile pedestal",
                        banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    },
                    {
                        title: "L-Shape desks with mobile pedestal",
                        banner: "/officeFurniture/LShapeWithMobilePedestale.png",
                    },
                ]
            },  
        
        ]
    },
    {
        title: "Electronic Products",
        slug: "Electronic",
        banner: "/products/electronicProducts.png",
        description:"Washer &amp; Dryers, Televisions, Laptops, Monitors, Printers, Scanners, Xerox Machines, Shredders, Refrigerators, Dehumidifiers,Speakers, Projector Screens, Ovens, Cell phones etc.,",
        products: [
            {
                title: "Television with TV stands",
                banner: "/products/electronic/tv.png",
            },
            {
                title: "Refrigerators",
                banner: "/products/electronic/ref.png",
            },
                        {
                title: "Microwaves",
                banner: "/products/electronic/mw.png",
            },
            {
                title: "Coffee makers",
                banner: "/products/electronic/cm.png",
            },
            {
                title: "Toasters and blenders",
                banner: "/products/electronic/tb.png",
            },
            {
                title: "Washing machines and dryers",
                banner: "/products/electronic/wmd.png",
            },
            {
                title: "Gaming chairs and desks (for MWR lounges)",
                banner: "/products/electronic/gamingchair.png",
            },
            {
                title: "Desk Lamp",
                banner: "/products/electronic/lamp.png", 
            },
            {
                title: "L-Shape desks with mobile pedestal",
                banner: "/products/electronic/TVs and entertainment systems.png",
            },
            {
                title:"Dehumidifiers",
                banner:"/products/electronic/Dehumidifiers.png"
            }
            // {
            //     title: "L-Shape desks with mobile pedestal",
            //     banner: "/officeFurniture/LShapeWithMobilePedestale.png",
            // },
        ]
    },  


    {
        title: "Lodging Catalogue",
        slug: "Lodging-Catalogue",
        banner: "/lodging/Heavy Duty Bunk beds.png",
        description:"Prefabricated PEB buildings such as medical facilities and office spaces are tailored according to customer-provided drawings.",
        products: [
            {
                title: "Twin XL beds",
                banner: "/lodging/Twin XL beds.png",
            },
            {
                title: "Full-size or queen-size beds",
                banner: "/lodging/Full-size or queen-size beds.png",
            },
            {
                title: "Orthopedic mattresses (for medical or long-term use)",
                banner: "/lodging/Orthopedic mattresses (for medical or long-term use).png",
            },
            {
                title: "Pillows and pillowcases",
                banner: "/lodging/Pillows and pillowcases.png",
            },
            {
                title: "Flat and fitted sheets (cotton or polyester blends)",
                banner: "/lodging/ Flat and fitted sheets (cotton or polyester blends).png",
            },
            {
                title: "Standard desk chairs (ergonomic)",
                banner: "/lodging/Standard desk chairs (ergonomic).png",
            },
            {
                title: "Lounge chairs (for dorms or common areas)",
                banner: "/lodging/Lounge chairs (for dorms or common areas).png",
            },
            {
                title: "Dining chairs",
                banner: "/lodging/chair.png",
            },
            {
                title: "Desks and Tables",
                banner: "/lodging/Desks and Tables.png",
            },
            {
                title: "Nightstands or bedside tables",
                banner: "/lodging/Nightstands or bedside tables.png",
            },
            {
                title:"Wardrobes or closets",
                banner:"/lodging/Wardrobes or closets.png"
            },
            {
                title:"Lockers (for individual secure storage)",
                banner:"/lodging/Lockers (for individual secure storage.png"
            },
            {
                title:"Footlockers or under-bed storage boxes",
                banner:"/lodging/Footlockers or under-bed storage boxes.png"
            }
        ]
    },
    

];

export default function Page() {
   const { slug } = useParams();
   const searchParams = useSearchParams();
   const id = searchParams.get("categoryId"); // Extract 'id' from query params
    // Find the category based on slug
    console.log("the category id is", id)
  const [productData, setProductData] = useState([])

    useEffect(()=>{
      const fetchData = async()=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const data = await axios.get(`/api/product?categoryId=${id}`,config)
            const res = data?.data
            console.log("the data is", res)
            setProductData(res?.products)
        } catch (error) {
            console.log(error.message)
           return error 
        }
      }
      fetchData()
    },[id])
     
    console.log("the data is",productData)

    // const category = data.find((cat) => cat.slug === slug);

    // if (!category) {
    //     return <div className="text-center text-red-500 mt-10 text-2xl">Category not found!</div>;
    // }

    return (
        <div className="container mx-auto px-4 py-10 ">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                <Image src={productData[0]?.category?.banner[0]?.secure_url} layout="fill" objectFit="cover" alt={productData[0]?.category?.title}  />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{productData[0]?.category?.title}</h1>
                </div>
            </div>

            <p className="mt-8 text-lg text-gray-700 text-center">
                Explore our <span className="font-semibold">{productData?.[0]?.category?.title}</span> collection!
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 ">
                {productData.map((product, index) => (
                    <div 
                        key={index} 
                        className="bg-white  p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
                    >
                        <Image 
                            src={product?.banner[0].secure_url} 
                            width={300} 
                            height={300} 
                            alt={product.title} 
                            className="rounded-lg w-full h-48 "
                        />
                        <h2 className="text-xl font-semibold mt-4 text-center">{product.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
