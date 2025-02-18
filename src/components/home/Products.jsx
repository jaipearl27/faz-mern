"use client";

import Image from "next/image";

const products = [
  {
    category: "Office Furniture",
    description:
      "L-Shaped Desks with Overhead cabinets, Cubicles, Wardrobes, Cabinets, Conference tables, Leather Sofas, Doors, Reception Desks, Chairs, Steel Cabinets, 4 – Drawer Cabinets.",
    image: "/images/office-furniture.jpg",
  },
  {
    category: "Bedding Components",
    description:
      "King & Queen Mattress, Comforters, Pillowcases, Linens, Fitted sheets, Flat sheets, Duvets, Bunk beds, Steel cabinets, Quilts, Night stands, Bed side Tables, Lamps, Storage and space organization.",
    image: "/images/bedding-components.jpg",
  },
  {
    category: "Electrical Products",
    description:
      "Electrical Cables (Armored & Non-Armored), Bare Conductors, Conduits, Panel boards, Transformers, Generators, Light Towers, Circuit Breakers, Load banks, Cable Connectors, Switches, Lights, Bulbs, Relays, Cable Trays, Contactors, UPS, Flood Lights, Maxcell, Anixter, Panduit, Cameras / CCTV etc.",
    image: "/images/electrical-products.jpg",
  },
  {
    category: "Networking Products",
    description:
      "Networking cables, Routers, Switches, Hubs, Modems, CISCO, Meraki Cloud-managed, Network adapters Repeaters, Ethernet Devices, Couplers, Access Points etc.",
    image: "/images/networking-products.jpg",
  },
  {
    category: "HVAC Products",
    description:
      "Copeland Compressors, Ducted Split Units, Air Conditioners, Ducts, Ductless Systems, Dehumidifiers, Thermostat, Chillers, Air Purifiers, Heat pumps, Refrigerant gases, Copper pipes & Fittings etc.",
    image: "/images/hvac-products.jpg",
  },
  {
    category: "Electronics",
    description:
      "Washer & Dryers, Televisions, Laptops, Monitors, Printers, Scanners, Xerox Machines, Shredders, Refrigerators, Dehumidifiers, Speakers, Projector Screens, Ovens, Cell phones etc.",
    image: "/images/electronics.jpg",
  },
  {
    category: "Mechanical Components",
    description:
      "Air Compressor, Air blowers, Cooling fans, Baggage Scanner Machine, Motors, Pumps, Ball bearings, Gears, Bolts, Pulleys, Springs, Screws, Urinals, Sink, Eye lags, Cutting tools, Hand tools etc.",
    image: "/images/mechanical-components.jpg",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
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
      </div>
    </div>
  );
}