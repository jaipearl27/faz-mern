"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import slugify from "slugify";
import { addProductCategories } from "@/lib/redux/actions/productCategoriesAction";

const AddCategory = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, setValue,reset, formState: { errors } } = useForm();
  

    const [previewImages, setPreviewImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([])
    // Handle image preview
    const handleImagePreview = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files)
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    let title = watch("title")
    useEffect(()=>{
    let stringTitle = (title ?? "").toString();
    const slug = slugify(stringTitle)
    if(slug !== ""){
        setValue("slug", slug)
    }
    },[title])
    const onSubmit = (data) => {
        const formData = { ...data, banner: selectedImages }
         dispatch(addProductCategories(formData))
        // reset();
        // setPreviewImages([]);
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        {...register("title", { required: "Title is required" })}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter product title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
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


                {/** short description */}
                <div>
                    <label className="block text-sm font-medium">Short Description</label>
                    <input
                        type="text"
                        {...register("shortDescription", { required: "shortDescription is required" })}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter product title"
                    />
                    {errors.shortDescription && <p className="text-red-500 text-sm mt-1">{errors.shortDescription.message}</p>}
                </div>
                {/* Banner (Image Upload) */}
                <div>
                    <label className="block text-sm font-medium">Upload Banners</label>
                    <input
                        type="file"
                        multiple
                        {...register("banner", { required: "At least one image is required" })}
                        className="w-full border p-2 rounded mt-1"
                        onChange={(e) => {
                            handleImagePreview(e);
                        }}
                    />

                    {errors.banner && <p className="text-red-500 text-sm mt-1">{errors.banner.message}</p>}

                    {/* Image Preview */}
                    <div className="flex gap-2 mt-2">
                        {previewImages.map((src, index) => (
                            <img key={index} src={src} alt="Preview" className="w-16 h-16 rounded-md object-cover" />
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
                >
                    Add Category
                </button>
            </form>
        </div>
    );
};

export default AddCategory;
