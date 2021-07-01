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
  WelcomeScrollDown,
} from "./WelcomeSection.styles";
import {
  welcomeTitleCharsVariants,
  // WelcomeTitleVariants,
} from "./WelcomeSection.variants";
import { ABOUT_TITLE } from "../../../constants";
import Button from "../../shared/Button/Button.component";
import ScrollDown from "../../shared/ScrollDown/ScrollDown.component";
import { welcomeParticlesConfig } from "../../../animations/particles";

interface Props {}

const WelcomeSection = (props: Props) => {
  let delayCount = 0;
  const aboutSplittedTitle = ABOUT_TITLE.split("\n");
  const getCharDelay = () => {
    delayCount++;
    return welcomeTitleCharsVariants(delayCount);
  };
  return (
    <>
      <WelcomeSectionWrapper>
        <TSParticles {...welcomeParticlesConfig} />
        <WelcomeTitleWrapper>
          <WelcomeTitle>
            {aboutSplittedTitle.map((titleItem, parentI) => (
              <WelcomeTitleWord key={`word-${parentI}`}>
                {Array.from(titleItem).map((charItem, i) => (
                  <WelcomeTitleChar
                    key={`${charItem}-${i}`}
                    initial="hidden"
                    animate={"show"}
                    whileHover={"hover"}
                    variants={getCharDelay()}
                  >
                    {charItem}
                  </WelcomeTitleChar>
                ))}
              </WelcomeTitleWord>
            ))}
          </WelcomeTitle>
        </WelcomeTitleWrapper>
        {/* TODO: Continue here, "say hello" button */}
        <WelcomeHelloButton>
          <Button variantColor="text">
            <span>Default</span>
          </Button>
          <Button variantColor="secondary">
            <span>Secondary</span>
          </Button>
          <Button variantColor="tertiary">
            <span>Tertiary</span>
          </Button>
          <Button variantColor="primary">
            <span>Transparent</span>
          </Button>
        </WelcomeHelloButton>
        <WelcomeScrollDown>
          <ScrollDown />
        </WelcomeScrollDown>
      </WelcomeSectionWrapper>
    </>
  );
};

export default WelcomeSection;
