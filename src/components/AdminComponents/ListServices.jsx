"use client"

import { getServicesData } from "@/lib/redux/actions/serviceAction";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ListServices = () => {
    const dispatch = useDispatch();
    const { serviceData } = useSelector((state) => state.services);

    useEffect(() => {
        dispatch(getServicesData());
    }, [dispatch]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">List of Services</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Banner</th>
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Description</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(serviceData?.data) &&
                            serviceData.data.map((item) => (
                                <tr key={item?._id} className="border">
                                    <td className="border px-4 py-2">
                                        <Image
                                            src={item?.banner?.[0]?.secure_url || "/placeholder.jpg"}
                                            alt={item?.title}
                                            width={50}
                                            height={50}
                                            className="object-cover"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{item?.title}</td>
                                    <td className="border px-4 py-2">{item?.description}</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListServices;
