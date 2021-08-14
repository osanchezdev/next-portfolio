import React, { useContext } from "react"
import {
  AboutSectionParagraph,
  AboutSectionSkillsWrapper,
  AboutSectionTextWrapper,
  AboutSectionTitle,
  AboutSectionWrapper,
} from "./AboutSection.styles"
import { IntersectionContext } from "../../../context/intersectionContext"

import SkillsSection from "./SkillsSection/SkillsSection.component"
import { aboutSectionVariants } from "./AboutSection.variants"
import MaxWidth from "../../shared/MaxWidth/MaxWidth.component"

const AboutSection = () => {
  const { inView } = useContext(IntersectionContext)
  return (
    <AboutSectionWrapper
      id="about-section"
      initial={"initial"}
      animate={inView && "show"}
      variants={aboutSectionVariants}
    >
      <MaxWidth>
        <AboutSectionTextWrapper>
          <AboutSectionTitle variants={aboutSectionVariants}>
            About Me
          </AboutSectionTitle>
          <AboutSectionParagraph variants={aboutSectionVariants}>
            I started as a web developer when I was still in college and doing
            my first freelance jobs.
            <br />
            <br />
            Since then I have had the opportunity to work with many amazing
            technologies and people, in differents roles gaining a lot of
            experience throughout these years.
          </AboutSectionParagraph>
        </AboutSectionTextWrapper>
        <AboutSectionSkillsWrapper variants={aboutSectionVariants}>
          <SkillsSection />
        </AboutSectionSkillsWrapper>
      </MaxWidth>
    </AboutSectionWrapper>
  )
}

export default AboutSection
