// components/sections/ProblemSection.jsx
import React from "react";

const ProblemCard = ({ number, title, description }) => (
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

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Problem Every Nigerian Student Faces
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic success shouldn't be left to chance. Yet most students are
            flying blind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ProblemCard
            number="1"
            title="CGPA Mystery"
            description="Many students don't understand how their CGPA is calculated or what grades they need to achieve their goals."
          />
          <ProblemCard
            number="2"
            title="No Monitoring"
            description="Without active tracking, students only discover they're off-track when it's too late to course-correct."
          />
          <ProblemCard
            number="3"
            title="Unclear Targets"
            description="Setting vague goals like 'do better' instead of specific, measurable academic targets."
          />
        </div>
      </div>
    </section>
  );
}
