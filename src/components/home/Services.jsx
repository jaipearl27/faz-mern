import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const services = [
    {
        title: "AluminiumTents",
        banner: "/services/aluminiumTents.png",
        description: "This is the description of the service 1",
        onClick: console.log('aluminiumTents')
    },
    {
        title: "boxTrucks",
        banner: "/services/boxTrucks.png",
        description: "This is the description of the service 2",
        onClick: console.log('2')
    },
    {
        title: "constructionVehicles",
        banner: "/services/constructionVehicles.png",
        description: "This is the description of the service 3",
        onClick: console.log('2')
    },
    {
        title: "dumpster",
        banner: "/services/dumpster.png",
        description: "This is the description of the service 4",
        onClick: console.log('2')
    }
]

export default function Services() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 space-y-5">
                <h2 className="text-black text-3xl font-semibold uppercase mx-auto mb-10 text-center">SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src={service.banner}
                                alt={service.title}
                                width={400}
                                height={250}
                                className="w-full h-48 "
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{service.title}</h2>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className='mt-40'>
                        <Link href="/services" className='mt-40   text-green-600  px-3 py-4'>
                         
                                VIEW ALL SERVICES
                         
                            <span className=''>
                                <ArrowForwardIosIcon fontSize='8px'  />
                            </span>


                            
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
