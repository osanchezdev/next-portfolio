import { IOptions, RecursivePartial } from "@tsparticles/engine";


export const welcomeParticlesConfig :RecursivePartial<IOptions> = {
    fpsLimit: 120,
    zIndex: -1,
    fullScreen: {
      enable: false,
      zIndex: -1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
    },
    smooth: true,
    particles: {
      color: {
        value: "#b0bec5",
      },
      links: {
        color: "#455a64",
        enable: true,
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: true,
        random: true,
        speed: 0.5,
        straight: false,
        attract: {
          enable: true,
        },
      },
      number: {
        density: {
          enable: true,
        },
        value: 155,
      },
      opacity: {
        value: 0.5,
      },
      collisions: {
        enable: true,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 1 },
      },
    },
    detectRetina: false,
} ;
