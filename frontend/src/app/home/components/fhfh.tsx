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
            <div className="relative w-full h-[80vh] flex items-center justify-between">
                <div className="flex-none w-[calc(50%-1rem)] h-[calc(100%+2rem)] cursor-pointer rounded-l-lg overflow-hidden relative" onClick={() => handleCardClick('/page1')}>
                    <img
                        src="/images/fh.jpg"
                        alt="Send Gifts to USA"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-0.5 h-[calc(100%32rem)]"></div> {/* Vertical border */}
                <div className="flex-none w-[calc(50%-1rem)] h-[calc(100%+2rem)] cursor-pointer rounded-r-lg overflow-hidden relative" onClick={() => handleCardClick('/page2')}>
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
