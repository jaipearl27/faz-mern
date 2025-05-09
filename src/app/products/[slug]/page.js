"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
    import {
        useSearchParams
    } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/lib/redux/actions/productAction";
import { useForm } from "react-hook-form";

 
export default function Page() {
   const { slug } = useParams();
   const dispatch = useDispatch()
   const searchParams = useSearchParams();
   const id = searchParams.get("categoryId"); // Extract 'id' from query params
     const {
         handleSubmit,
         register,
         formState: {
             errors
         },
         watch,
         setValue
     } = useForm()
    // Find the category based on slug
    console.log("the category id is", id)
    const { productsData } = useSelector(state=> state.products)
    const [minimamPrice, setMinimamPrice] = useState(null)
    const [maximamPrice, setMaximamPrice] = useState(null);
    const [productData, setProductData] = useState([])
    const [categoryData, setCategoryData] = useState([])
    const minPrice = watch("minPrice")
    const maxPrice = watch("maxPrice")
  console.log("the max and min price is", minPrice, maxPrice)
 useEffect(()=>{
   setMinimamPrice(minPrice)
   setMaximamPrice(maxPrice)
 },[minPrice, maxPrice])

 console.log("the new final price are",minimamPrice, maximamPrice)
  
useEffect(()=>{
dispatch(getProducts({id:id , minPrice:0, maxPrice:100000}))
},[dispatch,id])

    useEffect(()=>{
      const fetchData = async()=>{
        try {
            const config = {
                headers:{
                    "Content-Type":"application/json"
                }
            }
            const data = await axios.get(`/api/product?categoryId=${id}`,config)
            const res = data?.data// console.log("the data is", res)
            setProductData(res?.products)
            setCategoryData(res?.categorieData)
        } catch (error) {
            console.log(error.message)
           return error 
        }
      }
      fetchData()
    },[id])
     
    // console.log("the category data is",categoryData)
   
    const submitForm = async(data)=>{
         dispatch(getProducts({id:id, minPrice:minimamPrice ?? 0, maxPrice:maximamPrice ?? 100000000}))
    }

    return (
        <div className="container mx-auto px-4 py-10 ">
            {/* Hero Section */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
              {categoryData.length > 0  ? <><Image src={categoryData[0]?.banner[0]?.secure_url} layout="fill" objectFit="cover" alt="no"  /> </> :<div>
                  <span> No Images</span>
              </div>}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">{categoryData?.[0]?.title}</h1>
                </div>
            </div>
            <p className="mt-8 text-lg text-gray-700 text-center">
                Explore our <span className="font-semibold">{categoryData?.[0]?.title}</span> collection!
            </p>

        <div className = "flex flex-col md:flex-row gap-6 mt-10" >
              {/* <aside className="w-full md:w-2/12 bg-white h-min p-6 rounded-xl shadow-lg"> */}
                {/* <h2 className="text-lg font-semibold mb-4">Filter Products</h2> */}
                {/* Example Filter: Categories */}
                <form onSubmit={handleSubmit(submitForm)}>
                {/* <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Enter Price Range</label>
                     <div className="flex flex-col gap-1">
                      <label className = "block text-gray-600 font-medium" > Enter Min Price </label>

                        <input
                        id="minPrice"
                        type="number"
                        placeholder="Enter Min Price"
                        {...register("minPrice")}
                        />
                        <label className = "block text-gray-600 font-medium" > Enter Max Price </label>
                        <input
                        id="maxPrice"
                        type="number"
                        placeholder="Enter Max Price"
                        {...register("maxPrice")}/>
                     </div>
                </div> */}

                {/* Clear Filter Button */}
                {/* <button
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                    type="submit"
                >
                    Search
                </button> */}
                </form>
               
            {/* </aside> */}
            {/* Product Grid */}
            <div className = "w-full md:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {productsData.length >0 ? productsData?.map((product, index) => (
                    <div 
                        key={index} 
                        className="bg-white  p-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
                    >
                        <Image 
                            src={product?.banner[0]?.secure_url} 
                            width={300} 
                            height={300} 
                            alt={product?.title} 
                            className="rounded-lg w-full h-48 "
                        />
                        <h2 className="text-xl font-semibold mt-4 text-center">{product?.title}</h2>
                    </div>
                )):
                <><div>No Data Found</div></>
            
            }
            
            </div>
        </div>
        </div>
    );
}
