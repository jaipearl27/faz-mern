"use client";

import { getServicesDataById } from "@/lib/redux/actions/serviceAction";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ServiceDetailsClient() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { service } = useSelector((state) => state.services);

  useEffect(() => {
    if (id) dispatch(getServicesDataById(id));
  }, [id]);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-t-md overflow-hidden ">
      {/* Hero Image */}
      {service.banner?.[0]?.secure_url && (
        <img
          src={service.banner[0].secure_url}
          alt="Service Banner"
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-4">{service.description}</p>

        {/* Image Gallery */}
        {service.banner?.length > 1 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {service.banner.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden border hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.secure_url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-32 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
