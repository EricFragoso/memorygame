import React from "react";

const ParticleEffect = ({ trigger }) => {
  if (!trigger) return null;
  return <div className="absolute inset-0 bg-green-500 opacity-50"></div>;
};

export default ParticleEffect;
