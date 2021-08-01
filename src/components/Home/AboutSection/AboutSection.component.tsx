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

const AboutSection = () => {
  const { inView } = useContext(IntersectionContext)
  return (
    <AboutSectionWrapper
      initial={"initial"}
      animate={inView && "show"}
      variants={aboutSectionVariants}
    >
      <AboutSectionTextWrapper>
        <AboutSectionTitle variants={aboutSectionVariants}>
          About Me
        </AboutSectionTitle>
        <AboutSectionParagraph variants={aboutSectionVariants}>
          I started as a frontend developer when I was still in college and
          doing my first freelance jobs.
          <br />
          <br />
          Since then I have had the opportunity to work with many amazing
          technologies and people, in differents roles gaining a lot of
          experience throughout these years.
          <br />
          <br />
        </AboutSectionParagraph>
      </AboutSectionTextWrapper>
      <AboutSectionSkillsWrapper variants={aboutSectionVariants}>
        <SkillsSection />
      </AboutSectionSkillsWrapper>
    </AboutSectionWrapper>
  )
}

export default AboutSection
