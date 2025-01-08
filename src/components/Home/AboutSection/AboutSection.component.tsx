'use client'
import { useContext } from "react"
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
            My journey as a web developer began during my college years, when I took on my first freelance projects. 
            <br />
            Since then, I’ve had the privilege of working with incredible technologies and collaborating with talented professionals on international projects. These diverse experiences have allowed me to grow both technically and personally, shaping the developer I am today.
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
