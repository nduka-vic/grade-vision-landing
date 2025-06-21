import React from "react";

export default function GradientOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 82, 181, 0.1) 0%, rgba(255, 82, 181, 0) 30%)",
      }}
    />
  );
}
