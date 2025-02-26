// import React from 'react'
// import Card from '../core/card'

// const services = [
//     {
//         title: "Service 1",
//         imageUrl: "/banner2.jpg",
//         onClick: console.log('1')
//     },
//     {
//         title: "Service 2",
//         imageUrl: "/banner2.jpg",
//         onClick: console.log('2')
//     },
//     {
//         title: "Service 3",
//         imageUrl: "/banner2.jpg",
//         onClick: console.log('2')
//     },
//     {
//         title: "Service 4",
//         imageUrl: "/banner2.jpg",
//         onClick: console.log('2')
//     }
// ]


// const Services = () => {
//     return (
//         <section className="py-16">
//             <div className="container mx-auto px-4 space-y-5">
//                 <h2 className="text-4xl font-normal">Services</h2>
//                 <div className='grid grid-cols-2 gap-4'>
//                     {services && services.map((item) => (

//                         <Card
//                             key={item.title}
//                             title={item.title}
//                             imageUrl={item.imageUrl}
//                             onClick={item.onClick}

//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>



//     )
// }

// export default Services




import Image from "next/image"
import { ArrowRight } from "lucide-react"

function Services() {
  const sections = [
    {
      title: "Aluminum Tents",
      images: [
        { src: "/placeholder.svg?height=192&width=384", alt: "Aluminum tent structure 1" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Aluminum tent structure 2" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Aluminum tent structure 3" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Aluminum tent structure 4" },
      ],
    },
    {
      title: "Portable Container Houses",
      images: [
        { src: "/placeholder.svg?height=192&width=384", alt: "Container house exterior" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Container house door" },
      ],
    },
    {
      title: "Dumpsters",
      images: [
        { src: "/placeholder.svg?height=192&width=384", alt: "Orange dumpster container" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Red dumpster container" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Blue dumpster container" },
      ],
    },
    {
      title: "Passenger Vehicles",
      images: [
        { src: "/placeholder.svg?height=192&width=384", alt: "Black luxury car" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Red SUV" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Silver van" },
      ],
    },
    {
      title: "Construction Vehicles",
      images: [
        { src: "/placeholder.svg?height=192&width=384", alt: "Telescopic handler" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Compact loader" },
        { src: "/placeholder.svg?height=192&width=384", alt: "Scissor lift" },
      ],
    },
    {
      title: "Box Trucks & Transportation",
      images: [{ src: "/placeholder.svg?height=192&width=384", alt: "Box truck" }],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Decorative circles */}
        <div className="absolute left-0 top-0 -z-10">
          <div className="h-64 w-64 rounded-full bg-green-100/50" />
        </div>
        <div className="absolute right-0 bottom-0 -z-10">
          <div className="h-64 w-64 rounded-full bg-green-100/50" />
        </div>

        {/* Main content */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <section key={index} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                <ArrowRight className="w-5 h-5 text-green-600" />
              </div>

              <div
                className={`grid gap-4 ${
                  section.images.length > 2 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
                }`}
              >
                {section.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative h-48 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 transition-transform hover:scale-105"
                  >
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
