import styled from "styled-components"
import { device } from "../../../styles/mediaQueries"

export const AboutSectionWrapper = styled.div`
  display: flex;
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: 15px auto;

  @media ${device.mobileS} {
    flex-wrap: wrap;
  }
  @media ${device.desktop} {
    height: 100vh;
  }
  @media ${device.desktopL} {
    height: 70vh;
  }
`

export const AboutSectionTextWrapper = styled.div`
  box-sizing: border-box;

  @media ${device.mobileS} {
    flex: 0 0 100%;
    padding: 1rem;
  }
  @media ${device.laptop} {
    flex: 0 0 40%;
    padding: 3rem;
  }
`

export const AboutSectionTitle = styled.h2``

export const AboutSectionParagraph = styled.p``
