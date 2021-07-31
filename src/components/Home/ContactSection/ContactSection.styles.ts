import styled from "styled-components"
import { device } from "../../../styles/mediaQueries"

export const ContactSectionWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth}px;
  margin: 15px auto;
  padding: 1rem;
  overflow: hidden;
`

export const ContactSectionTitle = styled.h2`
  margin: 20px auto;

  @media ${device.mobileS} {
    margin: 0;
  }

  @media ${device.tablet} {
    margin: 20px auto;
    margin: 20px auto;
    width: 50%;
  }

  @media ${device.laptop} {
    margin: 20px auto;
    width: 50%;
  }
`

export const ContactSectionDescription = styled.p`
  text-align: justify;
  width: 50%;
  margin: 20px auto;
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 50%;
  }
`

export const ContactSectionTextWrapper = styled.div`
  padding: 1rem;
`
export const ContactSectionFormWrapper = styled.div`
  max-width: 655px;
  margin: 0 auto;
`
