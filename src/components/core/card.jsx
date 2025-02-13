"use client"

// interface HouseCardProps {
//     title: string
//     imageUrl: string
//     onClick?: () => void
// }

export default function Card({ title, imageUrl, onClick }) {
    return (
        <div
            onClick={onClick}
            className="group relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white cursor-pointer"
        >
            <div className="aspect-[16/10] w-full">
                <img
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="absolute bottom-3 left-0 right-0 bg-[#f7f5f5] backdrop-blur-sm w-[105%]">
                <div className="flex items-center justify-between px-8 py-6">
                    <h3 className="text-2xl font-light tracking-wide text-gray-900">{title}</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

