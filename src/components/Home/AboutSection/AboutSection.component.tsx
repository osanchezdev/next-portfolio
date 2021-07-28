import React from "react"
import {
  AboutSectionParagraph,
  AboutSectionTextWrapper,
  AboutSectionTitle,
  AboutSectionWrapper,
} from "./AboutSection.styles"

import SkillsSection from "./SkillsSection/SkillsSection.component"

interface Props {}

const AboutSection = (props: Props) => {
  return (
    <AboutSectionWrapper>
      <AboutSectionTextWrapper>
        <AboutSectionTitle>About Me</AboutSectionTitle>
        <AboutSectionParagraph>
          I started as a frontend developer when I was still in college and
          doing my first freelance jobs.
        </AboutSectionParagraph>
        <AboutSectionParagraph>
          Since then I have had the opportunity to work with many amazing
          technologies and people, in differents roles gaining a lot of
          experience throughout these years.
        </AboutSectionParagraph>
        <AboutSectionParagraph>
          I have worked for both companies and individuals around the globe. I
          currently work remotely as a freelancer with a select client base and
          open to hearing about new opportunities.
        </AboutSectionParagraph>
      </AboutSectionTextWrapper>
      <SkillsSection />
    </AboutSectionWrapper>
  )
}

export default AboutSection
