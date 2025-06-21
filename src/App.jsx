import React from "react";
import "./App.css";
import Hero from "./components/sections/Hero";
import StudentStory from "./components/sections/StudentStory";
import Problem from "./components/sections/ProblemSection";
import SolutionSection from "./components/sections/SolutionSection";
import WaitlistSection from "./components/sections/WaitlistSection";

import { useSelector, useDispatch } from "react-redux";
import { setSubmitted, stopLoading } from "./store/waitlistSlice";
import FooterSection from "./components/sections/FooterSection";

function App() {
  const dispatch = useDispatch();
  const { submitted, loading } = useSelector((state) => state.waitlist);

  const handleEmailSubmit = async (email) => {
    // dispatch(setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // setLoading(false);
    // setSubmitted(true);
    dispatch(setSubmitted());
    console.log("Email submitted:", email);
    dispatch(stopLoading());
  };
  return (
    <main className="bg-[#121212] text-white font-sans">
      <Hero />
      <StudentStory />
      <Problem />
      <SolutionSection />

      <WaitlistSection />
      <FooterSection />
    </main>
  );
}

export default App;
