"use client"

import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const {
        register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 via-green-200 to-green-100 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-4xl flex flex-col md:flex-row">
                <div className="flex-1 p-4 flex flex-col justify-center">
                    <h2 className="text-4xl font-mono text-green-600 tracking-tight font-medium mb-4">Let's Connect</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Name is required" })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required", pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: "Enter a valid email" } })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter email"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Phone No.</label>
                            <input
                                type="tel"
                                {...register("phone")}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                {...register("message", { required: "Message is required" })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Type your message"
                                rows="4"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;