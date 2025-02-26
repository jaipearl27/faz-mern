import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const services = [
    {
        title: "Service 1",
        image: "/banner2.jpg",
        description: "This is the description of the service 1",
        onClick: console.log('1')
    },
    {
        title: "Service 2",
        image: "/banner2.jpg",
        description: "This is the description of the service 2",
        onClick: console.log('2')
    },
    {
        title: "Service 3",
        image: "/banner2.jpg",
        description: "This is the description of the service 3",
        onClick: console.log('2')
    },
    {
        title: "Service 4",
        image: "/banner2.jpg",
        description: "This is the description of the service 4",
        onClick: console.log('2')
    }
]

export default function Services() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 space-y-5">
                <h2 className="text-black text-3xl font-semibold uppercase mx-auto mb-10 text-center">SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className='flex'>
                        <Link href="/services" className='group w-full h-full text-center flex justify-center items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300'>
                            <span className='text-3xl'>
                                VIEW ALL SERVICES
                            </span>
                            <span className='flex flex-col justify-center items-center group-hover:translate-x-1 group-hover:scale-110 transition duration-300'>
                                <ArrowForwardIosIcon fontSize='large' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
