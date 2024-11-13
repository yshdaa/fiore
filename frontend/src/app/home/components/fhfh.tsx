"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Fhfh() {
    const router = useRouter();

    const handleCardClick = (path: string) => {
        router.push(path);
    };

    return (
        <div className="bg-yellow-100 p-0 min-h-screen flex flex-col items-center justify-center relative">
            <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
                <div
                    className="flex-none w-full md:w-[calc(50%-0.5rem)] h-[40vh] md:h-[80vh] cursor-pointer rounded-t-lg md:rounded-l-lg overflow-hidden relative"
                    onClick={() => handleCardClick('/forher')}
                >
                    <img
                        src="/images/fh.jpg"
                        alt="Send Gifts to USA"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-0.5 h-0.5 md:h-[80vh] bg-gray-300 my-2 md:my-0"></div> {/* Vertical border */}
                <div
                    className="flex-none w-full md:w-[calc(50%-0.5rem)] h-[40vh] md:h-[80vh] cursor-pointer rounded-b-lg md:rounded-r-lg overflow-hidden relative"
                    onClick={() => handleCardClick('/forhim')}
                >
                    <img
                        src="/images/fe.jpg"
                        alt="Send Gifts to UAE"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
