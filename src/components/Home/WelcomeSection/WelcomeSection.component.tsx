import React from "react";
import Image from "next/image";
import TSParticles from "react-tsparticles";
import {
  WelcomeSectionWrapper,
  WelcomeTitleWrapper,
  WelcomeTitle,
  WelcomeTitleWord,
  WelcomeTitleChar,
  WelcomeHelloButton,
} from "./WelcomeSection.styles";
import Rubber from "../../shared/Rubber/Rubber.component";
import Fade from "../../shared/layout/Fade/Fade.component";
import { WelcomeTitleVariants } from "../../../animations/variants";
import { ABOUT_TITLE } from "../../../constants";

const IMAGE_URL = "http://placeimg.com/640/480/animals";
const IMAGE_ALT = "Animals";

interface Props {}

const WelcomeSection = (props: Props) => {
  const aboutSplittedTitle = ABOUT_TITLE.split("\n");
  console.log(aboutSplittedTitle);
  return (
    <>
      <WelcomeSectionWrapper>
        <TSParticles
          width="100%"
          height="100vh"
          params={{
            retina_detect: true,
            background: {
              position: "relative",
            },
            fullScreen: {
              enable: false,
              zIndex: 0,
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
                direction: "bottom",
              },
            },
          }}
        />
        <WelcomeTitleWrapper
          initial="initial"
          animate="animate"
          variants={WelcomeTitleVariants()}
        >
          <WelcomeTitle>
            {aboutSplittedTitle.map((titleItem, i) => (
              <WelcomeTitleWord key={`${titleItem}-${i}`}>
                {Array.from(titleItem).map((charItem, i) => (
                  <Fade key={`${charItem}-${i}`} isAnimatedParent={false}>
                    <Rubber isAnimatedParent={false} playOnHover>
                      <WelcomeTitleChar>{charItem}</WelcomeTitleChar>
                    </Rubber>
                  </Fade>
                ))}
              </WelcomeTitleWord>
            ))}
          </WelcomeTitle>
        </WelcomeTitleWrapper>
        {/* TODO: Continue here, "say hello" button */}
        <WelcomeHelloButton>Want a say hello?</WelcomeHelloButton>
      </WelcomeSectionWrapper>
    </>
  );
};

export default WelcomeSection;
