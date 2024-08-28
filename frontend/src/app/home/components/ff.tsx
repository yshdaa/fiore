"use client";

import React, { useEffect, useRef } from "react";

export default function Ff() {
    const cardContainerRef = useRef(null);

    useEffect(() => {
        const cardContainer = cardContainerRef.current;
        let scrollAmount = 0;
        const slideInterval = setInterval(() => {
            if (cardContainer) {
                scrollAmount += 1;
                cardContainer.scrollLeft = scrollAmount;
                if (scrollAmount >= cardContainer.scrollWidth - cardContainer.clientWidth) {
                    scrollAmount = 0;
                }
            }
        }, 20); // Adjust the speed by changing the interval

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="flex flex-col items-center bg-yellow-100 p-6 min-h-screen">
            <div className="font-bold text-4xl text-center mb-8 text-gray-800">
                <h1>Featured Flowers</h1>
                <p className="text-lg text-gray-600 mt-2">Explore our handpicked selection of beautiful flowers</p>
            </div>
            <div
                className="flex gap-2 overflow-hidden pb-4 w-full max-w-screen-lg"
                ref={cardContainerRef}
            >
                <div className="card bg-violet-300 w-64 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="relative">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Lily"
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                            New
                        </div>
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-2xl font-semibold mb-2">Lily</h2>
                        <p className="text-gray-700">A beautiful and fragrant lily perfect for any occasion.</p>
                    </div>
                </div>
                <div className="card bg-orange-300 w-64 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="relative">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Lily"
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                            Sale
                        </div>
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-2xl font-semibold mb-2">Tulip</h2>
                        <p className="text-gray-700">Limited-time offer on these stunning tulips.</p>
                    </div>
                </div>
                <div className="card bg-green-300 w-64 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="relative">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Lily"
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                            Bestseller
                        </div>
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-2xl font-semibold mb-2">Rose</h2>
                        <p className="text-gray-700">Our best-selling flower, loved by many!</p>
                    </div>
                </div>
                <div className="card bg-rose-300 w-64 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="relative">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Lily"
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                            Featured
                        </div>
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-2xl font-semibold mb-2">Orchid</h2>
                        <p className="text-gray-700">A top pick for its elegance and charm.</p>
                    </div>
                </div>
                <div className="card bg-amber-300 w-64 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <figure className="relative">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Lily"
                            className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                            Luxury
                        </div>
                    </figure>
                    <div className="card-body p-4">
                        <h2 className="card-title text-2xl font-semibold mb-2">Sunflower</h2>
                        <p className="text-gray-700">Perfect for brightening up any room.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
