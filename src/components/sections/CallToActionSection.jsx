import React from "react";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          We'd Love to Hear Your Own Opinion
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          Join the waitlist and tell us what real academic problems you’d love
          us to solve. Grade Vision is built for students like you — help us
          make it even better.
        </p>

        <a
          href="https://forms.gle/QHdy7P2YxGmVwNdX6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button
            variant="outline"
            size="lg"
            className="px-6 py-3 font-semibold border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl flex items-center"
          >
            Tell Us What You Need 💬
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </a>

        {/* <a
          href="https://forms.gle/QHdy7P2YxGmVwNdX6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors font-medium text-lg underline underline-offset-4"
        >
          Drop Your 2 Cents 💬
          <ArrowRight className="w-5 h-5 ml-2" />
        </a> */}
      </div>
    </section>
  );
}
