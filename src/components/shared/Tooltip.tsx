import React from 'react';
import type { ReactNode } from 'react';  // ✅ Perbaikan disini

type TooltipProps = {
  text: string;
  children: ReactNode;
};

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <span className="absolute -top-13 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-1 text-xs font-semibold text-gray-800 shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
