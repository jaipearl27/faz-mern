"use client";

import Image from "next/image";
import Link from "next/link";


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const products = [
  {
    category: "Office Furniture",
    description:
      "L-Shaped Desks with Overhead cabinets, Cubicles, Wardrobes, Cabinets, Conference tables, Leather Sofas, Doors, Reception Desks, Chairs, Steel Cabinets, 4 – Drawer Cabinets.",
    image: "/products/officeFurniture.jpg",
  },
  {
    category: "Bedding Components",
    description:
      "King & Queen Mattress, Comforters, Pillowcases, Linens, Fitted sheets, Flat sheets, Duvets, Bunk beds, Steel cabinets, Quilts, Night stands, Bed side Tables, Lamps, Storage and space organization.",
    image: "/products/officeFurniture.jpg",
  },
  {
    category: "Electrical Products",
    description:
      "Electrical Cables (Armored & Non-Armored), Bare Conductors, Conduits, Panel boards, Transformers, Generators, Light Towers, Circuit Breakers, Load banks, Cable Connectors, Switches, Lights, Bulbs, Relays, Cable Trays, Contactors, UPS, Flood Lights, Maxcell, Anixter, Panduit, Cameras / CCTV etc.",
    image: "/products/officeFurniture.jpg",
  },
  {
    category: "Networking Products",
    description:
      "Networking cables, Routers, Switches, Hubs, Modems, CISCO, Meraki Cloud-managed, Network adapters Repeaters, Ethernet Devices, Couplers, Access Points etc.",
    image: "/products/officeFurniture.jpg",
  },
  {
    category: "HVAC Products",
    description:
      "Copeland Compressors, Ducted Split Units, Air Conditioners, Ducts, Ductless Systems, Dehumidifiers, Thermostat, Chillers, Air Purifiers, Heat pumps, Refrigerant gases, Copper pipes & Fittings etc.",
    image: "/products/officeFurniture.jpg",
  },
  {
    category: "Electronics",
    description:
      "Washer & Dryers, Televisions, Laptops, Monitors, Printers, Scanners, Xerox Machines, Shredders, Refrigerators, Dehumidifiers, Speakers, Projector Screens, Ovens, Cell phones etc.",
    image: "/products/officeFurniture.jpg",
  },
  {
    category: "Mechanical Components",
    description:
      "Air Compressor, Air blowers, Cooling fans, Baggage Scanner Machine, Motors, Pumps, Ball bearings, Gears, Bolts, Pulleys, Springs, Screws, Urinals, Sink, Eye lags, Cutting tools, Hand tools etc.",
    image: "/products/officeFurniture.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-5">
        <h2 className="text-4xl font-normal">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.category}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.category}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
          <div className='flex'>
            <Link href="/products" className='group w-full h-full text-center flex justify-center items-center gap-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition duration-300'>
              <span className='text-3xl'>
                VIEW ALL PRODUCTS
              </span>
              <span className='flex flex-col justify-center items-center group-hover:translate-x-1 group-hover:scale-110 transition duration-300'>
                <ArrowForwardIosIcon fontSize='large' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}