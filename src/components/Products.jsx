"use client";
import React from "react";
import SpecificProductCard from "./core/specificProductCard";

// import { Category } from "@mui/icons-material";

const Products = ({ data }) => {


    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[6vh] font-semibold text-center ">Products</h1>
                <p className="text-[2vh] text-neutral-800">
                    Transform Your Workspace, Elevate Your Productivity!
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-20">
                {data.map((item, index) => (
                    <SpecificProductCard key={index}
                        data={item}
                    // title={item.title} imagePath={item.img} Category={item.Category} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;