import { IParticlesParams } from "../../../types";
import { TECHNOLOGIES } from "../../constants";

export const welcomeParticlesConfig: IParticlesParams = {
  id: "welcome-particles",
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

export const charsParticlesConfig: IParticlesParams = {
  id: "chars-particles",
  width: "100%",
  height: "350px",
  params: {
    detectRetina: true,
    pauseOnOutsideViewport: true,
    emitters: {
      autoPlay: true,
      direction: "right",
      position: {
        x: -10,
        y: 50,
      },
      rate: {
        delay: 10,
        quantity: 2,
      },
    },

    particles: {
      bounce: {
        vertical: {
          random: true,
        },
      },
      reduceDuplicates: true,
      color: {
        value: "#b0bec5",
      },
      number: {
        value: 20,
        density: {
          enable: true,
          area: 700,
        },
      },
      rotate: {
        random: true,
        direction: "random",
        animation: {
          enable: true,
          speed: 1,
        },
      },
      links: {
        blink: true,
        opacity: 0.2,
        width: 0.45,
        color: {
          value: "#ffffff55",
        },
        enable: true,
        distance: 200,
      },
      shadow: {
        blur: 1,
        color: {
          value: "#000",
        },
        enable: true,
        offset: {
          x: 1,
          y: 1,
        },
      },
      move: {
        direction: "right",
        outModes: {
          default: "out",
          top: "bounce",
          bottom: "bounce",
          right: "destroy",
          left: "split",
        },
        enable: true,
        speed: {
          min: 0.3,
          max: 0.7,
        },
      },
      size: {
        value: 10,
        random: {
          enable: true,
          minimumValue: 4,
        },
      },
      shape: {
        type: "character",
        character: {
          value: TECHNOLOGIES,
          font: "Istok Web",
          style: "",
          weight: "400",
          fill: true,
        },
      },
    },
  },
};
