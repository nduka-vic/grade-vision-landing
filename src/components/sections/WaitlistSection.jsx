import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSubmitted, setLoading, setError, clearError } from "../../store/waitlistSlice";
import { supabase } from "../../lib/supabaseClient";

export default function WaitlistSection() {
  const dispatch = useDispatch();
  const { submitted, loading, error } = useSelector((state) => state.waitlist);
  const [email, setEmail] = useState("");

  //   const [submitted, setSubmitted] = useState(false);
  //   const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    // setLoading(true);
    // // Simulate API request
    // await new Promise((res) => setTimeout(res, 1000));
    // setLoading(false);
    // setSubmitted(true);
    dispatch(setLoading());
    dispatch(clearError())
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
    <section
      id="waitlist"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Your academic goals deserve tools to match your ambition.
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Join thousands of Nigerian students who are taking control of their
          academic future.
        </p>

        {!submitted ? (
            <>
            {error && (
                <p className="text-base text-red-400">
                  Error submitting email. Ensure a unique email is inputed!
                </p>
              )}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </button>
          </div>
          </>
        ) : (
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-green-400 font-semibold text-lg">
              🎉 You're all set!
            </p>
            <p className="text-gray-300 mt-2">
              We'll email you the moment Grade Vision is ready.
            </p>
          </div>
        )}

        <p className="text-sm text-gray-500 pt-6">
          Free to join • No spam • Nigerian students first
        </p>
      </div>
    </section>
  );
}
