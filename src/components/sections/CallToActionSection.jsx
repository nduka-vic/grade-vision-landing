import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function CallToActionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Take Control of Your CGPA?
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Join the waitlist today and be amongst the early movers to use Grade
          Vision – the tool built for students who want clarity, confidence, and
          better results.
        </p>

        <ScrollLink
          to="waitlist"
          smooth={true}
          duration={600}
          offset={-80} // Adjust if there's fixed header
        >
          <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold text-lg">
            Join the Waitlist
          </button>
        </ScrollLink>
      </div>
    </section>
  );
}
