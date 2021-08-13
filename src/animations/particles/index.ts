import { IParticlesParams } from "react-tsparticles"

export const welcomeParticlesConfig: IParticlesParams = {
  id: "welcome-particles",
  width: "100%",
  height: "100%",
  params: {
    retina_detect: false,
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
          value_area: 1500,
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
}
