"use client";

import React from "react";

export default function PlanCard({
  title,
  price,
  description,
  features,
  buttonText = "Contact Us",
  onButtonClick,
}) {
  return (
    <div className="relative max-w-sm w-full rounded-2xl bg-gradient-to-b from-black  to-purple-800/20 p-6 shadow-xl border border-zinc-800 overflow-hidden">
      <h3 className="text-lg font-medium bg-gradient-to-t from-zinc-600 to-zinc-200 bg-clip-text text-transparent">
        {title}
      </h3>
      <h1 className="text-4xl font-bold my-2 bg-gradient-to-t from-zinc-600 to-zinc-200 bg-clip-text text-transparent">
        {price}
      </h1>
      <p className="text-zinc-400 text-sm mb-4">{description}</p>

      <button
        onClick={onButtonClick}
        className={`w-full py-2 rounded-md  ${
          title === "Pro Plan"
            ? "bg-white text-black hover:bg-white/90"
            : "bg-zinc-900 text-white"
        } cursor-pointer `}
      >
        {buttonText}
      </button>

      <div className="mt-6 border-t border-zinc-700 pt-4">
        <p className="text-xs text-zinc-500 mb-4 font-inter">
          STAND OUT FEATURES
        </p>
        <ul className="space-y-3 text-zinc-100 text-xs">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 font-jetbrains-mono "
            >
              <span className="text-zinc-400 ">{feature.icon}</span>
              {feature.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
