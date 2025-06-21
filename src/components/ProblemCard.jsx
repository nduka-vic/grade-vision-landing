import React from "react";

export default function ProblemCard({ number, title, description }) {
  return (
    <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700">
      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-sm">{number}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}
