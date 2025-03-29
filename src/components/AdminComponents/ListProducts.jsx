"use client"
import { getProducts, updateProduct } from "@/lib/redux/actions/productAction"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
const ListProducts = () => {
    const dispatch = useDispatch()
    const { productsData }  = useSelector(state=> state.products)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const {register, handleSubmit, setValue, formState:{errors}, watch} = useForm()
    const [id, setId] = useState(null)
    const [categoryId, setCategoryId] = useState(null)
    const handleOpenUpdate = (data) => {
        setOpenUpdateModal(!openUpdateModal)
        setCategoryId(data?.category)
        setId(data?._id)
        setValue("title", data?.title);
        setValue("price", data?.price)
        setValue("stock", data?.stock)
    }

    const onSubmitForm=(data)=>{
        const formData = {...data,id:id ,category: categoryId}
        dispatch(updateProduct(formData))
    }

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
                                                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                                 onClick={()=> handleOpenUpdate(item)}
                                                >
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
          {openUpdateModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
                      <button
                          onClick={() => setOpenUpdateModal(false)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                      >
                          ✕
                      </button>
                      <h2 className="text-xl font-semibold mb-4">Update Product</h2>
                      <form onSubmit={handleSubmit(onSubmitForm)}>
                          <div className="mb-4">
                              <label className="block text-gray-700">Title</label>
                              <input
                                  type="text"
                                  {...register("title")}
                                  className="w-full border border-gray-300 rounded p-2"
                              />
                          </div>
                          {/** slug */}
                          <div>
                              <label className="block text-sm font-medium">Price</label>
                              <input
                                  type="number"
                                  {...register("price", { required: "Title is required" })}
                                  className="w-full border p-2 rounded mt-1"
                                  placeholder="Enter product price"
                              />
                              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                          </div>
                          <div>
                              <label className="block text-sm font-medium">Price</label>
                              <input
                                  type="number"
                                  {...register("stock", { required: "Stock is required" })}
                                  className="w-full border p-2 rounded mt-1"
                                  placeholder="Enter product stock"
                              />
                              {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
                          </div>

                          
                          <div className="mb-4">
                              <label className="block text-gray-700">Banner</label>
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
    </div>
  )
}

export default ListProducts