import React, { useState, useContext } from "react";
import { opacify } from "polished";
import { ThemeContext } from "styled-components";
import TSParticles from "react-tsparticles";

import { ParticlesWrapper } from "./Particles.styles";
import { TECHNOLOGIES } from "../../../constants";

interface Props {}

const Particles = (props: Props) => {
  const themeContext = useContext(ThemeContext);
  const [enableMove, setEnableMove] = useState(false);

  return (
    <ParticlesWrapper>
      <TSParticles
        height="100vh"
        width="100%"
        options={{
          fullScreen: {
            enable: false,
          },
          retina_detect: true,
          particles: {
            reduceDuplicates: false,
            color: {
              // value: themeContext.colors.text,
              value: opacify(0.9, themeContext.colors.text),
            },
            // life: {
            //   count: 1,
            //   duration: {
            //     value: {
            //       min: 10,
            //       max: 20,
            //     },
            //   },
            // },
            number: {
              density: {
                enable: false,
              },
              value: 12,
              // limit: 4,
            },
            links: {
              blink: true,
              opacity: 0.3,
              warp: true,
              color: {
                value: "#ffffff55",
              },
              consent: true,
              enable: true,
              distance: 250,
              frequency: 1,
            },
            move: {
              enable: true,
            },
            size: {
              value: 10,
              random: {
                enable: true,
                minimumValue: 10,
              },
              // anim: {
              //   minimumValue: 8,
              //   startValue: "random",
              //   enable: true,
              //   sync: true,
              //   count: 5,
              //   speed: 100,
              // },
            },
            shape: {
              type: "character",
              character: {
                value: TECHNOLOGIES,
                font: "Roboto",
                style: "",
                weight: "200",
                fill: true,
              },
            },
          },
        }}
      />
    </ParticlesWrapper>
  );
};

export default Particles;
