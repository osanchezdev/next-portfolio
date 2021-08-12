import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const ContactSectionWrapper = styled(motion.div)`
  padding: 1rem;
  overflow: hidden;
`

export const ContactSectionTitle = styled(motion.h2)`
  @media ${device.mobileS} {
    margin: 0;
  }

  @media ${device.tablet} {
    margin: 20px 0;
  }
`

export const ContactSectionDescription = styled(motion.p)`
  text-align: justify;
  width: 50%;
  margin: 20px 0 32px 0;
  @media ${device.mobileS} {
    width: 100%;
  }
`

export const ContactSectionTextWrapper = styled(motion.div)`
  padding: 1rem;
  margin-bottom: 3rem;
`
export const ContactSectionFormWrapper = styled(motion.div)`
  max-width: 655px;
  margin: 0 auto;
`
