"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/lib/redux/actions/productCategoriesAction";
import { createProduct } from "@/lib/redux/actions/productAction";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { categoriesData } = useSelector(state=> state.productCategories)
    console.log("cat",categoriesData)

    const [previewImages, setPreviewImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([])
    // Handle image preview
    const handleImagePreview = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files)
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(previews);
    };
    const onSubmit = (data) => {
        const formData = {...data, banner: selectedImages}
        dispatch(createProduct(formData));
        // reset();
        // setPreviewImages([]);
    };


    useEffect(()=>{
       dispatch(getAllCategories({page:1, limit:100}))
    },[dispatch])
    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
            <h2 className="text-xl font-semibold mb-4">Add New Product</h2>

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

                {/* Category Select */}
                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <select
                        {...register("category", { required: "Category is required" })}
                        className="w-full border p-2 rounded mt-1"
                    >
                        <option value="">Select a category</option>
                        {Array.isArray(categoriesData) && categoriesData?.map(category => (
                            <option key={category._id} value={category._id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                {/* Price */}
                <div>
                    <label className="block text-sm font-medium">Price</label>
                    <input
                        type="number"
                        {...register("price", { required: "Price is required", min: 1 })}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter product price"
                    />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>

                {/* Stock */}
                <div>
                    <label className="block text-sm font-medium">Stock</label>
                    <input
                        type="number"
                        {...register("stock", { required: "Stock is required", min: 0 })}
                        className="w-full border p-2 rounded mt-1"
                        placeholder="Enter stock quantity"
                    />
                    {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
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
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
