"use client"

import { createService } from "@/lib/redux/actions/serviceAction"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

const AddService = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState:{errors}} = useForm()
  const [previewImages, setPreviewImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([])
  // Handle image preview
  const handleImagePreview = (e) => {
      const files = Array.from(e.target.files);
      setSelectedImages(files)
      const previews = files.map(file => URL.createObjectURL(file));
      setPreviewImages(previews);
  };

  const onSubmitform=(data)=>{
      const formdata = {...data, banner: selectedImages}
      dispatch(createService(formdata))
  }
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6 my-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Add a Service</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmitform)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
              Add Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Service title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
              Add Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe your service"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Banners
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      className="sr-only"
                      {...register("banner", { required: "At least one image is required" })}
                      onChange={(e) => {
                        handleImagePreview(e);
                      }}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            {errors.banner && <p className="text-red-500 text-sm mt-1">{errors.banner.message}</p>}
          </div>

          {/* Image Preview */}
          {previewImages.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image Preview
              </label>
              <div className="grid grid-cols-3 gap-4 mt-2">
                {previewImages.map((src, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="h-24 w-full rounded-md object-cover border border-gray-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddService