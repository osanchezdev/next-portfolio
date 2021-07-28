import { motion } from "framer-motion"
import styled from "styled-components"
import { device } from "../../../../styles/mediaQueries"

export const ProjectsGalleryWrapper = styled(motion.div)`
  display: grid;
  grid-gap: 25px;
  justify-items: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 0;
  min-width: 0;

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.5rem 0;
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    padding: 1.5rem 0;
  }
`

export const ProjectsGalleryItemWrapper = styled(motion.div)``
