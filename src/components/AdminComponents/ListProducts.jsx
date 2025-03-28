"use client"
import { getProducts } from "@/lib/redux/actions/productAction"
import Image from "next/image"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
const ListProducts = () => {
    const dispatch = useDispatch()
    const { productsData }  = useSelector(state=> state.products)
    useEffect(()=>{
      dispatch(getProducts({id:"",maxPrice:0, minPrice:0, from:"admin"}))
    },[dispatch])
  return (
    <div>
         <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">List of Products</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border px-4 py-2">Banner</th>
                                    <th className="border px-4 py-2">Title</th>
                                    <th className="border px-4 py-2">Category</th>
                                    <th className="border px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                          {Array.isArray(productsData) &&
                              productsData.map((item) => (
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
                                            <td className="border px-4 py-2">{item?.category}</td>
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
    </div>
  )
}

export default ListProducts