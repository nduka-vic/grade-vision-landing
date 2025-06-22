import React from "react";
import FadeInWrapper from "../FadeInWrapper";

const ProblemCard = ({ number, title, description }) => (
  <div className="flex items-start space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-pink-500/50 transition duration-300">
    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
      <span className="text-white font-bold text-sm">{number}</span>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-base">{description}</p>
    </div>
  </div>
);

export default function ProblemSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Problem Every Nigerian Student Faces
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Academic success shouldn't be left to chance — yet most students are
            flying blind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FadeInWrapper delay={0.4}>
            <ProblemCard
              number="1"
              title="CGPA Mystery"
              description="Many students don’t understand how their CGPA is calculated or what grades they need to achieve their goals."
            />
          </FadeInWrapper>
          <FadeInWrapper delay={0.4}>
            <ProblemCard
              number="2"
              title="No Monitoring"
              description="Without active tracking, students only discover they're off-track when it’s too late to course-correct."
            />
          </FadeInWrapper>
          <FadeInWrapper delay={0.4}>
            <ProblemCard
              number="3"
              title="Unclear Targets"
              description="Setting vague goals like 'do better' instead of specific, measurable academic targets."
            />
          </FadeInWrapper>
        </div>
      </div>
    </section>
  );
}
