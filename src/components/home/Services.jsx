"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesData } from '@/lib/redux/actions/serviceAction';





export default function Services({ data }) {
    const  pathname=usePathname()
    const dispatch = useDispatch()
    const { serviceData } = useSelector(state=> state.services)
    useEffect(()=>{
       dispatch(getServicesData({page:1, limit:10}))
    },[dispatch])
 console.log("the data of services is", serviceData)

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 space-y-5">
                <h2 className="text-black text-3xl font-semibold uppercase mx-auto mb-10 text-center">SERVICES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceData?.length>0 && serviceData?.map((service, index) => (
                        <div key={index} className=" shadow-lg rounded-lg overflow-hidden bg-white">
                            <Image
                                src={service?.banner?.[0]?.secure_url}
                                alt={service?.title}
                                width={400}
                                height={300}
                                className="w-full min-h-56 max-h-56 rounded-md"
                            />
                            <div className="p-2">
                                <h2 className="text-xl font-semibold min-h-16">{service?.title}</h2>
                                <p className="text-gray-600 mt-2 line-clamp-6">{service?.description}</p>
                            </div>
                        </div>
                    ))}
                   
            </div>

            {pathname !== "/services" && (
                 

                 <div className='flex items-center justify-between'>
                    <div className=''></div>
                       <div className='flex justify-center items-center'>
                        <Link href="/services" className='flex justify-center items-center text-green-600 text-xl px-3 py-4 group hover:text-green-700 transition duration-300'>
                            VIEW ALL SERVICES
                            <span className="flex flex-col justify-center items-center group-hover:translate-x-1 transition duration-300">
                                <ArrowForwardIosIcon fontSize='8px' />
                            </span>
                        </Link>
                    </div>
                 </div>
                )}
            </div>
        </section>
    );
}
