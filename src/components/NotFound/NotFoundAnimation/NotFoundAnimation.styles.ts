import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const NotFoundAnimationWrapper = styled(motion.div)`
  margin: 0 auto;
  @media ${device.mobileS} {
    max-width: 80vh;
  }
  @media ${device.tablet} {
    max-width: 55vh;
  }
  @media ${device.laptop} {
    max-width: 65vh;
  }
  @media ${device.laptopL} {
    max-width: 55vh;
  }
  @media ${device.desktop} {
    max-width: 80vh;
  }
`
