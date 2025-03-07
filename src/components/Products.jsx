"use client";
import React, { useEffect, useState } from "react";
import SpecificProductCard from "./core/specificProductCard";
import axios from "axios";
// import { headers } from "next/headers";

const Products = ({ data, category = null }) => {
  const [productData, setProductData] = useState(null)

  useEffect(()=>{
   const fetchData = async()=>{
    try {
      const config = {
        headers:{
          "Content-Type": "application/json"
        }
      }
      const res = await axios.get(`/api/productcategory`,config)
      console.log("the res is", res)
    if(res.status ==200 || res.status==201){
      setProductData(res?.data?.data)
    }else{
      setProductData(null)
    }
    } catch (error) {
      console.log("the error is", error)
      return error  
    }
   }
   fetchData()
  },[])

  console.log("the product data is", productData)
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[6vh] font-semibold text-center ">
          {category ? category : "Products"}
        </h1>
        <p className="text-[2vh] text-neutral-800">
          Transform Your Workspace, Elevate Your Productivity!
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-20">

        {productData ? <>{productData?.map((item, index) => (
          <SpecificProductCard key={index} data={item} />
          ))}</>:<><h1>Loading data</h1></> 
      }
      </div>
    </div>
  );
};

export default Products;
