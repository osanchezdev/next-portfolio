import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../../styles/mediaQueries"

export const WelcomeSectionWrapper = styled.div`
  position: relative;
  height: 100vh;
`

export const WelcomeParticlesWrapper = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  & > div {
    height: 100%;
    width: 100%;
  }
`

export const WelcomeSectionContent = styled.div`
  position: relative;
`

export const WelcomeTitleWrapper = styled.div`
  display: flex;
  position: absolute;

  @media ${device.mobileS} {
    top: 20%;
    left: calc(50% - 143px);
  }
  @media ${device.mobileM} {
    top: 15%;
    left: calc(50% - 180px);
  }
  @media ${device.laptop} {
    top: 10%;
    left: 10%;
  }
`

export const WelcomeTitle = styled.h1``

export const WelcomeTitleWord = styled.div`
  display: flex;
  & > div {
    min-width: 18px;
  }
`
export const WelcomeTitleChar = styled(motion.span)`
  cursor: default;
  font-weight: bold;
  user-select: none;
  text-shadow: 4px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.mobileS} {
    font-size: 2rem;
    min-width: 8px;
  }
  @media ${device.mobileM} {
    font-size: 2.3rem;
    min-width: 10px;
  }
  @media ${device.laptop} {
    font-size: 5vw;
    min-width: 20px;
  }
`

export const WelcomeButton = styled(motion.div)`
  position: absolute;
  bottom: 15%;
  z-index: 0;

  @media ${device.mobileS} {
    left: calc(50% - 80px);
  }
  @media ${device.laptop} {
    left: 10%;
  }
`

export const WelcomeScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 7%;
  left: calc(50% - 15px);

  @media ${device.mobileS} {
    bottom: 5%;
    left: calc(50% - 15px);
  }
  @media ${device.laptop} {
    bottom: 7%;
    left: calc(50% - 15px);
  }
`
