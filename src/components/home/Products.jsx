"use client";
import React, { useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardComponent } from "../cards/card";
import { usePathname } from "next/navigation";
import Link from "next/link"; // ✅ Corrected import
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "@/lib/redux/actions/productCategoriesAction";

const products = [
  {
    category: "Office Furniture",
    description:
      "L-Shaped Desks with Overhead cabinets, Cubicles, Wardrobes, Cabinets, Conference tables, Leather Sofas, Doors, Reception Desks, Chairs, Steel Cabinets, 4 – Drawer Cabinets.",
    banner: "/products/officeFurniture.jpg",
  },
  {
    category: "Bedding Components",
    description:
      "King & Queen Mattress, Comforters, Pillowcases, Linens, Fitted sheets, Flat sheets, Duvets, Bunk beds, Steel cabinets, Quilts, Night stands, Bed side Tables, Lamps, Storage and space organization.",
    banner: "/products/officeFurniture.jpg",
  },
  {
    category: "Electrical Products",
    description:
      "Electrical Cables (Armored & Non-Armored), Bare Conductors, Conduits, Panel boards, Transformers, Generators, Light Towers, Circuit Breakers, Load banks, Cable Connectors, Switches, Lights, Bulbs, Relays, Cable Trays, Contactors, UPS, Flood Lights, Maxcell, Anixter, Panduit, Cameras / CCTV etc.",
    banner: "/products/officeFurniture.jpg",
  },
  {
    category: "Networking Products",
    description:
      "Networking cables, Routers, Switches, Hubs, Modems, CISCO, Meraki Cloud-managed, Network adapters Repeaters, Ethernet Devices, Couplers, Access Points etc.",
    banner: "/products/officeFurniture.jpg",
  },
];

// Main Products Component
export default function Products() {
  const pathname = usePathname();
  const dispatch = useDispatch()
  const { categoriesData } = useSelector((state) => state.productCategories)
  console.log (categoriesData,"cate")

useEffect(()=>{
   dispatch(getAllCategories({page:1,limit:10}))
},[dispatch])

   // ✅ Fix: Ensure displayedProducts is always an array
  // const displayedProducts = pathname === "/" ? products.slice(0, 4) : products;
  const newDisplayingData = pathname === "/" ? (categoriesData?.length > 0 ? categoriesData?.slice(0, 4) : categoriesData) : categoriesData;
  console.log("the categories are", newDisplayingData)
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-2">
        <h2 className="text-black text-3xl font-semibold uppercase mx-auto mb-10 text-center">
          PRODUCTS
        </h2>

        <div className="flex flex-row items-center">
          {newDisplayingData?.length >0 && <CardComponent data={newDisplayingData} /> }  
</div>

       
      </div>
    </section>
  );
}

