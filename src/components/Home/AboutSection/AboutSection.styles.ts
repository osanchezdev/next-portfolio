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
  padding: 1rem;

  @media ${device.mobileS} {
    flex: 0 0 100%;
  }
  @media ${device.laptop} {
    flex: 0 0 40%;
  }
`

export const AboutSectionTitle = styled.h2``

export const AboutSectionParagraph = styled.p``
