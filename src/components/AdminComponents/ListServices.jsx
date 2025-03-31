"use client"

import { deleteService, getServicesData, updateService } from "@/lib/redux/actions/serviceAction";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteModal from "../deleteModal";

const ListServices = () => {
    const dispatch = useDispatch();
    const { serviceData } = useSelector((state) => state.services);
    const { register, handleSubmit, setValue } = useForm();
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [singleServiceData, setSingleServiceData] = useState(null);
    const [openDeleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null)

    const handleDelete = ()=>{
        dispatch(deleteService(deleteId))
    }
    
    const openHandleDelete=(id)=>{
        setDeleteId(id)
        setDeleteModal(!openDeleteModal)
    }

    console.log("the id is",deleteId)
    const handleOpenUpdateService = (data) => {
        setSingleServiceData(data);
        setOpenUpdateModal(true);
        setValue("title", data?.title || "");
        setValue("description", data?.description || "");
    };

    const onSubmitForm = (data) => {
        const formData = {...data, id:singleServiceData?._id}
        dispatch(updateService(formData));
        setOpenUpdateModal(false);
    };

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
                                        <button
                                            onClick={() => handleOpenUpdateService(item)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                            Update
                                        </button>
                                        <button className="bg-red-500 text-white px-3 py-1 rounded"
                                         onClick={()=>openHandleDelete(item?._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            {openUpdateModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
                        <button
                            onClick={() => setOpenUpdateModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Update Service</h2>
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Title</label>
                                <input
                                    type="text"
                                    {...register("title")}
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Description</label>
                                <textarea
                                    {...register("description")}
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Banner</label>
                                {/* {singleServiceData?.banner?.[0]?.secure_url && (
                                    <Image
                                        src={singleServiceData.banner[0].secure_url}
                                        alt="Banner"
                                        width={100}
                                        height={100}
                                        className="object-cover mb-2"
                                    />
                                )} */}
                                <input
                                    type="file"
                                    {...register("banner")}
                                    className="w-full border border-gray-300 rounded p-2"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/** delete modal */}
            {openDeleteModal && <ConfirmDeleteModal confirmDelete={handleDelete} setShowDeleteModal={openHandleDelete} />}
        </div>
    );
};

export default ListServices;
