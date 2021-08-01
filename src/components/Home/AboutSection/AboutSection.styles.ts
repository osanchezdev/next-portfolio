import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const AboutSectionWrapper = styled(motion.div)`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: 15px auto;

  @media ${device.mobileS} {
    flex-wrap: wrap;
    padding: 0 10px;
  }
  @media ${device.desktop} {
    height: 70vh;
  }
`

export const AboutSectionTextWrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 1rem;

  @media ${device.mobileS} {
    flex: 0 0 100%;
  }
  @media ${device.laptop} {
    flex: 0 0 40%;
  }
`

export const AboutSectionTitle = styled(motion.h2)``

export const AboutSectionParagraph = styled(motion.p)`
  text-align: justify;
`

export const AboutSectionSkillsWrapper = styled(motion.div)`
  box-sizing: border-box;
  position: relative;

  @media ${device.mobileS} {
    flex: 0 0 100%;
  }
  @media ${device.laptop} {
    flex: 0 0 60%;
  }
`
