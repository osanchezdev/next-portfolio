'use client'
import { useState } from "react"
import { useDebounce } from "react-use"
import Particles from "@tsparticles/react";

import { useParticles } from "@/components/hooks/useParticles";
import { welcomeParticlesConfig } from "../../../animations/particles"
import Emoji from "../../shared/Emoji/Emoji.component"
import Button from "../../shared/Button/Button.component"
import ScrollDown from "../../shared/ScrollDown/ScrollDown.component"

import {
  WelcomeSectionWrapper,
  WelcomeTitleWrapper,
  WelcomeTitle,
  WelcomeTitleWord,
  WelcomeTitleChar,
  WelcomeButton,
  WelcomeScrollDown,
  WelcomeParticlesWrapper,
} from "./WelcomeSection.styles"

import {
  welcomeButtonVariants,
  welcomeParticlesWrapperVariants,
  welcomeScrollDownVariants,
  welcomeTitleCharsVariants,
} from "./WelcomeSection.variants"

//Hi, I'm a software developer who brings ideas to life with code.
const ABOUT_TITLE = "Hi, I’m Oscar, \na software developer \nwho brings ideas to life \nwith code."

const WelcomeSection = () => {
  const { init } = useParticles();
  const [finishTitleAnimation, setFinishTitleAnimation] = useState<boolean>()
  const [,] = useDebounce(
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
        <WelcomeParticlesWrapper
          initial={"initial"}
          animate={"show"}
          variants={welcomeParticlesWrapperVariants}
        >
        { init && <Particles id="tsparticles" options={welcomeParticlesConfig} /> }
        </WelcomeParticlesWrapper>
        <WelcomeTitleWrapper>
          <WelcomeTitle>
            {aboutSplittedTitle.map((titleItem, parentI) => (
              <WelcomeTitleWord key={`word-${parentI}`}>
                {Array.from(titleItem).map((charItem, i) => {
                  const variants = getCharDelay()
                  return (
                    <WelcomeTitleChar
                      key={`${charItem}-${i}`}
                      initial="hidden"
                      animate="show"
                      whileHover={finishTitleAnimation ? 'hover' : ''}
                      variants={variants}
                    >
                      {charItem}
                    </WelcomeTitleChar>
                  )
                })}
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
            $variantColor="primary"
            $solid
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
