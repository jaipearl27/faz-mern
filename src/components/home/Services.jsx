import React from 'react'
import Card from '../core/card'

const services = [
    {
        title: "Service 1",
        imageUrl: "/banner2.jpg",
        onClick: console.log('1')
    },
    {
        title: "Service 2",
        imageUrl: "/banner2.jpg",
        onClick: console.log('2')
    },
    {
        title: "Service 3",
        imageUrl: "/banner2.jpg",
        onClick: console.log('2')
    },
    {
        title: "Service 4",
        imageUrl: "/banner2.jpg",
        onClick: console.log('2')
    }
]


const Services = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 space-y-5">
                <h2 className="text-4xl font-normal">Services</h2>
                <div className='grid grid-cols-2 gap-4'>
                    {services && services.map((item) => (

                        <Card
                            key={item.title}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            onClick={item.onClick}

                        />
                    ))}
                </div>
            </div>
        </section>



    )
}

export default Services