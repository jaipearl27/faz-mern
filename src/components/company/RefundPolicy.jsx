import React from 'react';

const RefundPolicy = () => {
  const logos = [
    "/logo/img-1.png",
    "/logo/img-2.png",
    "/logo/Emblem_of_the_United_States_Department_of_the_Army.svg.png",
    "/logo/img-4.png",
    "/logo/marine-crop.png",
  ];

  return (
<div className="bg-white text-white py-12 px-6 mx-auto">
  <h2 className="text-black text-3xl font-bold uppercase mx-auto mb-10 text-center">our clients</h2>

  <div className="flex flex-row items-center justify-center gap-4 mt-6">
    {logos.slice(0, 3).map((logo, index) => (
      <div key={index} className="flex self-center">
        <img src={logo} alt={`Logo ${index + 1}`} width={150} height={100} />
      </div>
    ))}
  </div>

  <div className="flex flex-row justify-center gap-4 mt-4">
    {logos.slice(3, 5).map((logo, index) => (
      <div key={index}>
        <img src={logo} alt={`Logo ${index + 4}`} width={150} height={100} className="flex self-center" />
      </div>
    ))}
  </div>
</div>

  );
};

export default RefundPolicy;
