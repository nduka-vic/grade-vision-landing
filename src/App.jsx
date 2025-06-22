import React from "react";
import "./App.css";
import Hero from "./components/sections/Hero";
import StudentStory from "./components/sections/StudentStory";
import Problem from "./components/sections/ProblemSection";
import SolutionSection from "./components/sections/SolutionSection";
import CallToActionSection from "./components/sections/CallToActionSection";
import WaitlistSection from "./components/sections/WaitlistSection";
import FooterSection from "./components/sections/FooterSection";

function App() {
  return (
    <main className="bg-[#121212] text-white font-sans">
      <Hero />
      <StudentStory />
      <Problem />
      <SolutionSection />
      <CallToActionSection />
      <WaitlistSection />
      <FooterSection />
    </main>
  );
}

export default App;
