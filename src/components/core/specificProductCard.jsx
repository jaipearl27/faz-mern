"use client"

export default function SpecificProductCard({ title, banner, products = null, slug = null }) {
    return (
        <div className="group relative w-80 shadow-black shadow-sm rounded-2xl hover:scale-105 duration-500">
            {/* Image with overlay gradient */}
            <div className="relative h-96 overflow-hidden rounded-2xl">
                <img src={banner} alt="Card image" className="h-full w-full object-cover" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 duration-500" />
            </div>

            {/* Content positioned over the image */}
            <div className="absolute bottom-0 p-6 w-full">
                <div className="mb-2">
                    <span className="inline-block text-xs group-hover:text-black duration-500 font-medium text-neutral-300">{title}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:hidden block duration-500">{title}</h3>
            </div>
        </div>
    );
}