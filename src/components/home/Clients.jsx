import React from 'react';

const Clients = () => {
    const logos = [
        "/logo/img-1.png",
        "/logo/img-2.png",
        "/logo/Emblem_of_the_United_States_Department_of_the_Army.svg.png",
        "/logo/img-4.png",
        "/logo/marine-crop.png",
    ];

    return (
        <div className="bg-white text-white py-12 px-6 mx-auto">
            <h2 className="text-black text-3xl font-semibold uppercase mx-auto mb-10 text-center">OUR CLIENTS</h2>

            <div className='w-full lg:w-1/2 2xl:w-1/3 mx-auto'>
                <div className="flex flex-row items-center justify-center flex-wrap gap-4 mt-6">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex self-center">
                            <img src={logo} alt={`Logo ${index + 1}`} width={150} height={100} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Clients;
