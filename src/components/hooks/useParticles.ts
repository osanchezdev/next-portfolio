'use client'
import { useEffect, useState } from "react"
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const useParticles = () => {
  const [ init, setInit ] = useState(false);
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadSlim(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  return { init };
}


export { useParticles }