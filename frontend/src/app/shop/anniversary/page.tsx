"use client";

import React from "react";

const Anniversary = () => {
  const cardsData = [
    {
      id: 1,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 2,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 3,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 4,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 5,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 6,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 7,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 8,
      imgSrc: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Anniversary Collection</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {cardsData.map((card) => (
          <div key={card.id} className="card card-compact bg-base-100 w-72 shadow-xl">
            <figure>
              <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-700">{card.description}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anniversary;
