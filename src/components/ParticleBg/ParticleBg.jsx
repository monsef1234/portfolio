import React from "react";
import ParticleConfig from "./ParticleConfig";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="dots"
      init={particlesInit}
      options={ParticleConfig}
    ></Particles>
  );
};

export default ParticleBg;
