"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { usePathname } from 'next/navigation';





export default function Services({ data }) {

    const  pathname=usePathname()
 
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 space-y-5">
                <h2 className="text-black text-3xl font-semibold uppercase mx-auto mb-10 text-center">SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={service.banner}
                                alt={service.title}
                                width={400}
                                height={300}
                                className="w-full"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                     {pathname !== "/services" && (
                    <div className='flex justify-center items-center'>
                        <Link href="/services" className='flex justify-center items-center text-green-600 text-xl px-3 py-4 group hover:text-green-700 transition duration-300'>
                            VIEW ALL SERVICES
                            <span className="flex flex-col justify-center items-center group-hover:translate-x-1 transition duration-300">
                                <ArrowForwardIosIcon fontSize='8px' />
                            </span>
                        </Link>
                    </div>
                )}
            </div>
            </div>
        </section>
    );
}
