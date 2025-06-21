import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSubmitted,
  setLoading,
  setError,
  clearError,
} from "../../store/waitlistSlice";
import { supabase } from "../../lib/supabaseClient";

export default function WaitlistSection() {
  const dispatch = useDispatch();
  const { submitted, loading, error } = useSelector((state) => state.waitlist);
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email.trim()) return;
    dispatch(setLoading());
    dispatch(clearError());

    const { error: serverError } = await supabase
      .from("waitlist")
      .insert([{ email }]);

    if (serverError) {
      console.error("Submission error:", serverError.message);
      dispatch(setError(serverError));
    } else {
      dispatch(setSubmitted());
      console.log("Email submitted:", email);
    }

    dispatch(setLoading()); // Toggle loading state off
  };

  return (
    <section
      id="waitlist"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Headline */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your academic goals deserve tools to match your ambition.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of Nigerian students taking control of their academic
            future.
          </p>
        </div>

        {/* Form or Confirmation */}
        {!submitted ? (
          <>
            {error && (
              <p className="text-base text-red-400">
                Error submitting email. Please try again with a unique email
                address.
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition duration-300 disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
          </>
        ) : (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto space-y-2">
            <p className="text-green-400 font-semibold text-lg">
              🎉 You're all set!
            </p>
            <p className="text-gray-300">
              We'll email you the moment{" "}
              <span className="font-medium text-white">Grade Vision</span>{" "}
              launches.
            </p>
          </div>
        )}

        {/* Fine Print */}
        <p className="text-sm text-gray-500 pt-6">
          Free to join • No spam • Built for Nigerian students
        </p>
      </div>
    </section>
  );
}
