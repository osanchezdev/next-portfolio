import React, { useState } from "react"
import { useDebounce } from "react-use"
import TSParticles from "react-tsparticles"
import { welcomeParticlesConfig } from "../../../animations/particles"
import Emoji from "../../shared/Emoji/Emoji.component"
import Button from "../../shared/Button/Button.component"
import ScrollDown from "../../shared/ScrollDown/ScrollDown.component"
import WickedBg from "../../shared/WickedBg/WickedBg.component"

import {
  WelcomeSectionWrapper,
  WelcomeTitleWrapper,
  WelcomeTitle,
  WelcomeTitleWord,
  WelcomeTitleChar,
  WelcomeButton,
  WelcomeScrollDown,
} from "./WelcomeSection.styles"

import {
  welcomeButtonVariants,
  welcomeScrollDownVariants,
  welcomeTitleCharsVariants,
} from "./WelcomeSection.variants"

const ABOUT_TITLE = "Hi, \nI’m Oscar,\nsoftware developer"

const WelcomeSection = () => {
  const [finishTitleAnimation, setFinishTitleAnimation] = useState<boolean>()
  const [, cancel] = useDebounce(
    () => {
      setFinishTitleAnimation(true)
    },
    3000,
    []
  )
  let delayCount = 0
  const aboutSplittedTitle = ABOUT_TITLE.split("\n")
  const getCharDelay = () => {
    delayCount++
    return welcomeTitleCharsVariants(delayCount)
  }
  return (
    <>
      <WelcomeSectionWrapper id="welcome-section">
        <WickedBg />
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
                    whileHover={finishTitleAnimation ? "hover" : ""}
                    whileTap={finishTitleAnimation ? "hover" : ""}
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
          <Button
            variantColor="primary"
            solid
            onClick={() =>
              document
                ?.getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Say Hello <Emoji symbol="👋" label="hello" />
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
  )
}

export default WelcomeSection
