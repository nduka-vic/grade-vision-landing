import React from "react";
import GradientOverlay from "../GradientOverlay";
import EmailForm from "../EmailForm";
import { useSelector, useDispatch } from "react-redux";
import {
  setSubmitted,
  setLoading,
  setError,
  clearError,
} from "../../store/waitlistSlice";
import { supabase } from "../../lib/supabaseClient";
import FadeInWrapper from "../FadeInWrapper";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp, FaGooglePlay } from "react-icons/fa";

import "../../styles/custom.css";

export default function Hero() {
  const dispatch = useDispatch();
  const { submitted, loading, error } = useSelector((state) => state.waitlist);

  const handleEmailSubmit = async (email) => {
    dispatch(setLoading());
    dispatch(clearError());
    const { error: serverError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (serverError) {
      console.error("Submission error:", error.message);
      dispatch(setError(error));
    } else {
      dispatch(setSubmitted());
      console.log("Email submitted:", email);
    }
    dispatch(setLoading());
  };

  return (
    <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-28 sm:pb-20">
      <GradientOverlay />

      {/* === HEADER === */}
      <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-4 z-20 bg-transparent">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-7 sm:h-8 w-auto" />
          <span className="text-white text-lg sm:text-xl font-semibold">
            Grade Vision
          </span>
        </a>

        {/* Download Button */}
        <a
          href="https://play.google.com/store" // Replace with your real link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white font-medium text-sm sm:text-base shadow-lg hover:scale-105 transition-transform"
        >
          <FaGooglePlay className="w-5 h-5 mr-2" />
          Get on Play Store
        </a>
      </header>

      {/* === HERO CONTENT === */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 pt-24 sm:pt-32">
        <FadeInWrapper delay={0.4}>
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight sm:leading-snug tracking-tight">
              You entered school with big dreams.
              <br />
              <span className="text-pink-400">
                Let's help you finish strong.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto mt-4 sm:mt-6">
              Set your CGPA goal. Forecast your semester. Hit your academic
              target.
            </p>
          </div>
        </FadeInWrapper>

        <FadeInWrapper delay={0.4}>
          <div className="pt-8">
            {submitted ? (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-green-400 font-semibold">
                  🎉 You're on the waitlist!
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  We'll notify you when Grade Vision launches.
                </p>
              </div>
            ) : (
              <div className="max-w-md w-full mx-auto mb-4">
                {error && (
                  <p className="text-base text-red-400">
                    Error submitting email. Ensure a unique email is inputed!
                  </p>
                )}
                <EmailForm onSubmit={handleEmailSubmit} loading={loading} />
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6">
              {/* Tell Us What You Need */}
              <a
                href="https://forms.gle/QHdy7P2YxGmVwNdX6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors font-medium text-lg underline underline-offset-4"
              >
                💬 Tell Us What You Need
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>

              {/* WhatsApp Beta Test Group */}
              <a
                href="https://chat.whatsapp.com/KfddjidSm1Y4mI7xNGqNMt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="whatsapp-btn">
                  <FaWhatsapp className="w-5 h-5 mr-2" />
                  Join Beta Test Group
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </a>
            </div>
          </div>
        </FadeInWrapper>
      </div>

      {/* Floating gradients */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}
