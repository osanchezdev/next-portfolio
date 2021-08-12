import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const AboutSectionWrapper = styled(motion.div)`
  margin: 15px 0;

  @media ${device.mobileS} {
    flex-wrap: wrap;
    padding: 0 10px;
  }
`

export const AboutSectionTextWrapper = styled(motion.div)`
  max-width: ${({ theme }) => theme.maxWidth}px;
  box-sizing: border-box;
  padding: 1rem;
  margin-bottom: 32px;
`

export const AboutSectionTitle = styled(motion.h2)`
  margin-bottom: 20px;
`

export const AboutSectionParagraph = styled(motion.p)`
  text-align: justify;
`

export const AboutSectionSkillsWrapper = styled(motion.div)`
  max-width: ${({ theme }) => theme.maxWidth}px;
  box-sizing: border-box;
  position: relative;
  @media ${device.mobileS} {
    padding: 0 10px;
    margin: 0;
    width: 100%;
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80%;
  }
`
