"use client";

import React, { useEffect, useRef } from "react";

export default function Ff() {
    const cardContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cardContainer = cardContainerRef.current;
        let scrollAmount = 0;

        const slideInterval = setInterval(() => {
            if (cardContainer) {
                scrollAmount += 1;
                cardContainer.scrollLeft = scrollAmount;

                // When the first set of cards is fully out of view, reset scroll position to the start
                if (scrollAmount >= cardContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        }, 15); // Adjust the speed by changing the interval

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="flex flex-col items-center bg-yellow-100 p-9 min-h-screen">
            <div className="font-bold text-4xl text-center mb-8 text-gray-800">
                <h1>Featured Flowers</h1>
                <p className="text-lg text-gray-600 mt-2">Explore our handpicked selection of beautiful flowers</p>
            </div>
            <div
                className="flex gap-4 overflow-hidden pb-4 w-full max-w-screen-2xl" // Adjusted width to be larger
                ref={cardContainerRef}
                style={{ whiteSpace: "nowrap" }} // Ensures that cards do not wrap to the next line
            >
                {[0, 1].map((_, index) => (
                    <React.Fragment key={index}>
                        <div className="card bg-violet-300 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-2">
                            <figure className="relative">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.L705KHRqVjZsGwE1x60rWQHaIG&pid=Api&P=0&h=180" // Replace with new image URL
                                    alt="Lily"
                                    className="w-full h-60 object-cover" // Increased height and decreased width
                                />
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                                    New
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Lily</h2>
                                <p className="text-gray-700">A beautiful and fragrant lily perfect for any occasion.</p>
                            </div>
                        </div>
                        <div className="card bg-orange-300 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-2">
                            <figure className="relative">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.L705KHRqVjZsGwE1x60rWQHaIG&pid=Api&P=0&h=180" // Replace with new image URL
                                    alt="Tulip"
                                    className="w-full h-60 object-cover" // Increased height and decreased width
                                />
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                                    Sale
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Tulip</h2>
                                <p className="text-gray-700">Limited-time offer on these stunning tulips.</p>
                            </div>
                        </div>
                        <div className="card bg-green-300 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-2">
                            <figure className="relative">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.L705KHRqVjZsGwE1x60rWQHaIG&pid=Api&P=0&h=180" // Replace with new image URL
                                    alt="Rose"
                                    className="w-full h-60 object-cover" // Increased height and decreased width
                                />
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                                    Bestseller
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Rose</h2>
                                <p className="text-gray-700">Our best-selling flower, loved by many!</p>
                            </div>
                        </div>
                        <div className="card bg-rose-300 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-2">
                            <figure className="relative">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.L705KHRqVjZsGwE1x60rWQHaIG&pid=Api&P=0&h=180" // Replace with new image URL
                                    alt="Orchid"
                                    className="w-full h-60 object-cover" // Increased height and decreased width
                                />
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                                    Featured
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Orchid</h2>
                                <p className="text-gray-700">A top pick for its elegance and charm.</p>
                            </div>
                        </div>
                        <div className="card bg-amber-300 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex-shrink-0 border-2 border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mx-2">
                            <figure className="relative">
                                <img
                                    src="https://tse1.mm.bing.net/th?id=OIP.L705KHRqVjZsGwE1x60rWQHaIG&pid=Api&P=0&h=180" // Replace with new image URL
                                    alt="Sunflower"
                                    className="w-full h-60 object-cover" // Increased height and decreased width
                                />
                                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700">
                                    Luxury
                                </div>
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-xl sm:text-2xl md:text-3xl font-semibold mb-2">Sunflower</h2>
                                <p className="text-gray-700">Perfect for brightening up any room.</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
