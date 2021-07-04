import React from "react";
import Image from "next/image";
import TSParticles from "react-tsparticles";
import {
  WelcomeSectionWrapper,
  WelcomeTitleWrapper,
  WelcomeTitle,
  WelcomeTitleWord,
  WelcomeTitleChar,
  WelcomeButton,
  WelcomeScrollDown,
} from "./WelcomeSection.styles";
import {
  welcomeButtonVariants,
  welcomeScrollDownVariants,
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
                    animate="show"
                    whileHover="hover"
                    whileTap="hover"
                    variants={getCharDelay()}
                  >
                    {charItem}
                  </WelcomeTitleChar>
                ))}
              </WelcomeTitleWord>
            ))}
          </WelcomeTitle>
        </WelcomeTitleWrapper>
        <WelcomeButton
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tapped"
          variants={welcomeButtonVariants}
        >
          <Button variantColor="primary" solid>
            <span>Contact</span>
          </Button>
        </WelcomeButton>
        <WelcomeScrollDown
          initial="initial"
          animate="animate"
          variants={welcomeScrollDownVariants}
        >
          <ScrollDown />
        </WelcomeScrollDown>
      </WelcomeSectionWrapper>
    </>
  );
};

export default WelcomeSection;
