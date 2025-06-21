import React, { useState } from "react";

export default function EmailForm({ onSubmit, loading }) {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (email) {
      onSubmit(email);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your email address"
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
  );
}
