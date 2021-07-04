import { IParticlesParams } from "../../../types";

export const welcomeParticlesConfig: IParticlesParams = {
  width: "100%",
  height: "100vh",
  params: {
    retina_detect: true,
    background: {
      position: "relative",
    },

    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    particles: {
      color: {
        value: "#b0bec5",
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.5,
        },
      },
      size: {
        value: {
          min: 1,
          max: 1,
        },
      },
      number: {
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      links: {
        enable: true,
        color: "#455a64",
        opacity: 0.7,
      },
      move: {
        enable: true,
        speed: {
          min: 0.5,
          max: 0.5,
        },
        attract: {
          enable: true,
        },
      },
    },
  },
};

export const charsParticlesConfig: IParticlesParams = {};
