"use client";
import React from "react";
import Link from "next/link"; // Importing Link from Next.js

const Sbc = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-100 p-8 flex flex-col items-center">
            <div className="text-center mb-12">
                <h1 className="font-extrabold text-5xl text-gray-800 tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Shop by Collection
                </h1>
                <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Discover our curated selection of flowers for every special occasion.
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
                
                {/* Birthday Collection */}
                <div className="flex flex-col items-center">
                    <div className="w-80 h-60 shadow-2xl rounded-lg overflow-hidden flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-3xl bg-white">
                        <img
                            src="/images/birthday.jpeg"
                            alt="Birthday Flowers"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="font-bold text-2xl text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>Birthday Blooms</h2>
                        <Link href="/shop/birthday">
                            <span className="mt-4 inline-block px-5 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
                                  style={{ fontFamily: "Poppins, sans-serif" }}>
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>
                
                {/* Anniversary Collection */}
                <div className="flex flex-col items-center">
                    <div className="w-80 h-60 shadow-2xl rounded-lg overflow-hidden flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-3xl bg-white">
                        <img
                            src="/images/aniv.jpeg"
                            alt="Anniversary Flowers"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="font-bold text-2xl text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>Anniversary Roses</h2>
                        <Link href="/shop/anniversary">
                            <span className="mt-4 inline-block px-5 py-3 bg-pink-400 text-white rounded-lg shadow-md hover:bg-pink-500 hover:shadow-lg transition-all duration-300"
                                  style={{ fontFamily: "Poppins, sans-serif" }}>
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>
                
                {/* Date Collection */}
                <div className="flex flex-col items-center">
                    <div className="w-80 h-60 shadow-2xl rounded-lg overflow-hidden flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-3xl bg-white">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Date Flowers"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="font-bold text-2xl text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>Romantic Dates</h2>
                        <Link href="/shop/dates">
                            <span className="mt-4 inline-block px-5 py-3 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500 hover:shadow-lg transition-all duration-300"
                                  style={{ fontFamily: "Poppins, sans-serif" }}>
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Sbc;
