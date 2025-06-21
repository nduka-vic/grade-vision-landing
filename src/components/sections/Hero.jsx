// components/sections/Hero.jsx
import React, { useState } from "react";
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

export default function Hero() {
  const dispatch = useDispatch();
  const { submitted, loading, error } = useSelector((state) => state.waitlist);
  // const [error, setError] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  const handleEmailSubmit = async (email) => {
    // setLoading(true);
    // // Simulate API call
    // await new Promise((resolve) => {

    //   setTimeout(resolve, 1000)});
    // setLoading(false);
    // setSubmitted(true);
    dispatch(setLoading());
    dispatch(clearError());
    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      console.error("Submission error:", error.message);
      dispatch(setError(error));
      // You can show an error toast or message here
    } else {
      dispatch(setSubmitted());
      console.log("Email submitted:", email);
    }
    dispatch(setLoading());
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <GradientOverlay />
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            You entered school with big dreams.
            <br />
            <span className="text-pink-400">Let's help you finish strong.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            Set your CGPA goal. Forecast your semester. Hit your academic
            target.
          </p>
        </div>

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
            <>
              {error && (
                <p className="text-base text-red-400">
                  Error submitting email. Ensure a unique email is inputed!
                </p>
              )}
              <EmailForm onSubmit={handleEmailSubmit} loading={loading} />
            </>
          )}
        </div>
      </div>

      {/* Floating gradients */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
}
