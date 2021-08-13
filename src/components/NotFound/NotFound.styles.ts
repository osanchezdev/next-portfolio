import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../styles/mediaQueries"

export const NotFoundPageWrapper = styled(motion.div)`
  @media ${device.mobileS} {
    padding: 1rem;
  }
  @media ${device.tablet} {
    padding: 3rem;
  }
`

export const NotFoundTitle = styled(motion.h2)`
  text-align: center;
  margin: 0;
`

export const NotFoundGoHomeWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`

export const NotFoundGoHomeText = styled(motion.p)`
  text-align: center;
`
