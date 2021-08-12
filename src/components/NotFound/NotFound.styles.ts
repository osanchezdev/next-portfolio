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

export const NotFoundAnimationWrapper = styled(motion.div)`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: 80vh;
  }
  @media ${device.tablet} {
    max-width: 60vh;
  }
  @media ${device.laptop} {
    max-width: 70vh;
  }
  @media ${device.laptopL} {
    max-width: 60vh;
  }
  @media ${device.desktop} {
    max-width: 80vh;
  }
`

export const NotFoundGoHomeWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
`

export const NotFoundGoHomeText = styled(motion.p)`
  text-align: center;
`
