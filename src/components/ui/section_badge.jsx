import React from "react";

const SectionBadge = ({ title }) => {
  return (
    <div className="relative inline-flex h-8 select-none overflow-hidden rounded-full p-[1.5px] focus:outline-none">
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-800 px-4 py-1 text-sm font-medium text-zinc-400 backdrop-blur-3xl font-jetbrains-mono">
        {title}
      </span>
    </div>
  );
};

export default SectionBadge;
