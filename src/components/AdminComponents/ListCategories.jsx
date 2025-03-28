"use client"

import { getAllCategories } from "@/lib/redux/actions/productCategoriesAction"
import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const ListCategories = () => {
    const dispatch = useDispatch()
    const { categoriesData , paginate} = useSelector(state => state.productCategories)

    useEffect(()=>{
      dispatch(getAllCategories())
    },[dispatch])
  return (            
  <div className="p-6">
                            <h1 className="text-2xl font-bold mb-4">List of Categories</h1>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="border px-4 py-2">Banner</th>
                                            <th className="border px-4 py-2">Title</th>
                                            <th className="border px-4 py-2">slug</th>
                                            <th className="border px-4 py-2">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                      {Array.isArray(categoriesData) &&
                          categoriesData.map((item) => (
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
                                                     <td className="border px-4 py-2">{item?.slug}</td>
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
  )
}

export default ListCategories