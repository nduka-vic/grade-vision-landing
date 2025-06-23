import React from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* Tell Us Button */}
          <a
            href="https://forms.gle/QHdy7P2YxGmVwNdX6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-6 py-3 font-semibold text-white bg-white/10 border border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center">
              Tell Us What You Need 💬
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </a>

          {/* WhatsApp Beta Test Group Button */}
          <a
            href="https://chat.whatsapp.com/KfddjidSm1Y4mI7xNGqNMt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-6 py-3 font-semibold text-white bg-green-600 hover:bg-green-500 rounded-xl transition-all duration-300 flex items-center">
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Join Beta Test Group
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
