import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "Business Owner",
      review:
        "The best place to buy construction vehicles! We purchased an excavator, and the quality exceeded our expectations.",
      image: "/images/john.jpg", // Replace with actual images
    },
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      review:
        "Amazing selection of office furniture! The desks and chairs are high-quality and stylish. Highly recommend!",
      image: "/images/sarah.jpg",
    },
    {
      name: "Michael Lee",
      role: "Contractor",
      review:
        "Reliable service and excellent electronic equipment. Our office upgrade was smooth thanks to their products.",
      image: "/images/michael.jpg",
    },
    {
      name: "Emily Davis",
      role: "Homeowner",
      review:
        "Bought a home entertainment system from here, and it's been fantastic! Great prices and fast delivery.",
      image: "/images/emily.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="text-gray-600 mt-3 italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
