import React from "react";
import {
  Target,
  Calculator,
  TrendingUp,
  Eye,
  BookOpen,
  Award,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors duration-300">
    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-base">{description}</p>
  </div>
);

export default function SolutionSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How Grade Vision Changes Everything
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your academic journey with tools designed for Nigerian
            university students.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Set Clear Goals"
            description="Define your target CGPA and let Grade Vision show you exactly what it takes to get there."
          />
          <FeatureCard
            icon={Calculator}
            title="Forecast Semesters"
            description="Plan ahead with semester-by-semester grade forecasting tailored to your academic program."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Track Progress"
            description="Monitor your performance in real-time and stay motivated as you work toward your goals."
          />
        </div>

        {/* Nigerian Focus Card */}
        <div className="mt-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text List */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Built for Nigerian Universities
              </h3>
              <ul className="space-y-3 text-base">
                <li className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">
                    4.0 and 5.0 grading systems supported
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">
                    Course unit calculations
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-pink-400" />
                  <span className="text-gray-300">
                    Class of degree predictions
                  </span>
                </li>
              </ul>
            </div>

            {/* CGPA Display */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-inner">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">4.2</div>
                <div className="text-gray-400 mb-4">Target CGPA</div>
                <div className="bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 w-[75%]"></div>
                </div>
                <div className="text-sm text-gray-400">75% to First Class</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
