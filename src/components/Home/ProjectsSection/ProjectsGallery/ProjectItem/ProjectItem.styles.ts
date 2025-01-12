import styled from "styled-components"
import { motion } from "framer-motion"
import { readableColor } from "polished"
import { device } from "../../../../../styles/mediaQueries"

export const ProjectItemWrapper = styled(motion.div)`
  position: relative;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08), 0 6px 30px rgba(0, 0, 0, 0.08);

  @media ${device.mobileS} {
    min-width: 288px;
  }
  @media ${device.mobileM} {
    min-width: 343px;
  }
`
interface ProjectItemHeaderWrapperProps {
  $bgColor?: string
  $textColor?: string
}

export const ProjectItemHeaderWrapper = styled.div<ProjectItemHeaderWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  height: 25px;
  color: ${({ theme, $bgColor, $textColor }) =>
    $textColor
      ? $textColor
      : $bgColor
      ? readableColor($bgColor)
      : theme.colors.text};
  background: ${({ theme, $bgColor }) =>
    $bgColor ? $bgColor : theme.colors.primary};
`

export const ProjectItemHeader = styled.span`
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
`

export const ProjectItemImageWrapper = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    height: 168px;
  }
  @media ${device.mobileM} {
    height: 200px;
  }
`

export const ProjectItemOverlayWrapper = styled(motion.div)`
  position: absolute;
  top: 25px;
  width: 100%;
  height: calc(100% - 25px);
`
export const ProjectItemOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: calc((100% - 25px) - 25px);
  background: rgba(0, 0, 0, 0.7);
`

export const ProjectItemTechPillsWrapper = styled(motion.div)`
  position: relative;
  height: calc(100% - 70px);
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

export const ProjectItemTechPill = styled(motion.span)`
  font-size: 14px;
  padding: 3px 15px;
  color: #fff;
  background-color: #333;
  letter-spacing: 1px;
`

export const ProjectItemSeeMore = styled(motion.span)`
  color: #fff;
  cursor: pointer;
  position: absolute;
  padding: 2px 15px;
  left: calc(50% - 57.5px);
  bottom: 5px;
  transition: color 300ms ease;
`
