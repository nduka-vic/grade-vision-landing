import React from "react";
import { Award } from "lucide-react";
import FadeInWrapper from "../FadeInWrapper";

export default function StudentStory() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <FadeInWrapper delay={0.2}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-pink-500/20 rounded-full">
              <span className="text-pink-400 font-semibold">Student Story</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Meet Amaka
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Amaka started her Computer Science degree at the University of
                Lagos with one clear goal: graduate with first-class honors and
                land her dream tech job.
              </p>
              <p>
                But by her third year, she realized she had no clear idea where
                she stood academically. Her CGPA calculations were guesswork,
                and she couldn't tell if she was on track for her goals.
              </p>
              <p className="text-pink-400 font-semibold">
                That's when she discovered Grade Vision — and everything
                changed.
              </p>
            </div>
          </div>

          {/* Quote Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Amaka O.</h3>
                    <p className="text-gray-400">Computer Science, UNILAG</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Grade Vision helped me visualize my path to first-class. I
                  went from guessing to knowing exactly what grades I needed
                  each semester."
                </p>
                <div className="flex items-center space-x-2 text-pink-400">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Current CGPA: 4.12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWrapper>
    </section>
  );
}
