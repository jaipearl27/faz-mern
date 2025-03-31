"use client"

import { deleteCategory, getAllCategories, updateProductCategory } from "@/lib/redux/actions/productCategoriesAction"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import slugify from "slugify";
import ConfirmDeleteModal from "../deleteModal"

const ListCategories = () => {
    const dispatch = useDispatch()
    const { categoriesData , paginate} = useSelector(state => state.productCategories)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const {register, handleSubmit, setValue, formState:{errors}, watch} = useForm()
    const [id,setId] = useState(null)
    const [openDeleteModal, setDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null)
    
    const handleDelete = ()=>{
            dispatch(deleteCategory(deleteId))        
    }
    
    const openHandleDelete=(id)=>{
        setDeleteId(id)
        setDeleteModal(!openDeleteModal)
    }
    
    const handleOpenUpdate =(data)=>{
        setOpenUpdateModal(!openUpdateModal)
        setId(data?._id)
        setValue("title", data?.title);
        setValue("slug", data?.slug)
        setValue("shortDescription", data?.shortDescription)
    }

    let title = watch("title")
    useEffect(()=>{
    let stringTitle = (title ?? "").toString();
    const slug = slugify(stringTitle)
    if(slug !== ""){
        setValue("slug", slug)
    }
    },[title])
    const onSubmitForm=(data)=>{
        const formdata={...data, id:id}
        dispatch(updateProductCategory(formdata))
    }
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
                                                        <button
                                                        onClick={()=> handleOpenUpdate(item)}
                                                         className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                                            Update
                                                        </button>
                                                        <button
                                                        onClick={()=>openHandleDelete(item?._id)} 
                                                        className="bg-red-500 text-white px-3 py-1 rounded">
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
                      <h2 className="text-xl font-semibold mb-4">Update Category</h2>
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
                              <label className="block text-sm font-medium">Slug</label>
                              <input
                                  type="text"
                                  {...register("slug", { required: "Title is required" })}
                                  disabled
                                  className="w-full border p-2 rounded mt-1"
                                  placeholder="Enter product title"
                              />
                              {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
                          </div>

                          <div className="mb-4">
                              <label className="block text-gray-700">Description</label>
                              <textarea
                                  {...register("shortDescription")}
                                  className="w-full border border-gray-300 rounded p-2"
                              />
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

        {/** delete modal */}
        {openDeleteModal && <ConfirmDeleteModal confirmDelete={handleDelete} setShowDeleteModal={openHandleDelete} />}
    </div>
  )
}

export default ListCategories