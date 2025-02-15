import React from 'react'
import Card from '../core/card'

const projects = [
    {
        title: "Project 1",
        imageUrl: "/banner2.jpg",
        onClick: console.log('1')
    },
    {
        title: "Project 2",
        imageUrl: "/banner2.jpg",
        onClick: console.log('2')
    },
    {
        title: "Project 3",
        imageUrl: "/banner2.jpg",
        onClick: console.log('2')
    }
]


const Project = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 space-y-5">
                <h2 className="text-4xl font-normal">Projects</h2>
                <div className='grid grid-cols-3 gap-4'>
                    {projects && projects.map((item) => (

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

export default Project