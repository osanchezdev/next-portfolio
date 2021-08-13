import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const FullScreenSliderOverlayWrapper = styled(motion.div)``

export const FullScreenSliderOverlay = styled(motion.div)`
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullScreenSliderWrapper = styled.div`
  cursor: default;

  @media ${device.mobileS} {
    width: 100vw;
  }
  @media ${device.laptop} {
    width: 65vw;
  }
  @media ${device.laptopL} {
    width: 50vw;
  }
`
